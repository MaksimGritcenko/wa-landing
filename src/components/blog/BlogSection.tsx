import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2026',
    excerpt: 'Exploring emerging trends in web technologies, from AI-powered development tools to the evolution of frontend frameworks.',
    date: 'Feb 1, 2026',
    readTime: '5 min read',
    category: 'Technology',
    image: '/blog-1.jpg',
  },
  {
    id: 2,
    title: 'Best Practices for React Performance',
    excerpt: 'Learn how to optimize your React applications for speed and efficiency with these proven techniques.',
    date: 'Jan 28, 2026',
    readTime: '8 min read',
    category: 'Development',
    image: '/blog-2.jpg',
  },
  {
    id: 3,
    title: 'Building Scalable Backend Systems',
    excerpt: 'A comprehensive guide to designing and implementing backend architectures that can handle millions of users.',
    date: 'Jan 25, 2026',
    readTime: '10 min read',
    category: 'Architecture',
    image: '/blog-3.jpg',
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="relative py-32 px-6 md:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 opacity-50" />

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
            Latest <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-obsidian-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, best practices, and insights from our team.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              onClick={() => {
                window.dataLayer?.push({
                  event: 'blog_post_click',
                  post_title: post.title,
                  post_category: post.category,
                });
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-obsidian-900/50 border border-obsidian-800/50 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/50 to-transparent opacity-60" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-obsidian-900/80 backdrop-blur-sm border border-cyan-500/50 rounded-full text-cyan-400 text-xs font-medium">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Meta */}
                  <div className="flex items-center text-obsidian-500 text-xs mb-3 space-x-3">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-obsidian-400 text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-obsidian-800 hover:bg-obsidian-700 border border-obsidian-700 hover:border-cyan-500/50 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};
