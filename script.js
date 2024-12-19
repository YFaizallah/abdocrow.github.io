// Select buttons and containers
const bagsBtn = document.getElementById('bagsBtn');
const dressersBtn = document.getElementById('dressersBtn');
const bagOptions = document.getElementById('bagOptions');
const dresserOptions = document.getElementById('dresserOptions');
const withBagsBtn = document.getElementById('withBagsBtn');
const withoutBagsBtn = document.getElementById('withoutBagsBtn');
const mirrorDresserBtn = document.getElementById('mirrorDresserBtn');
const noMirrorDresserBtn = document.getElementById('noMirrorDresserBtn');
const imageDisplay = document.getElementById('imageDisplay');
const itemImage = document.getElementById('itemImage');

// Show Bag options
bagsBtn.addEventListener('click', () => {
  bagOptions.classList.remove('hidden');
  dresserOptions.classList.add('hidden');
  imageDisplay.classList.add('hidden');
});

// Show Dresser options
dressersBtn.addEventListener('click', () => {
  dresserOptions.classList.remove('hidden');
  bagOptions.classList.add('hidden');
  imageDisplay.classList.add('hidden');
});

// Display image for Bags
withBagsBtn.addEventListener('click', () => {
  itemImage.src = "assets/bag/with.jpg"; // Path to bag with handles
  itemImage.alt = "Bag with Handles";
  imageDisplay.classList.remove('hidden');
});

withoutBagsBtn.addEventListener('click', () => {
  itemImage.src = "assets/bag/without.jpg"; // Path to bag without handles
  itemImage.alt = "Bag without Handles";
  imageDisplay.classList.remove('hidden');
});

// Display image for Dressers
mirrorDresserBtn.addEventListener('click', () => {
  itemImage.src = "assets/dresser/with.jpg"; // Path to dresser with mirrors
  itemImage.alt = "Dresser with Mirrors";
  imageDisplay.classList.remove('hidden');
});

noMirrorDresserBtn.addEventListener('click', () => {
  itemImage.src = "assets/dresser/without.jpg"; // Path to dresser without mirrors
  itemImage.alt = "Dresser without Mirrors";
  imageDisplay.classList.remove('hidden');
});

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

// Elements
const carousel = document.getElementById('carousel');
const carouselImage = document.getElementById('carouselImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentImages = [];
let currentIndex = 0;

// Show the carousel
function showCarousel(category, type) {
  currentImages = images[category][type];
  currentIndex = 0;
  updateCarouselImage();
  carousel.classList.remove('hidden');
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

// Event Listeners for Bags
withBagsBtn.addEventListener('click', () => {
  showCarousel('bag', 'with');
});

withoutBagsBtn.addEventListener('click', () => {
  showCarousel('bag', 'without');
});

// Event Listeners for Dressers
mirrorDresserBtn.addEventListener('click', () => {
  showCarousel('dresser', 'with');
});

noMirrorDresserBtn.addEventListener('click', () => {
  showCarousel('dresser', 'without');
});

