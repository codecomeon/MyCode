<meta charset="utf-8">

<?php
    $con=mysql_connect('localhost','root','root');

    mysql_select_db('kaoladeshujuku',$con);

    mysql_query('SET NAMES UTF8');

    $result=mysql_query('SELECT * FROM xuesheng');

    while($row=mysql_fetch_row($result)){
        echo "<pre>好累啊";
        echo print_r($row);
        echo "有点累</pre>";
    }

    mysql_close($con);

?>