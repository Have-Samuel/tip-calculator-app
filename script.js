// Variables
const billAmount = document.getElementById('bill');
const buttons = document.querySelectorAll('.tip-button button');
const billTipAmount = document.getElementById('tip-amount');
const customTipPercentage = document.getElementById('custom');
const numPeople = document.getElementById('people');
const billTotalPerPerson = document.getElementById('total');
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

}

// Event listeners
calculateTip();
custom();
reset();
