import React, { Component } from 'react'
import Header from './Header'
import CrossBtn from './CrossBtn';

import '../Stylesheets/Itinerary.css'



export default class Itinerary extends Component {
  render() {
    let lists = this.props.itemList.map(list => 
      (
          <li className = 'lists'>{list}</li>
      ))
      console.log(lists)
    return (
      <div className = "page">
        <div className = 'ItineraryContainer'>
          
          <header className = 'itineraryHeader'>
            <Header />
          </header>

          <section className = 'itineraryForm'>
            <form
              onSubmit = {e => this.props.addItem(e)} 
            >
            <h2 className = 'formH1'>What Did I Forget?</h2>
              <input
                className = 'formInput'
                type = 'text'
                placeholder = 'Hmmm..'
                value = {this.props.itemName}
                onChange = {e => this.props.onInputChange(e)}    
              />
              <CrossBtn />
            </form>
          </section>

          <footer className = 'itineraryRight'>
            <ul>
              {lists}
            </ul>
          </footer>

        </div>
      </div>
    )
  }
}
