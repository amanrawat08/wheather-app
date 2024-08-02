import { useState } from "react";
import { FrontPage } from "./component/Front";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  /*  const [state, setState] = useState("delhi");
  const [cloud, setCloud] = useState("");
  const [temp, setTemp] = useState("");
  async function wheather() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=a9eb9818eb9418723362b80ec71e87a9`
      );
      const data = await response.json();
      console.log(data);
      console.log("Name : " + data.name);
      console.log("Cloud : " + data.clouds.all);
      console.log("temp : " + data.main.temp);
      console.log("Pressure : " + data.main.pressure);
      console.log("Humidity : " + data.main.humidity);
      console.log("Country Code : " + data.sys.country);
      console.log("Wind Speed : " + data.wind.speed);
      console.log("Weather Type :" + data.weather[0].main);
    } catch (error) {
      alert(error);
    }
  }
 */
  return (
    <>
      <FrontPage />
    </>
  );
}

export default App;
