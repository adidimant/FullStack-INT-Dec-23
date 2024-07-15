import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Test from "./Test";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter> 
                <Routes> 
                    <Route path="/" element={<Home />} /> 
                    <Route path="/Test" element={<Test />} /> 
                    
                </Routes> 
        </BrowserRouter> 
       
      </header>
    </div>
  );
}

export default App;
