import React from "react";

export default function Temperature() {
  return (
    <div className="container">
      <h1>Toronto</h1>

      <h5>Monday, July 17 5:00</h5>

      <div className="row">
        <div className="col-6">
          <div>
            <span className="main-temperature">27</span>
            <span className="unit-celcius units">°C</span>
            <span className="unit-farenheit units"> | °F</span>
          </div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="main-weather-icon"
          />

          <ul>
            <li className="weather-description">mostly cloudy</li>
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
            <li>humidity: 32%</li>
            <li>wind: 2km/h</li>
          </ul>
        </div>
      </div>

      {/* <br />
      <br />

      <h2 className="first-degree">26</h2>

      <span className="units">
        <a
          href="https://www.metric-conversions.org/temperature/celsius-to-fahrenheit.htm"
          //   change this shit later
          className="unit-celcius active"
        >
          {" "}
          °C{" "}
        </a>{" "}
        |
      </span>
      <span className="units">
        <a
          href="https://www.metric-conversions.org/temperature/celsius-to-fahrenheit.htm"
          //   change this shit later
          className="unit-farenheit"
        >
          {" "}
          °F{" "}
        </a>
      </span>

      <small>
        <div className="current-weather">Windy</div>
        <div className="wind-speed"></div>
        <div className="max-min">
          H:<span className="high"></span>° L:<span className="low"></span>°
        </div>
      </small> */}
    </div>
  );
}
