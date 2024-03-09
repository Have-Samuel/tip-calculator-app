// Variables
const billAmount = document.getElementById('bill');
const customTipPercentage = document.getElementById('custom');
const numPeople = document.getElementById('people');
const tipAmount = document.getElementById('tip-amount');
const billTotalPerPerson = document.getElementById('total');
const resetBtn = document.getElementById('reset');
const buttons = document.querySelectorAll('.tip-button');

resetBtn.addEventListener('click', (eve) => {
  billAmount.value = '0';
  customTipPercentage.value = '';
  numPeople.value = '';
  tipAmount.innerHTML = '$0.00';
  billTotalPerPerson.innerHTML = '$0.00';

  // Reseting the Tips Buttons
  buttons.forEach((tipBtn) => {
    tipBtn.classList.remove('active');
    console.log(buttons);
  });
  buttons[2].classList.add('active');
  console.log(buttons[2]);
});

// Making all the tip buttons work
buttons.forEach((button) => {
  button.addEventListener('click', (eve) => {
    buttons.forEach((tipBtn) => {
      tipBtn.classList.remove('active');
    });

    if (eve.target.classList.contains('custom')) {
      eve.target.parentElement.classList.add('active');
    } else {
      eve.target.classList.add('active');
    }
  });
});