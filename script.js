const billAmount = document.getElementById('bill');
const numPeople = document.getElementById('people');
const tipPerPerson = document.getElementById('tip-amount');
const totalPerPerson = document.getElementById('total-amount');
const buttons = document.querySelectorAll('.tip-button');

const customTip = document.getElementById('custom');
const resetBtn = document.getElementById('reset');

billAmount.value = '0.0';
numPeople.value = '1';
tipPerPerson.textContent = `$${(0.00).toFixed(2)}`;
totalPerPerson.textContent = `$${(0.00).toFixed(2)}`;

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

// Calculating the Tip and Total Amount
function calculateTip() {
  if (peopleValue >= 1) {
    const tipPerPerson = (billValue * tipValue) / peopleValue;
    const totalPerPerson = (billValue * tipPerPerson) / peopleValue;
    tipPerPerson.textContent = `${tipPerPerson.toFixed(2)}`;
    totalPerPerson.textContent = `${totalPerPerson.toFixed(2)}`;
  }
}

// Display the tip amount per person
function billInputFun() {
  billValue = parseFloat(billAmount.value);
  calculateTip();
}
// Display the total amount per person
function numPeopleFun() {
  peopleValue = parseFloat(numPeople.value);
  calculateTip();
}

// Displaying the buttons are clicked
function clickHandler(e) {
  buttons.forEach((button) => {
    button.classList.remove('active');
    if (e.target.textContent === button.textContent) {
      button.classList.add('active');
      tipValue = parseFloat(button.textContent) / 100;
    }
  });
  calculateTip();
}

billAmount.addEventListener('input', billInputFun);
numPeople.addEventListener('input', numPeopleFun);
buttons.forEach((button) => {
  button.addEventListener('click', clickHandler);
});
