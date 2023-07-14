import React from "react";

export default function Footer() {
  return (
    <div className="container footer">
      <footer>
        <small>
          Learn more about weather
          <span>
            <a href="https://www.timeanddate.com/weather/canada/ottawa/historic">
              data
            </a>
          </span>
          and map
          <span>
            <a href="https://www.google.com/earth/outreach/learn/visualize-your-data-on-a-custom-map-using-google-my-maps/">
              data
            </a>
          </span>
        </small>
        <div>
          <small>
            Coded by
            <a
              href="https://github.com/jeanlovestocode/weather-app-react"
              class="outro-text"
            >
              Jean Edem🏄‍♀️
            </a>
          </small>
        </div>
      </footer>
    </div>
  );
}
