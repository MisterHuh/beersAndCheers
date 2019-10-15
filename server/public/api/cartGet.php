<?php

require_once('functions.php');

/* INTERNAL is defined in cart. */
/* form of error chceking? */
if (!INTERNAL) {
  print("direct access not allowed");
  exit();
}

if (empty($_SESSION['cartId'])) {
  print_r(getBodyData([]));
  exit();
} else {
  /* if the session exists, set to $cardId */
  /* this will be the used to find the matching session from cartItems*/
  $cartId = intval($_SESSION['cartId']);
}

/*
  cartItems:
    * cartId : this is also used to match the cart from cartTable
    * count :
    * price : reflects the count

  products:
    * productId
    * productName
    * productImage
*/
$query = "SELECT c.cartID AS cart_id, p.id AS product_id, p.name, c.count, c.price, p.image
	          FROM cartItems AS c
            INNER JOIN products AS p
            ON c.productID = p.id
            WHERE c.cartID = {$cartId}";

$result = mysqli_query($conn, $query);

/* if $result is invalid, throw new Exception */
if (!$result) {
  throw new Exception('error with query: ' . mysqli_error($conn));
};

/* start grabbing the rows from the database using the above query */
$output = [];
while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
};

// var_dump("TEST TEST");
// var_dump($output);

if ($output === []) {
  print("[]");
  exit();
} else {
  print(json_encode($output));
}



?>
