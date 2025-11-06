import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

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
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h3
        className="text-2xl md:text-4xl font-semibold mb-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Entre em Contato
      </motion.h3>

      <motion.p
        className="text-gray-300 mb-8 max-w-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Ficarei feliz em conversar sobre projetos, oportunidades e colaborações.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <input
          type="text"
          placeholder="Seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-md px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
        <input
          type="email"
          placeholder="Seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full max-w-md px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
        <textarea
          placeholder="Sua Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full max-w-md px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 h-32 resize-none"
          required
        />
        <motion.button
          type="submit"
          className="text-lg md:text-xl text-white border border-gray-600 rounded-full px-6 py-3 hover:bg-gray-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enviar Mensagem
        </motion.button>
        {status && <p className="text-sm mt-2">{status}</p>}
      </motion.form>

      <motion.a
        href="https://www.linkedin.com/in/bernardo-nogueira-50b061379/"
        className="text-lg md:text-xl text-white m-[10px] border border-gray-600 rounded-full px-6 py-3 hover:bg-gray-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Linkedin
      </motion.a>
      <motion.a
        href="https://github.com/BernardoNogueiraDEV"
        className="text-lg md:text-xl text-white m-[10px] border border-gray-600 rounded-full px-6 py-3 hover:bg-gray-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Github
      </motion.a>

      <motion.footer
        className="fixed bottom-4 md:bottom-6 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        © {new Date().getFullYear()} Bernardo Nogueira — Desenvolvido com React, TypeScript e Tailwind CSS
      </motion.footer>
    </section>
  )
}
