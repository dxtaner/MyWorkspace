function getFile(url, fileType) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP Hata, Durum Kodu: " + response.status);
      }
      if (fileType === "text") {
        return response.text();
      } else if (fileType === "json") {
        return response.json();
      } else {
        throw new Error("Desteklenmeyen dosya türü: " + fileType);
      }
    })
    .then((data) => {
      console.log(`${fileType.toUpperCase()} Dosyası Verisi:`);
      console.log(data);
    })
    .catch((err) => {
      console.log("Hata Oluştu:");
      console.error(err);
    });
}

getFile("example.txt", "text"); // Metin dosyası almak için
getFile("example.json", "json"); // JSON dosyası almak için

function getExchangeRateData() {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "0ONU7m3qmasMJ5no25TGJLLG7O2mA0yy");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  fetch(
    "https://api.apilayer.com/exchangerates_data/convert?to=Try&from=usd&amount=1500",
    requestOptions
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP Hata, Durum Kodu: " + response.status);
      }
      return response.text();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log("Hata Oluştu:");
      console.error(error);
    });
}

getExchangeRateData();
