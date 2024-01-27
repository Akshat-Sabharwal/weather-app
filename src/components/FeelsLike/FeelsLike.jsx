import "../../App.css";
import "./FeelsLike.css";

export const FeelsLike = ({ temp }) => {
  return (
    <div className="feels-like flex-left-column">
      <p className="fl-header">Feels Like</p>
      <p className="fl-temp">{Math.round(10 * (temp - 273.15)) / 10}°C</p>
    </div>
  );
};
