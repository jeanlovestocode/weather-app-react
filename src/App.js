import React from "react";

import "./App.css";

// import "./styles.css";
import Header from "./Header";
import Temperature from "./Temperature";
import Dailyforecast from "./Dailyforecast";
import Hourlyforecast from "./Hourlyforecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Temperature />

      <Dailyforecast />

      <Hourlyforecast />

      <Footer />
    </div>
  );
}
