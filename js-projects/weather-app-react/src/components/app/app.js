import React, { Component } from 'react';

import SearchPanel from '../search-panel';
import WeatherInfo from '../weather-info';

import './app.css';

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         api: "5a93f05829149c8525c674ef11674918",
         location: "",
         data: ""
      }

      this.onUpdateLocation = (location) => {
         this.setState({location: location});
      }
            
      this.url = (location, api) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api}`;

      this.onUpdateWeather = this.onUpdateWeather.bind(this);
   }

   async onUpdateWeather() {
      const {api, location} = this.state,
            resp = await fetch(this.url(location, api), {origin: "cros"}),
            respData = await resp.json();

      this.setState({data: respData});
   }
   
   render() {
      const {data} = this.state;
      return (
         <div className='main'>
            <SearchPanel 
               onUpdateLocation={this.onUpdateLocation}
               onUpdateWeather={this.onUpdateWeather}/>
            <WeatherInfo data={data}></WeatherInfo>
         </div>
      );
   }
}