import { FC } from 'react'
import { HeroSection } from './components/hero/HeroSection'
import { ServicesGrid } from './components/services/ServicesGrid'
import { StackDeepDive } from './components/stack/StackDeepDive'
import { ContactForm } from './components/contact/ContactForm'
import { SectionDivider } from './components/ui/SectionDivider'
import { FloatingLogosBackground } from './components/ui/FloatingLogosBackground'

/**
 * Main application component
 * Assembles all landing page sections
 */
const App: FC = () => {
  return (
    <div className="relative min-h-screen bg-obsidian-900 text-obsidian-100 antialiased">
      {/* Floating blurred logos background - glassmorphic effect */}
      <FloatingLogosBackground count={15} className="z-10" />

      {/* Hero Section with Three.js Background */}
      <HeroSection />

      {/* Section Divider */}
      <SectionDivider />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Section Divider */}
      <SectionDivider />

      {/* Stack Deep-Dive */}
      <StackDeepDive />

      {/* Section Divider */}
      <SectionDivider />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="py-8 bg-obsidian-950 border-t-0.5 border-obsidian-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-obsidian-500 text-sm">
            © {new Date().getFullYear()} Premium Web Agency. All rights reserved.
          </p>
          <p className="text-obsidian-600 text-xs mt-2">
            Built with React, TypeScript, Tailwind CSS, and Three.js
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
