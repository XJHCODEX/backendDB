import logo from './logo.svg';
import './App.css';
import Homies from  './components/Homies.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" 
        alt="logo" />

      </header>
      <Homies />
    </div>
  );
}

export default App;
