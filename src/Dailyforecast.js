import React from "react";

export default function Dailyforecast() {
  return (
    <div>
      <div className="container">
        {/* <button className="daily-forecast">
          <i className="bi bi-calendar3"></i> 5-DAY FORECAST
        </button> */}
      </div>

      <div>
        <section className="days-of-week" id="day-forecast">
          <div className="card-group"></div>
        </section>
      </div>
      <br />
    </div>
  );
}
