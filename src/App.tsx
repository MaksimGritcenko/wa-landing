import { FC, useState } from 'react'
import { HeroSection } from './components/hero/HeroSection'
import { ServicesGrid } from './components/services/ServicesGrid'
import { StackDeepDive } from './components/stack/StackDeepDive'
import { ContactForm } from './components/contact/ContactForm'
import { SectionDivider } from './components/ui/SectionDivider'
import { FloatingLogosBackground } from './components/ui/FloatingLogosBackground'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { AboutSection } from './components/about/AboutSection'
import { PricingSection } from './components/pricing/PricingSection'
import { PortfolioSection } from './components/portfolio/PortfolioSection'
import { BlogSection } from './components/blog/BlogSection'
import { Modal } from './components/ui/Modal'
import { LegalModal } from './components/legal/LegalModal'
import { CookieConsent } from './components/ui/CookieConsent'

/**
 * Main application component
 * Assembles all landing page sections
 */
const App: FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-obsidian-900 text-obsidian-100 antialiased">
      {/* Header/Topbar */}
      <Header onContactClick={() => setIsContactModalOpen(true)} />

      {/* Floating blurred logos background - glassmorphic effect */}
      <FloatingLogosBackground count={15} className="z-10" />

      {/* Hero Section with Three.js Background */}
      <section id="hero">
        <HeroSection onContactClick={() => setIsContactModalOpen(true)} />
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* Services Grid */}
      <section id="services">
        <ServicesGrid />
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Section Divider */}
      <SectionDivider />

      {/* About Section */}
      <AboutSection />

      {/* Section Divider */}
      <SectionDivider />

      {/* Stack Deep-Dive */}
      <StackDeepDive />

      {/* Section Divider */}
      <SectionDivider />

      {/* Pricing Section */}
      <PricingSection onContactClick={() => setIsContactModalOpen(true)} />

      {/* Section Divider */}
      <SectionDivider />

      {/* Blog Section */}
      <BlogSection />

      {/* Footer */}
      <Footer
        onContactClick={() => setIsContactModalOpen(true)}
        onPrivacyClick={() => setIsPrivacyModalOpen(true)}
        onTermsClick={() => setIsTermsModalOpen(true)}
      />

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Get in Touch"
      >
        <ContactForm />
      </Modal>

      {/* Legal Modals */}
      <LegalModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        type="privacy"
      />

      <LegalModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        type="terms"
      />

      {/* Cookie Consent Banner */}
      <CookieConsent onPrivacyClick={() => setIsPrivacyModalOpen(true)} />
    </div>
  )
}

export default App
