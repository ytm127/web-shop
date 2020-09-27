import React, { useContext } from 'react';
import { Menu, Close } from 'grommet-icons';
import { Box, Image } from 'grommet';
import logo from '../logo.png';

export function NavBar({ handleMenuClick, sideBarIsOut }) {
	return (
		<Box pad="medium" background="white">
			<Box>
				<div style={{ display: 'flex' }}>
					{sideBarIsOut ? (
						<Close color="plain" size="large" style={{ marginTop: 27 }} onClick={handleMenuClick} />
					) : (
						<Menu color="plain" size="large" style={{ marginTop: 27 }} onClick={handleMenuClick} />
					)}
					<div
						style={{
							fontSize: 'large',
							fontWeight: 'bolder',
							marginTop: 13,
							width: '80%',
							textAlign: 'center'
						}}
					>
						<Image src={logo} style={{ width: 'inherit' }} />
					</div>
				</div>
			</Box>
		</Box>
	);
}
