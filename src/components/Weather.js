import React from "react";
export default function Weather() {
  return (
    <div>
      <form>
        <input type="search" placeholder="Enter your city here ..." />
        <button type="submit">Search++</button>
      </form>
      <div>
        <p>
          Code On{" "}
          <a
            href="https://github.com/Alisonrajpal/weather-react"
            target="_/blank">
            Github
          </a>
          and coded by Alison Rajpal
        </p>
      </div>
    </div>
  );
}
