<?php
    $select=isset($_GET["selected"])?$_GET["selected"]:'';

    $con=mysql_connect('localhost','root','root');
    mysql_select_db('kaoladeshujuku',$con);
    mysql_query('SET NAMES UTF8');

    $result=mysql_query("SELECT * FROM xuexizhuangkuang WHERE timu1 ='{$select}'");
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>请选择一个类别进行实时查询</h1>
    <select name="" id="sel">
        <option value="非常明白" <?php if($select=='非常明白') {echo 'selected';} ?>>非常明白</option>
        <option value="比较明白" <?php if($select=='比较明白') {echo 'selected';} ?>>比较明白</option>
        <option value="一般" <?php if($select=='一般') {echo 'selected';} ?>>一般</option>
        <option value="懵逼" <?php if($select=='懵逼') {echo 'selected';} ?>>懵逼</option>
        <option value="非常懵逼" <?php if($select=='非常懵逼') {echo 'selected';} ?>>非常懵逼</option>
        <option value="跳楼" <?php if($select=='跳楼') {echo 'selected';} ?>>跳楼</option>
    </select>
    <script>

        sel.onchange=function () {
            window.location.href="listChoose.php?selected="+this.value;
        };
    </script>
    <table border="1">
        <tr>
            <td>状态</td>
            <td>意见</td>
            <td>留言</td>
        </tr>
        <?php while($row=mysql_fetch_array($result)){ ?>
            <tr>
                <td><?php echo $row["timu1"] ?></td>
                <td><?php echo $row["timu2"] ?></td>
                <td><?php echo $row["timu3"] ?></td>
            </tr>
        <?php }
            mysql_close($con);
        ?>
    </table>
</body>

</html>
