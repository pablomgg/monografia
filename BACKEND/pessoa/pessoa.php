<?php
header('Content-Type: text/html; charset=utf-8');
include("../../shared/conexao.php");

if(isset($_REQUEST["id"]))
{
    $sql = "SELECT * FROM pessoa where id = " . $_REQUEST["id"];
}
else{
    $sql = "SELECT * FROM pessoa";
}

$query = $mysqli->query($sql);


$cont = 0;
$pessoa = [];

while($r = mysqli_fetch_assoc($query)) {
    $pessoa[$cont] = array("id"=> $r['id'] ,"nome"=> utf8_encode($r['nome']),"sobre_nome"=> utf8_encode($r['sobre_nome']),"endereco"=> utf8_encode($r['endereco']),"telefone"=> $r['telefone']);
    $cont++;
}
$json = json_encode($pessoa);
echo $json;
?>



 

        
    