const currencies = {
  usd: {
    gbp: 2.03032,
    cad: 1.01941,
    eur: 1.41544,
    aud: 0.88297,
  },
  gbp: {
    usd: 0.49246,
    cad: 0.50221,
    eur: 0.69714,
    aud: 0.43497,
  },
  cad: {
    usd: 0.98054,
    gbp: 1.99169,
    eur: 1.38814,
    aud: 0.86613,
  },
  eur: {
    usd: 0.70641,
    gbp: 1.43448,
    cad: 0.72037,
    aud: 0.62382,
  },
  aud: {
    usd: 1.13262,
    gbp: 2.29964,
    cad: 1.15498,
    eur: 1.60329,
  },
};
const inputFields = document.getElementsByTagName("input");

for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("keyup", event => {
    const inputValue = event.target.value;
    const inputCurrencyType = event.target.id.split('-').pop();
    const currencyConversionValues = currencies[inputCurrencyType];

    for (let currency in currencyConversionValues) {
      const input = document.getElementById(`js-currency-${currency}`);
      const convertateValue = currencyConversionValues[currency] * inputValue;

      input.value = convertateValue;
    }
  })
}
