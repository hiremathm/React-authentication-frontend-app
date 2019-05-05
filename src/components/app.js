import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './home'
import Dashboard from './dashboard'
export default class App extends Component {
	constructor(){
		super();
		this.state = {
			loggedInStatus: "NOT_LOGGED_IN",
			user: {}
		}
	}
  render() {
    return (
      <div className='app'>
      	<Router>
      		<Switch>
      			<Route 
      				exact path={"/"} 
      				render={props => (
      					<Home {...props} loggedInStatus={this.state.loggedInStatus} />
      			)}/>

      			<Route 
					exact path={"/dashboard"} 
      				render={props => (
      					<Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
      			)}/>      		
      			</Switch>
      	</Router>
      </div>
    );
  }
}
