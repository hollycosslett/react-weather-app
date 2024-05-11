import React from "react";
import App from "./App";
import "./Weather.css";

export default function Weather() {
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
            <input type="submit" value="Submit" className="btn search-button" />
          </div>
        </div>
      </form>
      <div className="row weather-overview">
        <div className="col-md-6">
          <h1>London</h1>
          <ul>
            <li>Saturday 09.58</li>
            <li>Cloudy</li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="weather-overview-right">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy icon"
              className="main-icon img-fluid"
            />
            <div className="temperature">
              14<span className="units">°C</span>
            </div>
          </div>
        </div>
      </div>
      <div className="additional-details">
        <ul>
          <li>
            Precipitation:{" "}
            <div className="additional-details-measurements d-inline">1%</div>
          </li>
          <li>
            Humidity:{" "}
            <div className="additional-details-measurements d-inline">80%</div>
          </li>
          <li>
            Wind:{" "}
            <div className="additional-details-measurements d-inline">5mph</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
