import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 gap-10">
      <motion.div
        className="flex flex-col justify-center max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4" id='ola'></h1>
        <h2 className="text-xl text-gray-300 mb-6">
          Desenvolvedor Web focado em soluções otimizadas e organizadas.
        </h2>
      </motion.div>
    </section>
  )
}
// script de animação de digitação do ola
const text = "Olá, eu sou Bernardo!";
let index = 0;
let isDeleting = false;

function typeEffect() {
    const element = document.getElementById('ola');
    if (!element) return;

    if (!isDeleting && index < text.length) {
        element.textContent = text.slice(0, index + 1);
        index++;
    } else if (isDeleting && index > 0) {
        element.textContent = text.slice(0, index - 1);
        index--;
    }

    if (index === text.length) {
        setTimeout(() => {
            isDeleting = true;
        }, 3000);
    } else if (index === 0) {
        isDeleting = false;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

window.onload = typeEffect;
