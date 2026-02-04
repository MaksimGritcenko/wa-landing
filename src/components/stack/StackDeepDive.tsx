import { FC } from "react";
import { motion } from "framer-motion";
import { StackTable } from "./StackTable";
import { additionalSkills } from "@/config/stack";
import { fadeInUpVariants, staggerContainerVariants } from "@/lib/animations";
import { spacing } from "@/config/theme";

/**
 * Stack Deep-Dive section
 * Technical expertise matrix with additional skills
 */
export const StackDeepDive: FC = () => {
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
          <motion.div
            variants={fadeInUpVariants}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-obsidian-100 mb-3 md:mb-4">
              Technology Stack
            </h2>
            <p className="text-base sm:text-lg text-obsidian-400 max-w-2xl mx-auto px-4">
              Deep expertise across the full development lifecycle
            </p>
          </motion.div>

          {/* Stack table */}
          <motion.div variants={fadeInUpVariants} className="mb-12">
            <StackTable />
          </motion.div>

          {/* Additional skills */}
          <motion.div variants={fadeInUpVariants}>
            <h3 className="text-xl font-semibold text-obsidian-200 mb-6 text-center">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {additionalSkills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 glass-effect rounded-lg text-xs sm:text-sm text-obsidian-300
                           border-0.5 border-obsidian-700 hover:border-accent-purple/30
                           transition-colors duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience highlight */}
          {/* <motion.div variants={fadeInUpVariants} className="mt-12 md:mt-16 text-center">
            <div className="inline-block glass-effect px-6 py-4 sm:px-8 sm:py-6 rounded-lg">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-cyan mb-2">
                7+ Years
              </p>
              <p className="text-sm sm:text-base text-obsidian-400">
                Production experience building and scaling web applications
              </p>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};
