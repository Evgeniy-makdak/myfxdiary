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

const currencyInfo = {
  'EUR/USD': {
    short: {
      svop: '0',
      spread: '1.4',
      svopColor: 'green',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.70',
      spread: '1.4',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'GBP/USD': {
    short: {
      svop: '-0.23',
      spread: '2.1',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.55',
      spread: '2.1',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'USD/JPY': {
    short: {
      svop: '-0.90',
      spread: '1.8',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.25',
      spread: '1.8',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'USD/CAD': {
    short: {
      svop: '-0.60',
      spread: '2.1',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.29',
      spread: '2.1',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'AUD/USD': {
    short: {
      svop: '-0.24',
      spread: '2.3',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.25',
      spread: '2.3',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'USD/CHF': {
    short: {
      svop: '-0.60',
      spread: '2.0',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '0.05',
      spread: '2.0',
      svopColor: 'green',
      spreadColor: 'black',
    },
  },
  'GBP/JPY': {
    short: {
      svop: '-1.10',
      spread: '4.6',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.25',
      spread: '4.6',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'EUR/JPY': {
    short: {
      svop: '-0.50',
      spread: '2.2',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.49',
      spread: '2.2',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'NZD/USD': {
    short: {
      svop: '-0.28',
      spread: '2.5',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.25',
      spread: '2.5',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'EUR/GBP': {
    short: {
      svop: '-0.07',
      spread: '2.0',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.47',
      spread: '2.0',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'CHF/JPY': {
    short: {
      svop: '-0.60',
      spread: '2.5',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.30',
      spread: '2.5',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'AUD/JPY': {
    short: {
      svop: '-0.86',
      spread: '2.4',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.23',
      spread: '2.4',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'AUD/CAD': {
    short: {
      svop: '-0.30',
      spread: '2.2',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.35',
      spread: '2.2',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'EUR/CHF': {
    short: {
      svop: '-0.54',
      spread: '2.1',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.20',
      spread: '2.1',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'EUR/AUD': {
    short: {
      svop: '0.10',
      spread: '4.0',
      svopColor: 'green',
      spreadColor: 'black',
    },
    long: {
      svop: '-1.00',
      spread: '4.0',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'GBP/CAD': {
    short: {
      svop: '-0.40',
      spread: '4.5',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.58',
      spread: '4.5',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'EUR/CAD': {
    short: {
      svop: '0.10',
      spread: '4.5',
      svopColor: 'green',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.83',
      spread: '4.5',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'GBP/CHF': {
    short: {
      svop: '-0.75',
      spread: '4.0',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '0.01',
      spread: '4.0',
      svopColor: 'green',
      spreadColor: 'black',
    },
  },
  'GBP/AUD': {
    short: {
      svop: '-0.40',
      spread: '5.4',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.79',
      spread: '5.4',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'AUD/CHF': {
    short: {
      svop: '-0.73',
      spread: '2.6',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '0.05',
      spread: '2.6',
      svopColor: 'green',
      spreadColor: 'black',
    },
  },
  'GBP/NZD': {
    short: {
      svop: '-0.46',
      spread: '6.8',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.75',
      spread: '6.8',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'EUR/NZD': {
    short: {
      svop: '0.10',
      spread: '6.1',
      svopColor: 'green',
      spreadColor: 'black',
    },
    long: {
      svop: '-1.05',
      spread: '6.1',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  'AUD/NZD': {
    short: {
      svop: '-0.27',
      spread: '5.4',
      svopColor: 'red',
      spreadColor: 'black',
    },
    long: {
      svop: '-0.50',
      spread: '5.4',
      svopColor: 'red',
      spreadColor: 'black',
    },
  },
  // Добавьте информацию о других валютных парах здесь
};

function result() {
  const currencyValue = carrency.value;
  const dealValue = deal.value;
  if (currencyValue in currencyInfo) {
    const info = currencyInfo[currencyValue];

    // Проверяем, есть ли информация о выбранной позиции
    if (dealValue in info) {
      const {
        svop: svopValue,
        spread: spreadValue,
        svopColor,
        spreadColor,
      } = info[dealValue];

      // Устанавливаем значения и цвета для свопа и спреда
      svop.forEach((element) => {
        element.textContent = `своп ${svopValue}`;
        element.style.color = svopColor;
      });
      spread.forEach((element) => {
        element.textContent = `спред ${spreadValue}`;
        element.style.color = spreadColor;
      });

      // Определяем количество знаков после запятой для пары
      const decimalPlaces = currencyValue.includes('JPY') ? 2 : 4;

      // Вычисляем разницу между ценой закрытия и ценой открытия
      const openPriceValue = parseFloat(openPrice.value);
      const closePriceValue = parseFloat(closePrice.value);
      const priceDifference = Math.round(
        (closePriceValue - openPriceValue) * 10 ** decimalPlaces
      );

      // Вычисляем профит в пунктах с учётом спреда.
      const profitPoints = priceDifference - parseFloat(spreadValue);
      const valueCloseValue = parseFloat(valueClose.value);

      // Выводим результаты
      points.textContent = priceDifference - parseFloat(spreadValue);
      money.textContent = ((profitPoints * valueCloseValue) / closePriceValue) * 10;
    } else {
      alert(`No information found for deal: ${dealValue}`);
    }
  } else {
    alert(`No information found for currency: ${currencyValue}`);
  }
}
