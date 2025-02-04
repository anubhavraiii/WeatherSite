import SearchBox from "./SearchBox";
import InfoBox from './InfoBox';
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        temp: 25.5,
        minTemp: 13,
        maxTemp: 31,
        humidity: 75,
        feelsLike: 22,
        description: "overcast"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}