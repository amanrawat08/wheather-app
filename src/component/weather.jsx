import React, { useEffect, useState } from "react";
import clear from "../img/clear.png";
import cloudy from "../img/cloudy.png";
import mist from "../img/mist.webp";
import rain from "../img/mist.webp";
import wind from "../img/wind.jpg";
import weather from "../img/weather.png";

import "../style/Front.css";
import timestamp from "time-stamp";
export function Weather(props) {
  const date = timestamp("DD /MM/YYYY");
  const time = timestamp("HH :mm:ss");
  /*  const [state, setState] = useState(props.state); */
  const [cloud, setCloud] = useState("");
  const [temp, setTemp] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [countrycode, setCountrycode] = useState("");
  const [speed, setSpeed] = useState("");
  const [weather, setWeather] = useState("");

  async function wheatherCall() {
    /* state ? setState("delhi") : setState(props.state); */
    /*  setState(props.state); */
    console.log(props.mystate);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.mystate}&appid=a9eb9818eb9418723362b80ec71e87a9`
      );
      const data = await response.json();
      console.log(data);
      setCloud(data.clouds.all);
      setTemp(data.main.temp);
      setPressure(data.main.pressure);
      setHumidity(data.main.humidity);
      setCountrycode(data.sys.country);
      setSpeed(data.wind.speed);
      setWeather(data.weather[0].main);
    } catch (error) {
      console.log(error);
      return;
    }
  }
  wheatherCall();

  return (
    <>
      <div className="weatherDiv">
        <div
          style={{
            fontSize: "50px",
            fontFamily: "Geneva, Verdana, sans-serif",
            fontWeight: "bold",
          }}
        >
          Today
        </div>
        <div className="weather-info">
          <div className="middleW">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingRight: "60px",
                borderRight: "1px solid black",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  fontFamily: "Geneva, Verdana, sans-serif",
                }}
              >
                {(temp - 273).toFixed(0)}&#xb0;C
              </div>
              <div
                style={{
                  marginTop: "10px",
                  fontSize: "35px",
                  paddingLeft: "10px",
                  fontFamily: "Geneva, Verdana, sans-serif",
                }}
              >
                {weather}
                <div style={{ width: "80px" }}>
                  {weather === "Mist" ? (
                    <img style={{ width: "80px" }} src={mist} alt="" />
                  ) : weather === "Clear" ? (
                    <img style={{ width: "80px" }} src={clear} alt="" />
                  ) : weather === "Thunderstorm" ? (
                    <img style={{ width: "80px" }} src={wind} alt="" />
                  ) : weather === "Rain" ? (
                    <img style={{ width: "80px" }} src={rain} alt="" />
                  ) : (
                    <img style={{ width: "80px" }} src={cloudy} alt="" />
                  )}
                </div>
              </div>
              <div
                style={{
                  paddingLeft: "10px",
                  marginTop: "10px",
                  fontFamily: "Geneva, Verdana, sans-serif",
                }}
              >
                <span>{date}</span> <br />
                <br />
                <span>{time}</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: "10px",
                listStyleType: "none",
                fontSize: "20px",
              }}
            >
              <ul
                style={{
                  listStyleType: "none",
                  paddingRight: "10px",
                  width: "160px",
                  fontFamily: "Geneva, Verdana, sans-serif",
                }}
              >
                <li style={{ padding: "3px" }}>State:{props.mystate}</li>
                <li style={{ padding: "3px" }}>Country:{countrycode}</li>
                <li style={{ padding: "3px" }}>
                  Temp: {(temp - 273).toFixed(0)}&#xb0;C
                </li>
                <li style={{ padding: "3px" }}>PA:{pressure}</li>
                <li style={{ padding: "3px" }}>Humidity:{humidity}% </li>
              </ul>
            </div>
          </div>
          <div>{props.data}</div>
        </div>
      </div>
      <div className="bottomBoxOuter">
        <div>
          <img src={wind} alt="" />
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Wind Speed{" "}
          </span>
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            {speed}{" "}
          </span>
        </div>
        <div>
          <img src={cloudy} alt="" />
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Cloudy
          </span>
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            {cloud}%{" "}
          </span>
        </div>
        <div>
          <img src={weather} alt="" />
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Weather Type{" "}
          </span>
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            {weather}{" "}
          </span>
        </div>
        <div>
          <img src={wind} alt="" />
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Wind Speed{" "}
          </span>
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            {speed}{" "}
          </span>
        </div>
        <div>
          <img src={wind} alt="" />
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Wind Speed{" "}
          </span>
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            {speed}{" "}
          </span>
        </div>
        <div>
          <img src={wind} alt="" />
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Wind Speed{" "}
          </span>
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            {speed}{" "}
          </span>
        </div>
        <div>
          <img src={wind} alt="" />
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Wind Speed{" "}
          </span>
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            {speed}{" "}
          </span>
        </div>
        <div>
          <img src={wind} alt="" />
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Wind Speed{" "}
          </span>
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            {speed}{" "}
          </span>
        </div>
      </div>
    </>
  );
}
