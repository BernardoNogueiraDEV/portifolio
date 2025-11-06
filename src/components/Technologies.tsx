import { motion } from 'framer-motion'

export default function Technologies() {
  return (
    <section className="h-screen flex justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h3 className="text-2xl md:text-4xl font-semibold mb-8">Tecnologias</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg text-gray-300">
          <li className="hover:text-indigo-400 transition">React + TypeScript</li>
          <li className="hover:text-indigo-400 transition">PHP & MySQL</li>
          <li className="hover:text-indigo-400 transition">JavaScript, HTML & CSS</li>
          <li className="hover:text-indigo-400 transition">Tailwind CSS</li>
          <li className="hover:text-indigo-400 transition">Java</li>
          <li className="hover:text-indigo-400 transition">Framer Motion</li>
        </ul>
      </motion.div>
    </section>
  )
}
