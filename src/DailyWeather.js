import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyWeather(props){

    function maxTemp(){
        let maxtemp = Math.round(props.data.temp.max);
        return `${maxtemp}`
    }
     function minTemp() {
       let mintemp = Math.round(props.data.temp.min);
       return `${mintemp}`;
     }

     function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();


        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
     }

    return (
        <div>
        <div className="days">{day()} </div>
            <WeatherIcon code={props.data.weather[0].icon} size={32} />
            <div className="max-min">
              <span className="max-temp">{maxTemp()}°</span>
              <span className="min-temp">{minTemp()}°</span>
            </div>
        </div>
    )
}