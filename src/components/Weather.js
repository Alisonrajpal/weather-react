import React from "react";
import "./Weather.css";
import SearchIcon from "../images/rain.gif";
export default function Weather() {
  return (
    <div className="Weather">
      <h1>Durban</h1>

      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          6 &deg;
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13Km/h</li>
          </ul>
        </div>
      </div>

      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-submit w-100"
              placeholder="Enter your city here ..."
            />
          </div>
          <div className="col-3">
            <img
              src={SearchIcon}
              className="search btn btn-primary rounded-2"
              alt="search icon weather"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
