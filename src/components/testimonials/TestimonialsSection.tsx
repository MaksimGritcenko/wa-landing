import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah',
    rating: 5,
    text: 'Working with this team was a game-changer for our startup. They delivered a production-ready MVP in just 3 weeks that helped us secure our seed round. The code quality and architecture decisions were spot-on — no technical debt to deal with later.',
  },
  {
    id: 2,
    name: 'Marcus',
    rating: 5,
    text: 'After struggling with another agency for 6 months, we switched to this team and had our healthcare platform live in 8 weeks. Their understanding of scalability and security was exactly what we needed. Best decision we made.',
  },
  {
    id: 3,
    name: 'Elena',
    rating: 5,
    text: 'What impressed me most was their product thinking. They didn\'t just code what we asked — they challenged our assumptions and suggested better solutions. The result? A product our users actually love.',
  },
  {
    id: 4,
    name: 'James',
    rating: 5,
    text: 'They rebuilt our legacy system without disrupting our users. Zero downtime, clean migration, and a massive performance improvement. Our load times went from 8 seconds to under 1 second.',
  },
  {
    id: 5,
    name: 'Priya',
    rating: 5,
    text: 'Professional, responsive, and incredibly skilled. They integrated with our existing team seamlessly and delivered features that our internal team had been struggling with for months. The documentation they provided was exceptional.',
  },
  {
    id: 6,
    name: 'David',
    rating: 5,
    text: 'Best agency we\'ve worked with, hands down. They understand both the technical and business side. Our real-time tracking platform now handles 100K+ concurrent users without breaking a sweat.',
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-32 px-6 md:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 opacity-50" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />

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
            What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-obsidian-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what founders and CTOs say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="h-full p-8 rounded-xl bg-obsidian-900/50 border border-obsidian-800/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-obsidian-300 text-base leading-relaxed mb-6">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-obsidian-800/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold text-lg">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-obsidian-900/50 border border-obsidian-800/50 rounded-full">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border-2 border-obsidian-900 flex items-center justify-center"
                >
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">5.0 Average Rating</div>
              <div className="text-obsidian-400 text-sm">From 50+ Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
