import { useState, useEffect } from 'react';

function Endurance() {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('endurance-initial') || 0,
  );
  const [count, setCount] = useState(
    parseInt(localStorage.getItem('endurance-total') || 0),
  );

  function addCaract() {
    setCount((count) => count + 1);
  }

  function removeCaract() {
    setCount((count) => (count <= 0 ? 0 : count - 1));
  }

  function handleInputChange(e) {
    const value = parseInt(e.target.value);
    if (value >= 0) {
      setInputValue(value);
    }
  }

  useEffect(() => {
    localStorage.setItem('endurance-initial', inputValue);
    localStorage.setItem('endurance-total', count);
  }, [inputValue, count]);

  const start = parseInt(inputValue, 10);
  const total = start + count;

  return (
    <div className="element en">
      <h1 className="titleCaract">ENDURANCE</h1>
      <p>
        Total de départ ={' '}
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
      </p>
      <p>Actuel = {total}</p>
      <button className="buttonVert" onClick={addCaract}>
        {' '}
        +{' '}
      </button>
      <button
        className="buttonRouge"
        onClick={removeCaract}
        disabled={total <= 0}
      >
        {' '}
        -{' '}
      </button>
    </div>
  );
}

export default Endurance;
