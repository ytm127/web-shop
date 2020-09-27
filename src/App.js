import React, { useState } from 'react';
import { useWindowSize } from './utils/hooks';
// import './App.css';
import { NavBar } from './components/nav-bar';
import { SideBar } from './components/side-bar';
import { FooterBar } from './components/footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';
import { Menu } from './pages/menu';
import { HowItWorks } from './pages/how-it-works';
import { ErrorPage } from './pages/error-page';

function App() {
	const size = useWindowSize();
	const [ sideBarIsOut, setSideBarIsOut ] = useState(false);
	const handleMenuClick = () => setSideBarIsOut(!sideBarIsOut);

	return (
		<div className="App">
			<NavBar handleMenuClick={handleMenuClick} sideBarIsOut={sideBarIsOut} />
			{sideBarIsOut && <SideBar setSideBarIsOut={setSideBarIsOut}/>}
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/menu" component={Menu} />
				<Route path="/how-it-works" component={HowItWorks} />
				<Route component={ErrorPage} />
			</Switch>
			<FooterBar />
		</div>
	);
}

export default App;
