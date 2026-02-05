import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
];

const teamValues = [
  {
    icon: '🎯',
    title: 'Mission-Driven',
    description: 'We build digital solutions that solve real business problems and drive measurable results.',
  },
  {
    icon: '⚡',
    title: 'Innovation First',
    description: 'Staying ahead of the curve with cutting-edge technologies and modern development practices.',
  },
  {
    icon: '🤝',
    title: 'Client Partnership',
    description: 'Your success is our success. We work collaboratively to bring your vision to life.',
  },
  {
    icon: '🔒',
    title: 'Quality Assured',
    description: 'Rigorous testing, clean code, and enterprise-grade security in every project we deliver.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-6 md:px-8 overflow-hidden">
      {/* Background gradient */}
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
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Help & Go</span>
          </h2>
          <p className="text-obsidian-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We're a premium web development agency specializing in building high-performance,
            scalable digital solutions for businesses ready to transform their online presence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center p-6 bg-obsidian-900/50 backdrop-blur-sm border border-obsidian-800/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-obsidian-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {teamValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="p-8 bg-obsidian-900/50 backdrop-blur-sm border border-obsidian-800/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-obsidian-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-obsidian-300 text-lg mb-6">
            Ready to start your next project?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.dataLayer?.push({
                event: 'cta_click',
                button_name: 'lets_talk',
                button_location: 'about_section',
              });
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};
