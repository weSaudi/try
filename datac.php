<?php
  header('Content-Type: text/plain');
  $test = utf8_encode($_POST['test']); // Don't forget the encoding
  $data = json_decode($test);
  echo $data->test;
  exit();
 ?>
