import { motion } from 'framer-motion';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$2,999',
    originalPrice: '$5,998',
    discount: '50%',
    description: 'Perfect for small businesses and startups',
    features: [
      'Responsive landing page',
      'Up to 5 pages',
      'Mobile-first design',
      'Contact form integration',
      'Basic SEO optimization',
      '1 month support',
      'Fast delivery (2 weeks)',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$7,999',
    originalPrice: '$15,998',
    discount: '50%',
    description: 'Ideal for growing businesses',
    features: [
      'Custom web application',
      'Up to 15 pages',
      'Advanced animations',
      'CMS integration',
      'Advanced SEO & Analytics',
      'API integration',
      'E-commerce functionality',
      '3 months support',
      'Priority delivery',
    ],
    highlighted: true,
    cta: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale projects',
    features: [
      'Unlimited pages',
      'Custom backend development',
      'Microservices architecture',
      'Advanced security features',
      'Third-party integrations',
      'Performance optimization',
      'Load balancing & scaling',
      '12 months premium support',
      'Dedicated project manager',
      'White-glove service',
    ],
    highlighted: false,
    cta: 'Contact Sales',
  },
];

interface PricingSectionProps {
  onContactClick: () => void;
}

export const PricingSection = ({ onContactClick }: PricingSectionProps) => {
  return (
    <section id="pricing" className="relative py-32 px-6 md:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />

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
            Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-obsidian-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your project. All plans include our quality guarantee
            and can be customized to fit your specific needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-gradient-to-b from-cyan-500/10 to-purple-500/10 border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/20 md:scale-105'
                  : 'bg-obsidian-900/50 border border-obsidian-800/50 hover:border-cyan-500/30'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white text-sm font-medium">
                  Recommended
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-obsidian-400 text-sm">{tier.description}</p>
              </div>

              <div className="mb-8">
                {'originalPrice' in tier && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl text-obsidian-500 line-through">
                      {tier.originalPrice}
                    </span>
                    <span className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-xs font-bold">
                      SAVE {tier.discount}
                    </span>
                  </div>
                )}
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span className="text-obsidian-500 ml-2">/project</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start text-obsidian-300">
                    <svg
                      className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  window.dataLayer?.push({
                    event: 'pricing_cta_click',
                    package_name: tier.name,
                    package_price: tier.price,
                    cta_text: tier.cta,
                  });
                  onContactClick();
                }}
                className={`w-full py-4 rounded-lg font-medium transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105'
                    : 'bg-obsidian-800 text-obsidian-300 hover:bg-obsidian-700 hover:text-white'
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-obsidian-400 text-sm">
            All prices are starting estimates. Final pricing depends on project scope and requirements.
          </p>
          <p className="text-obsidian-400 text-sm mt-2">
            Need something different? <button onClick={() => {
              window.dataLayer?.push({
                event: 'cta_click',
                button_name: 'contact_custom_quote',
                button_location: 'pricing_section',
              });
              onContactClick();
            }} className="text-cyan-400 hover:text-cyan-300 underline">Contact us</button> for a custom quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
