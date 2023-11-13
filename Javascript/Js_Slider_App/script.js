// script.js
const sliderImages = document.querySelectorAll(".slider-container img");
let currentImageIndex = 0;

function showImage(index) {
  sliderImages.forEach((image, i) => {
    if (i === index) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
  showImage(currentImageIndex);
}

setInterval(nextImage, 5500); // 5,5 saniyede bir resim geçişi

showImage(currentImageIndex);

// Sağa ve sola geçiş düğmeleri
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);
