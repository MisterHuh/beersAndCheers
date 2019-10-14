<?php

require_once('functions.php');

/* INTERNAL is defined in cart. */
/* form of error chceking? */
if (!INTERNAL) {
  print("direct access not allowed");
  exit();
}

/* accessing the body data from the http html response */
$jsonBody = getBodyData();

/* error checking, to make sure that we are getting what we weant */
/* if not, throw new Exception */
if ($jsonBody["id"]) {  /* if $jsonBody exists, carry on */
  $id = $jsonBody["id"];
  if (gettype($id) !== "integer") { /* if $id is not a number, throw error */
    throw new Exception("id must be a number");
  }
  if (intval($id) < 1) { /* if intval($id) is less than zero, throw error */
    throw new Exception("id must be greater than 0");
  }
} else {                /* if $jsonBody doesn't exist, throw error */
  throw new Exception("id required to add to cart");
}

// the below might be for later (quantity). will leave here for now
if ($jsonBody['count']) {
  $count = $jsonBody['count'];
}

/* error checking for session */
if (empty($_SESSION["cartId"])) {   /* if the "cartID" from $_SESSION is empty */
  $cardID = false;                  /* $cardID will not exist */
} else {
  $cardID = $_SESSION['cartId'];    /* $cardID will take the value of the $_SESSION() */
}

/* query for grabbing `price` from `produts` for the matching $id */
$query = "SELECT price
	        FROM products
          WHERE products.id = {$id}";

$result = mysqli_query($conn, $query);

/* if $result is invalid, throw new Exception */
if (!$result) {
  throw new Exception('error with query: ' . mysqli_error($conn));
}

/* checking to see how rows came gack */
$rowCount = mysqli_num_rows($result);
if ($rowCount === 0 ) {
  throw new Exception("invalid product id");
}

$productData = [];
while ($row = mysqli_fetch_assoc($result)) {
  $pdocutData[] = $row;
  $price = $productData[0]["price"];
  // $price might befor later
  // associative array inside associative array in $price
}

/* sending below query to the database */
/* will start a mySQL transaction set of queries that can be "rolled back" or "committed" */
$transactionQuery = `START TRANSACTION`;

/* if $transactionResult is invalid, throw new Exception */
$transactionResult = mysqli_query($conn, $transactionQuery);
if (!$transactionResult) {
  throw new Exception('error with transactionQuery: ' . mysqli_error($conn));
}

/* if $cartID from $_SESSION is false */
/* why are we checking for this */

if ($cartId === false) {

  /* if the $cartID is false, create a new cart, with the current time stamp */
  $insertQuery = "INSERT INTO cart
                  SET created = NOW();";
  $insertResult = mysqli_query($conn, $insertQuery);

  /* error checking #1 for $insertResult */
  /* checking for connection */
  if (!$insertResult) {
    throw new Exception("error with insertQuery: " . mysqli_error($conn));
  }

  /* error cheking #2 for $insertResult */
  /* checking for rows affected, which should only be 1 */
  if (mysqli_affected_rows($conn) !== 1) {
    throw new Exception("affected rows should only be 1");
  }

  /* grabs the id generated in the last query */
  $cartID = mysqli_insert_id($conn);

  /* replacing the `falsy` $cartID to the correct one that matches everything */
  $_SESSION["cartID"] = $cartID;
}


/* if $cartId is true */
/* make a query for the cartItems table */
$cartItemQuery = "INSERT INTO cartItems
                  SET cartItems.count = {$count},
                      cartItems.productID = {$id},
                      cartItems.price = {$price},
                      cartItems.carTID = {$cartID}
                  ON DUPLICATE KEY UPDATE cartItems.count = cartItems.count + {$count}";

$cartItemResult = mysqli_query($conn, $cartItemQuery);

/* error checking for the new query */
if (!$cartItemResult) {
  throw new Exception("error with cartItemQuery " . mysqli_error($conn));
}

/* error checking to make sure that the query updated at least 1 row */
if (mysqli_affected_rows($conn) < 1) {
  /* if the test fails, send this query to "ROLLBACK" */
  /* which will undo the first car insert to avoid partial inserts */
  $rollback = 'ROLLBACK';
  mysqli_query($conn, $rollack);
  throw new Exception("normal");
} else {
  /* if not, your query is complete. */
  /* finalize the transaction by sending "COMMIT" to mysql */
  $commit = "COMMIT";
  mysqli_query($conn, $commit);
}


?>
