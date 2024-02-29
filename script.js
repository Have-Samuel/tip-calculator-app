// Variables
// Bill amount
const bill = document.getElementById('bill').value;
// Tip buttons
const tip = document.querySelectorAll('tip-button');
// Custom tip
const customTip = document.getElementById('custom').value;
// Number of people
const noPple = document.getElementById('people').value;
// Reset button
const resetBtn = document.getElementById('reset');

// Functions
// Calculate tip
function calculateTip() {
  tip.forEach((button) => {
    button.addEventListener('click', () => {
      const tipAmount = button.value;
      const tipValue = (bill * tipAmount) / noPple;
      const total = bill / noPple + tipValue;
      document.getElementById('tip-amount').textContent = tipValue;
      document.getElementById('total').textContent = total;
    });
  });
}

// Custom tip
function custom() {
  customTip.addEventListener('input', () => {
    const tipValue = (bill * customTip) / noPple;
    const total = bill / noPple + tipValue;
    document.getElementById('tip-amount').textContent = tipValue;
    document.getElementById('total').textContent = total;
  });
}

// Reset
function reset() {
  resetBtn.addEventListener('click', () => {
    document.getElementById('bill').value = '';
    document.getElementById('custom').value = '';
    document.getElementById('people').value = '';
    document.getElementById('tip-amount').textContent = '0.00';
    document.getElementById('total').textContent = '0.00';
  });
  console.log('Reset');
}

// Event listeners
calculateTip();
custom();
reset();
