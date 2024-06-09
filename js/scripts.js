const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 10);
});

document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    slides[currentSlide].classList.add('active');
});


function openTab(tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
  }

// const images = [
//     'url(../images/_JRP4803.JPG)',
//     'url(../images/_JRP4830.JPG)',
//     'url(../images/_JRP4832.JPG)',
// ];

// let currentIndex = 0;
// const homeElement = document.querySelector('.home');

// function changeBackgroundImage() {
//     currentIndex = (currentIndex + 1) % images.length;
//     homeElement.style.backgroundImage = `linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), ${images[currentIndex]}`;
//     homeElement.classList.remove('fade-in');
//     void homeElement.offsetWidth; // Trigger reflow to restart the animation
//     homeElement.classList.add('fade-in');
// }

// setInterval(changeBackgroundImage, 1000);