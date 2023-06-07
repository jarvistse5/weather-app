import "./Report.css";

const Report = ({weather}) => {
    return (
        <div className="reportCard">
            <div className="cardTitle">
                <h2>Current Weather</h2>
            </div>
            <div className="cardBody">
                <div className="weatherMain">
                    <h3>{weather.name}</h3>
                    <div className="weatherImageContainer">
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
                        <span className="tempText">{Math.round(weather.main.temp)}°C</span>
                    </div>
                    <div className="weatherDescription">{weather.weather[0].description}</div>
                </div>
                <div className="weatherDetails">
                    <h3>Feels like {Math.round(weather.main.feels_like)}°C</h3>
                    <div className="weatherStat">
                        <div className="weatherStatFlex">
                            <div className="weatherStatKey">Humidity</div>
                            <div className="weatherStatValue">{weather.main.humidity}%</div>
                        </div>
                        <div className="weatherStatFlex">
                            <div className="weatherStatKey">Wind</div>
                            <div className="weatherStatValue">{weather.wind.speed} m/s</div>
                        </div>
                        <div className="weatherStatFlex">
                            <div className="weatherStatKey">Pressure</div>
                            <div className="weatherStatValue">{weather.main.pressure} hPa</div>
                        </div>
                        <div className="weatherStatFlex">
                            <div className="weatherStatKey">Clouds</div>
                            <div className="weatherStatValue">{weather.clouds.all}%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Report;