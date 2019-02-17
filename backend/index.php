<?php
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Max-Age: 1000");
  header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
  header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

  $_POST = json_decode(file_get_contents('php://input'), true);
  $user = $_POST['user'];
  $pass = $_POST['password'];

  if($user == "ryan" && $pass == "password") {
    echo "TRUE";
  } else {
    echo "FALSE";
  }
?>