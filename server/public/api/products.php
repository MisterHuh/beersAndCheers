
<?php

require_once("functions.php");
require_once("db_connection.php");
set_exception_handler("error_handler");
startUp();
$data = getBodyData();
// var_dump($data);
$id = $data["id"];
// var_dump($id);


// $json_input = file_get_contents('php://input');
// var_dump($json_input);
// $obj = json_decode($json_input, true);
// var_dump($obj);

if (empty($id)) {
  var_dump($id);
  throw new Exception("an id must be provided");
} else if (!is_numeric($id)) {
  throw new Exception("id needs to be a number");
} else {
  $whereClause = " WHERE products.id = " . $id;
}

// if (empty($_GET["id"])) {
//   $whereClause = "";
//   // print("error: no id inputted \n");
//   // print("first test");
// } else {
//   if (is_numeric($_GET["id"])) {
//     // var_dump(($_GET["id"]));
//     // print("numericTest = " . is_numeric($_GET["id"]) . "\n");
//     print("getID is = " . $_GET["id"]) . "\n";
//     // $id = intval($_GET["id"]);
//     $whereClause = " WHERE products.id = " . $_GET["id"];
//     // print($whereClause);
//     // print("isNumeric test");
//     print("second test " . "\n");
//   } else {
//     print("third test " . "\n");
//     throw new Exception("error: id needs to be a number");
//   }
// };

// print($whereClause);


// $query = "SELECT p.id, p.name, p.shortDescription, p.price,
// 	GROUP_CONCAT(i.url) AS images
// 	FROM `products` AS `p`
//   JOIN `images` AS `i`
//   ON i.product_id = p.id" . $whereClause . " GROUP BY `p`.`id`";

// $query = "SELECT `name`, `brewery`, `abv`, ibu, type, price FROM `products`";
$query = "SELECT * FROM `products`" . $whereClause;
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
