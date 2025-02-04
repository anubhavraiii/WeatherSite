import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "5bf69c06649954aed03a792a5cc59ebe"

    let getWeatherInfo = async() => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();        
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                minTemp: jsonResponse.main.temp_min,
                maxTemp: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                description: jsonResponse.weather[0].description
            }
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async(event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();    // Since getWeatherInfo is returning result asynchronously there await & async is used
            updateInfo(newInfo); 
            setError(false);
        } catch (error) {
            setError(true);
        }
    }

    return (
        <>
        <div className='SearchBox'>
             <h3>Search Weather</h3>
             <form onSubmit={handleSubmit}>
                <TextField id="city" label="City" variant="outlined" 
                required
                value={city}
                onChange={handleChange}/>

                <br></br><br></br>

                <Button variant="contained"
                type='submit'>
                Search
                </Button>
             </form>
             {error && <p style={{color:"red"}}>No Data Available</p>}
             <br></br>
        </div>
        </>
    )
}