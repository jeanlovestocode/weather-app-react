import React, { useState, useEffect } from "react";
import "./DailyForecast.css";
import DailyWeather from "./DailyWeather";
import axios from "axios";

export default function DailyForecast(props) {
  let [forecastLoads, setforecastLoads] = useState(false);
  let [forecastData, setforecastData] = useState(null);

  useEffect(() => {
    setforecastLoads(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setforecastData(response.data.daily);
    setforecastLoads(true);
  }

  function load() {
    let apiKey = "e0a5a97de9a0b7a951e9d154a8f9bad8";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (forecastLoads) {
    return (
      <div className="dailyForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <DailyWeather data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
