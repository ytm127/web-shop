import React, { useContext } from 'react';
import { Menu } from 'grommet-icons';
import { Box } from 'grommet';

export function NavBar() {
	return (
		<Box pad="medium" background="lightgrey">
			<Box>
				<div style={{ display: 'flex' }}>
                <Menu color="plain" size="large" /> 
					<div style={{fontSize:'large', fontWeight:'bolder',marginTop:13, width:'80%', textAlign:'center'}}>Capital Gardens</div>
				</div>
			</Box>
		</Box>
	);
}
