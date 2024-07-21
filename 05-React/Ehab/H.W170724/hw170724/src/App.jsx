import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Companies from './Companies';
import Company from "./Company";
import NotFound from './NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/Company/:companyName" element={<Company />} />
        <Route path='*' element={<NotFound />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


