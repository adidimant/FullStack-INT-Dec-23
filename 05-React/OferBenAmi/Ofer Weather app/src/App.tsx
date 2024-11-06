import { memo } from 'react'
import Navbar from './Components/Navbar/Navbar';
import MainContainer from './Components/MainContainer/MainContainer';
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <MainContainer/>
    </>
  )
}

export default memo(App)
