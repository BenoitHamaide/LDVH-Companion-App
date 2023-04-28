import { useState, useEffect } from 'react';

function Power() {
  const [textValuePower, setTextValuePower] = useState(localStorage.getItem('textValuePower') || '');

  useEffect(() => {
    localStorage.setItem('textValuePower', textValuePower);
  }, [textValuePower]);

  function handleTextChange(event) {
    setTextValuePower(event.target.value);
  }

  return (
    <div className="element co">
      <h1>CODES, POUVOIRS PARTICULIERS ET EXPRESSIONS</h1>
      <textarea className="textArea" name="" id="" cols="30" rows="10" value={textValuePower} onChange={handleTextChange}/>

    </div>
  );
}

export default Power;
