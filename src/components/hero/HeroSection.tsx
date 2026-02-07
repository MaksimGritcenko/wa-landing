import { FC } from "react";
import { motion } from "framer-motion";
import { NetworkWebBackground } from "./NetworkWebBackground";
import { KineticTypography } from "./KineticTypography";
import { fadeInUpVariants } from "@/lib/animations";

interface HeroSectionProps {
  onContactClick?: () => void;
}

/**
 * Hero section with Three.js network background and kinetic typography
 * Full viewport height with layered content
 */
export const HeroSection: FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js animated background */}
      <NetworkWebBackground />

      {/* Ambient pulse overlay - subtle breathing effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.03) 0%, transparent 70%)",
        }}
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-900/50 to-obsidian-900 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="space-y-5 sm:space-y-6 md:space-y-8"
        >
          {/* Logo */}
          <motion.div variants={fadeInUpVariants}>
            <img
              src="/logo.png"
              alt="Help & Go"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto object-contain"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeInUpVariants}
            className="text-accent-cyan text-sm md:text-base font-medium tracking-wider uppercase"
          >
            Premium Web Development Agency
          </motion.p>

          {/* Main headline */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-obsidian-100">
              Building Modern Web Applications
            </h1>

            {/* Kinetic cycling keywords */}
            <KineticTypography />
          </div>

          {/* Stats and description */}
          <motion.div
            variants={fadeInUpVariants}
            className="max-w-2xl mx-auto space-y-4 sm:space-y-6"
          >
            <p className="text-base sm:text-lg md:text-xl text-obsidian-300 leading-relaxed">
              We help teams go{" "}
              <span className="text-obsidian-100">from idea to MVP</span> —{" "}
              <span className="text-obsidian-100">
                and from legacy to modern
              </span>{" "}
              — with{" "}
              <span className="text-accent-cyan font-semibold">
                7+ years of production experience.
              </span>
            </p>

            {/* <p className="text-sm sm:text-base md:text-lg text-obsidian-400">
              Mastery in MERN, PHP, Python, and WebSocket communication.
              <br className="hidden sm:block" />
              Building scalable, production-ready systems from concept to
              deployment.
            </p> */}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeInUpVariants} className="pt-2 sm:pt-4">
            <button
              onClick={() => {
                window.dataLayer?.push({
                  event: "cta_click",
                  button_name: "hero_get_started",
                  button_location: "hero_section",
                });
                onContactClick?.();
              }}
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-accent-cyan text-obsidian-950 font-semibold rounded-lg
                       hover:bg-accent-cyan/90 transition-colors duration-300
                       border-0.5 border-accent-cyan/20 text-sm sm:text-base cursor-pointer"
            >
              Get Started
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div variants={fadeInUpVariants} className="pt-8 sm:pt-12">
            <div className="flex flex-col items-center gap-2 text-obsidian-500">
              <span className="text-xs uppercase tracking-wider">
                Scroll to explore
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
