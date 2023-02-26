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
        <div>
<h1>HÔTE</h1>

<p>Habileté = {count} </p>    
      <button className="btn" onClick={() => addCaract(count)}> + </button>
      <button className="btn" onClick={() => removeCaract(count)}disabled={count <= 0 ? true : false}> - </button>
      <p>Endurance = {countEndurance} </p>    
      <button className="btn" onClick={() => addCaractEndurance(countEndurance)}> + </button>
      <button className="btn" onClick={() => removeCaractEndurance(countEndurance)}disabled={countEndurance <= 0 ? true : false}> - </button>

        </div>
    );
};

export default Host;