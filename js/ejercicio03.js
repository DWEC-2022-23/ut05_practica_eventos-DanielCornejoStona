let datos = document.querySelector('#datos');
let titulo = document.querySelector('#titulo');
let caja = document.querySelector('#info');
document.addEventListener('mousemove', raton);
document.addEventListener('click', color);
window.addEventListener('keydown', teclado);

function raton(e) {
    caja.style.backgroundColor="White";
  titulo.innerText= `RATÓN`;
  datos.innerText = `
  Navegador: ${e.screenX}, ${e.screenY}
  Página: ${e.pageX}, ${e.pageY}`;
}

function teclado(e) {
    caja.style.backgroundColor="Lightblue";
  titulo.innerText= `TECLADO`;
  datos.innerText = `
  Carácter: ${e.key}
  Código: ${e.code}`;
}

function color(e) {
    caja.style.backgroundColor="Yellow";
    titulo.innerText= `RATÓN`;
  datos.innerText = `
  Navegador: ${e.screenX}, ${e.screenY}
  Página: ${e.pageX}, ${e.pageY}`;
}