import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
   constructor(props) {
      super(props);
      this.state = {
         location: ""
      }

      this.onUpdateLocation = (event) => {
         const location = event.target.value;
         this.setState({location: location});
         this.props.onUpdateLocation(location);
      }

      this.onUpdateWeather = () => {
         this.props.onUpdateWeather(this.state.location);
      }
   }
   

   render() {
      return (
         <input 
            className='search-input'
            type="text"
            placeholder='Search by location'
            onChange={this.onUpdateLocation}
            onBlur={this.onUpdateWeather}
            onKeyDown={(event) => {
               if(event.key === "Enter") {
                  this.onUpdateWeather()
               }
            }
         }/>
      )
   }
}