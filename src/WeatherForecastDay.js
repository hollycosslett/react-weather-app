import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecastData.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.forecastData.temperature.minimum);
    return `${temperature}°`;
  }
  function getDay() {
    let date = new Date(props.forecastData.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="forecastDay">{getDay()}</div>
      <div className="forecastIcon">
        <img src={props.forecastData.condition.icon_url} alt="icon" />
      </div>
      <div className="forecastTemperatures">
        <div className="maxTemp">{maxTemperature()}</div>
        <div className="minTemp">{minTemperature()}</div>
      </div>
    </div>
  );
}
