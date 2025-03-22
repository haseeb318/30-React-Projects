import React, { useEffect, useState } from "react";
import Search from "../search/Search";
import "./weather.css";
import { FaLocationDot } from "react-icons/fa6";
const APIKEY = import.meta.env.VITE_APIKEY 

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const fetchData = async (city) => {
    if (!city) return;
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}=imperial`
      );
      
      if (!response.ok) {
        throw new Error("City not found");
      }
      
      const result = await response.json();
      console.log(result)
      setWeatherData(result);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("Islamabad");
  }, []);

  const handleSearch = () => {
    fetchData(search);
  };

  return (
    <div className="main-cont">
      <h3> Weather App</h3>
      <hr />
      
      <div className="weather-display">
        
      <Search setSearch={setSearch} handleSearch={handleSearch} />

      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      
      {weatherData && (
        
        <div className="weather-info">

         <p className="temp">{weatherData.main?.temp} °F</p>

          <h1 className="country">
            {weatherData.name} {weatherData.sys && <span>({weatherData.sys.country}) <FaLocationDot /> </span>}
          </h1>

          <div className="footer">
          <p>{weatherData.weather?.[0]?.description}</p>
          <hr />
          <p>  {weatherData.main?.feels_like} °F</p>
          
          </div>
        </div>
      )}
      </div>

    </div>
  );
};

export default Weather;
