<?php
    header("Content-Type: text/json;charset=gb2312");
    $phone=$_GET['phone'];
    $result=file_get_contents("http://chongzhi.jd.com/json/order/search_searchPhone.action?mobile=".$phone);
    echo $result;
?>