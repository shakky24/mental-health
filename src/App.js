import './App.css';
import React from 'react'
import Header from './components/Header';
import Item from './components/Item';

import Picture_1 from './assets/1.jpg'
import Picture_2 from './assets/2.jpg'
import Picture_3 from './assets/3.jpg'
import Picture_4 from './assets/4.jpg'
import Picture_5 from './assets/5.jpg'

function App() {
  return (
    <div className="App">
    <Header/>
    <div className = "app__itemsContainer">
    <Item
      title ='a'
      desc = 'nothing1'
      backgroundImg = {Picture_1}
      descLink = ''
      leftBtnTxt = '1'
      leftBtnLink = ''
      rightBtntxt = '1'
      rightBtnLink = ''
      twoButtons = 'true'
      first
    />
    <Item
      title ='b'
      desc = 'nothing2'
      backgroundImg = {Picture_2}
      descLink = ''
      leftBtnTxt = '1'
      leftBtnLink = ''
      rightBtntxt = '1'
      rightBtnLink = ''
      twoButtons = 'true'
    />
    <Item
      title ='c'
      desc = 'nothing3'
      backgroundImg = {Picture_3}
      descLink = ''
      leftBtnTxt = '1'
      leftBtnLink = ''
      rightBtntxt = '1'
      rightBtnLink = ''
      twoButtons = 'true'
    />
    <Item
      title ='d'
      desc = 'nothing4'
      backgroundImg = {Picture_4}
      descLink = ''
      leftBtnTxt = '1'
      leftBtnLink = ''
      rightBtntxt = '1'
      rightBtnLink = ''
      twoButtons = 'true'
    />
    <Item
      title ='e'
      desc = 'nothing5'
      backgroundImg = {Picture_5}
      descLink = ''
      leftBtnTxt = '1'
      leftBtnLink = ''
      rightBtntxt = '1'
      rightBtnLink = ''
      twoButtons = 'true'
    />
    </div>
    </div>
  );
}

export default App;
