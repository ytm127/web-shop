import React, { useEffect, useState } from 'react';
import { Box, Image, Button } from 'grommet';

export function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [ windowSize, setWindowSize ] = useState({
		width: undefined,
		height: undefined
	});

	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}

		// Add event listener
		window.addEventListener('resize', handleResize);

		// Call handler right away so state gets updated with initial window size
		handleResize();

		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount

	return windowSize;
}

export const useStartSlideshowOnInit = ({ setCurrentImage, carouselImages }) => {
		useEffect(() => {
			if(carouselImages) {
			let i = 0;
			if(carouselImages[i]){
				setCurrentImage(carouselImages[i]);
			const intv = setInterval(() => {
				if (carouselImages[i]) {
					setCurrentImage(carouselImages[i]);
				} else i = -1;
				i += 1;
			}, 2000);
	
	
			setTimeout(() => {
				clearInterval(intv);
			}, 60000);
			}
		}}, [carouselImages]);
};

export const useSetCarouselImages = (assetsData, setCarouselImages ) => {
	useEffect(()=>{
		let arr = []
		for(let i=0; i< assetsData?.length; i++){
			arr.push(<Image fit='cover' src={`${assetsData[i].url}`}/>)
		}
		setCarouselImages(arr)
	}, [assetsData])
}