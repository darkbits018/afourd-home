import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/hero'
import Header from './components/Header'

function App() {

  return (
    <div>
      <Header />
      <Hero />
    </div>
  )
}

export default App
