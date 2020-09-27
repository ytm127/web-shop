import React, { useContext } from 'react';
import { Instagram, ShareRounded } from 'grommet-icons';

export function FooterBar() {
	return (
		<div style={{ background: '#276955', textAlign: 'center', padding: 10 }}>
			<div style={{ padding: 10, color: 'lightgrey' }}>Contact</div>
			<div style={{ padding: 10, color: 'lightgrey' }}>FAQs</div>
			<div style={{ padding: 10, color: 'lightgrey' }}>About</div>
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
