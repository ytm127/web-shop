import React from 'react';
import {useWindowSize} from './utils/hooks'
// import './App.css';
import {NavBar} from './components/nav-bar'

function App() {

  const size = useWindowSize() 
  
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;
