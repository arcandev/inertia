import React, {useState} from 'react';
import axios from 'axios';

function Server() {
	const [text, setText] = useState('');
  
	function getServer() {
		axios.get('http://localhost:5000/',  { crossdomain: true })
			.then(response => {
				console.log(response.data);
				setText(response.data.text);
			});
	}
  
	return (
		<div>
			<button onClick={getServer}>
				Get Server Response
			</button>
			<h1>{text}</h1>
		</div>
	);
}

export default Server;