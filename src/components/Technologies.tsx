import React from 'react'
import { motion } from 'framer-motion'

const techs = [
  'React + TypeScript',
  'Next.js',
  'Node.js',
  'JavaScript (ESNext)',
  'PostgreSQL + MySQL',
  'Tailwind CSS',
  'Framer Motion'
]

export default function Technologies() {
  return (
    <section className="min-h-screen flex justify-center items-center px-6 md:px-12 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full text-center"
      >
        <h3 className="text-3xl md:text-4xl font-semibold mb-8">Tecnologias</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-slate-200">
          {techs.map((tech) => (
            <li
              key={tech}
              className="rounded-xl border border-cyan-300/25 bg-cyan-300/5 px-4 py-4 text-sm md:text-base font-medium transition hover:border-cyan-300/45 hover:bg-cyan-300/10"
            >
              {tech}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
