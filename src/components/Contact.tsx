import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Enviando...')

    try {
      const response = await fetch('/api/send_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      const result = await response.json()
      if (result.success) {
        setStatus('Email enviado com sucesso!')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('Falha ao enviar: ' + result.message)
      }
    } catch (error) {
      console.error(error)
      setStatus('Erro ao enviar o email.')
    }
  }

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-center">Entre em Contato</h3>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-center">
          Vamos conversar sobre projetos, oportunidades ou colaboracoes.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/55"
            required
          />
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/55"
            required
          />
          <textarea
            placeholder="Sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-32 resize-none rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/55"
            required
          />

          <button
            type="submit"
            className="mt-1 rounded-xl border border-cyan-300/45 bg-cyan-300/10 px-6 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
          >
            Enviar mensagem
          </button>

          {status && <p className="text-sm text-slate-300">{status}</p>}
        </form>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="https://www.linkedin.com/in/bernardo-nogueira-50b061379/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-800/60 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/45 hover:text-cyan-100"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/BernardoNogueiraDEV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-800/60 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/45 hover:text-cyan-100"
          >
            GitHub
          </a>
        </div>
      </motion.div>

      <footer className="mt-8 text-slate-500 text-sm text-center">
        (c) {new Date().getFullYear()} Bernardo Nogueira - React, TypeScript e Tailwind CSS
      </footer>
    </section>
  )
}
