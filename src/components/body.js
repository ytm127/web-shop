import React from 'react';
import { Box, Image , Button} from 'grommet';
import {useStartSlideshowOnInit} from '../utils/hooks'
import {ContentCard} from './content-card'
import currentLocationPic from '../current_location.svg'
import chattingPic from '../chatting.svg'
import checkPic from '../check.svg'
import Fade from 'react-reveal/Fade'

export const Body = () => {
	const images = [
		<Image fit="cover" src="https://dl.airtable.com/.attachments/cb1351f099aea2c72d53fcef47ceaf3c/5de7cc10/kush.jpg" />,
		<Image fit="cover" src="https://dl.airtable.com/.attachments/16603cf5716bcf90371e549b514e7265/6dc58be8/og_kush.png" />,
		<Image fit="cover" src="https://dl.airtable.com/.attachments/d0cb7960ce146b5fe676c796b2b80dd1/7d31c1a2/weed.jpg" />
	];

	const [currentImage, setCurrentImage] = React.useState(null)

	// ON INIT
	useStartSlideshowOnInit({setCurrentImage, images})

	return (
		<Box pad="medium">
			<Box height="medium" width="medium" overflow="hidden" style={{margin:'auto'}}>
				{currentImage}
			</Box>
			<br/>
			<Button color='accent-4' label="Order Now" />
			<Fade>
			<ContentCard img={currentLocationPic} headline={'Fast and Free Shipping'} body={'Just provide your D.C. address and we\'ll take care of the rest!'}/>
			<ContentCard img={checkPic} headline={'Premium Quality'} body={'We only carry the BEST quality products to ensure complete satisfaction.'} imgPosition='right'/>
			<ContentCard img={chattingPic} headline={'Top of Class Customer Service'} body={'We guarantee an awesome experience with responsive customer service.'}/>
			</Fade>
		</Box>
	);
};
