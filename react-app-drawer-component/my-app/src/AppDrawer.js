import { useState } from "react";
import './AppDrawer.css';

export default function AppDrawer({games}) {
  const [status, setStatus] = useState(false);
  const [title, setTitle] = useState('');



  function handleActiveStatus () {
     setStatus(!status);

  }

  function handleDrawerStatus(name) {
    handleActiveStatus();

  }

  function showGame(name) {
    handleActiveStatus();
    setTitle(name);
  }


  return (
    <>
       <img className='button' onClick={handleActiveStatus} src="https://cdn-icons-png.flaticon.com/512/56/56763.png" alt="Menu button" />
       <CreateDrawerList CC={showGame} customOnClick={handleDrawerStatus} activeStatus={status} games={games} />
       <p> {title} </p>
    </>
  );
}



export function CreateDrawerList({ games, activeStatus, customOnClick, CC}) {
  const listItems = games.map(games =>
    <li key={games.id}>
      <button onClick={() => CC(games.name)}> {games.name} </button>
    </li>
  );

if (activeStatus === true) {
  return (
    <>
      <div onClick={customOnClick} className='overlay'>
      </div>
      <div className='drawer'>
        <h2> Choose a Game </h2>
        <ul> {listItems} </ul>
      </div>

    </>
  );
}
}
