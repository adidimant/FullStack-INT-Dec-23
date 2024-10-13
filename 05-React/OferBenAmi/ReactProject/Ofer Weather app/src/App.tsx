import { useState, memo } from 'react'
import { useColdMeasureContext } from './Context/ColdMeasuringUnit';
import { useDistanceMeasureContext } from './Context/DistanceUnit';
import './App.css'

function App() {
  const { coldMeasuringUnit, dispatch: coldMeasureDispatch } = useColdMeasureContext();
  const { distanceMeasureUnit, dispatch: DistanceMeasureDispatch } = useDistanceMeasureContext();

  function handleColdMeasuringUnit(){
    if(coldMeasuringUnit === "Celsius"&& coldMeasureDispatch){
      coldMeasureDispatch('Fahrenheit')
    }
    else if(coldMeasureDispatch){
      coldMeasureDispatch('Celsius')
    }
  }

  function handleDistanceMeasuringUnit(){
    if(distanceMeasureUnit === "km"&& DistanceMeasureDispatch){
      DistanceMeasureDispatch('mile')
    }
    else if(DistanceMeasureDispatch){
      DistanceMeasureDispatch('km')
    }
  }
  return (
    <>
      <button onClick={handleColdMeasuringUnit}>current cold Unit: {coldMeasuringUnit}</button>
      <button onClick={handleDistanceMeasuringUnit}>current distance Unit: {distanceMeasureUnit}</button>
      <h1>Weather App</h1>
    </>
  )
}

export default memo(App)
