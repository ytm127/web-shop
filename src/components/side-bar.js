import React from 'react';
import { Box, Image, Button } from 'grommet';

export const SideBar = () => {
	return (
		<Box pad="small">
			<div >
                <Button style={{display:'block'}}> <div style={{fontWeight:'bold', margin:10}}>About</div></Button>
                <Button style={{display:'block'}}> <div style={{fontWeight:'bold', margin:10}}>Menu</div></Button>
                <Button style={{display:'block'}}> <div style={{fontWeight:'bold', margin:10}}>How it works</div></Button>
            </div>
		</Box>
	);
};
