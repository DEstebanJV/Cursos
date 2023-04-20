let ataqueJugador;
let ataqueRival;
let vidasJugador = 3;
let vidasRival = 3;

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);
}

function llamarSectionAtaque() {
    document.getElementById('seleccionar-ataque').style.display = 'block';
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge';
        llamarSectionAtaque();
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo';
        llamarSectionAtaque();
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya';
        llamarSectionAtaque();
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaRival();
}

function seleccionarMascotaRival() {
    let mascotaRival = aleatorio(1,3);
    let spanMascotaRival = document.getElementById('mascota-rival');

    if (mascotaRival == 1) {
        spanMascotaRival.innerHTML = 'Hipodoge';
    } else if (mascotaRival == 2) {
        spanMascotaRival.innerHTML = 'Capipepo';
    } else {
        spanMascotaRival.innerHTML = 'Ratigueya';
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO';
    ataqueAleatorioRival();
}

function ataqueAgua() {
    ataqueJugador = 'AGUA';
    ataqueAleatorioRival();
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA';
    ataqueAleatorioRival();
}

function ataqueAleatorioRival() {
    let ataqueAleatorio = aleatorio(1,3);

    if (ataqueAleatorio == 1) {
        ataqueRival = 'FUEGO';
    } else if (ataqueAleatorio == 2) {
        ataqueRival = 'AGUA';
    } else {
        ataqueRival = 'TIERRA';
    }

    combate();
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes');
    
    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueRival + ' - ' + resultado;
    
    sectionMensajes.appendChild(parrafo)
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasRival = document.getElementById('vidas-rival');
    if (ataqueRival == ataqueJugador) {
        crearMensaje('Empate');
    } else if (ataqueJugador == 'FUEGO' && ataqueRival == 'TIERRA' || ataqueJugador == 'AGUA' && ataqueRival == 'FUEGO' || ataqueJugador == 'TIERRA' && ataqueRival == 'AGUA') {
        crearMensaje('Ganaste');
        vidasRival--;
        spanVidasRival.innerHTML = vidasRival;
    } else {
        crearMensaje('Perdiste');
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);