import React from 'react'
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="About"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gray-900 text-white"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
      >
        <img
          src="/euFormal.png"
          alt="Formação"
          className="rounded-2xl shadow-2xl w-48 h-48 md:w-72 md:h-72 object-cover border-4 border-indigo-500"
        />
      </motion.div>

      {/* Texto da formação */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-indigo-400">
          Sobre Mim
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Sou <span className="font-semibold">Bernardo Alves Nogueira</span>, formado em{" "}
          <span className="text-indigo-400 font-medium">
            Técnico em Informática para Internet
          </span>{" "}
          pelo <span className="font-semibold">SENAI</span>. Durante o curso,
          desenvolvi habilidades sólidas em{" "}
          <span className="text-indigo-400">Desenvolvimento Web</span>,
          trabalhando com tecnologias modernas e práticas de mercado.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Também concluí o ensino médio na{" "}
          <span className="font-semibold">
            Escola Estadual Maria Anália Mendes Ferreira
          </span>, conciliando estudos com projetos práticos na área de
          tecnologia.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Atualmente, continuo aprimorando meus conhecimentos em{" "}
          <span className="text-indigo-400 font-medium">
            React, TypeScript, JavaScript, PHP, MySQL, HTML, CSS, Java e SQL
          </span>
          , com foco em me tornar um desenvolvedor cada vez mais completo.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Além da área técnica, curso{" "}
          <span className="text-indigo-400 font-medium">Inglês na FISK</span>, onde
          desenvolvo comunicação fluente e compreensão avançada do idioma.
          Atualmente, possuo nível{" "}
          <span className="text-indigo-400 font-medium">B2</span>, o que me
          permite interagir com segurança em contextos profissionais e
          acadêmicos internacionais.
        </p>
      </motion.div>
    </section>
  );
}
