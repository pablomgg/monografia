<?php
header('Content-Type: text/html; charset=utf-8');
include("../../shared/conexao.php");

$id	= $_REQUEST["id"];
$nome	= $_REQUEST["nome"];
$sobre_nome	= $_REQUEST["sobre_nome"];
$endereco	= $_REQUEST["endereco"];
$telefone	= $_REQUEST["telefone"];

$sql = "update pessoa set nome = '". utf8_decode($nome)."', sobre_nome ='".utf8_decode($sobre_nome)."', endereco ='".utf8_decode($endereco)."', telefone ='".$telefone."' where id = " .$id;
$query = $mysqli->query($sql);
echo $sql;
?>

