import './App.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import './App.css'
import Banner from './components/navbar/banner/Banner';
import Rowposter from './components/navbar/rowposter/Rowposter';
import { action, Horror, originals,Romance } from './urls';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <Rowposter  url={originals}title='Netflix Originals'/>
        <Rowposter url={action}title='Action' isSmall/>
        <Rowposter url={Romance}title='Romance' isSmall/>
        <Rowposter url={Horror}title='Horror' isSmall/>
  
    </div>
  );
}

export default App;
