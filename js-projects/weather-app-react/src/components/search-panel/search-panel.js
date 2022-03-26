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
   }
   

   render() {
      return (
         <input 
            className='search-input'
            type="text"
            placeholder='Search by location'
            onChange={this.onUpdateLocation}/>
      )
   }
}