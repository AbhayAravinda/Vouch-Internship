import React from 'react';
import Grid from '@material-ui/core/Grid';

import Menu from './components/Menu';
import Posts from './components/Posts';

import parseUrl from 'parse-url';
import qs from 'querystringify';

export default function WebPage(props)
{

	const url =parseUrl(window.location.href);//Convert url to object
	const code = qs.parse(url.search).code; //Extract code if present in url. Else undefined

	return(
		<Grid container>
			<Grid item xs={12} sm={12} md={3} lg={3} xl={2}>
				<Menu code={code}/>
			</Grid>
			<Grid item xs={12} sm={12} md={9} lg={9} xl={10}>
				<Posts posts={[1,2,3,4,5,6]}/>
			</Grid>
		</Grid>
	);
}