import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Companies from './components/Companies/Companies'
import About from './components/About/About'
import CompanyDetails from './components/Companies/CompanyDetails'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/companies" element={<Companies />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/companies/:CompanyDetails" element={<CompanyDetails />} />
                </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
