const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipPerPerson = document.getElementById('tip-amount');
const totalPerPerson = document.getElementById('total-amount');
const buttons = document.querySelectorAll('.tip-button');
const customTip = document.getElementById('custom');
const resetBtn = document.getElementById('reset');

billInput.value = '0.0';
peopleInput.value = '1';
tipPerPerson.innerHTML = `$${(0.00).toFixed(2)}`;
totalPerPerson.innerHTML = `$${(0.00).toFixed(2)}`;

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

// Calculating the Tip and Total Amount
function calculateTip() {
  if (peopleValue >= 1) {
    const tipAmount = (billValue * tipValue) / peopleValue;
    const total = (billValue * tipAmount) / peopleValue;
    tipPerPerson.innerHTML = `${tipAmount.toFixed(2)}`;
    totalPerPerson.innerHTML = `${total.toFixed(2)}`;
  }
}

// Display the tip amount per person
function billInputFun() {
  billValue = parseFloat(billInput.value);
  calculateTip();
}
// Display the total amount per person
function numPeopleFun() {
  peopleValue = parseFloat(peopleInput.value);
  calculateTip();
}

// Displaying the buttons are clicked
function clickHandler(e) {
  buttons.forEach((button) => {
    button.classList.remove('active');
    if (e.target.innerHTML === button.innerHTML) {
      button.classList.add('active');
      tipValue = parseFloat(button.innerHTML) / 100;
    }
  });
  calculateTip();
}

function tipInputFun() {
  tipValue = parseFloat(customTip.value / 100);

  buttons.forEach((button) => {
    button.classList.remove('active');
  });
}

billInput.addEventListener('input', billInputFun);
peopleInput.addEventListener('input', numPeopleFun);
buttons.forEach((button) => {
  button.addEventListener('click', clickHandler);
});

customTip.addEventListener('input', tipInputFun);