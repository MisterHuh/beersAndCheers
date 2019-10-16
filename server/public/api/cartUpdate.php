<?php

require_once('functions.php');

if (!INTERNAL) {
  die("direct access not allowed");
}

$item = file_get_contents('php://input');
$jsonBody = getBodyData($item);

if ($jsonBody["id"]) {          // if $jsonBody["id"] exists, proceed. Making that we are getting SOMETHING back
  $id = $jsonBody["id"];        // set the value of $jsonBody["id"] to $id
  if (intval($id) < 1) {        // convert $id to a number. if $id is LESS THAN 1
    throw new Exception("id must be greater than 0");   // we got something back, but it's not what we want.
  }
  if (getType($id) !== "integer") {   // if $id is not an integer, we got something back but it's not what we want.
    throw new Exception("id must be a number");   // form of error checking to see what the problem could be
  }
} else {
  throw new Exception("id required to add to cart");
}

// var_dump($jsonBody["count"]);
// this is to grab the count of each item
if ($jsonBody["count"]) {
  $count = $jsonBody["count"];
} else {
  throw new Exception("did not retrieve count of item");

}

if (array_key_exists("cartId", $_SESSION)) {   /* if the "cartID" from $_SESSION is empty */
  $cartId = $_SESSION['cartId'];               /* $cartId will take the value of the $_SESSION() */
} else {
  $cartId = false;                             /* $cartId will not exist */
};


// UPDATE `cartItems` SET `count` = '50' WHERE `cartItems`.`id` = 75;



$query = "UPDATE cartItems SET count = {$count} WHERE productID = ${id}";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('error with query: ' . mysqli_error($conn));
}
