import React, { Component } from 'react';

const Dashboard = (props) => {
	// handleLoggedOutClick = () => {
	// 	props.handleLoggedOut()
	// }
    return (
    	<div>
			<h1>Welcome to Dashboard</h1>
			<h3>Status: {props.status}</h3>
			<h2><button onClick={props.handleLoggedOut}>Logout</button></h2>    		
    	</div>
    );
}
export default Dashboard;