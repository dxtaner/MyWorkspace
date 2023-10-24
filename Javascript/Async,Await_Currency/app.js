async function test(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Bu bir değerdir.");
    }, 5000);
  });
}

test("Selam").then((response) => console.log(response));

async function testData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "string") {
        resolve(data);
      } else {
        reject(new Error("Lütfen string bir değer girin"));
      }
    }, 5000);
  });
}

testData("Selam")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

async function getExchangeRateData() {
  const apikey = "0ONU7m3qmasMJ5no25TGJLLG7O2mA0yy";
  const apiUrl =
    "https://api.apilayer.com/exchangerates_data/convert?to=Try&from=usd&amount=1500";

  const requestOptions = {
    method: "GET",
    headers: new Headers({
      apikey: apikey,
    }),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error("HTTP Hata, Durum Kodu: " + response.status);
    }

    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.log("Hata Oluştu:");
    console.error(error);
  }
}

getExchangeRateData();
