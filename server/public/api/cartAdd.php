<?php

require_once('functions.php');
if (!INTERNAL) {
  print("Direct access not allowed");
  exit();
}

// To access the entity body of a POST or PUT request
// to get JSON as a string
$item = file_get_contents('php://input');
$jsonBody = getBodyData($item);

?>
