import React from "react";
import Weather from "./Weather";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row weather-overview">
        <div className="col-md-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="weather-overview-right">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="main-icon img-fluid"
            />
            <div className="temperature">
              {Math.round(props.data.temperature)}
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
              {props.data.humidity}%
            </div>
          </li>
          <li>
            Wind:{" "}
            <div className="additional-details-measurements d-inline">
              {Math.round(props.data.wind)}mph
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}