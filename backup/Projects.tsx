import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Semantic Body of Knowledge and Technology',
    description: 'A comprehensive semantic knowledge management platform for organizing and accessing technical information.',
    tags: ['Knowledge Management', 'Semantic Web', 'Technology'],
    link: 'https://kulliyyah.iium.edu.my/kict/sbkt/',
    github: '#',
    image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
  },
  {
    title: 'Weather Monitoring System',
    description: 'A comprehensive weather monitoring platform built with React and real-time data integration.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    link: 'https://weather-monitoring-system-production.up.railway.app',
    github: 'https://github.com/alinafatale/Weather-Monitoring-System-',
    image: 'bg-gradient-to-br from-purple-500 to-pink-500',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with product management, cart, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-green-500 to-emerald-500',
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-slate-600 transition-colors duration-200"
            >
              <div className={`${project.image} h-40`} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-slate-700 text-slate-200 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    View
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
