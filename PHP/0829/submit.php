<meta charset="UTF-8">
<?php
    $xingming=$_POST['xingming'];
    $nianling=$_POST['nianling'];
    $qqhao=$_POST['qqhao'];

    var_dump($xingming);
    echo '<br />';
    var_dump($nianling);
    echo '<br />';
    var_dump($qqhao);

    $con=mysql_connect('localhost','root','root');
    mysql_select_db('kaoladeshujuku',$con);
    mysql_query('SET NAMES UTF8');

//    echo "INSERT INTO xuesheng(xingming,nianling,qqhao) VALUES ('wph','32','12341235'";

    $result=mysql_query("INSERT INTO xuesheng(xingming,nianling,qqhao) VALUES ('{$xingming}',{$nianling},{$qqhao})");

    if($result==1){
        echo '数据添加成功';
    }else{
        echo '数据添加失败，请联系管理员';
    }

    mysql_close($con);
?>