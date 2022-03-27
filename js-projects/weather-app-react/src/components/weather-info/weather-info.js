import React from 'react';

import './weather-info.css';

const WeatherInfo = ({data}) => {
   return (
      <div className='info'>
         {data.cod === 200 ?
            <div>
               <p className='weather-country'>{data.name}, {data.sys.country}</p>
               <div className='weather-main'>
                  <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
                  <span>{Math.floor(data.main.temp - 273)} &deg;C</span>
                  <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
               </div>
               <p className='weather-info'>{data.weather[0].main}</p>
            </div>
         : null}
      </div>
   )
}

export default WeatherInfo;