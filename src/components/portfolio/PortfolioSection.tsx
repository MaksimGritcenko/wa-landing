import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

const projects = [
  {
    id: 1,
    title: 'Internal MVP — SaaS Platform',
    category: 'Internal Build',
    description: 'A full-stack MVP built to validate a SaaS idea in under 3 weeks. Designed system architecture for scale, built authentication, dashboards, and API layer. Focused on performance and SEO from day one.',
    problem: 'Founders needed a production-ready MVP fast, without painting themselves into technical debt.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    image: '/portfolio-1.jpg',
  },
  {
    id: 2,
    title: 'Client Prototype (NDA)',
    category: 'Concept MVP',
    description: 'A secure web application prototype for an early-stage startup. Rapid prototyping with real backend logic, production-grade security and deployment, and clean, extensible codebase for future growth.',
    problem: 'Investor demo required a working product, not mockups.',
    tags: ['React', 'NestJS', 'MySQL', 'Nginx'],
    image: '/portfolio-2.jpg',
  },
  {
    id: 3,
    title: 'Concept Project — Mobile Application',
    category: 'Mobile Application',
    description: 'A mobile app concept built to explore UX flows and performance on real devices. Built cross-platform mobile app, integrated maps, authentication, and API communication. Optimized for real-world usage, not demos.',
    problem: 'Validate idea usability before full investment.',
    tags: ['React Native', 'Expo', 'GraphQL'],
    image: '/portfolio-3.jpg',
  },
  {
    id: 4,
    title: 'Fitness Mobile App',
    category: 'Mobile Application',
    description: 'Workout tracking app with social features and AI coaching',
    tags: ['React Native', 'Firebase', 'TensorFlow', 'Redux'],
    image: '/portfolio-4.jpg',
  },
  {
    id: 5,
    title: 'Restaurant Booking System',
    category: 'Web Application',
    description: 'Table reservation platform with menu management',
    tags: ['NextJs', 'Laravel', 'MySQL', 'Stripe'],
    image: '/portfolio-5.jpg',
  },
  {
    id: 6,
    title: 'Financial Analytics Tool',
    category: 'SaaS Platform',
    description: 'Investment portfolio tracker with real-time market data',
    tags: ['React', 'Python', 'FastAPI', 'Chart.js'],
    image: '/portfolio-6.jpg',
  },
];

export const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, () => {
    if (selectedProject) {
      setSelectedProject(null);
    }
  });

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

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
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Selected Work & <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <div className="text-obsidian-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed space-y-4">
            <p className="font-medium">We don't believe in pretending.</p>
            <p>Some of the projects below are <strong>internal builds, concept MVPs, or NDA-protected work</strong>. They represent how we think, how we build, and how we solve real product problems — not just pretty UI.</p>
            <div className="text-left max-w-2xl mx-auto mt-6 space-y-2">
              <p className="text-base font-medium text-cyan-400">Every project follows the same principles:</p>
              <ul className="list-disc list-inside space-y-1 text-base">
                <li>Clear product thinking before code</li>
                <li>Modern, scalable tech stacks</li>
                <li>Performance, SEO, and long-term maintainability</li>
                <li>Decisions explained, not hidden</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

        {/* NDA Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="p-6 bg-obsidian-900/50 border border-obsidian-800/50 rounded-xl">
            <p className="text-obsidian-400 text-base italic">
              <strong className="text-cyan-400">Note:</strong> Some client work is protected by NDA. We're happy to walk you through real examples during a private call.
            </p>
          </div>
        </motion.div>
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
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
              <div ref={modalRef}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
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

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {selectedProject.title}
                  </h3>

                  {selectedProject.problem && (
                    <div className="mb-6">
                      <h4 className="text-cyan-400 font-semibold mb-2">Problem:</h4>
                      <p className="text-obsidian-300 text-base leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-cyan-400 font-semibold mb-2">What we did:</h4>
                    <p className="text-obsidian-300 text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-obsidian-400 text-sm font-medium mb-3">Stack:</h4>
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
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
