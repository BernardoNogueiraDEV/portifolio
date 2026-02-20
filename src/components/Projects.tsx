import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex justify-center items-center px-6 md:px-12 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full"
      >
        <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Projetos</h3>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="group rounded-3xl border border-slate-700 bg-slate-900/65 overflow-hidden transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_20px_60px_rgba(8,145,178,0.2)]">
            <div className="h-52 w-full overflow-hidden">
              <img
                src="/AcaoAmigos.png"
                alt="Preview Acao entre Amigos"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-200">React + TypeScript</p>
              <h4 className="text-2xl font-semibold mb-2">Acao entre Amigos</h4>
              <p className="text-slate-300 mb-5">
                Plataforma de rifas online com fluxo simples e foco em usabilidade.
              </p>
              <Button
                variant="secondary"
                className="rounded-xl border border-cyan-300/35 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/20"
                onClick={() => window.open('https://rifa3ano.vercel.app', '_blank', 'noopener,noreferrer')}
              >
                Ver projeto
              </Button>
            </CardContent>
          </Card>

          <Card className="group rounded-3xl border border-slate-700 bg-slate-900/65 overflow-hidden transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_20px_60px_rgba(8,145,178,0.2)]">
            <div className="h-52 w-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.25),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_35%)] flex items-center justify-center border-b border-slate-700">
              <h4 className="text-4xl font-extrabold tracking-tight text-cyan-100">LawRisk</h4>
            </div>
            <CardContent className="p-6">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-200">IA + Analise Juridica</p>
              <h4 className="text-2xl font-semibold mb-2">LawRisk</h4>
              <p className="text-slate-300 mb-5">
                Sistema de analise preditiva de riscos juridicos com apoio de inteligencia artificial.
              </p>
              <Button
                variant="secondary"
                className="rounded-xl border border-cyan-300/35 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/20"
                onClick={() => window.open('https://lawrisk.vercel.app', '_blank', 'noopener,noreferrer')}
              >
                Ver projeto
              </Button>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}
