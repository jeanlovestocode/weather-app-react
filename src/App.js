import React from "react";

import "./App.css";

// import "./styles.css";
import Temperature from "./Temperature";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <br />

        <Temperature defaultCity="Toronto" />


     

        <Footer />
      </div>
    </div>
  );
}
