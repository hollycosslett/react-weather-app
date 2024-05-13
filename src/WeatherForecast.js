import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thurs</div>
          <div className="forecastIcon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="icon"
            />
          </div>
          <div className="forecastTemperatures">
            <div className="dayTemp">12°C</div>
            <div className="nightTemp">3°C</div>
          </div>
        </div>
      </div>
    </div>
  );
}
