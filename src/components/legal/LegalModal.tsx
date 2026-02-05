import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms";
}

export const LegalModal = ({ isOpen, onClose, type }: LegalModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, () => {
    if (isOpen) {
      onClose();
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.dataLayer?.push({
        event: "legal_modal_open",
        modal_type: type,
      });
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, type]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const content = {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "February 5, 2026",
      sections: [
        {
          title: "1. Information We Collect",
          content:
            "We collect information you provide directly to us when you use our services, including your name, email address, and any other information you choose to provide. We also automatically collect certain information about your device when you use our website, including your IP address, browser type, and operating system.",
        },
        {
          title: "2. How We Use Your Information",
          content:
            "We use the information we collect to provide, maintain, and improve our services, to communicate with you, to monitor and analyze trends and usage, and to protect our users and services. We may also use your information to send you marketing communications, but you can opt out at any time.",
        },
        {
          title: "3. Information Sharing",
          content:
            "We do not sell your personal information. We may share your information with service providers who perform services on our behalf, with your consent, or as required by law. We take reasonable measures to ensure that any third parties we share your information with maintain appropriate security measures.",
        },
        {
          title: "4. Data Security",
          content:
            "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
        },
        {
          title: "5. Your Rights",
          content:
            "You have the right to access, update, or delete your personal information. You can also object to processing, request data portability, and withdraw consent at any time. To exercise these rights, please contact us at info@helpandgo.net.",
        },
        {
          title: "6. Cookies",
          content:
            "We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.",
        },
        {
          title: "7. Changes to This Policy",
          content:
            'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
        },
        {
          title: "8. Contact Us",
          content:
            "If you have any questions about this Privacy Policy, please contact us at info@helpandgo.net.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "February 5, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            "By accessing and using our services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
        },
        {
          title: "2. Services",
          content:
            "Help & Go provides premium web development and design services. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.",
        },
        {
          title: "3. User Obligations",
          content:
            "You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services in any way that could damage, disable, overburden, or impair our servers or networks.",
        },
        {
          title: "4. Intellectual Property",
          content:
            "All content, features, and functionality of our services are owned by Help & Go and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our explicit permission.",
        },
        {
          title: "5. Project Agreements",
          content:
            "Specific terms for individual projects will be outlined in separate project agreements. These Terms of Service supplement but do not replace project-specific agreements.",
        },
        {
          title: "6. Payment Terms",
          content:
            "Payment terms will be specified in individual project agreements. Generally, we require a deposit before starting work and final payment upon project completion. Late payments may incur additional fees.",
        },
        {
          title: "7. Warranties and Disclaimers",
          content:
            'Our services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, timely, secure, or error-free.',
        },
        {
          title: "8. Limitation of Liability",
          content:
            "To the maximum extent permitted by law, Help & Go shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.",
        },
        {
          title: "9. Indemnification",
          content:
            "You agree to indemnify and hold Help & Go harmless from any claims, losses, damages, liabilities, and expenses arising from your use of our services or violation of these Terms.",
        },
        {
          title: "10. Governing Law",
          content:
            "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Help & Go operates, without regard to its conflict of law provisions.",
        },
        {
          title: "11. Changes to Terms",
          content:
            'We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website with a new "Last Updated" date.',
        },
        {
          title: "12. Contact Information",
          content:
            "For questions about these Terms of Service, please contact us at info@helpandgo.net.",
        },
      ],
    },
  };

  const currentContent = content[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <div ref={modalRef}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-obsidian-900/95 backdrop-blur-xl border border-obsidian-700/50 rounded-2xl shadow-2xl"
              >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="sticky top-6 right-6 float-right text-obsidian-400 hover:text-cyan-400 transition-colors duration-300 z-10"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {currentContent.title}
                </h1>
                <p className="text-obsidian-400 text-sm mb-8">
                  Last Updated: {currentContent.lastUpdated}
                </p>

                <div className="space-y-8">
                  {currentContent.sections.map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <h2 className="text-xl font-bold text-white mb-3">
                        {section.title}
                      </h2>
                      <p className="text-obsidian-300 leading-relaxed">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-obsidian-800/50">
                  <p className="text-obsidian-400 text-sm">
                    If you have any questions or concerns about this{" "}
                    {type === "privacy" ? "Privacy Policy" : "Terms of Service"}
                    , please don't hesitate to contact us.
                  </p>
                </div>
              </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
