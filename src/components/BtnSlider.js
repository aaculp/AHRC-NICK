import React from 'react'
import { Link } from 'react-router-dom'

import '../Stylesheets/BtnSlider.css'

export default function BtnSlider() {
  return (
    <Link to = '/Itinerary' style = {{ color: 'white'}}>
      <button className = 'homeBtn'>Check It Out!</button>
    </Link>
  )
}
