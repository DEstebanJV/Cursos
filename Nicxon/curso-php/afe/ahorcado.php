<?php

function clear(){
    if (PHP_OS === "WINNT"){
        system("clear");
    }
    else {
        system("clear");
    }
}

$possible_words = ["Bebida", "Prisma", "Ala", "Dolor", "Piloto", "Baldosa", "Terremoto", "Asteroide", "Gallo", "Platzi"];

define("MAX_ATTEMPS", 6);

echo "😼 ¡Juego del ahorcado! \n\n";

// Inicializamos el juegos
$choosen_word = $possible_words[ rand(0, 9) ];
$choosen_word = strtolower($choosen_word);
$word_length = strlen($choosen_word);
$discovered_letters = str_pad("", $word_length, "_");
$attempts = 0;

do{

    echo "Palabra de $word_length letras \n\n";
    echo $discovered_letters . "\n\n";
    
    // Pedimos al usuario que escriba
    $player_letter = readline("Escribe una letra: ");
    $player_letter = strtolower($player_letter);
    
    if (!function_exists('str_contains')) {
        function str_contains (string $haystack, string $needle)
        {
            return empty($needle) || strpos($haystack, $needle) !== false;
        }
    }
    
    if ( str_contains($choosen_word, $player_letter)){
        
        //Verificamos todas las ocurrencias
        $offset = 0;
        while( ($letter_position = strpos($choosen_word, $player_letter,$offset)) !== false ){
            $discovered_letters[$letter_position] = $player_letter;
            $offset = $letter_position + 1;
        }
    }
    else {
        clear();
        $attempts++;
        echo "Letra incorrecta. Te quedan ". (MAX_ATTEMPS - $attempts). " intentos.\n";
        sleep(2);
    }
    clear();
}
while($attempts < MAX_ATTEMPS && $discovered_letters != $choosen_word);

clear();

if ($attempts < MAX_ATTEMPS)
    echo "Adivinaste la palabra\n";
else
    echo "Buena suerte en la próxima\n";

echo "La palabra es: $choosen_word\n";
echo "La palabra es: $discovered_letters\n";
echo "\n";