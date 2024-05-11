import React, { useState } from "react";
import axios from "axios";
import App from "./App";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showTemperature(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-10 p-1">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-search-bar"
              />
            </div>
            <div className="col-2 p-1">
              <input
                type="submit"
                value="Submit"
                className="btn search-button"
              />
            </div>
          </div>
        </form>
        <div className="row weather-overview">
          <div className="col-md-6">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="weather-overview-right">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="main-icon img-fluid"
              />
              <div className="temperature">
                {Math.round(weatherData.temperature)}
                <span className="units">°C</span>
              </div>
            </div>
          </div>
        </div>
        <div className="additional-details">
          <ul>
            <li>
              Humidity:{" "}
              <div className="additional-details-measurements d-inline">
                {weatherData.humidity}%
              </div>
            </li>
            <li>
              Wind:{" "}
              <div className="additional-details-measurements d-inline">
                {Math.round(weatherData.wind)}mph
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = "48d9c02baa93fa8d733783cd33ot621f";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  return "loading";
}
