import React, { useState, useContext } from "react";
import { WeatherContext } from "./components/WeatherContext";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const App = () => {
  const { weatherData, changeCity } = useContext(WeatherContext);
  const [searchCity, setSearchCity] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const handleCityChange = (e) => {
    setSearchCity(e.target.value);
  };

  const handleSearch = () => {
    if (searchCity.trim() === "") {
      // Empty input, show warning
      setInvalidInput(true);
    } else {
      // Non-empty input, fetch weather data
      changeCity(searchCity);
      setInvalidInput(false); // Reset the invalid input warning
    }
  };

  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="city-search">
        <input
          type="text"
          value={searchCity}
          onChange={handleCityChange}
          placeholder="City Name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {invalidInput && <p className="warning">plesase a city name</p>}
      <div className="weather-cards">
        {weatherData &&
          weatherData.list.map((item) => {
            const date = new Date(item.dt_txt);
            if (date >= today && date <= nextWeek) {
              return (
                <WeatherCard
                  key={item.dt}
                  item={item} // Tüm hava durumu verilerini WeatherCard bileşenine gönderiyoruz
                />
              );
            }
            return null;
          })}
      </div>
      <div className="credit">
        Weather App by the dxtaner
        <a
          href="https://github.com/dxtaner"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
};

export default App;
