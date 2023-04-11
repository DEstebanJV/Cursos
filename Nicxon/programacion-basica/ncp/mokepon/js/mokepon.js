function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

}

function seleccionarMascotaJugador() {
    
    if (document.getElementById('hipodoge').checked){
        alert('seleccionaste tu al hipodoge');
    }
    else if (document.getElementById('capipepo').checked){
        alert('seleccionaste tu al capipepo');
    }
    else if (document.getElementById('ratigueya').checked){
        alert('seleccionaste tu a la ratigueya');
    }
}

window.addEventListener('load', iniciarJuego);