import React, { useState } from 'react';

export default function Container({ items }) {
  return (
    <div>
      <div>{items[0]}</div>
      <div>
        <Button text="Prev"  />
        <Buttons count={items.length} current={0} />
        <Button text="Next"  />
      </div>
    </div>
  );
}

function Button({ text, onClick }) {
  const [backgroundColor, setBackgroundColor] = useState('white');
  function toggleBackground() {
    setBackgroundColor(backgroundColor === 'lightblue' ? 'white' : 'lightblue');
  }
  return <button onClick={toggleBackground} style={{ backgroundColor }}>{text}</button>;
}

/**
 * An array of buttons with the active button highlighted blue.
 */
function Buttons({ count }) {
  const [current, setCurrent] = useState(0);

  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <Button
        text={i}
        onClick={() => setCurrent(i)}
        backgroundColor={i === current ? 'lightblue' : undefined} />)
  }
  return <div>{buttons}</div>;
}
