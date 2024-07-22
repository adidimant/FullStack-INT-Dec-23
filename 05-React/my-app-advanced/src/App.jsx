import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Companies from './Companies';
import CompanyDetails from './CompanyDetails';
import NotFound from './NotFound';

function App({ prop1, prop2, prop3 }) {
  const a1 = 7;

  if (a1 > 8) {
    return (<div>No data</div>);
  }

  return (
    <div className="App">
        <BrowserRouter> 
                <Routes> 
                    <Route path="/" element={<Home prop1={prop1} prop2={prop2}/>} /> 
                    <Route path="/companies" element={<Companies />} /> 
                    <Route path="/companyDetails/:companyName" element={<CompanyDetails />} />
                    <Route path='*' element={<NotFound />}  />
                </Routes> 
        </BrowserRouter> 
    </div>
  );
}

export default App;
