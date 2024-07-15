import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Companies from './components/Companies/Companies'
import About from './components/About/About'
import { Amazon } from './components/Companies/Amazon/Amazon'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/companies" element={<Companies />} />
                    <Route path="/companies/Amazon" element={<Amazon />} />
                    <Route path="/About" element={<About />} />
                </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
