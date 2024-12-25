let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.getElementById("slides");
  const totalSlides = slides.children.length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
setInterval(() => {
  changeSlide(1); 
}, 5000);


const pagination = document.getElementById('pagination');
pagination.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target;

    if (target.tagName === 'A') {
        const pageUrl = target.getAttribute('href');

        if (pageUrl && pageUrl !== '#') {
            window.location.href = pageUrl;
        } else {
            console.log('Invalid or disabled link clicked.');
        }
    }
});


/*
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar) {
  bar.addEventListener('click', () =>{
    nav.classList.add('active');
  })
}
*/

