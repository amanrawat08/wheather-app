import React, { useEffect, useState } from "react";
import clear from "../img/clear.png";
import cloudy from "../img/cloudy.png";
import mist from "../img/mist.webp";
import rain from "../img/rain.webp";
import tempImg from "../img/temp.png";
import litLng from "../img/litlat.gif";
import visibility1 from "../img/visibility.webp";
import wind from "../img/wind.jpg";
import weather1 from "../img/weather.png";

import "../style/Front.css";
import timestamp from "time-stamp";
export function Weather(props) {
  const date = timestamp("DD /MM/YYYY");
  const time = timestamp("HH :mm:ss");
  const [state, setState] = useState(props.state);
  const [cloud, setCloud] = useState("");
  const [temp, setTemp] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [countrycode, setCountrycode] = useState("");
  const [speed, setSpeed] = useState("");
  const [weather, setWeather] = useState("");
  const [visibility, setVisibility] = useState("");
  const [lit, setLit] = useState("");

  async function wheatherCall() {
    /* state ? setState("delhi") : setState(props.state); */
    /*  setState(props.state); */
    /*   console.log(props.mystate); */

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
      setState(data.name);
      setSpeed(data.wind.speed);
      setWeather(data.weather[0].main);
      setVisibility(data.visibility);
      setLit(data.coord.lat.toFixed(0) + "/" + data.coord.lon.toFixed(0));
    } catch (error) {
      console.log(error);
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
                backgroundColor: " rgba(0, 0, 0, 0.392)",
                borderRadius: "7px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                listStyleType: "none",
                fontSize: "20px",
                color: "white",
              }}
            >
              <ul
                style={{
                  listStyleType: "none",

                  width: "190px",
                  fontFamily: "Geneva, Verdana, sans-serif",
                }}
              >
                <li style={{ padding: "3px" }}>State:{state}</li>
                <li style={{ padding: "3px" }}>Country:{countrycode}</li>
                <li style={{ padding: "3px" }}>
                  Temp: {(temp - 273).toFixed(0)}&#xb0;C
                </li>
                <li style={{ padding: "3px" }}>PA:{pressure}&nbsp;hPA</li>
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
          <img src={weather1} alt="" />
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
          <img src={tempImg} alt="" />
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Tempurate{" "}
          </span>
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            {(temp - 273).toFixed(0)}&#xb0;C{" "}
          </span>
        </div>
        <div>
          <img src={visibility1} alt="" />
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Visibility{" "}
          </span>
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            {(visibility / 10000) * 100}%{" "}
          </span>
        </div>
        <div>
          <img src={litLng} alt="" />
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            lat/lg{" "}
          </span>
          <span
            style={{
              fontSize: "20px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            {lit}{" "}
          </span>
        </div>
      </div>
    </>
  );
}
