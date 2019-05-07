import React from 'react'
import Header from './Header'

import dwarfs from '../assets/7dwarfs.jpg'
import Alladin from '../assets/Alladin.jpg'
// import Dory from '../assets/Dory.jpeg'
import Incredibles from '../assets/incredibles.jpg'
import Mickey from '../assets/Mickey.jpg'
import Tigger from '../assets/tigger.jpg'

import '../Stylesheets/Trip.css'

export default function Trip() {
  return (
    <div className = 'page'>
      <div className = 'TripContainer'>
        
        <div className = 'tripHeader'>
          <Header />
        </div>

        <div className = 'PicturesHeader'>
        My Trip To Disney!
        </div>

        <div className = 'PicturesContainer'>
          <div className = 'Tigger'>
            <img 
              src = {Tigger} 
              alt = 'Tigger'
            />
            <p className = 'pRight'>I really wanted to meet Tigger. So Tigger was my first stop when I got to Disney Land!</p>
          </div>

          <div className = 'dwarfs'>
            <img 
              src = {dwarfs} 
              alt = 'dwarfs' 
            />
            <p className = 'pLeft'>My next stop was the 7 Dwarfs. Unfortunately Snow White wasn't available for a picture so I definitely had to get a picture with them!</p>
          </div>

          <div className = 'Alladin'>
            <img 
              src = {Alladin} 
              alt = 'Alladin' 
            />
            <p className = 'pRight'>It was so cool to see Aladdin, Princess Jasmine, and Genie. I am super excited to see the new movie coming out staring Will Smith!</p>
          </div>

          <div className = 'Mickey'>
            <img 
              src = {Mickey} 
              alt = 'Mickey' 
            />
            <p className = 'pLeft'>Mickey Mouse Club House is one of my favorite shows! I definitely had to go see them. I wanted to specifically get a picture with these two because they have been my favorite characters since I was a kid. I really like this picture becuase it has the castle behind it. I love this photo!</p>
          </div>

          <div className = 'Incredibles'>
            <img 
              src = {Incredibles} 
              alt = 'Incredibles' 
            />
            <p className = 'pRight'>My last stop was the Incredibles. I love the Incredibles series and really enjoyed the newest movie! I wish I was able to have all 5 characters but I'll take what I can get. I enjoyed this part of the park and really loved being able to see them!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
