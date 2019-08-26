<?php

require_once("functions.php");
set_exception_handler("error_handler");
startup();
require_once("db_connection.php");

if (empty($GET_["id"])) {
  // $whereClause = " WHERE `id` = 1";
  $whereClause = " WHERE IF(`id` > 9, id, [])"
} else {
  $whereClause = "";
}

// $query = "SELECT * FROM `products` ORDER BY `price` DESC";
$query = "SELECT * FROM `products`" . $whereClause;
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
