async function showCurrencies() {
    const dateInput = document.getElementById("date");
    const date = dateInput.value.replace(/-/g, "");

    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);

    const url = `https://www.tcmb.gov.tr/kurlar/${year}${month}/${day}${month}${year}.xml`;

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const xmlDoc = this.responseXML;
            const currencies = xmlDoc.getElementsByTagName("Currency");
            const tableBody = document.getElementById("table-body");
            tableBody.innerHTML = "";

            for (let i = 0; i < currencies.length; i++) {
                const currencyCode = currencies[i].getAttribute("Kod");
                const currencyName = currencies[i].getElementsByTagName("Isim")[0].textContent;
                const currencyForexBuying = currencies[i].getElementsByTagName("ForexBuying")[0].textContent;
                const currencyForexSelling = currencies[i].getElementsByTagName("ForexSelling")[0].textContent;

                const row = `
        <tr>
          <td>${currencyCode}</td>
          <td>${currencyName}</td>
          <td>${currencyForexBuying}</td>
          <td>${currencyForexSelling}</td>
        </tr>
      `;

                tableBody.innerHTML += row;
            }
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}