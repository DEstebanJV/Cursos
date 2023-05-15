<?php
print_r($_REQUEST);
echo "<br>";
$wordsList = array("sol","luna","cielo", "luz", "estrella" ,"lluvia");

for ($i=0; $i < count($wordsList); $i++) { 
    if($_REQUEST["palabra".$i] == $wordsList[$i]){
        echo "La palabra ingresada es correcta $wordsList[$i] <br>";
    } else{
        echo "La palabra ingresada no es correcta, la correcta es: $palabras[$i] <br>";
    }
}

?>