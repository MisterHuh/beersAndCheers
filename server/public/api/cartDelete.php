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
  $query = "DELETE FROM cartItems WHERE productID = " . $id;
} else if ($jsonBody["cartId"]) {
  $cartId = $jsonBody["cartId"];        // set the value of $jsonBody["id"] to $id
  if (intval($id) < 1) {        // convert $id to a number. if $id is LESS THAN 1
    throw new Exception("id must be greater than 0");   // we got something back, but it's not what we want.
  }
  if (getType($cartId) !== "integer") {   // if $cartId is not an integer, we got something back but it's not what we want.
    throw new Exception("id must be a number");   // form of error checking to see what the problem could be
  }
  $query = "DELETE FROM cartItems WHERE cartID = " . $cartId;
}else {
  throw new Exception("id required to add to cart");
}

if (array_key_exists("cartId", $_SESSION)) {   /* if the "cartID" from $_SESSION is empty */
  $cartId = $_SESSION['cartId'];               /* $cartId will take the value of the $_SESSION() */
} else {
  $cartId = false;                             /* $cartId will not exist */
};

// $query = "DELETE FROM cartItems WHERE productID = " . $id;

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('error with query: ' . mysqli_error($conn));
}

?>
