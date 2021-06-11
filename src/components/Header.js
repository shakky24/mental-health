import React from 'react'
import './Header.css'
import Logo from '../assets/download.svg'

const Header = () => {
  return (
    <div className = 'header'>
    <div  className = "header__logo">
      <img src = {Logo} alt = "Logo"/>
    </div>

    <div className = "header__center">
      <p>Smile</p>
      <p>Sparkle</p>
      <p>Shine</p>
    </div>

    <div className = "header__right">
      <p>About</p>
    </div>  
    </div>

  )
}

export default Header
