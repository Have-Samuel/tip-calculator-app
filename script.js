// Variables
const bill = document.getElementById('bill').value;
const tip = document.querySelectorAll('tip-button');
const customTip = document.getElementById('custom').value;
const noPple = document.getElementById('people').value;
const resetBtn = document.getElementById('reset');

// Calculating the Tip
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
