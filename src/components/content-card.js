import React from 'react';
import { Box, Image, Button } from 'grommet';

export const ContentCard = ({ img, imgPosition = 'left',  headline, body }) => {
	return (
		<Box pad="large">
			<div>
				{imgPosition === 'left' ? (
					<div style={{ display: 'flex' }}>
						<Image src={img} style={{ width: '40vw', margin: 'auto' }} />
						<div style={{ marginLeft: 20, textAlign: 'center', width:'40vw' }}>
							<h3>{headline}</h3>
							<p style={{ color: 'grey' }}>
								{body}
							</p>
						</div>
					</div>
				) : (
					<div style={{ display: 'flex' }}>
						<div style={{ marginRight: 20, textAlign: 'center', width:'40vw' }}>
							<h3>{headline}</h3>
							<p style={{ color: 'grey' }}>
								{body}
							</p>
						</div>
						<Image src={img} style={{ width: '40vw', margin: 'auto' }} />
					</div>
				)}
			</div>
		</Box>
	);
};
