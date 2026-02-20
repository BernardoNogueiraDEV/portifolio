import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  useEffect(() => {
    const text = 'Ola, eu sou Bernardo!'
    let index = 0
    let isDeleting = false

    function typeEffect(element: HTMLElement) {
      if (!isDeleting && index < text.length) {
        element.textContent = text.slice(0, index + 1)
        index++
      } else if (isDeleting && index > 0) {
        element.textContent = text.slice(0, index - 1)
        index--
      }

      if (index === text.length) {
        setTimeout(() => {
          isDeleting = true
        }, 3000)
      } else if (index === 0) {
        isDeleting = false
      }

      const speed = isDeleting ? 45 : 85
      setTimeout(() => typeEffect(element), speed)
    }

    const timer = setTimeout(() => {
      const element = document.getElementById('ola')
      if (element) typeEffect(element)
    }, 120)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 py-24">
      <motion.div
        className="mx-auto max-w-6xl w-full"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
          Portfolio 2026
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4" id="ola">
          Ola, eu sou Bernardo!
        </h1>
        <p className="max-w-2xl text-base md:text-xl text-slate-300 mb-8">
          Desenvolvedor web focado em interfaces premium, performance e produtos com visual moderno.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
          >
            Ver projetos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-800/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/40 hover:text-cyan-100"
          >
            Falar comigo
          </a>
        </div>
      </motion.div>
    </section>
  )
}
