import React, { useState } from 'react';
import { useWindowSize } from './utils/hooks';
// import './App.css';
import { NavBar } from './components/nav-bar';
import { Body } from './components/body';
import { SideBar } from './components/side-bar';

function App() {
	const size = useWindowSize();
  const [ sideBarIsOut, setSideBarIsOut ] = useState(false);
  const handleMenuClick = () => setSideBarIsOut(!sideBarIsOut)

	return (
		<div className="App">
			<NavBar handleMenuClick={handleMenuClick} sideBarIsOut={sideBarIsOut}/>
      {sideBarIsOut && <SideBar/>}
			<Body />
			{/* <Footer/> */}
		</div>
	);
}

export default App;
