<?php

require_once("functions.php");
require_once("db_connection.php");

set_exception_handler("error_handler");
// $output = file_get_contents("./dummy-products-list.json");

if (!$conn) {
  throw new Exception(mysqli_connect_error());
};

// print("TEST" . $output);

$query = "SELECT * FROM `products` ORDER BY `price` DESC";
// refer to php_mysql_querying example
$result = mysqli_query($conn, $query);

if($result) {
  throw new Exception(mysqli_connect_error());
}

$output=[];

while($row = $result->fetch_assoc()) {
  $output[] = $row;
}

print( json_encode($output));





?>
