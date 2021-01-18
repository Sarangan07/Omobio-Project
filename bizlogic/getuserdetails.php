<?php
include "config.php";

$sql="select * from user ";
$result= array();
$res=$con->query($sql);

if($res->num_rows>0){
    while($row=$res->fetch_assoc()){
        $result[]=$row;
    }
}
// print_r($result);
echo json_encode($result);
?>