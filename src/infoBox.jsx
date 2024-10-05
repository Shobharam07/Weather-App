import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./infoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
export default function InfoBox({ info }) {
  let image_URL =
    "https://images.unsplash.com/photo-1561471026-0bbb77535d25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let RAIN_URL =
    "https://media.istockphoto.com/id/1476189983/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=612x612&w=0&k=20&c=IwJXd2bk5O65aF5XZwoB-WJiFpCIrmbZltgbQTXNNkk=";
  let HOT_URL =
    "https://media.istockphoto.com/id/453477435/photo/hot.jpg?s=612x612&w=0&k=20&c=iwoI9gxalpkTmMJO5di1NUtymmttAlpLQ_Ls5udAJxM=";
  let COLD_URL =
    "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q09MRHxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="infoBox">
      <div className="card_container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="city">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temprature: {info.temp}</p>
              <p>Humidity: {info.humidity}</p>
              <p>Min Temp: {info.tempMin}&deg;C</p>
              <p>Max Temp: {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like <b>{info.feelsLike}&deg;C</b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
