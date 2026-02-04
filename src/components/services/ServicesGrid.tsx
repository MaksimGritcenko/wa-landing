import { FC } from 'react'
import { motion } from 'framer-motion'
import { services } from '@/config/services'
import { ServiceNode } from './ServiceNode'
import { staggerContainerVariants, fadeInUpVariants } from '@/lib/animations'
import { spacing } from '@/config/theme'

/**
 * Services grid - 2x2 responsive layout
 * Displays all service offerings with staggered animations
 */
export const ServicesGrid: FC = () => {
  return (
    <section className={`${spacing.sectionPadding} bg-obsidian-900`}>
      <div className={spacing.containerWidth}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainerVariants}
        >
          {/* Section heading */}
          <motion.div variants={fadeInUpVariants} className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-obsidian-100 mb-3 md:mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-obsidian-400 max-w-2xl mx-auto px-4">
              Comprehensive solutions for modern web development challenges
            </p>
          </motion.div>

          {/* Services grid */}
          <motion.div
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeInUpVariants}>
                <ServiceNode service={service} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
