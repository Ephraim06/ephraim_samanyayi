// LIVE CLOCK
function updateClock() {
  const now = new Date();
  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');

  updateFlipCard(document.getElementById('hours'), hours);
  updateFlipCard(document.getElementById('minutes'), minutes);
  updateFlipCard(document.getElementById('seconds'), seconds);
}

function updateFlipCard(element, newValue) {
  if (element.dataset.value !== newValue) {
    element.dataset.value = newValue;
    element.innerHTML = newValue;
    element.classList.add('flip');
    setTimeout(() => element.classList.remove('flip'), 500);
  }
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initialize immediately
