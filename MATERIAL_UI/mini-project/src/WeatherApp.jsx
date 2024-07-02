import React from 'react'
import { useState } from 'react';
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city : "Chittagong",
        feelsLike : 24.24,
        temp : 25.35,
        tempMin : 25,
        tempMax : 26,
        humidity : 47,
        weather : "haze" 
    });
    let updateWeather=(result)=>{
        setWeatherInfo(result);
    }
  return (
    <div>
        <SearchBox updateWeather={updateWeather}></SearchBox>
        <InfoBox info={weatherInfo}></InfoBox>
    </div>
  )
}
