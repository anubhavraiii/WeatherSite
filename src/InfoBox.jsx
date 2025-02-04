import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const IMG_URL = "https://scied.ucar.edu/sites/default/files/media/images/weather_0.jpg";
    const HOT_URL = "https://www.howitworksdaily.com/wp-content/uploads/2015/07/heatwave-scaled.jpg";
    const COLD_URL = "https://www.shutterstock.com/image-photo/cyclist-riding-foggy-weather-on-260nw-1116273044.jpg";
    const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5atCM1muSi79esM5CbdWS_rh6CdcToFtZw&s"


    return (
        <div className="InfoBox">

            <div className='cardContainer'>
               <Card sx={{ maxWidth: 345 }}>
               <CardMedia
                 sx={{ height: 140 }}
                 image={info.humidity > 80 ? RAIN_URL : info.temp > 18 ? HOT_URL : COLD_URL}
                 title="green iguana"
               />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   {info.city +" "}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 18 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                 </Typography>
                 <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                   <p>Temperature: {info.temp}&deg;C</p>
                   <p>Humidity: {info.humidity}</p>
                   <p>Maximum: {info.maxTemp}&deg;C</p>
                   <p>Minimum: {info.minTemp}&deg;C</p>
                   <p>The weather is described <b>{info.description}</b> and feels like {info.feelsLike}&deg;C</p>
                 </Typography>
               </CardContent>
               </Card>
            </div>
        </div>
    )
}