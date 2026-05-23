import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card userName='Muhammad Tariq' />
      <Card userName='Muhammad Mustaqeem' btnText='visit me'/>
    </>
  )
}

export default App
