// Select buttons and containers
const bagsBtn = document.getElementById('bagsBtn');
const dressersBtn = document.getElementById('dressersBtn');
const bagOptions = document.getElementById('bagOptions');
const dresserOptions = document.getElementById('dresserOptions');
const withBagsBtn = document.getElementById('withBagsBtn');
const withoutBagsBtn = document.getElementById('withoutBagsBtn');
const mirrorDresserBtn = document.getElementById('mirrorDresserBtn');
const noMirrorDresserBtn = document.getElementById('noMirrorDresserBtn');
const carousel = document.getElementById('carousel');
const carouselImage = document.getElementById('carouselImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Carousel Data
const images = {
  bag: {
    with: ["assets/bag/with (1).jpg", "assets/bag/with (2).jpg"],
    without: ["assets/bag/without (1).jpg", "assets/bag/without (2).jpg"]
  },
  dresser: {
    with: ["assets/dresser/with (1).jpg", "assets/dresser/with (2).jpg", "assets/dresser/with (3).jpg"],
    without: ["assets/dresser/without 1 (1).jpg", "assets/dresser/without 1 (2).jpg", "assets/dresser/without 1 (3).jpg"]
  }
};

let currentImages = [];
let currentIndex = 0;

// Function to reset carousel and hide it
function resetCarousel() {
  currentImages = [];
  currentIndex = 0;
  carousel.classList.add('hidden');
}

// Show Bag options
bagsBtn.addEventListener('click', () => {
  bagOptions.classList.remove('hidden');
  dresserOptions.classList.add('hidden');
  resetCarousel(); // Ensure the carousel is hidden
});

// Show Dresser options
dressersBtn.addEventListener('click', () => {
  dresserOptions.classList.remove('hidden');
  bagOptions.classList.add('hidden');
  resetCarousel(); // Ensure the carousel is hidden
});

// Show the carousel and load images
function showCarousel(category, type) {
  currentImages = images[category][type];
  currentIndex = 0;
  updateCarouselImage();
  carousel.classList.remove('hidden'); // Only show the carousel after an option is selected
}

// Update the carousel image
function updateCarouselImage() {
  carouselImage.src = currentImages[currentIndex];
}

// Navigate the carousel
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateCarouselImage();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateCarouselImage();
});

// Event Listeners for Bag options
withBagsBtn.addEventListener('click', () => {
  showCarousel('bag', 'with');
});

withoutBagsBtn.addEventListener('click', () => {
  showCarousel('bag', 'without');
});

// Event Listeners for Dresser options
mirrorDresserBtn.addEventListener('click', () => {
  showCarousel('dresser', 'with');
});

noMirrorDresserBtn.addEventListener('click', () => {
  showCarousel('dresser', 'without');
});
