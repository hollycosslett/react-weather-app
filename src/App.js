import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <p>
            {" "}
            This project was coded by{" "}
            <a href="https://github.com/hollycosslett" target="_blank">
              Holly Cosslett
            </a>
            ,{" "}
            <a
              href="https://github.com/hollycosslett/react-weather-app"
              target="_blank"
            >
              open-sourced{" "}
            </a>
            on GitHub and hosted on{" "}
            <a
              href="https://shecodes-react-weather-appplication.netlify.app/"
              target="_blank"
            >
              Netlify
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
