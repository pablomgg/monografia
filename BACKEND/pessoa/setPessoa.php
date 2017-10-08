<?php
header('Content-Type: text/html; charset=utf-8');
include("../../shared/conexao.php");

$nome	= $_REQUEST["nome"];
$sobre_nome	= $_REQUEST["sobre_nome"];
$endereco	= $_REQUEST["endereco"];
$telefone	= $_REQUEST["telefone"];

$sql = "insert into pessoa (nome, sobre_nome, endereco, telefone) values ('" . utf8_decode($nome) ."','".utf8_decode($sobre_nome)."','".utf8_decode($endereco)."','".utf8_decode($telefone)."')";
$query = $mysqli->query($sql);
echo $sql;
?>


