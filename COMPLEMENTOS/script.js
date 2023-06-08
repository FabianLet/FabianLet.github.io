// Obtener referencias a los elementos del DOM
const slider = document.querySelector('.slider');
const images = Array.from(slider.getElementsByTagName('img'));
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
let counter = 0;

// Función para desplazar el slider hacia la siguiente imagen
function slideNext() {
  const slideWidth = slider.offsetWidth;
  const maxTranslateX = (images.length - 1) * slideWidth;

  if (counter === images.length - 1) {
    slider.style.transform = 'translateX(0)';
    counter = 0;
  } else {
    counter++;
    const translateXValue = -counter * slideWidth;
    slider.style.transform = `translateX(${translateXValue}px)`;
  }
}

// Función para desplazar el slider hacia la imagen anterior
function slidePrev() {
  const slideWidth = slider.offsetWidth;

  if (counter === 0) {
    counter = images.length - 1;
    const translateXValue = -counter * slideWidth;
    slider.style.transform = `translateX(${translateXValue}px)`;
  } else {
    counter--;
    const translateXValue = -counter * slideWidth;
    slider.style.transform = `translateX(${translateXValue}px)`;
  }
}

// Agregar eventos de clic a los botones de navegación
nextButton.addEventListener('click', slideNext);
prevButton.addEventListener('click', slidePrev);

function prevSlide() {
    const slideWidth = slider.offsetWidth;
    
    if (counter === 0) {
      counter = images.length - 1;
      const translateXValue = -counter * slideWidth;
      slider.style.transform = `translateX(${translateXValue}px)`;
    } else {
      counter--;
      const translateXValue = -counter * slideWidth;
      slider.style.transform = `translateX(${translateXValue}px)`;
    }
  }
  
  function nextSlide() {
    const slideWidth = slider.offsetWidth;
    const maxTranslateX = (images.length - 1) * slideWidth;
  
    if (counter === images.length - 1) {
      slider.style.transform = 'translateX(0)';
      counter = 0;
    } else {
      counter++;
      const translateXValue = -counter * slideWidth;
      slider.style.transform = `translateX(${translateXValue}px)`;
    }
  }

  function prevSlide() {
    const slideWidth = slider.offsetWidth;
    
    if (counter === 0) {
      // Si es la primera imagen, no hacer nada
      return;
    } else {
      counter--;
      const translateXValue = -counter * slideWidth;
      slider.style.transform = `translateX(${translateXValue}px)`;
    }
  }
  
  function nextSlide() {
    const slideWidth = slider.offsetWidth;
    const maxTranslateX = (images.length - 1) * slideWidth;
  
    if (counter === images.length - 1) {
      // Si es la última imagen, no hacer nada
      return;
    } else {
      counter++;
      const translateXValue = -counter * slideWidth;
      slider.style.transform = `translateX(${translateXValue}px)`;
    }
  }