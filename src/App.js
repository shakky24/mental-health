import './App.css';
import React from 'react'
import Header from './components/Header';
import Item from './components/Item';

import picture_1 from './assets/1.jpg'
import picture_2 from './assets/2.jpg'
import picture_3 from './assets/3.jpg'
import picture_4 from './assets/4.jpg'
import picture_5 from './assets/5.jpg'

function App() {
  return (
    <div className="App">
    <Header/>
    <div className = "app__itemsContainer">
    <Item
      backgroundImg = {picture_1}
    />
    <Item
      backgroundImg = {picture_2}
    />
    <Item
      backgroundImg = {picture_3}
    />
    <Item
      backgroundImg = {picture_4}
    />
    <Item
      backgroundImg = {picture_5}
    />
    </div>
    </div>
  );
}

export default App;
