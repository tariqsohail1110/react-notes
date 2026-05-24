import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [btnText, setBtnText] = useState('Copy');

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numAllowed) str += '0123456789';
    if(charAllowed) str += '!@#$%^&*-_+=[]{}~`';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed,charAllowed, setPassword]); //setPassword for optimiation (not necessary)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3); //to select ranged values
    window.navigator.clipboard.writeText(password);
  }, [password]) //reference as copy button will interact with password only

  const handleClick = () => {
    setBtnText('Copied');
  }
  //useEffect to sync the component and external code
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 pb-4'>
        <h1 className='text-white text-2xl text-center my-3 pt-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={() => { //onClick={copyPasswordToClipboard}
            copyPasswordToClipboard(); handleClick() }}
          className='outline-none bg-blue-700 hover:bg-blue-900 duration-300 text-white px-3 py-0.5 shrink-0 w-20'>{btnText}</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value);
              setBtnText('Copy');
            }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={() => {
              setNumAllowed((prev) => !prev);
              setBtnText('Copy');
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
              setBtnText('Copy');
            }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
