import logo from './Blush.svg';
import './App.css';
import { Listing } from './features/Listing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Listing />
    </div>
  );
}

export default App;


