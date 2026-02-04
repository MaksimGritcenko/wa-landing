import { FC } from "react";
import { motion } from "framer-motion";
import { stackLayers } from "@/config/stack";
import { GlassCard } from "@/components/ui/GlassCard";
import { stackTableVariants, stackRowVariants } from "@/lib/animations";

/**
 * Glassmorphic table displaying technical stack expertise
 * Animated rows with staggered fade-in on scroll
 */
export const StackTable: FC = () => {
  return (
    <GlassCard className="overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stackTableVariants}
        className="overflow-x-auto"
      >
        <table className="w-full">
          <thead>
            <tr className="border-b-0.5 border-obsidian-700">
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-obsidian-300 uppercase tracking-wider">
                Layer
              </th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-obsidian-300 uppercase tracking-wider">
                Technologies
              </th>
              <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-obsidian-300 uppercase tracking-wider hidden lg:table-cell">
                Expertise Level
              </th>
            </tr>
          </thead>
          <tbody>
            {stackLayers.map((layer) => (
              <motion.tr
                key={layer.layer}
                variants={stackRowVariants}
                className="border-b-0.5 border-obsidian-800/30 last:border-b-0"
              >
                {/* Layer name */}
                <td className="px-3 sm:px-4 md:px-6 py-4 md:py-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-cyan flex-shrink-0"></div>
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-obsidian-100">
                      {layer.layer}
                    </span>
                  </div>
                </td>

                {/* Technologies */}
                <td className="px-3 sm:px-4 md:px-6 py-4 md:py-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {layer.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-accent-cyan bg-accent-cyan/10
                                 border-0.5 border-accent-cyan/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-obsidian-400 lg:hidden">
                    {layer.expertiseLevel}
                  </p>
                </td>

                {/* Expertise level (hidden on mobile) */}
                <td className="px-3 sm:px-4 md:px-6 py-4 md:py-6 hidden lg:table-cell">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full bg-accent-emerald"
                        ></div>
                      ))}
                    </div>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </GlassCard>
  );
};
