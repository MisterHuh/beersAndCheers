<?php

require_once('functions.php');

// if (!INTERNAL) {
//   print("direct access not allowed");
//   exit();
// }

// $item = file_get_contents('php://input');
// $jsonBody = getBodyData($item);

$jsonBody = getBodyData();
$id = $jsonBody["id"];

// if (empty($_SESSION['cartId'])) {
//   print("exiting() because session is empty");
//   exit();
// } else {
//   $cartId = intval($_SESSION['cartId']);
// }


if (array_key_exists("cartId", $_SESSION)) {   /* if the "cartID" from $_SESSION is empty */
  // session_unset();
  $cartId = $_SESSION['cartId'];    /* $cartId will take the value of the $_SESSION() */
} else {
  // session_unset();
  $cartId = false;                  /* $cartId will not exist */
};

$query = "DELETE FROM cartItems WHERE productID = " . $id;

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('error with query: ' . mysqli_error($conn));
}

print("end of cartDelete");

/* epic meal planner code */
// $json_input = file_get_contents('php://input');
// $id = json_decode($json_input, true);

// $query = "DELETE FROM cartItems WHERE productID = " . $id;

// $result = mysqli_query($conn, $query);

// if (!$result) {
//   throw new Exception('error with query: ' . mysqli_error($conn));
// }


?>
