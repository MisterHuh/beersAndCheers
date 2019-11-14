<?php

require_once('functions.php');

if (!INTERNAL) {
  die("direct access not allowed");
}

$item = file_get_contents('php://input');
$jsonBody = getBodyData($item);

if ($jsonBody["id"]) {
  $id = $jsonBody["id"];
  if (gettype($id) !== "integer") {
    throw new Exception("id must be a number");
  }
  if (intval($id) < 1) {
    throw new Exception("id must be greater than 0");
  }
} else {
  throw new Exception("id required to add to cart");
}

if ($jsonBody['count']) {
  $count = $jsonBody['count'];
};

if (array_key_exists("cartId", $_SESSION)) {
  $cartId = $_SESSION['cartId'];
} else {
  $cartId = false;
};

$query = "SELECT price
	        FROM products
          WHERE products.id = $id";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('error with query: ' . mysqli_error($conn));
}

$rowCount = mysqli_num_rows($result);
if ($rowCount === 0 ) {
  throw new Exception("invalid product id");
}

$productData = [];
while ($row = mysqli_fetch_assoc($result)) {
  $productData[] = $row;
  $price = $productData[0]["price"];
}

$transactionQuery = "START TRANSACTION";

$transactionResult = mysqli_query($conn, $transactionQuery);
if (!$transactionResult) {
  throw new Exception('error with transactionQuery: ' . mysqli_error($conn));
}

if ($cartId === false) {

  $insertQuery = "INSERT INTO cart
                  SET created = NOW();";
  $insertResult = mysqli_query($conn, $insertQuery);

  if (!$insertResult) {
    throw new Exception("error with insertQuery: " . mysqli_error($conn));
  }

  if (mysqli_affected_rows($conn) !== 1) {
    throw new Exception("affected rows should only be 1");
  }

  $cartId = mysqli_insert_id($conn);
  $_SESSION["cartId"] = $cartId;
}

$cartItemQuery = "INSERT INTO cartItems
                  SET cartItems.count = $count,
                      cartItems.productID = $id,
                      cartItems.price = $price,
                      cartItems.added = NOW(),
                      cartItems.cartID = $cartId
                  ON DUPLICATE KEY UPDATE cartItems.count = cartItems.count + $count";

$cartItemResult = mysqli_query($conn, $cartItemQuery);

if (!$cartItemResult) {
  throw new Exception("error with cartItemQuery " . mysqli_error($conn));
}

if (mysqli_affected_rows($conn) < 1) {
  $rollback = 'ROLLBACK';
  mysqli_query($conn, $rollack);
  throw new Exception("normal");
} else {
  $commit = "COMMIT";
  mysqli_query($conn, $commit);
}

?>
