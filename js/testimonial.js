// // SELECTORS
// const container = document.querySelector('.container-testimonial');
// const slider = document.querySelector('.slider-testimonial');
// const slides = document.querySelectorAll('.slide-testimonial');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// const numSlides = slides.length;

// prevBtn.addEventListener("click", function activando(){
//     slides.classList.add(".active");
//     console.log("yes")
// })

const next = document.querySelector(".next12"),
  prev = document.querySelector(".prev12"),
  slides = document.querySelectorAll(".slide-testimonial");
let index = 0;
function display(e) {
  slides.forEach((e) => {
    e.style.display = "none";
  }),
    (slides[e].style.display = "flex");
}
function nextSlide() {
  ++index > slides.length - 1 && (index = 0), display(index);
}
function prevSlide() {
  --index < 0 && (index = slides.length - 1), display(index);
  return console.log("hola como te va");
}
display(index),
  next.addEventListener("click", nextSlide),
  prev.addEventListener("click", prevSlide);
console.log(next);

// let slideWidth = slides[0].offsetWidth;
// let slideMarginRight = parseInt(getComputedStyle(slides[0]).marginRight);
// let moveX = slideWidth + slideMarginRight;

// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[numSlides - 1].cloneNode(true);

// firstClone.setAttribute('id', 'first-clone');
// lastClone.setAttribute('id', 'last-clone');

// slider.appendChild(firstClone);
// slider.prepend(lastClone);

// const allSlides = document.querySelectorAll('.slide-testimonial'); //allSlides includes the clones

// slider.style.transform = `translateX(${-moveX}px)`;

// let counter = 1;

// nextBtn.addEventListener('click', () => {
//     counter++;
//     slider.style.transition = 'transform 0.5s ease-in-out, opacity 0.2s';
//     slider.style.transform = `translateX(${-(moveX * counter)}px)`;
//     if (counter >= allSlides.length) counter = numSlides;
//     console.log(counter);
// });

// prevBtn.addEventListener('click', () => {
//     counter--;
//     slider.style.transition = 'transform 0.5s ease-in-out, opacity 0.2s';
//     slider.style.transform = `translateX(${-(moveX * counter)}px)`;
//     if (counter < 0) counter = 0
// });

// // CHECK FOR FIRSTCLONE AND LASTCLONE AND RESET THE SLIDES ACCORDINGLY
// slider.addEventListener('transitionend', () => {
//     if (allSlides[counter].id === 'first-clone') {
//         slider.style.transition = 'none';
//         counter = 1;
//         slider.style.transform = `translateX(${-(moveX * counter)}px)`;
//     }

//     if (allSlides[counter].id === 'last-clone') {
//         slider.style.transition = 'none';
//         counter = numSlides;
//         slider.style.transform = `translateX(${-(moveX * counter)}px)`;
//     }
// });

// window.addEventListener('resize', () => {
//     slideWidth = slides[0].offsetWidth;
//     slideMarginRight = parseInt(getComputedStyle(slides[0]).marginRight);
//     moveX = slideWidth + slideMarginRight;
//     slider.style.transition = 'none';
//     slider.style.transform = `translateX(${-(moveX * counter)}px)`;
// });
