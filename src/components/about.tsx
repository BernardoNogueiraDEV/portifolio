import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-10 py-24"
    >
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-full md:w-[48vw] max-w-[760px]">
            <div className="absolute -inset-6 rounded-[2rem] bg-cyan-300/15 blur-2xl" />
            <img
              src="/euFormal.png"
              alt="Bernardo Nogueira"
              className="relative h-[48vh] md:h-[72vh] w-full rounded-[2rem] border border-cyan-300/30 shadow-2xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl md:pl-4"
        >
          <p className="text-cyan-300 text-sm font-semibold tracking-[0.18em] uppercase mb-4">
            Sobre Mim
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-100 leading-tight">
            Desenvolvedor focado em produto, qualidade e evolucao continua.
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4 text-base md:text-lg">
            Sou Bernardo Alves Nogueira, tecnico em Informatica para Internet pelo SENAI.
            Atuo no desenvolvimento de aplicacoes web com foco em performance, clareza de codigo
            e experiencia do usuario.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4 text-base md:text-lg">
            Trabalho principalmente com React, TypeScript, Next.js, Node.js e bancos relacionais,
            construindo interfaces modernas e solucoes robustas para cenarios reais.
          </p>
          <p className="text-slate-300 leading-relaxed text-base md:text-lg">
            Mantenho evolucao constante em arquitetura, boas praticas e colaboracao, com ingles
            em progresso para atuar com mais eficiencia em contextos internacionais.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
