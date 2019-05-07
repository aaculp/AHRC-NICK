import React, { Component } from 'react'
import HomeRight from './HomeRight'
import '../Stylesheets/Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className = "page">
        <div className = 'HomeContainer'>

          <div className = 'nameContainer'>
            <h1 className ='home'>Nick</h1>
            <h1 className ='home'>St. Clair</h1>
          </div>

            <HomeRight />

        </div>
      </div>
    )
  }
}