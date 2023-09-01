import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ item }) => {
  const {
    dt_txt: day,
    weather,
    location,
    main: { temp_max, temp_min, temp },
    wind,
  } = item;

  const weatherIcon = `https://openweathermap.org/img/w/${weather[0].icon}.png`;
  const kelvinToCelsius = (kelvin) => kelvin - 273.15;
  const kelvinToFahrenheit = (kelvin) => (kelvin - 273.15) * (9 / 5) + 32;

  return (
    <div className="weather-card">
      <div className="header">
        <p className="day">{new Date(day).toLocaleDateString("en-US")}</p>
        <p className="time">{new Date(day).toLocaleTimeString("en-US")}</p>
      </div>
      <div className="weather-info">
        <img src={weatherIcon} alt="Weather Icon" className="weather-icon" />
        <p className="location">{location}</p>
        <div className="temperatures">
          <p className="temperature">
            {Math.round(kelvinToCelsius(temp))}°C /{" "}
            {Math.round(kelvinToFahrenheit(temp))}°F
          </p>
          <p className="temp-range">
            Max: {Math.round(kelvinToCelsius(temp_max))}°C /{" "}
            {Math.round(kelvinToFahrenheit(temp_max))}°F
          </p>
          <p className="temp-range">
            Min: {Math.round(kelvinToCelsius(temp_min))}°C /{" "}
            {Math.round(kelvinToFahrenheit(temp_min))}°F
          </p>
        </div>
        <p className="weather-description">{weather[0].description}</p>
        <div className="wind-info">
          <p className="wind-speed">Wind Speed: {wind.speed} m/s</p>
          <p className="wind-direction">Wind Direction: {wind.deg}°</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
