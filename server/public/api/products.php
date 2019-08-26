<?php

require_once("functions.php");
set_exception_handler("error_handler");
startup();
require_once("db_connection.php");

$id = $_GET["id"];

if (empty($id)) {
  $whereClause = "";
  throw new Exception("error: no id inputted ");
  exit;
} else {
  $whereClause = " WHERE `id` = {$id}";
};

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
