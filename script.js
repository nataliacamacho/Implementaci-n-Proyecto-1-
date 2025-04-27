const fechaActual = new Date();
const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opciones);
document.getElementById('fecha').textContent = fechaFormateada;

let index = 0;

function cambiarSlide(n) {
    index += n;
    mostrarSlide(index);
}

function mostrarSlide(n) {
    const slides = document.querySelectorAll("#portafolio .slide");

    if (n >= slides.length) {
        index = 0;
    }
    if (n < 0) {
        index = slides.length - 1;
    }

    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function mostrarRecuadro(tipo) {
    const nombreRecuadro = document.getElementById('nombre-recuadro');
    const correoRecuadro = document.getElementById('correo-recuadro');

    if (tipo === 'nombre') {
        nombreRecuadro.classList.toggle('visible'); 
        correoRecuadro.classList.remove('visible'); 
    } else if (tipo === 'correo') {
        correoRecuadro.classList.toggle('visible'); 
        nombreRecuadro.classList.remove('visible'); 
    }
}
