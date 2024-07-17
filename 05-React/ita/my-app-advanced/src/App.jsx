import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Companies from './Companies';
import CompanyDetail from "./CompanyDetail"

function App({ prop1, prop2, prop3 }) {
  const a1 = 7;

  if (a1 > 8) {
    return (<div>No data</div>);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home prop1={prop1} prop2={prop2}/>} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/CompanyDetail/:name" element={<CompanyDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
