
<?php

require_once("functions.php");
require_once("db_connection.php");
set_exception_handler("error_handler");
startUp();

if (empty($_GET["id"])) {
  $whereClause = "";
} else {
  if (is_numeric($_GET["id"])) {
    $whereClause = " WHERE products.id = " . $_GET["id"];
  } else {
    throw new Exception("error: id needs to be a number");
  }
};


$query = "SELECT * FROM `products`" . $whereClause;
$result = mysqli_query($conn, $query);
$numRows = mysqli_num_rows($result);

if (!$result) {
  throw new Exception("ERROR: " . mysqli_connect_error($conn));
}

if ($numRows === 1 ) {
  $output = $row = mysqli_fetch_assoc($result);
} else {
  $output = [];

  while ($row = mysqli_fetch_assoc($result)) {
    $output[] = $row;
  }
}

$json_output = json_encode($output);
print($json_output);

?>
