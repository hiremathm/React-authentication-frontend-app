import React, { Component } from 'react';
import axios from 'axios'
export default class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			email: "",
			password: "",
			loginErrors: ""
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
			email, password
		} = this.state;

		axios.post("http://localhost:3001/sessions", {
				user: {
					email: email,
					password: password
				}
			},

			{
				withCredentials: true
			})
			
			.then(response => {	
				console.log('login : ', response)
				if(response.data.logged_in){					
					this.props.handleSuccessfullAuth(response.data)
				}
			})
			.catch(error => {
				console.log('login Error : ', error)
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
    				<button type="submit">Login</button>
    			</form>
      		</div>
    	);
  	}
}
