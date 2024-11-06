import './App.css';
import NavBar from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Companies from './Companies';
import AboutCompany from './AboutCompany'
import CompanyDetails from './CompanyDetails';

function App() {
  return (
    <div className="App">
      
    <BrowserRouter> 
            <Routes>
                <Route path="/" element={<NavBar/>} /> 
                <Route path="/Companies" element={<Companies />} /> 
                <Route path="/AboutCompany" element={< AboutCompany/>} /> 
                <Route path="/companyDetails/:companyName" element={<CompanyDetails />} />
            </Routes> 
    </BrowserRouter> 
</div>

  );
}

export default App;

