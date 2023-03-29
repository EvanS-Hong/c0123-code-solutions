import { useState } from 'react';

export default function ToggleButton(bgColor) {

  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex( index + 1 );
  }

  let textColor = index < 12 ? 'white' : 'black';
  if (index >= 0 && index < 3) {
    bgColor = 'black';
  } else if (index > 3 && index < 5) {
    bgColor = '#351C75';
  } else if (index > 6 && index < 8) {
    bgColor = '#674EA7';
  } else if (index > 9 && index < 11) {
    bgColor = '#E06666';
  } else if (index > 12 && index < 14) {
    bgColor = '#F6B26B';
  } else if (index > 15 && index < 17) {
    bgColor = '#FFFF00';
  } else if (index > 18) {
    bgColor = '#FFFFFF';
  }

  return (
    <button onClick={handleClick} style={{ backgroundColor: bgColor, color: textColor, width: '6rem', height: '3rem', fontSize: '1rem'}} > Hot Button </button>
  )
}
