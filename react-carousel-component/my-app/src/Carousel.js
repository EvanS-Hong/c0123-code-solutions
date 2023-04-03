import { useEffect, useState } from 'react';
import './Carousel.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaCircle } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';

export default function Carousel({ pokedex }) {
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    function autoSwap() {
      incrementIndex();
    }
    const autoRotate = setInterval(autoSwap, 3000)
    return () => {
      clearInterval(autoRotate);
    }
  });


  function incrementIndex() {
    setCurrent((current + 1) % pokedex.length);
  }

  function decremenetIndex() {
    setCurrent(((current - 1) + pokedex.length) % pokedex.length);
  }

  function setIndex(x) {
    setCurrent(x);
  }

  return (
    <div className="container">
      <div className="column">
        <div className="row1">
          <div className="column-third">
            <AiOutlineArrowLeft type="button" onClick={decremenetIndex}/>
          </div>
          <div id="selectors" className="column-half">
            <img src={pokedex[current].img} alt={pokedex[current].name} />
          </div>
          <div className="column-third">
            <AiOutlineArrowRight type="button" onClick={incrementIndex} />
          </div>
        </div>
           <Buttons type="button" onClick={setIndex} count={pokedex.length} index={current} />
      </div>
    </div>

  );
}


function Buttons({ count, onClick, index }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    i === index ?
    buttons.push(
      <FaCircle
        key={i}
        onClick={() => onClick(i)}
         />)
      : buttons.push(
        <FaRegCircle
          key={i}
          onClick={() => onClick(i)}
        />)
  }
  return <div className="row2">{buttons}</div>;
}
