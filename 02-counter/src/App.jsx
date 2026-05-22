import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter /* setVariableName is a naming convention (a best practice)*/] = useState(15); 
  // it gives an array, the variables will be initialized with []
  let [isFirstDisabled, setIsFirstDiasbled] = useState(false);
  let [isSecDisabled, setIsSecDisabled] = useState(false);

  // let counter = 15;

  const addValue = () => {
    if(counter + 1 === 20) {setIsFirstDiasbled(true)};
    setCounter(counter + 1);
  }

  const removeValue = () => {
    if(counter - 1 === 0) {setIsSecDisabled(true)};
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      disabled={isFirstDisabled}
      onClick={addValue}>Increase value {counter}</button>
      <br />
      <button
      disabled={isSecDisabled}
      onClick={removeValue}>Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
