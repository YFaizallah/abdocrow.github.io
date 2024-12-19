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
