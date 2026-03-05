import { motion } from 'framer-motion'
import { Download as DownloadIcon, Apple, Monitor, Globe, CheckCircle, ArrowRight } from 'lucide-react'
import { TranslationKeys } from '../i18n/translations'

interface DownloadProps {
  t: TranslationKeys
}

export function Download({ t }: DownloadProps) {
  const platforms = [
    {
      id: 'macos',
      icon: Apple,
      title: t.download.platform.macos.title,
      version: t.download.platform.macos.version,
      buttonText: t.download.platform.macos.download,
      color: 'cyber-blue',
      available: true,
    },
    {
      id: 'windows',
      icon: Monitor,
      title: t.download.platform.windows.title,
      version: t.download.platform.windows.version,
      buttonText: t.download.platform.windows.download,
      color: 'cyber-purple',
      available: true,
    },
    {
      id: 'web',
      icon: Globe,
      title: t.download.platform.web.title,
      version: t.download.platform.web.version,
      buttonText: t.download.platform.web.launch,
      color: 'cyber-pink',
      available: true,
    },
  ]

  const requirements = [
    t.download.requirements.ram,
    t.download.requirements.storage,
    t.download.requirements.network,
    t.download.requirements.optional,
  ]

  const quickStartSteps = [
    t.download.quickStart.step1,
    t.download.quickStart.step2,
    t.download.quickStart.step3,
  ]

  const colorMap: Record<string, string> = {
    'cyber-blue': '#00f0ff',
    'cyber-purple': '#bf00ff',
    'cyber-pink': '#ff006e',
    'cyber-green': '#39ff14',
  }

  return (
    <section id="download" className="py-24 relative tech-grid">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t.download.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.download.subtitle}
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card text-center group relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${colorMap[platform.color]}20 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${colorMap[platform.color]}30 0%, ${colorMap[platform.color]}10 100%)`,
                    border: `2px solid ${colorMap[platform.color]}50`,
                  }}
                >
                  <platform.icon size={40} style={{ color: colorMap[platform.color] }} />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {platform.title}
                </h3>

                <p className="text-sm text-gray-400 mb-6">
                  {platform.version}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  style={{
                    background: `linear-gradient(135deg, ${colorMap[platform.color]} 0%, ${colorMap[platform.color]}80 100%)`,
                    color: platform.color === 'cyber-green' ? '#000' : '#fff',
                  }}
                >
                  <DownloadIcon size={20} />
                  <span>{platform.buttonText}</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Requirements & Quick Start */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* System Requirements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <Monitor size={24} className="text-cyber-blue" />
              <span>{t.download.requirements.title}</span>
            </h3>

            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle size={20} className="text-cyber-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{req}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Start */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <ArrowRight size={24} className="text-cyber-purple" />
              <span>{t.download.quickStart.title}</span>
            </h3>

            <div className="space-y-6">
              {quickStartSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-gray-300">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto neon-border">
            <p className="text-lg text-gray-300 mb-4">
              {t.hero.description}
            </p>
            <motion.a
              href="#download"
              className="btn-primary inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DownloadIcon size={20} />
              <span>{t.hero.cta.download}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
