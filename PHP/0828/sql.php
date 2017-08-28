<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
        //连接数据库
        $con=mysql_connect('localhost','root','root');

        //选择库
        mysql_select_db('mydb',$con);

        //执行MySQL语句
        $result=mysql_query('SELECT * FROM tongxue');

        //循环处理查询结果
        while($row=mysql_fetch_array($result)){
            echo '<pre>';
            print_r($row);
            echo '</pre>';   
        }

        //关闭数据库
        mysql_close($con);

         
    ?>
</body>
</html>