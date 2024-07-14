import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Account from './Account';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BrowserRouter> 
                <Routes> 
                    <Route path="/" element={<HomePage/>} /> 
                    <Route path="/account" element={<Account/>} />
                </Routes> 
        </BrowserRouter>
       
      </header>
    </div>
  );
}

export default App;
