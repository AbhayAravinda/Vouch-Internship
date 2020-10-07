import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


export default function Posts(props)
{
	return(
		<div>
			{props.posts.map((item)=>{
				return(
					<Card><CardContent>{item}</CardContent></Card>
				);
			})}
		</div>
	);
}