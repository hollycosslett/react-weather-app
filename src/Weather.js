import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, searchCity] = useState(props.city);
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

  function search() {
    const apiKey = "48d9c02baa93fa8d733783cd33ot621f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    searchCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10 p-1">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-search-bar"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "loading";
  }
}
