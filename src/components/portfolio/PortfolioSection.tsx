import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Application',
    description: 'Modern e-commerce solution with real-time inventory management',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
  },
  {
    id: 2,
    title: 'Healthcare Dashboard',
    category: 'SaaS Platform',
    description: 'Patient management system with analytics and scheduling',
    tags: ['TypeScript', 'React', 'PostgreSQL', 'AWS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 3,
    title: 'Real Estate Portal',
    category: 'Web Application',
    description: 'Property listing platform with virtual tours and messaging',
    tags: ['Next.js', 'Prisma', 'Tailwind', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    id: 4,
    title: 'Fitness Mobile App',
    category: 'Mobile Application',
    description: 'Workout tracking app with social features and AI coaching',
    tags: ['React Native', 'Firebase', 'TensorFlow', 'Redux'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
  },
  {
    id: 5,
    title: 'Restaurant Booking System',
    category: 'Web Application',
    description: 'Table reservation platform with menu management',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
  },
  {
    id: 6,
    title: 'Financial Analytics Tool',
    category: 'SaaS Platform',
    description: 'Investment portfolio tracker with real-time market data',
    tags: ['React', 'Python', 'FastAPI', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
];

export const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="relative py-32 px-6 md:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-obsidian-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              onClick={() => {
                window.dataLayer?.push({
                  event: 'portfolio_click',
                  project_name: project.title,
                  project_category: project.category,
                });
                setSelectedProject(project);
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-obsidian-900/50 border border-obsidian-800/50 hover:border-cyan-500/50 transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-obsidian-900/80 backdrop-blur-sm border border-cyan-500/50 rounded-full text-cyan-400 text-xs font-medium">
                    {project.category}
                  </div>

                  {/* View Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-4 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-500/50">
                      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-obsidian-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-obsidian-800/50 text-obsidian-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-obsidian-900/95 backdrop-blur-xl border border-obsidian-700/50 rounded-2xl shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-obsidian-400 hover:text-cyan-400 transition-colors duration-300 z-10"
                  aria-label="Close modal"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Image */}
                <div className="relative h-[50vh] overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="inline-block px-4 py-2 bg-obsidian-800/50 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-4">
                    {selectedProject.category}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-obsidian-300 text-lg leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-obsidian-400 text-sm font-medium mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-cyan-400 text-sm rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
