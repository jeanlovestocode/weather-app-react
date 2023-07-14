import React from "react";
import axios from "axios";
import {Hearts} from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather is ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "17ad6e67aa629189f73b053634668b20";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Hearts
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
