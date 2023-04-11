function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra"
    } else if (jugada == 2) {
        resultado = "Papel"
    } else if (jugada == 3) {
        resultado = "Tijera"
    } else {
        resultado = "Valor erroneo"
    }
    return resultado
}
//1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;
let pc = 0;
let triunfos = 0;
let derrotas = 0;
while (triunfos < 3 && derrotas < 3) {
    pc = aleatorio(1, 3);
    jugador = prompt("Elige 1 para piedra, 2 para papel y 3 para piedra")
    //alert("Elegiste "+jugador)
    alert("PC elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))
    //Combate
    if (pc == jugador) {
        alert("Empate")
    } else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2) {
        alert("Ganaste")
        triunfos = triunfos + 1
    } else {
        alert("Perdiste")
        derrotas = derrotas + 1
    }
}
alert("Ganaste " + triunfos + " veces. Perdiste " + derrotas + " veces")