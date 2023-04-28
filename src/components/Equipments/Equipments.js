import { useState, useEffect } from 'react';

function Equipments() {
  const [textValue, setTextValue] = useState(localStorage.getItem('textValue') || '');

  useEffect(() => {
    localStorage.setItem('textValue', textValue);
  }, [textValue]);

  function handleTextChange(event) {
    setTextValue(event.target.value);
  }

  return (
    <div className="element eq">
      <h1>ÉQUIPEMENTS</h1>
      <textarea className="textArea" name="" id="" cols="30" rows="10" value={textValue} onChange={handleTextChange} />
    </div>
  );
}

export default Equipments;
