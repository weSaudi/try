<?php
    if (!isset($_POST['params']) && !empty($_POST['params'])) {
        $params = $_POST['params'];

        $jsonObject = json_encode($params);
        file_put_contents('userdata.json', $jsonObject);
    }
?>
