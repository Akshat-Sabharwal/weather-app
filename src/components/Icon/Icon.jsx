import clearDay from "../../assets/01d.png";
import clearNight from "../../assets/01n.png";
import clouds from "../../assets/030450.png";
import snow from "../../assets/13.png";
import rain from "../../assets/0910.png";
import thunder from "../../assets/11.png";
import partCloudDay from "../../assets/02d.png";
import partCloudNight from "../../assets/02n.png";
import "../../App.css";
import "./Icon.css";

export const Icon = ({ iconCode }) => {
  let iconImage = null;

  switch (iconCode) {
    case "01d":
      iconImage = clearDay;
      break;
    case "01n":
      iconImage = clearNight;
      break;
    case "02d":
      iconImage = partCloudDay;
      break;
    case "02n":
      iconImage = partCloudNight;
      break;
    case "03d":
    case "03n":
    case "04d":
    case "04n":
    case "50d":
    case "50n":
      iconImage = clouds;
      break;
    case "09d":
    case "09n":
    case "10d":
    case "10n":
      iconImage = rain;
      break;
    case "11d":
    case "11n":
      iconImage = thunder;
      break;
    case "13d":
    case "13n":
      iconImage = snow;
      break;
    default:
      // handle default case or set a default image
      break;
  }

  return (
    <div className="container flex-center-column">
      {iconImage && <img className="icon" src={iconImage} alt="Weather Icon" />}
    </div>
  );
};
