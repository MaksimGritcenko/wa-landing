import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface CookieConsentProps {
  onPrivacyClick: () => void;
}

export const CookieConsent = ({ onPrivacyClick }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show banner after a short delay
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    window.dataLayer?.push({
      event: 'cookie_consent',
      consent_action: 'accept',
    });
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    window.dataLayer?.push({
      event: 'cookie_consent',
      consent_action: 'decline',
    });
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-obsidian-900/95 backdrop-blur-xl border border-obsidian-700/50 rounded-2xl shadow-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start mb-3">
                    <svg
                      className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        Cookie Notice
                      </h3>
                      <p className="text-obsidian-300 text-sm leading-relaxed">
                        We use cookies to enhance your browsing experience, analyze site traffic,
                        and personalize content. By clicking "Accept All", you consent to our use
                        of cookies.{' '}
                        <button
                          onClick={onPrivacyClick}
                          className="text-cyan-400 hover:text-cyan-300 underline"
                        >
                          Learn more
                        </button>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <motion.button
                    onClick={handleDecline}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-obsidian-800 hover:bg-obsidian-700 border border-obsidian-700 rounded-lg text-obsidian-300 hover:text-white font-medium transition-all duration-300 text-sm"
                  >
                    Decline
                  </motion.button>
                  <motion.button
                    onClick={handleAccept}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 text-sm"
                  >
                    Accept All
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
