<?php
  // Allow from any origin
  if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    // you want to allow, and if so:
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
  } else {
    echo "Not working";
    die();
  }
  // Access-Control headers are received during OPTIONS requests
  if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        // may also be using PUT, PATCH, HEAD etc
        header("Access-Control-Allow-Methods: POST");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
  }

  $_POST = json_decode(file_get_contents('php://input'), true);
  $message = $_POST['email'] . "\r\n" . $_POST['body'];
  $success = mail("josephmryan14@gmail.com", $_POST['subject'], $message);
  if($success) {
    echo "Success!";
  } else {
    echo "Failure, like always...";
  }
?>