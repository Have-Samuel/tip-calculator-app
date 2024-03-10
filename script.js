const billAmount = document.getElementById('bill');
const customTipPercentage = document.getElementById('custom');
const numPeople = document.getElementById('people');
const tipAmount1 = document.querySelector('.color1');
const tipAmount2 = document.querySelector('.color2');
const billTotalPerPerson = document.getElementById('total');
const resetBtn = document.getElementById('reset');
const buttons = document.querySelectorAll('.tip-button');

resetBtn.addEventListener('click', (eve) => {
  // Reset the inputs and values
  billAmount.value = '';
  customTipPercentage.value = '';
  numPeople.value = '1';
  tipAmount1.innerHTML = '$0.00';
  tipAmount2.innerHTML = '$0.00';
  billTotalPerPerson.innerHTML = '$0.00';
  // Reseting the Tips Buttons
  buttons.forEach((tipBtn) => {
    tipBtn.classList.remove('active');
  });
  // Setting 15% as the default tip
  const fift = buttons.classList('fiftin');
  fift.classList.add('active');
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