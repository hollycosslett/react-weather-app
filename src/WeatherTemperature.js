import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
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
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
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
            <a href="/" onClick={showCelsius}>
              °C{" "}
            </a>
            |°F
          </span>
        </div>
      </div>
    );
  }
}
