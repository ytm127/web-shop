import React, { useState, useEffect } from 'react';
import axios from 'axios'
import GlobalContext, { GlobalProvider } from './global-context';
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
	///////////////// GLOBAL ///////////////////////
	const size = useWindowSize();
	const [GLOBAL_DATA, SET_GLOBAL_DATA] = useState()
	useEffect(() => {
		axios.get('https://api.airtable.com/v0/appcVmzV8dH0kusPN/Assets?maxRecords=3&view=Grid%20view', {
			headers: {
				'Authorization': 'Bearer key69wK3b34QNruUO'
			}
		})
		.then(res => {
			SET_GLOBAL_DATA({
				screenSize: size,
				assets: res.data
			})
		})
		.catch(err => console.error(err))
	}, [])

	///////////////// APP ///////////////////////
	const [sideBarIsOut, setSideBarIsOut] = useState(false);
	const handleMenuClick = () => setSideBarIsOut(!sideBarIsOut);

	return (
		<GlobalProvider value={GLOBAL_DATA}>
			<div className="App">
				<NavBar handleMenuClick={handleMenuClick} sideBarIsOut={sideBarIsOut} />
				{sideBarIsOut && <SideBar setSideBarIsOut={setSideBarIsOut} />}
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/menu" component={Menu} />
					<Route path="/how-it-works" component={HowItWorks} />
					<Route component={ErrorPage} />
				</Switch>
				<FooterBar />
			</div>
		</GlobalProvider>
	);
}

export default App;
