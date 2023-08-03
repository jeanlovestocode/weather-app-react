import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {

  function handleResponse(response){
    console.log(response.data)
  }


  let apiKey = "e0a5a97de9a0b7a951e9d154a8f9bad8";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl =
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse)
  return (
    <div className="dailyForecast">
      <div className="row">
        <div className="col">
          <div className="days">Thu </div>
          <WeatherIcon code="01d" size={32} />
          <div className="max-min">
            <span className="max-temp">19°</span>
            <span className="min-temp">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
