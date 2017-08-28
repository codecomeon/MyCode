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
        $x = 5985;
        var_dump($x);
        echo "<br>"; 
        $x = -345; // 负数
        var_dump($x);
        echo "<br>"; 
        $x = 0x8C; // 十六进制数
        var_dump($x);
        echo "<br>";
        $x = 047; // 八进制数
        var_dump($x);
        $x = 'pa '; 
        var_dump($x);
        print_r($x);
        $x = 8E-5; 
        var_dump($x);
        var_dump(print_r($x));
        var_dump(print_r($x,true));
        print_r($x)
    ?>
</body>
</html>