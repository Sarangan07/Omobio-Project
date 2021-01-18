<?php
include "config.php";

$email=$_POST['EMAIL'];
$pass=$_POST['PASSWORD'];
if( $email !="" && $pass !="" ){

    $sql="select * from user where email = '".$email."' and password = '".$pass."'  ";
    $row=array();
    $res=$con->query($sql);
    $count=mysqli_num_rows($res);
    // $sql1="select * from users where EMAIL = '".$email."' and PASSWORD = '".$pass."' where ISADMIN=0 ";





if($count == 0){
    echo json_encode("FailedLogin");
}
else{
    echo json_encode("SuccessLogin");

}
    // $res1=$con->query($sql1);
    // $count1=mysqli_num_rows($res1);

    // $row= mysqli_fetch_array($res);
    

    // if($row['admin'] == "Admin"){
    //     echo json_encode("SuccessAdmin");
    // }
    // elseif($row['admin'] == "User"){
    //     echo json_encode("SuccessUser");
    // }
    // else{
    //     echo json_encode("Error");
    // }
}

?>