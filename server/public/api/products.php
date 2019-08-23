<?php

require_once("functions.php");
set_exception_handler("error_handler");
require_once("db_connection.php");

$query = "SELECT * FROM `products` ORDER BY `price` DESC";
$result = mysqli_query($conn, $query);


if(!$result) {
  throw new Exception("ERROR: ". mysqli_connect_error($conn));
  exit();
}

$output = array(
  "success" => "true",
  "data" => []
);

while($product = mysqli_fetch_array($result)) {
  $output["data"][] = $product;
}

$json_output = json_encode($output["data"]);
print($json_output);


?>
