import React, { useState } from "react";
import "./WeatherTemperature.css";
import WeatherInfo from "./WeatherInfo";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsuis(event) {
    event.preventDefault();
    setUnit("celsuis");
  }

  function fahrenheit() {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return fahrenheit;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="temperature">
          {Math.round(props.celsius)}
          <span className="units">
            °C |{" "}
            <button className="button" onClick={showFahrenheit}>
              °F
            </button>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="temperature">
          {Math.round(fahrenheit())}
          <span className="units">
            <button className="button" onClick={showCelsuis}>
              °C{" "}
            </button>
            |°F
          </span>
        </div>
      </div>
    );
  }
}
