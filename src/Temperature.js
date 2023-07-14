import React from "react";

export default function Temperature() {
  return (
    <div className="container header">
      <h1>Toronto</h1>
      <div className="date">
        Last updated:
        <span id="header-date"></span>
      </div>
      <br />
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
        <div className="current-weather"></div>
        <div className="wind-speed"></div>
        <div className="max-min">
          H:<span className="high"></span>° L:<span className="low"></span>°
        </div>
      </small>
    </div>
  );
}
