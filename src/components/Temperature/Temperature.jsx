import day from "../../assets/01d.png";
import night from "../../assets/01n.png";
import max from "../../assets/max.png";
import min from "../../assets/min.png";
import "../../App.css";
import "./Temperature.css";

export const Temperature = ({ sunrise, sunset, maxTemp, minTemp }) => {
  sunrise = new Date(sunrise * 1000).toLocaleTimeString().slice(-11, -6);
  sunset = new Date(sunset * 1000).toLocaleTimeString().slice(-11, -6);
  return (
    <div className="temp-container flex-left-row">
      <div className="sun-time flex-left-column">
        <span className="sunrise flex-left-row">
          <img src={day} />
          <p>{sunrise} a.m.</p>
        </span>
        <span className="sunset flex-left-row">
          <img src={night} />
          <p>{sunset} p.m.</p>
        </span>
      </div>
      <div className="min-max-temp flex-left-column">
        <span className="temp-maxTemp flex-left-row">
          <img src={max} />
          <p>{Math.round(10 * (maxTemp - 273.15)) / 10}°C</p>
        </span>
        <span className="temp-minTemp flex-left-row">
          <img src={min} />
          <p>{Math.round(10 * (minTemp - 273.15)) / 10}°C</p>
        </span>
      </div>
    </div>
  );
};
