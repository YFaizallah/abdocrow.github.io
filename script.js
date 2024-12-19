// Select buttons
const dressersBtn = document.getElementById('dressersBtn');
const dresserOptions = document.getElementById('dresserOptions');
const mirrorDresserBtn = document.getElementById('mirrorDresserBtn');
const noMirrorDresserBtn = document.getElementById('noMirrorDresserBtn');

// Show dresser options when "Your Dressers" is clicked
dressersBtn.addEventListener('click', () => {
  dresserOptions.classList.remove('hidden');
});

// Alert for the type of dresser
mirrorDresserBtn.addEventListener('click', () => {
  alert("You selected a Dresser with Mirrors!");
});

noMirrorDresserBtn.addEventListener('click', () => {
  alert("You selected a Dresser without Mirrors!");
});
