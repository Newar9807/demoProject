<?php
// Retrieve the raw POST data
$data = file_get_contents("php://input");

// Decode the JSON data
$formData = json_decode($data);

$post_id = $formData->hidden_id;

$newData = [
    'name' => $formData->name,
    'rating' => $formData->rating,
    'comment' => $formData->comment,
];
$newData = json_encode($newData);

echo $newData;

return;
// update_post_meta($post_id, 'meta_key', $newData);
// $samir = 1;

// return;


// Server name must be localhost 
$servername = "localhost"; 
  
// In my case, user name will be root 
$username = "root"; 

// Password is empty 
$password = ""; 

$db = "demoproject";
  
// Creating a connection 
$conn = new mysqli($servername, $username, $password, $db); 
  
// Check connection 
if ($conn->connect_error) { 
    die("Connection failure: " . $conn->connect_error); 
}  
  
// Creating a database named geekdata 
$sql = "INSERT INTO `wp_postmeta` (`post_id`,`meta_key`, `meta_value`) VALUES ( $post_id, 'meta_key','$data');"; 
if ($conn->query($sql) === TRUE) { 
    echo "Database with name geekdata"; 
} else { 
    echo "Error: " . $conn->error; 
} 
  
// Closing connection 
$conn->close(); 
