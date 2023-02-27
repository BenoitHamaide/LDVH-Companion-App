import React from 'react';
import { useState } from 'react';
const Encounter6 = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    function addCaract1(count1){
setCount1(count1 += 1)
    }
    function removeCaract1(count1) {
        setCount1(count1 => count1 - 1)
    }

    function addCaract2(count2){
        setCount2(count2 += 1)
            }
            function removeCaract2(count2) {
                setCount2(count2 => count2 - 1)
            }


    return (
        <div className='encounter m6'>
            <p>Habileté = {count1} </p>  
            <button className="buttonVert" onClick={() => addCaract1(count1)}> + </button>
      <button className="buttonRouge" onClick={() => removeCaract1(count1)}disabled={count1 <= 0 ? true : false}> - </button>
      <p>Endurance = {count2} </p>    
      <button className="buttonVert" onClick={() => addCaract2(count2)}> + </button>
      <button className="buttonRouge" onClick={() => removeCaract2(count2)}disabled={count2 <= 0 ? true : false}> - </button>


        </div>
    );
};

export default Encounter6;