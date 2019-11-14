<?php

require_once('functions.php');

if (!INTERNAL) {
  print("direct access not allowed");
  exit();
}

if (empty($_SESSION['cartId'])) {
  print_r(getBodyData([]));
  exit();
} else {
  $cartId = intval($_SESSION['cartId']);
}

$query = "SELECT c.cartID AS cart_id, p.id AS product_id, p.name, c.count, c.price, p.image, p.brewery
	          FROM cartItems AS c
            INNER JOIN products AS p
            ON c.productID = p.id
            WHERE c.cartID = {$cartId}";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('error with query: ' . mysqli_error($conn));
};

$output = [];
while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
};

if ($output === []) {
  print("[]");
  exit();
} else {
  print(json_encode($output));
}



?>
