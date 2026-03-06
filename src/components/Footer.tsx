import { motion } from 'framer-motion'
import { Github, Twitter, BookOpen, Users } from 'lucide-react'
import { TranslationKeys } from '../i18n/translations'

interface FooterProps {
  t: TranslationKeys
}

export function Footer({ t }: FooterProps) {
  const links = [
    { icon: BookOpen, label: t.footer.links.documentation, href: '#' },
    { icon: Users, label: t.footer.links.community, href: '#' },
    { icon: Github, label: t.footer.links.github, href: 'https://github.com/ModelSmart/MaudelClaw' },
    { icon: Twitter, label: t.footer.links.twitter, href: 'https://twitter.com' },
  ]

  return (
    <footer className="relative border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/50 to-transparent" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <img
                  src="/icons/icon-192x192.png"
                  alt="MaudelClaw Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="text-2xl font-bold gradient-text">MaudelClaw</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center md:justify-end"
          >
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg glass neon-border text-gray-300 hover:text-cyber-blue transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={18} />
                <span className="text-sm">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* SEO Keywords Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h4 className="text-xs font-medium text-gray-500 mb-3 text-center">{t.footer.seo.title}</h4>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {t.footer.seo.keywords.split(', ').map((keyword, index) => (
              <span
                key={index}
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors px-2 py-1"
              >
                {keyword}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500"
        >
          {t.footer.copyright}
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-cyber-blue/50 to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-cyber-purple/50 to-transparent" />
      </div>
    </footer>
  )
}
