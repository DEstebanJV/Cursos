<?php
print_r($_REQUEST);
echo "<br>";
$palabras = array("sol","luna","cielo");

if($_REQUEST["palabra0"] == $palabras[0]){
    echo "La palabra ingresada es correcta <br>";
} else{
    echo "La palabra ingresada no es correcta, la correcta es: $palabras[0] <br>";
}
if($_REQUEST["palabra1"] == $palabras[1]){
    echo "La palabra ingresada es correcta <br>";
} else{
    echo "La palabra ingresada no es correcta, la correcta es: $palabras[1] <br>";
}
if($_REQUEST["palabra2"] == $palabras[2]){
    echo "La palabra ingresada es correcta <br>";
} else{
    echo "La palabra ingresada no es correcta, la correcta es: $palabras[2] <br>";
}

?>