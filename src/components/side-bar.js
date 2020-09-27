import React from 'react';
import { Box, Image, Button } from 'grommet';
import {Link} from 'react-router-dom'

export const SideBar = ({setSideBarIsOut}) => {
	const closeMenuOnClick = () => setSideBarIsOut(false)
	return (
		<Box pad="small">
			<div >
                <Link to='/' style={{display:'block'}}> <div onClick={closeMenuOnClick} style={{color:'black', margin:10}}>Home</div></Link>
                <Link to='/menu' style={{display:'block'}}> <div onClick={closeMenuOnClick} style={{color:'black', margin:10}}>Menu</div></Link>
                <Link to='/how-it-works' style={{display:'block'}}> <div onClick={closeMenuOnClick} style={{color:'black', margin:10}}>How it works</div></Link>
            </div>
		</Box>
	);
};
