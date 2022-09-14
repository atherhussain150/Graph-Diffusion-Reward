<?php


$root = "root";
$port = "3306";
$dbname = "graph_reward_learning";
$username = "graph_reward_learning_user";
$password = "Hcpwaudf34098476psansc";
$serverName = "localhost";
$table_data = "experiment";


$data_array = json_decode(file_get_contents('php://input'), true);


try {
  $conn = new PDO("mysql:host=$serverName;port=$port;dbname=$dbname", $username, $password);

  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // First stage is to get all column names from the table and store
  // them in $col_names array.
  $stmt = $conn->prepare("SHOW COLUMNS FROM `$table_data`");

  $stmt->execute();

  $col_names = array();
  while($row = $stmt->fetchColumn()) {
    $col_names[] = $row;
  }

  // Second stage is to create prepared SQL statement using the column
  // names as a guide to what values might be in the JSON.
  // If a value is missing from a particular trial, then NULL is inserted
  $sql = "INSERT INTO $table_data VALUES(";

  for($i = 0; $i < count($col_names); $i++){
    $name = $col_names[$i];
    $sql .= ":$name";
    if($i != count($col_names)-1){
      $sql .= ", ";
    }
  }
  $sql .= ");";

  $insertstmt = $conn->prepare($sql);

  for($i=0; $i < count($data_array); $i++){

    for($j = 0; $j < count($col_names); $j++){
     $colname = $col_names[$j];
      
      if(!isset($data_array[$i][$colname])){
        
        $insertstmt->bindValue(":$colname", null, PDO::PARAM_NULL);
      } else {
        if(is_array($data_array[$i][$colname]))
        {
          $imploded = implode(", ",$data_array[$i][$colname]);
          $insertstmt->bindValue(":$colname", $imploded);
        }
        else{
          $insertstmt->bindValue(":$colname", $data_array[$i][$colname]);
        }
        
        echo "this is dataarray ".$data_array[$i][$colname]."<br/>";
      }    
}

    $insertstmt->execute();
  }

  $r = array('success' => true);
  echo json_encode($r);

} catch(PDOException $e) {
  $r = array('success' => false, 'error_message' => $e->getMessage());
  echo json_encode($r);
}

$conn = null;

?>