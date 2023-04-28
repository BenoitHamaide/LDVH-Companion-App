import React, { useState, useEffect } from 'react';

function Host() {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem('host-count') || 0),
  );
  const [countEndurance, setCountEndurance] = useState(
    parseInt(localStorage.getItem('host-count-endurance') || 0),
  );

  function addCaract() {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('host-count', newCount);
  }

  function removeCaract() {
    const newCount = count > 0 ? count - 1 : 0;
    setCount(newCount);
    localStorage.setItem('host-count', newCount);
  }

  function addCaractEndurance() {
    const newCountEndurance = countEndurance + 1;
    setCountEndurance(newCountEndurance);
    localStorage.setItem('host-count-endurance', newCountEndurance);
  }

  function removeCaractEndurance() {
    const newCountEndurance = countEndurance > 0 ? countEndurance - 1 : 0;
    setCountEndurance(newCountEndurance);
    localStorage.setItem('host-count-endurance', newCountEndurance);
  }

  useEffect(() => {
    localStorage.setItem('host-count', count);
    localStorage.setItem('host-count-endurance', countEndurance);
  }, [count, countEndurance]);

  return (
    <div className="element ho">
      <h1>HÔTE</h1>

      <p>Habileté = {count} </p>
      <button className="buttonVert" onClick={addCaract}> + </button>
      <button className="buttonRouge" onClick={removeCaract} disabled={count <= 0}> - </button>
      <p>Endurance = {countEndurance} </p>
      <button className="buttonVert" onClick={addCaractEndurance}> + </button>
      <button className="buttonRouge" onClick={removeCaractEndurance} disabled={countEndurance <= 0}> - </button>

    </div>
  );
}

export default Host;
