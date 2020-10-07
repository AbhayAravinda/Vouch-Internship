import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser,faCoffee} from '@fortawesome/free-solid-svg-icons';

import {configurations} from '../config';

export default function LoginButton(props)
{
	const [auth_link, set_auth_link] = useState(undefined);

	// Used an if statement because this part keeps re-rendering and spams the server	
	if(auth_link===undefined) fetch(configurations.serverUrl+configurations.apis.login)
		.then(response=>response.json())
		.then(data=>(set_auth_link(data.auth_link)))

	return(
			(props.code===undefined)?
				<a href={auth_link}>
					<Button style={{backgroundColor:"LightBlue",width:"100%"}}>
						<FontAwesomeIcon icon={faUser}/> LOGIN
					</Button>
				</a>
				:
				<a href={configurations.clientUrl}>
					<Button style={{backgroundColor:"LightBlue",width:"100%"}}>
						<FontAwesomeIcon icon={faCoffee}/> LOGOUT
					</Button>
				</a>
			
			
			
	);
}