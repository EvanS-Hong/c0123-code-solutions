import { useState } from 'react';

export default function ToggleButton({text, color}) {

  const [isClicked, setIsClicked] = useState(false);
  console.log('useState', isClicked);
  function handleClick() {
    console.log('useState', isClicked);
    setIsClicked(!isClicked);
    console.log('useState', isClicked);
  }
  if (!isClicked) {
 return (
    <button onClick={handleClick} style={{backgroundColor: 'white'}}> {text} </button>
  )} else {
    return (
    <button onClick={handleClick} style={{ backgroundColor: color }}> {text} </button>
  )}
 }
