function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    
    if (inputHipodoge.checked){
        alert('seleccionaste a Hipodoge');
    } else if (inputCapipepo.checked){
        alert('seleccionaste a Capipepo');
    } else if (inputRatigueya.checked){
        alert('seleccionaste a Ratigueya');
    }
}

window.addEventListener('load', iniciarJuego);