import React, { Component } from 'react';

import SearchPanel from '../search-panel';
import WeatherInfo from '../weather-info';

import './app.css';

export default class App extends Component {
   render() {
      return (
         <div className='main'>
            <SearchPanel></SearchPanel>
            <WeatherInfo></WeatherInfo>
         </div>
      );
   }
}