
<?php

require_once("functions.php");
require_once("db_connection.php");
set_exception_handler("errpr_handler");
startUp();

$query = "SELECT * FROM `products`";
$result = mysqli_query($conn, $query);
$numRows = mysqli_num_rows($result);

if (!$result) {
  throw new Exception("ERROR: " . mysqli_connect_error($conn));
}

if (!$numRows) {
  return [];
}

$output = [];

while($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
}

$json_output = json_encode($output);
print($json_output);


?>


<?php
/* wickedSales Code */
// require_once("functions.php");
// set_exception_handler("error_handler");
// startup();
// require_once("db_connection.php");

// $json_input = file_get_contents('php://input');
// $obj = json_decode($json_input, true);

// if (empty($_GET["id"])) {
//   $whereClause = "";
//   print("error: no id inputted \n");
// } else {
//   if (is_numeric($_GET["id"])) {
//     $whereClause = " WHERE `p`.`id` = " . $_GET["id"];
//     print($whereClause);
//   } else {
//     throw new Exception("error: id needs to be a number");
//   }
// };


// $query = "SELECT p.id, p.name, p.shortDescription, p.price,
// 	GROUP_CONCAT(i.url) AS images
// 	FROM `products` AS `p`
//   JOIN `images` AS `i`
//   ON i.product_id = p.id" . $whereClause . " GROUP BY `p`.`id`";



// $result = mysqli_query($conn, $query);
// $numRows = mysqli_num_rows($result);

// if (!$result) {
//   throw new Exception("ERROR: " . mysqli_connect_error($conn));
// }

// if (!$numRows) {
//   return [];
// }

// $output = [];

// while($row = mysqli_fetch_assoc($result)) {
//   $images = $row["images"];
//   $imgArray = explode(",", $images);
//   unset($row["images"]);
//   $row["images"] = $imgArray;
//   $output[] = $row;
// }

// $json_output = json_encode($output);
// print($json_output);
?>
