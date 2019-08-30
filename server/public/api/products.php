<?php

require_once("functions.php");
set_exception_handler("error_handler");
startup();
require_once("db_connection.php");

$id = $_GET["id"];

if (empty($id)) {
  $whereClause = "";
  print("error: no id inputted");
} else {
  if (is_numeric($id)) {
    $whereClause = " WHERE `p`.`id` = " . $id;
  } else {
    throw new Exception("error: id needs to be a number");
  }
};

// $query = "SELECT * FROM `products`" . $whereClause;
$query = "SELECT p.id, p.name, p.price, p.shortDescription, i.url FROM `products` AS `p` JOIN `images` AS `i` ON i.product_id = p.id" . $whereClause;

$result = mysqli_query($conn, $query);

$numRows = mysqli_num_rows($result);

if (!$result) {
  throw new Exception("ERROR: " . mysqli_connect_error($conn));
}

if (!$numRows) {
  return [];
}

$output = [];

while($product = mysqli_fetch_assoc($result)) {
  $output[] = $product;
}

$json_output = json_encode($output);
print($json_output);


?>
