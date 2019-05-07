import React from 'react'
import BtnSlider from './BtnSlider';

export default function HomeRight() {
  return (
    <div className = 'homeRight'>
    
        <div className = 'content'>
          <p>Hey I'm Nick!</p>
        </div>

        <div className = 'homeContent'>
            <p>
                A little about me..I am a student at the AHRC school in Brooklyn, New York. My favorite foods include fish, pepperoni, and pizza.
            </p>
        
            <p>
            During the Spring 2019 semester, Nick and I created this website together by connecting with him about his personal interests. Nick is a very passionate and interesting person who loves computers and animation. He loves Finding Nemo and anything Disney, that's why he decided on a trip to Disney Land located in Anaheim, California. 
            </p>

            <p>
                A little about me..Hey my name is Aaron Culp. I am a graduating Pace University this Spring with a B.S in Information Technology with a focus in Web & Digital Media. After graudation I plan to start my career as a Front End Developer in the Digital Marketing / Advertising Agency creating Websites and Mobile Apps. Hopefully one day I can create the next Instagram and sell for $1 Billion dollars.
            </p>
            
            <BtnSlider />
        </div>
    </div>
  )
}
