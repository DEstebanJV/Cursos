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
let mapaBackground = new Image();
mapaBackground.src = './assets/mokemap.webp'
let mascotaJugadorObjeto;
let alturaBuscada;
let anchoDelMapa = window.innerWidth - 20;
const anchoMaximoDelMapa = 350;
let jugadorId = null;
let rivalId = null;

if (anchoDelMapa>anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20;
}
alturaBuscada = (anchoDelMapa * 600) / 800;

MAPA.width = anchoDelMapa;
MAPA.height = alturaBuscada;

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
let mokeponesRivales = [];
class Mokepon {
    constructor(nombre, foto, vida, mapaFoto, id = null) {
        this.id = id;
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.ancho = 40;
        this.alto = 40;
        this.x = aleatorio(0,MAPA.width-this.ancho);
        this.y = aleatorio(0,MAPA.height-this.ancho);
        this.mapaFoto = new Image();
        this.mapaFoto.src = mapaFoto;
        this.velocidadX = 0;
        this.velocidadY = 0;
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto);
    }
}

let hipodoge = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png');
let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.webp');
let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.webp');


const HIPODOGE_ATAQUES = [
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Tierra 🌱', id: 'boton-tierra'}
]
const CAPIPEPO_ATAQUES = [
    {nombre: 'Tierra 🌱', id: 'boton-tierra'},
    {nombre: 'Tierra 🌱', id: 'boton-tierra'},
    {nombre: 'Tierra 🌱', id: 'boton-tierra'},
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'}
]
const RATIGUEYA_ATAQUES = [
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Tierra 🌱', id: 'boton-tierra'} 
]

hipodoge.ataques.push(...HIPODOGE_ATAQUES);
capipepo.ataques.push(...CAPIPEPO_ATAQUES);
ratigueya.ataques.push(...RATIGUEYA_ATAQUES);

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

    unirseAlJuego();
}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
        .then(function (res){
            console.log(res);
            if (res.ok){
                res.text()
                    .then(function (respuesta){
                        jugadorId = respuesta;
                    })
            }
        })
}
function llamarSectionAtaque() {
    

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

    seleccionarMokepon(mascotaJugador);

    extraerAtaques(mascotaJugador);
    extraerVida(mascotaJugador);
    SECTION_VER_MAPA.style.display = 'flex';
    iniciarMapa();

}

function seleccionarMokepon(mascotaJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
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
            if (ataqueJugador.length === 5){
                enviarAtaques()
            }
        })
    })
}

function enviarAtaques(){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })
}

function seleccionarMascotaRival(rival) {
    spanMascotaRival.innerHTML = rival.nombre;
    ataquesMokeponRival = rival.ataques;
    vidasRival = rival.vida;
    secuenciaAtaque();
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

function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
    lienzo.clearRect(0, 0, MAPA.width, MAPA.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        MAPA.width,
        MAPA.height)
    mascotaJugadorObjeto.pintarMokepon();
    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)
    mokeponesRivales.forEach(function (mokepon){
        mokepon.pintarMokepon();
        revisarColision(mokepon);
    })
}

function enviarPosicion(x, y){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res){
        if (res.ok){
            res.json()
                .then(function({rivales}) {
                    mokeponesRivales = rivales.map(function (enemigo) {
                        let mokeponRival = null;
                        const mokeponNombre = enemigo.mokepon.nombre || ""
                        if (mokeponNombre === 'Hipodoge'){
                            mokeponRival = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png',enemigo.id);
                        } else if (mokeponNombre === 'Capipepo'){
                            mokeponRival = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.webp',enemigo.id);
                        } else if (mokeponNombre === 'Ratigueya'){
                            mokeponRival = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.webp',enemigo.id);
                        }
                        mokeponRival.x = enemigo.x;
                        mokeponRival.y = enemigo.y;
                        return mokeponRival;
                    })
                })
        }
    })
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5;
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5;
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5;
}
function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5;
}
function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0;
    mascotaJugadorObjeto.velocidadY = 0;
}
function sePresionoUnaTecla(event){
    switch (event.key){
        case 'ArrowUp':
            moverArriba();
            break;
        case 'ArrowDown':
            moverAbajo();
            break;
        case 'ArrowLeft':
            moverIzquierda();
            break;
        case 'ArrowRight':
            moverDerecha();
            break;
        default:
            break;
    }
}
function iniciarMapa(){
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
    intervalo = setInterval(pintarCanvas,50);
    window.addEventListener('keydown', sePresionoUnaTecla);
    window.addEventListener('keyup', detenerMovimiento);
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre){
            return mokepones[i];
        }
    }
}
function revisarColision(rival){
    const arribaEnemigo = rival.y;
    const abajoEnemigo = rival.y + rival.alto;
    const derechaEnemigo = rival.x + rival.ancho;
    const izquierdaEnemigo = rival.x;
    
    const arribaMascota = mascotaJugadorObjeto.y;
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
    const izquierdaMascota = mascotaJugadorObjeto.x;
    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento();
    clearInterval(intervalo);
    rivalId = rival.id;
    sectionSeleccionarAtaque.style.display = 'flex';
    SECTION_VER_MAPA.style.display = 'none';
    seleccionarMascotaRival(rival);
}
window.addEventListener('load', iniciarJuego);