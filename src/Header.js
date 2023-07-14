import React from "react";

export default function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <form id="city-form">
            <input
              type="search"
              placeholder="Search for a city"
              className="form-control"
              id="city-input"
              autocomplete="off"
            />
          </form>
          <div className="col-6">
            <input type="submit" value="Search" class="btn" />
          </div>
        </div>
      </div>
    </div>
  );
}
