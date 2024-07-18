import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Companies from './components/Companies/Companies'
import About from './components/About/About'
import Amazon from './components/Companies/companyPages/Amazon'
import Microsoft from './components/Companies/companyPages/Microsoft'
import Arm from './components/Companies/companyPages/Arm'
import Meta from './components/Companies/companyPages/Meta'
import Adobe from './components/Companies/companyPages/Adobe'
import MondayCom from './components/Companies/companyPages/MondayCom'
import Apple from './components/Companies/companyPages/Apple'
import Nvidia from './components/Companies/companyPages/Nvidia'
import Google from './components/Companies/companyPages/Google'
import Samsung from './components/Companies/companyPages/Samsung'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/companies" element={<Companies />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/companies/Amazon" element={<Amazon />} />
                    <Route path="/companies/Microsoft" element={<Microsoft />} />
                    <Route path="/companies/Arm" element={<Arm />} />
                    <Route path="/companies/Meta" element={<Meta />} />
                    <Route path="/companies/Adobe" element={<Adobe />} />
                    <Route path="/companies/MondayCom" element={<MondayCom />} />
                    <Route path="/companies/Apple" element={<Apple />} />
                    <Route path="/companies/Nvidia" element={<Nvidia />} />
                    <Route path="/companies/Google" element={<Google />} />
                    <Route path="/companies/Samsung" element={<Samsung />} />
                </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
