import React, { Component } from 'react';
import Registration from './auth/registration'
export default class Home extends Component {

	constructor(props){
		super(props);
	}

	handleSuccessfullAuth = (data) => {
		console.log(this.props.history)
		this.props.history.push("/dashboard");
	}
	render() {
	    return (
	      <div className='home'>
	      	<h1>Registeration : <br/><br/></h1>
	    	<h3>Status : {this.props.loggedInStatus}</h3>
	      	<Registration handleSuccessfullAuth={this.handleSuccessfullAuth}/>
	      </div>
	    );
	}
}
