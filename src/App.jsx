import { useState } from "react";
import "./App.css";
import { FeelsLike } from "./components/FeelsLike/FeelsLike";
import { Icon } from "./components/Icon/Icon";
import { Location } from "./components/Location/Location";
import { Others } from "./components/Others/Others";
import { Temperature } from "./components/Temperature/Temperature";

export const App = () => {
  const [data, setData] = useState(null);
  const [cityInput, setCityInput] = useState("");
  const APIKEY = "2f92adfe58228ff2f6ee74f56f9d7ecc";

  const getData = () => {
    if (cityInput !== "" && cityInput !== " ") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${APIKEY}`
      )
        .then((response) => {
          if (!response.ok) {
            setData(undefined);
          } else {
            return response.json();
          }
        })
        .then((weather) => setData(weather));
    } else {
      return;
    }
  };

  return (
    <>
      <span className="diffused-blue"></span>
      <span className="diffused-purple"></span>
      <header className="header flex-spaced-row">
        <h1 className="logo">CLIMA</h1>
        <input
          type="text"
          placeholder="Weather of..."
          className="search-box"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? getData() : null)}
        />
      </header>

      {data === null && (
        <div className="start flex-center-column">
          <h1>Get Started!</h1>
        </div>
      )}
      {data !== null && data !== undefined ? (
        <main className="main">
          <Location
            className="location"
            location={data.name}
            temp={data.main.temp}
            condition={data.weather[0].main}
            description={data.weather[0].description}
          />
          <Icon className="icon" iconCode={data.weather[0].icon} />
          <Temperature
            className="temperature"
            sunrise={data.sys.sunrise}
            sunset={data.sys.sunset}
            maxTemp={data.main.temp_max}
            minTemp={data.main.temp_min}
          />
          <FeelsLike className="feels-like" temp={data.main.feels_like} />
          <Others
            className="others"
            data={[
              { key: "pressure", value: data.main.pressure },
              { key: "humidity", value: data.main.humidity + "%" },
              { key: "visibility", value: data.visibility },
              { key: "wind", value: data.wind.speed + "kmph" },
            ]}
          />
        </main>
      ) : data !== null ? (
        <div className="error flex-center-column">
          <h1>Whoops! No location found</h1>
        </div>
      ) : null}
    </>
  );
};

// `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${APIKEY}`
