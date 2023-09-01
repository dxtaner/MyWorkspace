// src/components/WeatherContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const apiKey = "fd6255faaa0bd9608a971bc240b1b4d0";

// WeatherContext'i oluşturun
const WeatherContext = createContext();

// WeatherProvider bileşeni
const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState(""); // Varsayılan olarak Bursa'yı seçtim

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Hava durumu verisi alınırken bir hata oluştu:", error);
      }
    };

    fetchWeatherData();
  }, [selectedCity]);

  const changeCity = (city) => {
    setSelectedCity(city);
  };

  return (
    <WeatherContext.Provider value={{ weatherData, changeCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
