import React from "react";

export default function Hourlyforecast() {
  return (
    <div>
      <div className="container">
        <button className="hourly-forecast">
          <i className="bi bi-clock"></i> HOURLY FORECAST
        </button>
      </div>

      <div>
        <section id="hourly-forecast">
          <div className="container"></div>
        </section>
        <br />
        <br />
      </div>
    </div>
  );
}
