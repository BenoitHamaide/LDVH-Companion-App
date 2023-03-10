import React from 'react';
import { useState } from 'react';

const Endurance = () => {
    const [inputValue, setInputValue] = useState(0);
  
    const [count, setCount] = useState(inputValue);
   
    function addCaract(count){
setCount(count += 1)
    }
    function removeCaract(count) {
        setCount(count => count - 1)
    }
    const start = inputValue
    return (
        <div className="element en">
            <h1 className="titleCaract">ENDURANCE</h1>
            <p>Total de départ = <input type="number" value={inputValue} onChange={e => setInputValue(Number(e.target.value))} /></p>
       <p>Actuel = {start + count} </p>     
      <button className="buttonVert" onClick={() => addCaract(count)}> + </button>
      <button className="buttonRouge" onClick={() => removeCaract(count)}disabled={start + count <= 0 ? true : false}> - </button>

      
        </div>
    );
};

export default Endurance;