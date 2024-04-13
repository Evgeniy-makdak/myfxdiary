const dateOpen = document.getElementById('dateOpen');
const valueOpen = document.getElementById('valueOpen');
const openPrice = document.getElementById('openPrice');
const carrency = document.getElementById('carrency');
const deal = document.getElementById('deal');
const causeOpen = document.getElementById('causeOpen');
const dateClose = document.getElementById('dateClose');
const valueClose = document.getElementById('valueClose');
const closePrice = document.getElementById('closePrice');
const svop = document.querySelectorAll('.close .svop');
const spread = document.querySelectorAll('.close .spread');
const causeClose = document.getElementById('causeClose');
const points = document.getElementById('points');
const money = document.getElementById('money');
const calcResult = document.getElementById('calcResult');
const addToTable = document.getElementById('addToTable');

function result() {
  const currencyValue = carrency.value;
  const dealValue = deal.value;
  if (currencyValue === 'EUR/USD' && dealValue === 'short') {
    svop[0].textContent = '-0.7';
    spread[0].textContent = '1.4';
    svop.forEach((element) => {
      element.style.color = 'red';
    });

    spread.forEach((element) => {
      element.style.color = 'black';
    });
  } else if (currencyValue === 'EUR/USD' && dealValue === 'long') {
    svop[0].textContent = '0';
    spread[0].textContent = '1.4';
    svop.forEach((element) => {
      element.style.color = 'green';
    });

    spread.forEach((element) => {
      element.style.color = 'black';
    });
  }
}
