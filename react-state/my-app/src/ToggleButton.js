import { useState } from 'react';

export default function ToggleButton({text, color}) {

  const [isClicked, setIsClicked] = useState(false);
  console.log('useState', isClicked);

  function handleClick() {
    console.log('beforeSetter', isClicked);
    setIsClicked(!isClicked);
    console.log('afterSetter', isClicked);
  }

  const bgColor = isClicked ? color : 'white';
    return (
      <button onClick={handleClick} style={{ backgroundColor: bgColor }}> {text} </button>
    );
}
