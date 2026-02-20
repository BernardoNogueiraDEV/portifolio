import React from 'react'
import Home from './components/Home'
import About from './components/about'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-8%] top-[20%] h-[26rem] w-[26rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-8%] left-[25%] h-72 w-72 rounded-full bg-sky-300/10 blur-3xl" />
      </div>

      <main className="relative z-10">
        <Home />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
