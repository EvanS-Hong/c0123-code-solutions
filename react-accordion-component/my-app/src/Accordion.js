import { useState } from 'react';
import './Accordian.css'

export default function AccordionCreation({list}) {
  const [index, setIndex] = useState(0);

  function handleStatus(spot) {
    index === spot ? setIndex(0) : setIndex(spot);

  }

  return (
    <>
      <AccordianMechanics spot={index} customOnClick={handleStatus} list={list}/>
    </>
       )
}

 export function AccordianMechanics({list, customOnClick, spot}) {
  const listItems = list.map(list =>
    <li key={list.id}>
      <button onClick={() => customOnClick(list.id)}> {list.name} </button>
      {list.id === spot ? (
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
