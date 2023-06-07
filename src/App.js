import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const apiKey = '9fa556094ccfc5b38b8e8b9aa4af32fa';

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
  }

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="City"
        />
        <button type="submit">Submit</button>
      </form>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
          <p>Pressure: {weather.main.pressure} hPa</p>
          <p>Clouds: {weather.clouds.all}%</p>
          <p>Sea Level: {weather.main.sea_level}m</p>
          <p>Feels like: {weather.main.feels_like}°C</p>
        </div>
      )}
    </div>
  )
}

export default App;