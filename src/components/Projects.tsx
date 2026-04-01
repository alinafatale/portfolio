import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Risk Assessment & Risk Treatment Transport Sector',
    description: 'Full-stack e-commerce solution with product management, cart, and payment integration.',
    tags: ['Risk Management', 'Transport', 'Assessment'],
    link: 'https://docs.google.com/document/d/1WwFMiAMs18cX8pmX4YZxQ5WOeAKdbYkHKr-lMyQtt3M/edit?usp=sharing',
    github: '',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=300&fit=crop',
  },
  {
    title: 'Business Continuity & Disaster Plan of TNB',
    description: 'Comprehensive business continuity and disaster recovery planning for organizational resilience.',
    tags: ['Business Continuity', 'Disaster Recovery', 'Planning'],
    link: 'https://docs.google.com/document/d/1B-Ppk3O6AN2tp3blxZpNNCAn5mgDD4YDxdYJUY4qqbg/edit?usp=sharing',
    github: '',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  },
  {
    title: 'Weather Monitoring System',
    description: 'A comprehensive weather monitoring platform built with React and real-time data integration.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    link: 'https://weather-monitoring-system-production.up.railway.app',
    github: 'https://github.com/alinafatale/Weather-Monitoring-System-',
    image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=300&fit=crop',
  },
  {
    title: 'Semantic Body of Knowledge and Technology',
    description: 'Customized layout using Elementor and optimized for desktop website performance.',
    tags: ['Knowledge Management', 'Semantic Web', 'Technology'],
    link: 'https://kulliyyah.iium.edu.my/kict/sbkt/',
    github: '',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
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
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Featured <span className="text-emerald-600">Projects</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    View
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
