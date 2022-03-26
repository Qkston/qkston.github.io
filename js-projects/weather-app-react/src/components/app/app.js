import React, { Component } from 'react';

import SearchPanel from '../search-panel';

import './app.css';

export default class App extends Component {
   render() {
      return (
         <div className='main'>
            <SearchPanel></SearchPanel>
         </div>
      );
   }
}