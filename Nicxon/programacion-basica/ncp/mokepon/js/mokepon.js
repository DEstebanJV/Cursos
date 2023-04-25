const botonMascotaJugador = document.getElementById('boton-mascota');
const botonFuego = document.getElementById('boton-fuego');
const botonAgua = document.getElementById('boton-agua');
const botonTierra = document.getElementById('boton-tierra');
const botonReiniciar = document.getElementById('boton-reiniciar');
const seccionReiniciar = document.getElementById('reiniciar');

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const inputHipodoge = document.getElementById('hipodoge');
const inputCapipepo = document.getElementById('capipepo');
const inputRatigueya = document.getElementById('ratigueya');
const spanMascotaJugador = document.getElementById('mascota-jugador');

const spanMascotaRival = document.getElementById('mascota-rival');

const sectionMensajes = document.getElementById('resultado');
const sectionAtaquesJugador = document.getElementById('ataques-jugador');
const sectionAtaquesRival = document.getElementById('ataques-rival');

const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasRival = document.getElementById('vidas-rival');

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');

let ataqueJugador;
let ataqueRival;
let vidasJugador = 3;
let vidasRival = 3;

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
    }
}

let hipodoge = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png', 5);
let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png', 5);
let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png', 5);

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none';
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    botonFuego.addEventListener('click', ataqueFuego);
    botonAgua.addEventListener('click', ataqueAgua);
    botonTierra.addEventListener('click', ataqueTierra);
    botonReiniciar.addEventListener('click',reiniciarJuego);
    seccionReiniciar.style.display = 'none';
}

function llamarSectionAtaque() {
    sectionSeleccionarAtaque.style.display = 'flex';
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'; 
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
    
    let nuevoAtaqueJugador = document.createElement('p');
    let nuevoAtaqueRival = document.createElement('p');
    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueJugador.innerHTML = ataqueJugador;
    nuevoAtaqueRival.innerHTML = ataqueRival;
    sectionAtaquesJugador.appendChild(nuevoAtaqueJugador);
    sectionAtaquesRival.appendChild(nuevoAtaqueRival);
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal;
    document.getElementById('boton-fuego').disabled = true;
    document.getElementById('boton-agua').disabled = true;
    document.getElementById('boton-tierra').disabled = true;
    seccionReiniciar.style.display = 'block';
}

function combate() {
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
    revisarVidas();
}

function revisarVidas() {
    if(vidasRival == 0) {
        crearMensajeFinal('Felicitaciones has ganado el juego, la mascota rival  no tiene vidas 🥳');
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Has perdido el juego, tú mascota no tiene vidas 💔');
    }
}

function reiniciarJuego(){
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);