import { motion } from 'framer-motion';

interface BookCallSectionProps {
  onContactClick: () => void;
}

export const BookCallSection = ({ onContactClick }: BookCallSectionProps) => {
  return (
    <section id="book-call" className="relative py-32 px-6 md:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 opacity-50" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book a Free <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Strategy Call</span>
          </h2>
          <div className="text-obsidian-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed space-y-4">
            <p className="font-medium">No sales pitch. No pressure.</p>
            <p>Just a real conversation about your idea, your timeline, and whether we're a good fit.</p>
          </div>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-obsidian-900/50 border border-obsidian-800/50 rounded-2xl p-8 md:p-12 mb-8"
        >
          {/* What You'll Get */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-6">What you'll get in 30 minutes:</h3>
            <div className="grid gap-4">
              {[
                'Technical feasibility review',
                'MVP scope & architecture advice',
                'Honest feedback on risks and costs',
                'Clear next steps (even if we don\'t work together)',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-obsidian-300 text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Perfect For */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Perfect for:</h3>
            <ul className="space-y-2 text-obsidian-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Founders planning an MVP</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Teams rebuilding legacy systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Businesses that need results, not buzzwords</span>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <button
              onClick={() => {
                window.dataLayer?.push({
                  event: 'book_call_click',
                  location: 'book_call_section',
                });
                onContactClick();
              }}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              <span className="relative z-10">Book your free call</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <p className="text-obsidian-500 text-sm mt-4 italic">
              Limited availability — we only take a small number of projects at a time
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
