import React from 'react';

import './weather-info.css';

const WeatherInfo = ({data}) => {
   return (
      <div className='info'>
         {data.cod === 200 ?
            <div>
               <h3>
                  <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
                  {Math.floor(data.main.temp - 273)} &deg;C
                  <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
               </h3>
               <small>{data.weather[0].main}</small>
            </div>
         : null}
      </div>
   )
}

export default WeatherInfo;