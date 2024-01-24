import  './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import ListEmployeeComponent from './components/ListEmploye';
import ConditionalRendering from './components/ConditionalRendering';

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
    </div>
  );
}

export default App;
