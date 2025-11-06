import React from 'react'
import Home from './components/Home'
import About from './components/about'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  )
}
