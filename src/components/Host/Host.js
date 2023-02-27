import React from 'react';
import { useState } from 'react';
const Host = () => {
    const [count, setCount] = useState(0);
    const [countEndurance, setCountEndurance] = useState(0);
    function addCaract(count){
setCount(count += 1)
    }
    function removeCaract(count) {
        setCount(count => count - 1)
    }

    function addCaractEndurance(countEndurance){
        setCountEndurance(countEndurance += 1)
            }
            function removeCaractEndurance(countEndurance) {
                setCountEndurance(countEndurance => countEndurance - 1)
            }
    return (
        <div className='element ho'>
<h1>HÔTE</h1>

<p>Habileté = {count} </p>    
      <button className="buttonVert" onClick={() => addCaract(count)}> + </button>
      <button className="buttonRouge" onClick={() => removeCaract(count)}disabled={count <= 0 ? true : false}> - </button>
      <p>Endurance = {countEndurance} </p>    
      <button className="buttonVert" onClick={() => addCaractEndurance(countEndurance)}> + </button>
      <button className="buttonRouge" onClick={() => removeCaractEndurance(countEndurance)}disabled={countEndurance <= 0 ? true : false}> - </button>

        </div>
    );
};

export default Host;