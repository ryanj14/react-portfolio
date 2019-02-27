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
      header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PATCH");         
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
      header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
  }

  require_once('db_info.php');

  $_POST = json_decode(file_get_contents('php://input'), true);

  $id = $_POST['id'];
  $title = $_POST['title'];
  $author = $_POST['author'];
  $body = $_POST['blog'];
  $date = $_POST['date'];

  function handleHTTPRequest() {
    switch($_SERVER['REQUEST_METHOD']) {
      case 'POST':
        handlePOSTRequest(); 
        break;
      case 'GET':
        handleGETRequest();
        break;
      case 'PATCH':
        handlePATCHRequest();
        break;
      case 'DELETE':
        handleDELETERequest();
        break;
      default:
        echo "Error handleHTTPRequest";
    }
  }

  function connect_to_db() {
    try {
      $conn = new PDO("pgsql:host=" . DB_HOST . "; dbname=" . DB_NAME, DB_USER, DB_PASSWORD);
      // set the PDO error mode to exception
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $conn;
    } catch(PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
      die();
    }
  }

  function handlePOSTRequest() {
    $conn = connect_to_db();
    $stmt = $conn->prepare("INSERT INTO Blog (title, author, body, blogDate)
                            VALUES (?, ?, ?, ?)");
    $stmt->bindParam(1, $title);
    $stmt->bindParam(2, $author);
    $stmt->bindParam(3, $body);
    $stmt->bindParam(4, $date);
    $stmt->execute();
    echo "New record created successfully";
  }

  function handleGETRequest() {
    $conn = connect_to_db();
    $sth = $conn->prepare("SELECT * FROM Blog");
    $sth->execute();

    /* Fetch all of the remaining rows in the result set */
    $result = $sth->fetchAll();
    echo json_encode($result);
  }

  function handlePATCHRequest() {
    $conn = connect_to_db();
    $sql = "UPDATE Blog SET title = '$title', author = '$author', body = '$body', blogDate = '$date' WHERE id = $id";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
  }

  function handleDELETERequest() {
    // This grabs the current url 
    $link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 
      "https" : "http") . "://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; 
    // This trims the url to leave only the number
    $id  = end(explode('/',trim($link,'/')));
    $conn = connect_to_db();
    $sql = "DELETE FROM Blog WHERE id = $id";
    $conn->exec($sql);
  }

  handleHTTPRequest();
?>