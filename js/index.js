window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
});
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const contentBlocks = document.querySelectorAll('.content');
contentBlocks.forEach(function (content) {
  content.addEventListener('click', function () {
      const paragraph = content.querySelector('p');
      paragraph.style.display = paragraph.style.display === "none" ? "block" : "none";
  });
});