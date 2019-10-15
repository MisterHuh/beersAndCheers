<?php

require_once('functions.php');

if (!INTERNAL) {
  print("direct access not allowed");
  exit();
}

// $item = file_get_contents('php://input');
// $jsonBody = getBodyData($item);

// $jsonBody = getBodyData();

$json_input = file_get_contents('php://input');
$id = json_decode($json_input, true);

// $id = $jsonBody["id"];
// var_dump($id);

// if (empty($_SESSION['cartId'])) {
//   exit();
// } else {
//   $cartId = intval($_SESSION['cartId']);
// }

// print($id);

$query = "DELETE FROM cartItems WHERE productID = " . $id;

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('error with query: ' . mysqli_error($conn));
}

?>
