import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './App.css';

import Home from './components/Home'
import Itinerary from './components/Itinerary'
import Trip from './components/Trip'

class App extends Component {
  state = {
    itemName: '',
    itemList: ['Shirts', 'Pants', 'Underwear', 'Socks', 'Toothbrush','Pajamas']
  }

  componentDidMount() {
    localStorage.getItem('itemList')
  }

  onInputChange = (e) => {
    this.setState ({ itemName: e.target.value })
  }

  addItem = e => {
    e.preventDefault()
    const { itemName } = this.state
    this.setState ({itemList: [...this.state.itemList, itemName]})
  }

  render() {
    return (
      <Router>
      <div className="AppContainer">
      <Route render = {( {location} ) => (
        <TransitionGroup>
          <CSSTransition 
            key = {location.key}
            timeout = {1250}
            classNames = "fade"
          >
            <Switch location = {location}>
              <Route path='/Trip' component = {Trip} />
              <Route path ='/Itinerary' render = {(props) => (<Itinerary {...props}
                itemName = {this.state.itemName}
                itemList = {this.state.itemList}
                onInputChange = {this.onInputChange}
                addItem = {this.addItem}
              />)} />
              <Route path='/' component = {Home} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
      </div>
    </Router>
    );
  }
}

export default App;

