const billAmount = document.getElementById('bill');
const numPeople = document.getElementById('people');
const tipPerPerson = document.getElementById('tip-amount');
const billTotalPerPerson = document.getElementById('total-amount');
const buttons = document.querySelectorAll('.tip-button');

const customTip = document.getElementById('custom');
const resetBtn = document.getElementById('reset');

billAmount.value = '0.0';
numPeople.value = '1';
// customTip.value = '0';
tipPerPerson.textContent = `$${(0.00).toFixed(2)}`;
billTotalPerPerson.textContent = `$${(0.00).toFixed(2)}`;

let billValue = 0;
let peopleValue = 1;

// Display the tip amount and total amount per person
function billInputFun() {
  billValue = parseFloat(billAmount.value);
  console.log(billValue);
}

function numPeopleFun() {
  peopleValue = parseFloat(numPeople.value);
  console.log(peopleValue);
}

function clickHandler(e) {
  buttons.forEach((button) => {
    // button.classList.remove('active');
    if (e.target.textContent === e.textContent) {
      button.classList.add('active');
    }
  });
}

billAmount.addEventListener('input', billInputFun);
numPeople.addEventListener('input', numPeopleFun);
buttons.forEach((button) => {
  button.addEventListener('click', clickHandler);
});