import { motion } from "framer-motion";

interface FooterProps {
  onContactClick: () => void;
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

export const Footer = ({
  onContactClick,
  onPrivacyClick,
  onTermsClick,
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Pricing", href: "#pricing" },
    ],
    support: [
      { name: "Contact", onClick: onContactClick },
      { name: "FAQ", href: "#faq" },
      { name: "Documentation", href: "#docs" },
      { name: "Status", href: "#status" },
    ],
    legal: [
      { name: "Privacy Policy", onClick: onPrivacyClick },
      { name: "Terms of Service", onClick: onTermsClick },
      // { name: "Cookie Policy", href: "#cookies" },
      // { name: "Licenses", href: "#licenses" },
    ],
  };

  // const socialLinks = [
  //   {
  //     name: "GitHub",
  //     href: "https://github.com",
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path
  //           fillRule="evenodd"
  //           d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "LinkedIn",
  //     href: "https://linkedin.com",
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Twitter",
  //     href: "https://twitter.com",
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Instagram",
  //     href: "https://instagram.com",
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path
  //           fillRule="evenodd"
  //           d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     ),
  //   },
  // ];

  const handleNavClick = (href: string, label: string) => {
    window.dataLayer?.push({
      event: "footer_link_click",
      link_text: label,
      link_destination: href,
    });

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-obsidian-950 border-t border-obsidian-800/50 pt-16 pb-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-900/50 to-obsidian-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="Help & Go" className="h-10 w-auto" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Help & Go
                </span>
              </div>
              <p className="text-obsidian-400 text-sm leading-relaxed mb-6">
                Premium web development agency specializing in building
                high-performance, scalable digital solutions for modern
                businesses.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-3"
            >
              <a
                href="mailto:info@helpandgo.net"
                onClick={() => {
                  window.dataLayer?.push({
                    event: "contact_method_click",
                    contact_type: "email",
                    contact_value: "info@helpandgo.net",
                  });
                }}
                className="flex items-center text-obsidian-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@helpandgo.net
              </a>
              {/* <a
                href="tel:+1234567890"
                onClick={() => {
                  window.dataLayer?.push({
                    event: 'contact_method_click',
                    contact_type: 'phone',
                    contact_value: '+1-234-567-890',
                  });
                }}
                className="flex items-center text-obsidian-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (234) 567-890
              </a> */}
            </motion.div>

            {/* Social Links */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex space-x-4 mt-6"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    window.dataLayer?.push({
                      event: "social_click",
                      social_network: social.name,
                      link_url: social.href,
                    });
                  }}
                  className="p-2 bg-obsidian-900/50 hover:bg-obsidian-800 border border-obsidian-800/50 hover:border-cyan-500/50 rounded-lg text-obsidian-400 hover:text-cyan-400 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div> */}
          </div>

          <div />

          {/* Navigation Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.name);
                    }}
                    className="text-obsidian-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  {item.onClick ? (
                    <button
                      onClick={() => {
                        window.dataLayer?.push({
                          event: "footer_link_click",
                          link_text: item.name,
                          link_type: "modal",
                        });
                        item.onClick!();
                      }}
                      className="text-obsidian-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href!, item.name);
                      }}
                      className="text-obsidian-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      window.dataLayer?.push({
                        event: "legal_link_click",
                        link_text: item.name,
                        link_type: "modal",
                      });
                      item.onClick();
                    }}
                    className="text-obsidian-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-obsidian-800/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-obsidian-500 text-sm text-center md:text-left">
            © {currentYear} Help & Go. All rights reserved.
          </p>
          <p className="text-obsidian-600 text-xs text-center md:text-right">
            Built with React, TypeScript, Tailwind CSS, and Three.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
