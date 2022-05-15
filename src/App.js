import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Este es el mensaje que viene del componente ItemListContainer :)" />
    </div>
  );
}

export default App;
