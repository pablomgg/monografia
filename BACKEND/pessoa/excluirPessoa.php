<?php
header('Content-Type: text/html; charset=utf-8');
include("../../shared/conexao.php");

$id	= $_REQUEST["id"];

$sql = "delete from pessoa where id = " .$id;
$query = $mysqli->query($sql);
echo $sql;
?>

