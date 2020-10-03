import React from 'react';
import { Box, Image, Button } from 'grommet';

export const ContentCard = ({ img, imgPosition = 'left', headline, body }) => {
	return (
		<Box pad="large">
			<div>
				{imgPosition === 'left' ? (
					<div style={{ paddingTop: 15 }}>
						<Image
							src={img}
							style={{ width: '33vw', padding:'0px 5px 0px 5px', margin: '0 5px 0 5px', float: 'left', paddingTop: '5vh' }}
						/>
						<div style={{ width: '30vw', padding:'0px 5px 0px 5px', float: 'right', margin: '0 5px 0 5px', textAlign:'center' }}>
							<h3>{headline}</h3>
							<p style={{ color: 'grey' }}>{body}</p>
						</div>
					</div>
				) : (
					<div style={{ padding: 15 }}>
						<div style={{ width: '30vw', padding:'0px 5px 0px 5px', float: 'left', margin: '0 5px 0 5px' , textAlign:'center'}}>
							<h3>{headline}</h3>
							<p style={{ color: 'grey' }}>{body}</p>
						</div>
						<Image src={img} style={{ width: '33vw', padding:'0px 5px 0px 5px', margin: '0 5px 0 5px',float: 'right', paddingTop: '5vh' }} />
					</div>
				)}
			</div>
		</Box>
	);
};
