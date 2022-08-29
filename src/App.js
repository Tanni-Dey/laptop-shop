import logo from './logo.svg';
import './App.css';
import Laptops from './components/Laptops/Laptops';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1 className='p-5'>LAPTOP SHOP</h1>
        <Laptops></Laptops>
        {/* <Questions></Questions> */}
      </div>
    </div>
  );
}

export default App;
