import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
export default function SearchBox({updateWeather}) {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "7dfceeaab7cfa72cbbc118b01359a1a2"
    let handleWeatherInfo = async() => {
        let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city,
            feelsLike : jsonResponse.main.feels_like,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            weather : jsonResponse.weather[0].description
        }
        // console.log(result);
        return result;
    }
    let handleInput = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = async(event)=>{
        event.preventDefault();
        console.log("submitted");
        setCity("");
        let result = await handleWeatherInfo();
        console.log(result);
        updateWeather(result);
    }
  return (
    <div className='SearchBox'>
        <h3> Search for City </h3>
        <form action="" onSubmit={handleSubmit}>
        <TextField onChange={handleInput} value={city} id="city" label="City Name" variant="outlined" required />
        <br /> <br />
        <Button variant="contained" type='submit'>
            Search
        </Button>
        </form>
    </div>

  )
}
