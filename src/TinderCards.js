import { SwipeDown } from '@mui/icons-material';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon',
            url: 'https://i.insider.com/58089698dd089564488b4b25?width=750&format=jpeg&auto=webp'
        },
        {
            name: 'Jeff',
            url: 'https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpga'
        }
    ])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!")
    };


  return (
    <div className='tinderCards'>
        <div className='cardContainer'>
            {people.map((person) => (
                <TinderCard className='swipe' 
                            key={person.name} 
                            preventSwipe = {["up", "down"]}
                            onSwipe = {(dir) => swiped(dir, person.name)}
                            onCardLeftScreen = {() => outOfFrame(person.name)}>
                     <div
                        style = {{backgroundImage : `url(${person.url})`}}
                        className = "card"
                     >
                         <h3>{person.name}</h3>
                     </div>
                </TinderCard>
            ))}
        </div>
        
        
    </div>
  )
}

export default TinderCards