let ataqueJugador;

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

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge';
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo';
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya';
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaRival();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarMascotaRival() {
    let ataqueAleatorio = aleatorio(1,3);
    let spanMascotaRival = document.getElementById('mascota-rival');

    if (ataqueAleatorio == 1){
        spanMascotaRival.innerHTML = 'Hipodoge';
    } else if (ataqueAleatorio == 2){
        spanMascotaRival.innerHTML = 'Capipepo';
    } else {
        spanMascotaRival.innerHTML = 'Ratigueya';
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO';
    alert(ataqueJugador);
}

function ataqueAgua() {
    ataqueJugador = 'AGUA';
    alert(ataqueJugador);
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA';
    alert(ataqueJugador);
}

window.addEventListener('load', iniciarJuego);