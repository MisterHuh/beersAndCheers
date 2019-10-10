<?php

require_once("functions.php");
require_once("db_connection.php");
set_exception_handler("error_handler");
startUp();

$json_input = file_get_contents('php://input');
$obj = json_decode($json_input, true);
// $productID = $obj[`id`];
// $price = $obj[`price`];

// `id` from cartItems table is not an auto incrementing id? //

$query = "INSERT INTO `cartItems`(productID, price) VALUES (123, 999)";
// var_dump($query);
$result = mysqli_query($conn, $query);
// var_dump($result);

if (!$result) {
  throw new Exception(mysqli_connect_error());
}


?>
