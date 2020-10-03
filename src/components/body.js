import React from 'react';
import GlobalContext from '../global-context'
import { Box, Button } from 'grommet';
import { useStartSlideshowOnInit, useSetCarouselImages } from '../utils/hooks'
import { ContentCard } from './content-card'
import currentLocationPic from '../current_location.svg' // remove
import chattingPic from '../chatting.svg' // remove
import checkPic from '../check.svg' // remove
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'

export const Body = () => {
	const GLOBAL = React.useContext(GlobalContext)
	const [carouselImages, setCarouselImages] =React.useState([])
	const [currentImage, setCurrentImage] = React.useState(null)

	// ON INIT
	useStartSlideshowOnInit({ setCurrentImage, carouselImages })
	useSetCarouselImages(GLOBAL?.assets?.[0]?.fields?.Attachments, setCarouselImages)

	return (
		<Box pad="medium">
			<Box height="medium" width="medium" overflow="hidden" style={{ margin: 'auto' }}>
				{currentImage}
			</Box>
			<br />
			<Link to='/menu'><Button color='accent-4' label="Order Now" style={{ width: '-webkit-fill-available' }} /></Link>
			<Fade>
				<ContentCard img={currentLocationPic} headline={'Fast and Free Shipping'} body={'Just provide your D.C. address and we\'ll take care of the rest!'} />
				<ContentCard img={checkPic} headline={'Premium Quality'} body={'We only carry the BEST quality products to ensure complete satisfaction.'} imgPosition='right' />
				<ContentCard img={chattingPic} headline={'Top of Class Customer Service'} body={'We guarantee an awesome experience with responsive customer service.'} />
			</Fade>
		</Box>
	);
};
