<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .red{
            background-color:red;
        }
    </style>
</head>
<body>
    <table border='1'>
        <?php for($i=0;$i<20;$i++){ ?>
            <tr <?php if($i%2==0){echo "class='red'";} ?>>
                <td><?php echo $i; ?></td>
                <td><?php echo "{$i}" ?></td>
                <td><?php echo '{$i}' ?></td>
                <td>1</td>
            </tr>
        <?php } ?>
    </table>
    <table border='1'>
        <?php for($i=1;$i<7;$i++){ ?>
            <tr <?php if($i%2==0){echo "class='red'";} ?>>
                <td><?php echo "<h{$i}>{$i}</h{$i}>" ?></td>
            </tr>
        <?php } ?>
    </table>
</body>
</html>