import Home from './components/Home';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import ListEmployeeComponent from './components/ListEmploye';

function App() {
  return (
    <div>
      <SideBar />
      <NavBar />
      <Home />
      <ListEmployeeComponent />
    </div>
  );
}

export default App;
