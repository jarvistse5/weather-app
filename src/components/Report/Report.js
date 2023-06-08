import "./Report.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

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
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}></img>
                        <span className="tempText">{Math.round(weather.main.temp)}°C</span>
                    </div>
                    <div className="tempRange">
                        <div className="tempRangeFlex">
                            <span className="tempMaxIcon"><FontAwesomeIcon icon={faArrowUp} /></span>
                            <span>{Math.round(weather.main.temp_max)}°C</span>
                        </div>
                        <div className="tempRangeFlex">
                            <span className="tempMinIcon"><FontAwesomeIcon icon={faArrowDown} /></span>
                            <span>{Math.round(weather.main.temp_min)}°C</span>
                        </div>
                    </div>
                </div>
                
                <div className="weatherDetails">
                    <h3>{weather.weather[0].description}</h3>
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