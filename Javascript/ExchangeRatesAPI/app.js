const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");

const newCurrency = new Currency("USD", "TRY");
const ui = new UI(firstSelect, secondSelect);

eventListeners();

function eventListeners() {
  amountElement.addEventListener("input", exchangeCurrency);

  firstSelect.onchange = function () {
    newCurrency.changeFirstCurrency(
      firstSelect.options[firstSelect.selectedIndex].textCurrent
    );
    ui.changeFirst();
  };

  secondSelect.onchange = function () {
    newCurrency.changeFirstCurrency(
      secondSelect.options[secondSelect.selectedIndex].textCurrent
    );
    ui.changeSecond();
  };
}

function exchangeCurrency() {
  newCurrency.changeAmount(amountElement.value);
  newCurrency
    .exchange()
    .then((result) => {
      ui.displayResult(result);
    })

    .catch((error) => console.log(error));
}
