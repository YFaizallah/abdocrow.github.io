// Select buttons and image container
const dressersBtn = document.getElementById('dressersBtn');
const dresserOptions = document.getElementById('dresserOptions');
const mirrorDresserBtn = document.getElementById('mirrorDresserBtn');
const noMirrorDresserBtn = document.getElementById('noMirrorDresserBtn');
const imageDisplay = document.getElementById('imageDisplay');
const dresserImage = document.getElementById('dresserImage');

// Show dresser options when "Your Dressers" is clicked
dressersBtn.addEventListener('click', () => {
  dresserOptions.classList.remove('hidden');
});

// Display image for "Dresser with Mirrors"
mirrorDresserBtn.addEventListener('click', () => {
  dresserImage.src = "assets/dresser_with_mirrors.jpg"; // Add image path
  dresserImage.alt = "Dresser with Mirrors";
  imageDisplay.classList.remove('hidden');
});

// Display image for "Dresser without Mirrors"
noMirrorDresserBtn.addEventListener('click', () => {
  dresserImage.src = "assets/dresser_without_mirrors.jpg"; // Add image path
  dresserImage.alt = "Dresser without Mirrors";
  imageDisplay.classList.remove('hidden');
});
