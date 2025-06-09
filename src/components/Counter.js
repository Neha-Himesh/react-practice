import React, {useState} from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const [time, setTime] = useState('')
    const increment = () =>{
        setCount(prevState => prevState + 1)
    }
    const decrement = () =>{
        setCount(prevState => prevState - 1)
    }
    const reset = () =>{
        setCount(0)
    }
    const incrementBy5 = () =>{
        setCount(prevState => prevState + 5)
    }
    const showTime = () =>{
       const currentDate = new Date()
       setTime(`${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`)
    }
  return (
    <div>
        {count}
        {time}
        <button type="button" onClick={increment}>Increment</button>
        <button type="button" onClick={decrement}>Decrement</button>
        <button type="button" onClick={reset}>Reset</button>
        <button type="button" onClick={incrementBy5}>Increment By 5</button>
        <button type="button" onClick={showTime}>ShowTime</button>

    </div>
  )
}
