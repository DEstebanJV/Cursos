const botonMascotaJugador = document.getElementById('boton-mascota');
const botonFuego = document.getElementById('boton-fuego');
const botonAgua = document.getElementById('boton-agua');
const botonTierra = document.getElementById('boton-tierra');
const botonReiniciar = document.getElementById('boton-reiniciar');
const seccionReiniciar = document.getElementById('reiniciar');

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const spanMascotaJugador = document.getElementById('mascota-jugador');

const spanMascotaRival = document.getElementById('mascota-rival');

const sectionMensajes = document.getElementById('resultado');
const sectionAtaquesJugador = document.getElementById('ataques-jugador');
const sectionAtaquesRival = document.getElementById('ataques-rival');

const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasRival = document.getElementById('vidas-rival');

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const CONTENEDORTARJETAS = document.getElementById('contenedor-tarjetas');
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;

let ataqueJugador;
let ataqueRival;
let vidasJugador = 3;
let vidasRival = 3;
let mokepones = [];
class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

let hipodoge = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png', 5);
let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png', 5);
let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png', 5);

hipodoge.ataques.push(
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Tierra 🌱', id: 'boton-tierra'}
)
capipepo.ataques.push(
    {nombre: 'Tierra 🌱', id: 'boton-tierra'},
    {nombre: 'Tierra 🌱', id: 'boton-tierra'},
    {nombre: 'Tierra 🌱', id: 'boton-tierra'},
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'}
)
capipepo.ataques.push(
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Tierra 🌱', id: 'boton-tierra'}    
)

mokepones.push(hipodoge,capipepo,ratigueya);

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none';

    mokepones.forEach((mokepon)=>{
        opcionDeMokepones = `<input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>`
        
        CONTENEDORTARJETAS.innerHTML += opcionDeMokepones;

        inputHipodoge = document.getElementById('Hipodoge');
        inputCapipepo = document.getElementById('Capipepo');
        inputRatigueya = document.getElementById('Ratigueya');

    })
    
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