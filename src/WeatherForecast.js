import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setloaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setloaded(false);
  }, [props.coordinates]);

  function getForecast(response) {
    setForecast(response.data.daily);
    setloaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="container">
          <div className="row justify-content-center">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col-md-3 col-sm-4 col-lg mt-2" key={index}>
                    <WeatherForecastDay forecastData={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    console.log(props.coordinates);
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiKey = "48d9c02baa93fa8d733783cd33ot621f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getForecast);
  }
  return null;
}
