<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Max-Age: 1000");
  header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
  header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE, PATCH");

  require_once('db_info.php');

  $_POST = json_decode(file_get_contents('php://input'), true);

  $id = $_POST['id'];
  $title = $_POST['title'];
  $author = $_POST['author'];
  $body = $_POST['body'];
  $date = $_POST['date'];

  if($_SERVER['REQUEST_METHOD'] == 'POST') {
    try {
      $conn = new PDO("mysql:host=127.0.0.1; dbname=assign1", DB_USER, DB_PASSWORD);
      // set the PDO error mode to exception
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $sql = "INSERT INTO Blog (`title`, `author`, `body`, `blogDate`)
              VALUES ('$title', '$author', '$body', '$date')";
      // use exec() because no results are returned
      $conn->exec($sql);
      echo "New record created successfully";
      } catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
      }
  } else if($_SERVER['REQUEST_METHOD'] == 'GET') {
    $conn = new PDO("mysql:host=127.0.0.1; dbname=assign1", DB_USER, DB_PASSWORD);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sth = $conn->prepare("SELECT * FROM Blog");
    $sth->execute();

    /* Fetch all of the remaining rows in the result set */
    $result = $sth->fetchAll();
    echo json_encode($result);
  } else if($_SERVER['REQUEST_METHOD'] == 'PATCH') {
    $conn = new PDO("mysql:host=127.0.0.1; dbname=assign1", DB_USER, DB_PASSWORD);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "UPDATE Blog SET title = '$title', author = '$author', body = '$body', blogDate = '$date' WHERE id = $id";
    // Prepare statement
    $stmt = $conn->prepare($sql);

    // execute the query
    $stmt->execute();
  } else if($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    // This grabs the current url 
    $link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 
                "https" : "http") . "://" . $_SERVER['HTTP_HOST'] .  
                $_SERVER['REQUEST_URI']; 
    // This trims the url to leave only the number
    $id  = end(explode('/',trim($link,'/')));
    $conn = new PDO("mysql:host=127.0.0.1; dbname=assign1", DB_USER, DB_PASSWORD);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "DELETE FROM Blog WHERE id = $id";
    // Prepare statement
    $conn->exec($sql);
  }
?>