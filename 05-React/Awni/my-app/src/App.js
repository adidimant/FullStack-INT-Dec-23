import NavBar from './project/NavBar';
import Pricing from './project/pages/pricing';
import About from './project/pages/about';
import Home from './project/pages/home';
import { Route, Routes } from 'react-router-dom';


function App() {

return (
  <> 
  <NavBar />
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/pricing' element={<Pricing />} /> 
        <Route path='/about' element={<About />} /> 
      </Routes>
    </div>
  </>
)
}

export default App;
