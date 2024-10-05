import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
export default function WeatherApp() {
  const [WeatherInfo, setWeatherInfo] = useState({
    temp: 30,
    feelsLike: 24.24,
    tempMin: 24.24,
    tempMax: 30,
    humidity: 50,
    weather: "haze",
    city: "Lucknow",
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by SK Chaudhary</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={WeatherInfo} />
    </div>
  );
}
