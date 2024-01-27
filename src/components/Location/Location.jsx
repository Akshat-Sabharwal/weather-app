import "../../App.css";
import "./Location.css";

export const Location = ({ location, temp, condition, description }) => {
  return (
    <div className="loc-container flex-left-column">
      <p className="location">{location}</p>
      <div className="loc-info flex-left-row">
        <p className="loc-temperature">
          {Math.round(10 * (temp - 273.15)) / 10}°C
        </p>
        <span className="scenario-info flex-left-column">
          <p className="condition">{condition}</p>
          <p className="description">
            {description.charAt(0).toUpperCase() + description.slice(1)}
          </p>
        </span>
      </div>
    </div>
  );
};
