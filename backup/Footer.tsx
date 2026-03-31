import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <p className="text-slate-400 mb-4">
          © {currentYear} Alia Alina. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm">
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </motion.div>
    </footer>
  )
}
