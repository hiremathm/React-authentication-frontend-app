import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Home from './home'
import Dashboard from './dashboard'
import axios from 'axios'
export default class App extends Component {
	constructor(){
		super();
		this.state = {
			loggedInStatus: "NOT_LOGGED_IN",
			user: {}
		}
	}

  handleLoggedIn = (data) => {
    this.setState(() => ({
        loggedInStatus: "LOGGED_IN",
        user: data.user
      })
    )
  }

  handleLoggedOut = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
        .then(response => {
          this.setState(() => ({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          }))  
          this.props.history.push("/");
      })
      .catch(error => {
        console.log("response?", error)
      })
  }

  // checkLoginStatus = () => {
  //   axios.get('http://localhost:3001/logged_in', {withCredentials: true})
  //       .then(response => {
  //         console.log('login ? ', response)
  //         if(response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN"){
  //           this.setState(() => ({
  //           loggedInStatus: "NOT_LOGGED_IN",
  //           user: response.data.user
  //           }))
  //         }
  //         else if(!response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
  //           this.setState(() => ({
  //             loggedInStatus: "LOGGED_IN",
  //             user: {}
  //           }))
  //         }
  //     })
  //     .catch(error => {
  //       console.log("response?", error)
  //     })
  // }

  // componentDidMount = () => {
  //   this.checkLoginStatus()
  // }

  render() {
    return (
      <div className='app'>
      	<Router>
          <div> 
            <NavLink to="/" exact>Home</NavLink>--
            <NavLink to="/dashboard" exact>Dashboard</NavLink>          
      		
          <Switch>
      			<Route 
      				exact path={"/"} 
      				render={props => (
      					<Home  {...props} status={this.state.loggedInStatus} handleLoggedIn={this.handleLoggedIn}/>
      			)}/>

      			<Route 
					exact path={"/dashboard"}
      				render={props => (
      					<Dashboard {...props} status={this.state.loggedInStatus} handleLoggedOut={this.handleLoggedOut}/>
      			)}/>      		
      			</Switch>
            </div>
      	</Router>
      </div>
    );
  }
}
