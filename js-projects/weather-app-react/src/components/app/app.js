import React, { Component } from 'react';

import SearchPanel from '../search-panel';
import WeatherInfo from '../weather-info';

import './app.css';

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         location: ""
      }

      this.onUpdateLocation = (location) => {
         this.setState({location: location});
      }
   }
   
   render() {
      return (
         <div className='main'>
            <SearchPanel 
               onUpdateLocation={this.onUpdateLocation}/>
            <WeatherInfo></WeatherInfo>
         </div>
      );
   }
}