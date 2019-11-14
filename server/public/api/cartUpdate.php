<?php

require_once('functions.php');

if (!INTERNAL) {
  die("direct access not allowed");
}

$item = file_get_contents('php://input');
$jsonBody = getBodyData($item);

if ($jsonBody["id"]) {
  $id = $jsonBody["id"];
  if (intval($id) < 1) {
    throw new Exception("id must be greater than 0");
  }
  if (getType($id) !== "integer") {
    throw new Exception("id must be a number");
  }
} else {
  throw new Exception("id required to add to cart");
}

if ($jsonBody["count"]) {
  $count = $jsonBody["count"];
} else {
  throw new Exception("did not retrieve count of item");

}

if (array_key_exists("cartId", $_SESSION)) {
  $cartId = $_SESSION['cartId'];
} else {
  $cartId = false;
};

$query = "UPDATE cartItems SET count = {$count} WHERE productID = ${id}";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('error with query: ' . mysqli_error($conn));
}
