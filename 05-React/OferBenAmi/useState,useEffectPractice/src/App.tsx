import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [btnColor, setBtnColor] = useState('black')

  const twoFunc = () =>{
    changeCount()
    RandColor()
  }
  const RandColor = () =>{
    setBtnColor( (btnColor) =>  ( btnColor = `rgb(${Math.floor(Math.random()* 255)},${Math.floor(Math.random()* 255)},${Math.floor(Math.random()* 255)})`))
  }
  const changeCount = () =>{
    setCount(count+1);
  }

  useEffect(() =>{
    document.title = `You clicked ${count} times`;
    console.log(`current Color ${btnColor}`)
  },[count])


  return (
    <>
      <div>{count}</div>
      <button className='upBtn' style={{backgroundColor: btnColor }} onClick={twoFunc}>+1</button>
    </>
  )
}

export default App
