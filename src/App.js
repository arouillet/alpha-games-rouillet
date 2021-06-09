import "./App.css"
import NavBar from "./components/NavBar"
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer name="Agustín"/>
    </div>
  );
}

export default App;