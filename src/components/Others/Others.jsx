import "../../App.css";
import "./Others.css";

export const Others = ({ data }) => {
  return (
    <div className="others-container">
      <ul className="others-data flex-spaced-column">
        {data.map((item) => (
          <li className="others-data-item flex-spaced-row">
            {item.key.charAt(0).toUpperCase() + item.key.slice(1)}
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
