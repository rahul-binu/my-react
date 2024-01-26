import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import ListEmployeeComponent from './components/ListEmploye';
import ConditionalRendering from './components/ConditionalRendering';
import { useState } from 'react';

const user = {
  name: 'ram',
  age: '20',
  college: 'nss'
}

function MyButton() {
  return (
    <>
      <button>Click me</button>
      <p>hai</p>
    </>
  );
}

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }
  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function App() {
  return (
    <div>
      <SideBar />
      <NavBar />
      <Home />
      <MyButton />
      <hr />
      <div className="userContent">
        <h3>hello my name is : <j>{user.name}</j> </h3>
        <h3>iam {user.age} years old</h3>
      </div>
      <ConditionalRendering />
      <Board />
    </div>
  );
}

export default App;
