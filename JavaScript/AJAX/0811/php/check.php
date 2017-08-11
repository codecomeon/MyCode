<?php
    $account=$_POST["account"];
    $password=$_POST["password"];

    if($account=="admin"&&$password=="admin"){
        echo "y";
    }else{
        echo "n";
    }
?>