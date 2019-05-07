import React from 'react'
import { Link } from 'react-router-dom'
import '../Stylesheets/Header.css'

const Header = () => {
  return (
    <div className = 'HeaderContainer'>
        <Link to = '/Home' style = {{ color: 'white'}}>Home</Link>
        <Link to = '/Itinerary' style = {{ color: 'white'}}>Itinerary</Link>
        <Link to = '/Trip' style = {{ color: 'white'}}>Trip</Link>
    </div>
  )
}

export default Header
