import { useState } from "react";

const Skill = () => {
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
        <div className="element ha">
            <h1 className="titleCaract">HABILETÉ</h1>
            <p>Total de départ = <input type="number" value={inputValue} onChange={e => setInputValue(Number(e.target.value))} /></p>
         <p>Actuel = {start + count} </p>    
      <button className="buttonVert" onClick={() => addCaract(count)}> + </button>
      <button className="buttonRouge" onClick={() => removeCaract(count)}disabled={start + count <= 0 ? true : false}> - </button>

     
        </div>
    );
};
 
export default Skill;