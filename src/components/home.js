import React, { Component } from 'react';
import Registration from './auth/registration'
export default class Home extends Component {
  render() {
    return (
      <div className='home'>
      	<h1>Registeration : <br/><br/></h1>
      	<Registration/>
      </div>
    );
  }
}
