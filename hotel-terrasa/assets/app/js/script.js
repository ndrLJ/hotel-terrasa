const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll(".has-fade")
const btnHamburger = document.querySelector('#btnHamburger');
const slide = document.querySelectorAll(".slide");
const dot = document.querySelectorAll(".dot");
const btnScroll = document.querySelector('#btnScroll');

const makeFullScreen = (el) => {
  if (!document.fullscreenElement) {
    el.requestFullscreen();
    return;
 } 
   document.exitFullscreen();
}

const fullscreenables = document.querySelectorAll(".fullscreenEnabled");
fullscreenables.forEach( (span) => {
span.addEventListener("click", () => {
makeFullScreen(span);
});
span.addEventListener('keydown', (e) => {
 if (e.key === "Enter") {
   makeFullScreen(span);
 }
});
});

let index = 0;

document.addEventListener("touchstart", function() {}, true); // hover on mobile

btnHamburger.addEventListener('click', () => {

  if (header.classList.contains('open')){ 
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElements.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });      
  }
  else { 
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElements.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});

function changeSlide() {

  if (index<0) {
    index = slide.length-1;
  }
  
  if (index>slide.length-1) {
    index = 0;
  }
  
  for (let i=0;i<slide.length;i++) {
    slide[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slide[index].style.display = "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,2500);
  
}

changeSlide();

btnScroll.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}