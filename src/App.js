import React from "react";

import "./App.css";

// import "./styles.css";
import Temperature from "./Temperature";
import Dailyforecast from "./Dailyforecast";
import Hourlyforecast from "./Hourlyforecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <br />

        <Temperature defaultCity="Toronto" />

        <Dailyforecast />

        <Hourlyforecast />

        <Footer />
      </div>
    </div>
  );
}
