import { useState } from 'react';
import './Accordian.css'

export default function AccordionCreation({list}) {
  const [status, setStatus] = useState(0);

  function handleStatus(index) {
    setStatus(index);
  }


  return (
    <>
      <AccordianMechanics status={status} customOnClick={handleStatus} list={list}/>
    </>
       )
}

 export function AccordianMechanics({list, customOnClick, status}) {

  const listItems = list.map(list =>
    <li key={list.id}>
      <button onClick={() => customOnClick(list.id)}> {list.name} </button>
      {list.id === status ? (
      <p> {list.text} </p>
      ): undefined }
    </li>)



    return (
      <>
      <div className='box'>
        <ul> {listItems} </ul>
      </div>
      </>
    )

 }
