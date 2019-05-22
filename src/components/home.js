import React, { Component } from 'react';
import Registration from './auth/registration'
import Login from './auth/login'
export default class Home extends Component {

	constructor(props){
		super(props);
	}

	handleSuccessfullAuth = (data) => {
		this.props.handleLoggedIn(data)
		this.props.history.push("/dashboard");
	}


	render() {
	    return (
	      <div className='home'>
	      	<h1>Registeration : <br/><br/></h1>
	    	<h3>Status : {this.props.status}</h3>
	      	<Registration handleSuccessfullAuth={this.handleSuccessfullAuth}/>
	      	<br/><br/>
	      	<h1>Login : <br/><br/></h1>
	      	<h3>Status : {this.props.status}</h3>
	      	<Login handleSuccessfullAuth={this.handleSuccessfullAuth}/>
	      	<br/><br/>
	      </div>
	    );
	}
}
