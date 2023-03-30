import React, { useState } from 'react';

export default function Container({ items }) {
  const [current, setCurrent] = useState(0);

  function incrementIndex() {
   setCurrent((current + 1) % items.length);
  }

  function decremenetIndex() {
     setCurrent(((current - 1) + items.length) % items.length);
  }

  function setIndex(x) {
    setCurrent(x);
  }

  return (
    <div>
      <div>{items[current]}</div>
      <div>
        <Button onClick={decremenetIndex} text="Prev" />
        <Buttons onClick={setIndex} count={items.length} index={current}/>
        <Button onClick={incrementIndex}  text="Next" />
      </div>
    </div>
  );
}

function Button({ text, onClick, backgroundColor}) {
  return <button onClick={onClick} style={{backgroundColor}} >{text}</button>;
}

function Buttons({ count, onClick, index }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <Button
        key={i}
        text={i}
        onClick={() => onClick(i)}
        backgroundColor={i === index ? 'lightblue' : 'white'} />)
  }
  return <div>{buttons}</div>;
}
