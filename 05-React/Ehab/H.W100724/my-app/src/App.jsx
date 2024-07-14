import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Companies from './Companies';

function App() {
  const a1 = 7;

  if (a1 > 8) {
    return (<div>No data</div>);
  }

  return (
    <div className="App">
        <BrowserRouter> 
                <Routes> 
                    <Route path="/" element={<Home/>} /> 
                    <Route path="/companies" element={<Companies />} /> 
                </Routes> 
        </BrowserRouter> 
    </div>
  );
}

export default App;
