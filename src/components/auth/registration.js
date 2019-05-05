import React, { Component } from 'react';
import axios from 'axios'
export default class Registration extends Component {
	constructor(props){
		super(props)
		this.state = {
			email: "",
			password: "",
			password_confirmation: "",
			registrationErrors: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		
		const {
			email, password_confirmation, password
		} = this.state;

		axios.post("http://localhost:3001/registrations", {
				user: {
					email: email,
					password: password,
					password_confirmation: password_confirmation
				}
			},

			{
				withCredentials: true
			})
			
			.then(response => {	
				console.log('Registeration : ', response)
				if(response.data.status === 'created'){
					this.props.handleSuccessfullAuth(response.data)
				}
			})
			.catch(error => {
				console.log('Registration Error : ', error)
			})
	}

  	render() {
    	return (
      		<div>
      			<form onSubmit={this.handleSubmit}>
    				<input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required/>
    				<br/><br/>
    				<input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} required/>
    				<br/><br/>
    				<input type="password" name="password_confirmation" placeholder="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} required/>
    				<br/><br/>
    				<button type="submit">Register</button>
    			</form>
      		</div>
    	);
  	}
}
