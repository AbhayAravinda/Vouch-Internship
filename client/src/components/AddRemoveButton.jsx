import React from 'react';
import Button from '@material-ui/core/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash,faPlus} from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';
import {configurations} from '../config';

export default function AddRemoveButton(props)
{
	return(
			<Grid container>
				<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
					<Button 
						style={{backgroundColor:"LightGreen", width:"100%"}}
						onClick={()=>{
							const requestOptions ={
						        method: 'POST',
						        headers: {'Content-Type':'application/json'},
						        body: JSON.stringify({code:props.code})
						    }
							fetch(configurations.serverUrl+configurations.apis.addUser,requestOptions)
							.then(response=>response.json())
							.then(data=>(console.log(data)))
						}}
					>
						<FontAwesomeIcon icon={faPlus}/>
					</Button>
				</Grid>
				<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
					<Button style={{backgroundColor:"Red",width:"100%"}}>
						<FontAwesomeIcon icon={faTrash}/>
					</Button>
				</Grid>
			</Grid>		
	);
}