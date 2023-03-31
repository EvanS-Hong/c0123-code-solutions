import './App.css';
import AppDrawer from './AppDrawer';

const games = [
  { id: '1', name: 'The Legend of Zelda'},
  { id: '2', name: 'A link to the Past'},
  { id: '3', name: 'Ocarina of Time'},
  { id: '4', name: 'The Wind Waker'},
  { id: '5', name: 'Breath of the Wild'}
];

function App() {
  return (
    <>
      <AppDrawer games={games}/>
    </>
  );
}

export default App;
