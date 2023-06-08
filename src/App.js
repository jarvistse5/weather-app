import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Report from './components/Report/Report';

function App() {
  const [city, setCity] = useState('Toronto');
  const [weather, setWeather] = useState(null);
  const [inputError, setInputError] = useState('');
  const apiKey = '9fa556094ccfc5b38b8e8b9aa4af32fa';

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setInputError('');
      // console.log(response.data);
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        setInputError('City not found.')
      }
    }
  }

  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
  }

  useEffect(() => {
    fetchWeather(); // eslint-disable-next-line
  }, []); // eslint-disable-next-line

  return (
    <Wrapper>
      <Header></Header>
      <Search handleSubmit={handleSubmit}
              handleCityChange={handleCityChange}
              inputError={inputError}
              city={city}
              >
      </Search>
      {weather && (
        <Report weather={weather}></Report>
      )}
    </Wrapper>
  )
}

export default App;