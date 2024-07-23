
// useMemo is a hook that will only recompute the memoized value when one of the dependencies has changed. 
//  הוא הוק שיחשב מחדש את הערך הממוזכר רק כאשר אחת מהתלות השתנתה

import { useMemo, useState } from "react"

export default function Memo() {

    const [counterOne, setCounterOne]= useState(0)
    const [counterTwo, setCounterTwo]= useState(0)

    const changeOne = () => {setCounterOne(prev => prev + 1)}
    const changeTwo = () => {setCounterTwo(prev => prev + 1)}

    const isEven =   useMemo(() => {
        let i = 0
        while(i < 2000000000) i++

        return counterOne % 2 === 0
    }, [counterOne])

    

  return (
    <div>
      <button onClick={changeOne}> {counterOne} </button>
      {isEven ? 'Even' : 'Odd'}
      <button onClick={changeTwo}> {counterTwo} </button>
    </div>
  )
}

