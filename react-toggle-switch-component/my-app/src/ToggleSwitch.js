import { useState } from 'react';

export default function ToggleSwitch() {

  const [toggle, setToggle] = useState(false);

  function handleToggle()  {
    setToggle(!toggle);
  }

 const text = !toggle ? 'off' : 'on';
//  const css = !toggle ? '.switch  : 'on';
  return (
    <>
   <div className="switch">
    <button className="slider round" onClick={handleToggle} />
    <span  />
   </div>
   <h1> {text} </h1>
   </>
    )
  }
