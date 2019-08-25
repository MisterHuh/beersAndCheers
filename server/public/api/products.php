<?php

require_once("functions.php");
set_exception_handler("error_handler");
startup();
require_once("db_connection.php");

$query = "SELECT * FROM `products` ORDER BY `price` DESC";
$result = mysqli_query($conn, $query);


if(!$result) {
  throw new Exception("ERROR: ". mysqli_connect_error($conn));
}

$output = [];

while($product = mysqli_fetch_array($result)) {
  $output[] = $product;
}

$json_output = json_encode($output);
print($json_output);


?>
