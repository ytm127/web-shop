import React from 'react';
import { Box, Image, Button } from 'grommet';
import {Link} from 'react-router-dom'

export const SideBar = ({setSideBarIsOut}) => {
	const closeMenuOnClick = () => setSideBarIsOut(false)
	return (
		<Box pad="small">
			<div >
                <Link to='/web-shop/' style={{display:'block'}}> <div onClick={closeMenuOnClick} style={{color:'black', margin:10}}>Home</div></Link>
                <Link to='/web-shop/menu' style={{display:'block'}}> <div onClick={closeMenuOnClick} style={{color:'black', margin:10}}>Menu</div></Link>
                <Link to='/web-shop/how-it-works' style={{display:'block'}}> <div onClick={closeMenuOnClick} style={{color:'black', margin:10}}>How it works</div></Link>
            </div>
		</Box>
	);
};
