// Visor de imágenes: diagrama y fotografías del laboratorio.
const visor = document.getElementById('visor-imagen');
const imagenGrande = document.getElementById('visor-foto');
const descripcion = document.getElementById('visor-descripcion');
const enlaceOriginal = document.getElementById('visor-original');
const cerrar = visor?.querySelector('.visor-cerrar');

if (visor && imagenGrande && descripcion && enlaceOriginal && cerrar) {
  document.querySelectorAll('.ampliar-imagen').forEach((boton) => {
    boton.addEventListener('click', () => {
      const imagen = boton.querySelector('img');
      if (!imagen) return;
      imagenGrande.src = imagen.currentSrc || imagen.src;
      imagenGrande.alt = imagen.alt;
      descripcion.textContent = boton.closest('figure')?.querySelector('figcaption')?.textContent || imagen.alt;
      enlaceOriginal.href = imagen.getAttribute('src');
      visor.showModal();
    });
  });
  cerrar.addEventListener('click', () => visor.close());
  visor.addEventListener('click', (evento) => {
    if (evento.target === visor) visor.close();
  });
  visor.addEventListener('close', () => {
    imagenGrande.removeAttribute('src');
  });
}
