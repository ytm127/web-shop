import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { Instagram, ShareRounded } from 'grommet-icons';

export function FooterBar() {
	return (
		<div style={{ background: '#276955', textAlign: 'center', padding: 10 }}>
			<div style={{ padding: 10, }}><Link to='/web-shop/contact' style={{color: 'lightgrey' }}>Contact</Link></div>
			<div style={{ padding: 10, }}><Link to='/web-shop/faqs' style={{color: 'lightgrey' }}>FAQs</Link></div>
			<div style={{ padding: 10, }}><Link to='/web-shop/about' style={{color: 'lightgrey' }}>About</Link></div>
			<div style={{ margin: 10 }}>
				<span style={{ margin: 10 }}>
					<Instagram />
				</span>
				<span style={{ margin: 10 }}>
					<ShareRounded />
				</span>
				<span style={{ margin: 10 }}>
					<Instagram />
				</span>
			</div>
		</div>
	);
}
