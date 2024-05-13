import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function getForecast(response) {
    console.log(response.data);
  }
  console.log(props.coordinates);
  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let apiKey = "48d9c02baa93fa8d733783cd33ot621f";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getForecast);
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
