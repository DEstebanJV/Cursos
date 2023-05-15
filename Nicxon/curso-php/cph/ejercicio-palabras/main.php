<?php

$wordsList = array("sol","luna","cielo", "luz", "estrella" ,"lluvia");

$form = "<form action='analisis.php'>";
for ( $i = 0; $i < count($wordsList); $i++){
    $form .= "La palabra: ".str_shuffle($wordsList[$i])." ".
    "<input type='text' name='palabra".$i."'>"."<br>";
}

$button = "<button type='submit'>Enviar</button>";
$formClose = "</form>";

echo $form.$button.$formClose;


?>