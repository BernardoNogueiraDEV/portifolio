import React from 'react' 
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

export default function Projects() {
  return (
    <section id='projects' className="h-screen flex justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full"
      >
        <h3 className="text-2xl md:text-4xl font-semibold mb-8 text-center">Projetos</h3>
        <div className="grid md:grid-cols-2 gap-8">

          <Card className="bg-gray-800/80 border border-gray-700 hover:scale-105 transition-transform overflow-hidden">
            <div className="h-48 w-full overflow-hidden">
              <img
                src="/AcaoAmigos.png"
                alt="Preview Sistema de Rifas"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <h4 className="text-2xl font-semibold mb-2">Ação entre Amigos</h4>
              <p className="text-gray-300 mb-4">
                Sistema de rifas online desenvolvido com React, Typescript e tailwildcss.
              </p>
            <Button variant="secondary" onClick={() => window.open('https://rifa3ano.vercel.app', '_blank', 'noopener,noreferrer')}>Ver projeto</Button>
            </CardContent>
                        <CardContent className="p-6">
              <h4 className="text-2xl font-semibold mb-2">LawRisk</h4>
              <p className="text-gray-300 mb-4">
                Sistema de análise preditiva de riscos jurídicos com IA 
              </p>
            <Button variant="secondary" onClick={() => window.open('https://lawrisk.vercel.app', '_blank', 'noopener,noreferrer')}>Ver projeto</Button>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}
