import React from 'react';
import { useState } from 'react';
const Dice = () => {

        const [dice1, setDice1] = useState(0);
        const [dice2, setDice2] = useState(0);
      
        const rollDice = () => {
          setDice1(Math.floor(Math.random() * 6) + 1);
          setDice2(Math.floor(Math.random() * 6) + 1);
        };
        const total = dice1 + dice2
    return (
        <div>
            <div>{dice1}</div>
      <div>{dice2}</div>
      <button onClick={rollDice}>Roll Dice!</button>
   <p>Total du lancé : {total} </p> 
   </div>
    
    );
};

export default Dice;