// GALLERY 

const images = [
  'img/bathroom1.jpg',
  'img/bathroom2.jpg',
  'img/bathroom3.jpg',
  'img/bathroom4.jpg',
  'img/bathroom5.jpg'
];

let current = 0;
const sliderImage = document.getElementById('slider-image');

function showImage(index) {
  sliderImage.src = images[index];
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}
