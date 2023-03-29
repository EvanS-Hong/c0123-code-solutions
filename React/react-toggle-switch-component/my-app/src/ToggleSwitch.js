import { useState } from 'react';

export default function ToggleSwitch() {

  const [toggle, setToggle] = useState(false);

  function handleToggle()  {
    setToggle(!toggle);
  }

 const text = !toggle ? 'Off' : 'On';
  return (
    <>
      <label className="switch">
        <input onClick={handleToggle} type="checkbox" />
          <span className="slider round"></span>
      </label>
   <h1> {text} </h1>
   </>
    )
  }
