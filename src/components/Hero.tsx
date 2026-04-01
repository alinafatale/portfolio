import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Nur Alia Alina
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-700 mb-8">
          Cybersecurity & Risk Management Portfolio
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Aspiring Cybersecurity Analyst specializing in Risk , Compliance and Security Analysis .
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200 text-white"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
