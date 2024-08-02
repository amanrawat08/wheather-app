import { useState } from "react";
import "./App.css";

function App() {
  async function wheather() {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=uttarakhand&appid=a9eb9818eb9418723362b80ec71e87a9"
      );
      const data = await response.json();
      console.log(data);
      console.log("Name : " + data.name);
      console.log("Cloud : " + data.clouds.all);
      console.log("temp : " + data.main.temp);
      console.log("Clouds : " + data.clouds.all);
      console.log("Humidity : " + data.main.humidity);
      console.log("Country Code : " + data.sys.country);
      console.log("Wind Speed : " + data.wind.speed);
      console.log("Weather Type :" + data.weather[0].main);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button
        onClick={() => {
          wheather();
        }}
      >
        Click
      </button>
    </>
  );
}

export default App;
