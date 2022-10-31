import React, {useState} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
       setCounter((prevCounter) => prevCounter + 1)
    }
  
    const decrementCounter = () => {
      setCounter((prevCounter) => prevCounter - 1)
    }
  
    return (
      <div className='App'>
        <h1>{counter}</h1>
        <button onClick={decrementCounter}>-</button>
        <button onClick={incrementCounter}>+</button>
      </div>
    );
}

export default Counter