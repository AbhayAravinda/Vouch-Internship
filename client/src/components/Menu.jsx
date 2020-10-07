import React from 'react';

import LoginButton from './LoginButton';
import AddRemoveButton from './AddRemoveButton';

export default function Menu(props)
{
	return(
		<div>
			<div>
				<LoginButton code={props.code}/>
			</div>
			
			{
				(props.code===undefined)?"":	
				<div>
					<AddRemoveButton code={props.code}/>		
				</div>
			}

			
			<div> {/*Top User*/}
				<table>
					<tbody>
						<tr>
							<th colSpan={2}>TOP USER</th>
						</tr>
						<tr>
							<td>Img</td>
							<td>USER</td>
						</tr>
					</tbody>
				</table>
			</div>

			
			<div> {/*Top 5 Subreddits*/}
				<table>
					<tbody>
						<tr>
							<th colSpan={2}>TOP SUBREDDITS</th>
						</tr>
						<tr>
							<td>#1</td>
							<td>First sub</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}