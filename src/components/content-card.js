import React from 'react';
import { Box, Image, Button } from 'grommet';

export const ContentCard = ({ img, imgPosition = 'left', headline, body }) => {
	return (
		<Box pad="large">
			<div>
				{imgPosition === 'left' ? (
					<div style={{ padding: 15 }}>
						<Image
							src={img}
							style={{ width: '30vw', padding: 5, marginRight: 10, float: 'left', paddingTop: '10vh' }}
						/>
						<div style={{ width: '30vw', padding: 6, float: 'right' }}>
							<h3>{headline}</h3>
							<p style={{ color: 'grey' }}>{body}</p>
						</div>
					</div>
				) : (
					<div style={{ padding: 15 }}>
						<div style={{ width: '30vw', padding: 6, float: 'left', marginRight: 10 }}>
							<h3>{headline}</h3>
							<p style={{ color: 'grey' }}>{body}</p>
						</div>
						<Image src={img} style={{ width: '30vw', padding: 5, float: 'right', paddingTop: '10vh' }} />
					</div>
				)}
			</div>
		</Box>
	);
};
