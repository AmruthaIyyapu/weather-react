import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  // let [temperature, setTemperature] = useState("");
  // let [humidity, setHumidity] = useState("");
  // let [wind, setwind] = useState("");
  // let [description, setDescription] = useState("");
  // let [icon, setIcon] = useState("");

  let [weather, setWeather] = useState(null);

  function showTemperature(response) {
    // console.log(response.data);
    // setTemperature(Math.round(response.data.main.temp));
    // setHumidity(response.data.main.humidity);
    // setwind(Math.round(response.data.wind.speed));
    // setDescription(response.data.weather[0].description);
    // let newicon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    // setIcon(newicon);
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      humidty: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleChange(event) {
    event.preventDefault();
    // console.log(event.target.value);
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "bf54175800a55e59e6c4d6461deeef12";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  let formDetails = (
    <>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city" onChange={handleChange} />
        <input type="submit" value="search" />
      </form>
    </>
  );

  if (loaded) {
    return (
      <>
        {formDetails}
        <ul>
          <li>Temperature: {weather.temperature} ºC </li>
          <li>Humidity: {weather.humidity} %</li>
          <li> Wind: {weather.wind} km/h </li>
          <li>Description: {weather.description} </li>
          <li>
            <img src={weather.icon} alt="weather-icon" />
          </li>
        </ul>
      </>
    );
  } else {
    return formDetails;
  }
}
