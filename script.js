const display = document.getElementById('display');
const themeSwitch = document.getElementById('themeSwitch');

// Add value to the display
function appendValue(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch {
    alert('Invalid expression!');
  }
}

// Theme toggle
themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
