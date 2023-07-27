import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="container">
        <h1>{weatherData.city}</h1>

        <h5>
          <FormattedDate date={weatherData.date} />
        </h5>

        <div className="row">
          <div className="col-6">
            <div>
              <span className="main-temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit-celcius units">°C</span>
              <span className="unit-farenheit units"> | °F</span>
            </div>
            <img src={weatherData.iconUrl} alt={weatherData.description} />

            <ul>
              <li className="weather-description text-capitalize">
                {weatherData.description}
              </li>
              <li>
                <span className="high-temp"> H: 31°</span>
                {"  "}
                <span className="low-temp">L: 28°</span>
              </li>
            </ul>
          </div>
          <div className="col-6 prop">
            <ul className="weather-properties">
              <li>precipitation: 15%</li>
              <li>humidity: {weatherData.humidity}%</li>
              <li>wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e0a5a97de9a0b7a951e9d154a8f9bad8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
