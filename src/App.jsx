import logo from './logo.svg';
import './App.css';
import ApiData from './Components/ApiData';
import FormReduce from './Components/form';
import AddProduct from './Components/AddProduct';
function App() {
  return (
    <div className="App">
    <AddProduct />
    <ApiData/>
    </div>
  );
}

export default App;
