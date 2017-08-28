<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<p>
    请选择你的出生年月
    <select name="" id="">
        <?php
            for($i = 1930 ; $i <= 2016 ; $i++){
        ?>
            <option><?php echo $i; ?></option>
        <?php
            }
        ?>
    </select>
    <?php
        echo "<select>";
        for($i=1930;$i<2018;$i++){
            echo "<option>";
            echo $i;
            echo "</option>";
        }
        echo "</select>";
    ?>

    <?php 
        $a=300;

        function f(){
            global $a;
            echo $a.'<br>';
        }
        f();
        echo 1+2%6*8 .'<br>';
        echo 1 .'2'*4;
        echo 1 .'2'+'4';

        $a=17;
        $b=$a+++ ++$a+$a;
        echo $b;
    ?>

    <?php
    $a=array();
    $a['foo'] = 'other';
    $a['bar'] = 'i_have_ref';
    $b =& $a['bar'];

    var_dump($a);
    var_dump($b);
    ?>
</p>
</body>
</html>