import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <h5>
        <FormattedDate date={props.data.date} />
      </h5>
      <div className="row">
        <div className="col-6">
          <div>
            <span className="main-temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit-celcius units">°C</span>
            <span className="unit-farenheit units"> | °F</span>
          </div>
          <div>
            <WeatherIcon code={props.data.icon} />
          </div>

          <ul>
            <li className="weather-description text-capitalize">
              {props.data.description}
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
            <li>humidity: {props.data.humidity}%</li>
            <li>wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
