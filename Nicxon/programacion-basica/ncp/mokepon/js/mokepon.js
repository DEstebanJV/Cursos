const botonMascotaJugador = document.getElementById('boton-mascota');

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
const DIVATAQUES = document.getElementById('ataques');

const SECTION_VER_MAPA = document.getElementById('ver-mapa');
const MAPA = document.getElementById('mapa');

let lienzo = MAPA.getContext("2d");
let intervalo;

let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];
let ataquesMokeponRival;
let indexAtaqueJugador;
let indexAtaqueRival;

let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let mascotaJugador;
let ataqueJugador=[];
let ataqueRival=[];
let vidasJugador;
let vidasRival;
let mokepones = [];
class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.x = 20;
        this.y = 30;
        this.ancho = 80;
        this.alto = 80;
        this.mapaFoto = new Image();
        this.mapaFoto.src = foto;
        this.velocidadX = 0;
        this.velocidadY = 0;
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
ratigueya.ataques.push(
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Tierra 🌱', id: 'boton-tierra'}    
)

mokepones.push(hipodoge,capipepo,ratigueya);

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none';
    SECTION_VER_MAPA.style.display = 'none';

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
    botonReiniciar.addEventListener('click',reiniciarJuego);
    seccionReiniciar.style.display = 'none';
}

function llamarSectionAtaque() {
    //sectionSeleccionarAtaque.style.display = 'flex';
    SECTION_VER_MAPA.style.display = 'flex';
    intervalo = setInterval(pintarPersonaje,50);

}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'; 
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id;
        mascotaJugador = inputHipodoge.id;
        llamarSectionAtaque();
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id;
        mascotaJugador = inputCapipepo.id;
        llamarSectionAtaque();
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id;
        mascotaJugador = inputRatigueya.id;
        llamarSectionAtaque();
    } else {
        alert('Selecciona una mascota')
    }
    extraerAtaques(mascotaJugador);
    extraerVida(mascotaJugador);
    seleccionarMascotaRival();
}

function extraerAtaques(mascota) {
    let ataques = [];
    for (let i = 0; i < mokepones.length; i++) {
        if (mascota === mokepones[i].nombre){
            ataques = mokepones[i].ataques;
        }
    }
    mostrarAtaques(ataques);
}

function extraerVida(mascota) {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascota === mokepones[i].nombre){
            vidasJugador = mokepones[i].vida;
        }
    }
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque)=>{
        DIVATAQUES.innerHTML += `<button class="boton-ataque BAtaque" id=${ataque.id} >${ataque.nombre}</button>`
    })
    botonFuego = document.getElementById('boton-fuego');
    botonAgua = document.getElementById('boton-agua');
    botonTierra = document.getElementById('boton-tierra');
    botones = document.querySelectorAll('.BAtaque');
}

function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener('click', (e)=>{
            if (e.target.textContent === 'Fuego 🔥') {
                ataqueJugador.push('FUEGO')
                boton.style.background = '#112f58'
                boton.disabled = true;
            } else if (e.target.textContent === 'Agua 💧'){
                ataqueJugador.push('AGUA')
                boton.style.background = '#112f58'
                boton.disabled = true;
            } else if (e.target.textContent === 'Tierra 🌱'){
                ataqueJugador.push('TIERRA')
                boton.style.background = '#112f58'
                boton.disabled = true;
            }
            ataqueAleatorioRival()
        })
    })
}

function seleccionarMascotaRival() {
    let mascotaRival = aleatorio(0, mokepones.length-1);
    spanMascotaRival.innerHTML = mokepones[mascotaRival].nombre;
    ataquesMokeponRival = mokepones[mascotaRival].ataques;
    vidasRival = mokepones[mascotaRival].vida;
    secuenciaAtaque()
}


function ataqueAleatorioRival() {
    let ataqueAleatorio = aleatorio(0,ataquesMokeponRival.length-1);
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueRival.push('FUEGO');
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueRival.push('AGUA');
    } else {
        ataqueRival.push('TIERRA');
    }
    iniciarCombate();
}

function iniciarCombate() {
    if (ataqueRival.length === 5 && ataqueJugador.length === 5){
        combate();
    }
}

function crearMensaje(resultado) {
    
    let nuevoAtaqueJugador = document.createElement('p');
    let nuevoAtaqueRival = document.createElement('p');
    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueRival.innerHTML = indexAtaqueRival;
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

function indexAmbosOponentes(jugador,rival){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueRival = ataqueRival[rival]
}

function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueRival[index] === ataqueJugador[index]){
            indexAmbosOponentes(index,index);
            crearMensaje("EMPATE");
        } else if (ataqueJugador[index] == 'FUEGO' && ataqueRival[index] == 'TIERRA' || ataqueJugador[index] == 'AGUA' && ataqueRival[index] == 'FUEGO' || ataqueJugador[index] == 'TIERRA' && ataqueRival[index] == 'AGUA') {
            indexAmbosOponentes(index,index);
            crearMensaje('Ganaste');
            vidasRival--;
        } else {
            indexAmbosOponentes(index,index);
            crearMensaje('Perdiste');
            vidasJugador--;
        }
    }
    spanVidasRival.innerHTML = vidasRival;
    spanVidasJugador.innerHTML = vidasJugador;
    revisarVidas();
}

function revisarVidas() {
    if(vidasRival === vidasJugador) {
        crearMensajeFinal('Han empatado el asunto');
    } else if (vidasRival < vidasJugador){
        crearMensajeFinal('Felicitaciones has ganado el juego, la mascota rival tiene menos vidas 🥳');
    }
    else {
        crearMensajeFinal('Has perdido el juego, tú mascota tiene menos vidas 💔');
    }
}

function reiniciarJuego(){
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function pintarPersonaje(){
    capipepo.x = capipepo.x + capipepo.velocidadX;
    capipepo.y = capipepo.y + capipepo.velocidadY;
    lienzo.clearRect(0, 0, MAPA.width, MAPA.height)
    lienzo.drawImage(capipepo.mapaFoto,capipepo.x,capipepo.y,capipepo.ancho,capipepo.alto);
}
function moverDerecha(){
    capipepo.velocidadX = 5;
}
function moverIzquierda(){
    capipepo.velocidadX = -5;
}
function moverAbajo(){
    capipepo.velocidadY = 5;
}
function moverArriba(){
    capipepo.velocidadY = -5;
}
function detenerMovimiento(){
    capipepo.velocidadX = 0;
    capipepo.velocidadY = 0;
}
window.addEventListener('load', iniciarJuego);