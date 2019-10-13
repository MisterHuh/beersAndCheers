<?php

// to check if cart add is being called from whoever defined INTERNAL constant
// for later (sessions?)
// define("INTERNAL", true);

require_once("functions.php");
require_once("db_connection.php");
set_exception_handler("error_handler");
// session_start();
// this is for later (sessions?)
startUp();

$method = $_SERVER["REQUEST_METHOD"];

if ($method === "GET") {
  http_response_code(200);
  require_once('cartGet.php');
} else if ($method === "POST") {
  http_response_code(201);
  require_once("cartAdd.php");
} else {
  http_response_code(404);
  print(json_encode([
    "error" => "Not Found",
    "message" => "Cannot $method /api/cart.php"
  ]));
}

// $json_input = file_get_contents('php://input');
// $obj = json_decode($json_input, true);
// $productID = $obj[`id`];
// $price = $obj[`price`];

// `id` from cartItems table is not an auto incrementing id? //

// $query = "INSERT INTO `cartItems`(productID, price) VALUES (123, 999)";
// $result = mysqli_query($conn, $query);

// if (!$result) {
//   throw new Exception(mysqli_connect_error());
// }


?>
