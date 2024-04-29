const apikey = "fd6255faaa0bd9608a971bc240b1b4d0";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
  try {
    const resp = await fetch(url(city), { origin: "cors" });

    if (!resp.ok) {
      throw new Error("Weather information not available");
    }

    const respData = await resp.json();
    console.log(respData);

    addWeatherToPage(respData);
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    // Handle the error, show a message to the user, etc.
  }
}

function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);

  const weather = document.createElement("div");
  weather.classList.add("weather");

  const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  weather.innerHTML = `
      <h2>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
        ${temp}°C
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      </h2>
      <small>${data.weather[0].description}</small>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
      <p>Sunrise: ${sunriseTime}</p>
      <p>Sunset: ${sunsetTime}</p>
    `;

  // cleanup
  main.innerHTML = "";
  main.appendChild(weather);
}

function KtoC(K) {
  return Math.floor(K - 273.15);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = search.value.trim();

  if (city) {
    await getWeatherByLocation(city);
  }
});
