<?php
$root = "root";
$port = "3306";
$dbname = "mysql";
$username = "root";
$password = "";
$serverName = "localhost";
$table_data = "experiment";


$table_data = "experiment";
$data_array = json_decode(file_get_contents('php://input'), true);


  $conn = new PDO("mysql:host=$serverName;port=$port;dbname=$dbname", $username, $password);

  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  ;
$stmt = $conn->prepare("SHOW COLUMNS FROM `$table_data`");


$sql = "INSERT INTO experiment (rt, stimulus) VALUES (0, 'p')";


$insertstmt = $conn->prepare($sql);
$insertstmt->execute();
$stmt->execute();
 while($row = $stmt->fetchColumn()) {
    echo $row."<br/>";
    echo "asdadsd";
  }


if(mysqli_connect_errno())
{
echo "Failed";
exit();
}

echo "sucesss"


?>
<script type="text/javascript">
    alert('GeeksforGeeks!');
</script>