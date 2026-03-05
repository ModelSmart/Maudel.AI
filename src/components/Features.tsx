import { motion } from 'framer-motion'
import {
  Monitor,
  Lock,
  Wrench,
  Sparkles,
  Brain,
  Database,
  MessageSquare,
  Shield
} from 'lucide-react'
import { TranslationKeys } from '../i18n/translations'

interface FeaturesProps {
  t: TranslationKeys
}

export function Features({ t }: FeaturesProps) {
  const features = [
    {
      icon: Monitor,
      title: t.features.crossPlatform.title,
      description: t.features.crossPlatform.description,
      color: 'cyber-blue',
    },
    {
      icon: Lock,
      title: t.features.localDeployment.title,
      description: t.features.localDeployment.description,
      color: 'cyber-purple',
    },
    {
      icon: Wrench,
      title: t.features.tools.title,
      description: t.features.tools.description,
      color: 'cyber-pink',
    },
    {
      icon: Sparkles,
      title: t.features.skills.title,
      description: t.features.skills.description,
      color: 'cyber-green',
    },
    {
      icon: Brain,
      title: t.features.memory.title,
      description: t.features.memory.description,
      color: 'cyber-blue',
    },
    {
      icon: Database,
      title: t.features.knowledgeBase.title,
      description: t.features.knowledgeBase.description,
      color: 'cyber-purple',
    },
    {
      icon: MessageSquare,
      title: t.features.im.title,
      description: t.features.im.description,
      color: 'cyber-pink',
    },
    {
      icon: Shield,
      title: t.features.security.title,
      description: t.features.security.description,
      color: 'cyber-green',
    },
  ]

  const colorMap: Record<string, string> = {
    'cyber-blue': '#00f0ff',
    'cyber-purple': '#bf00ff',
    'cyber-pink': '#ff006e',
    'cyber-green': '#39ff14',
  }

  return (
    <section id="features" className="py-24 relative tech-grid">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${colorMap[feature.color]}20 0%, ${colorMap[feature.color]}10 100%)`,
                  border: `1px solid ${colorMap[feature.color]}40`,
                }}
              >
                <feature.icon
                  size={28}
                  style={{ color: colorMap[feature.color] }}
                  className="group-hover:animate-pulse"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyber-blue transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div
                className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: colorMap[feature.color] }}
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-purple/50 to-transparent" />
      </div>
    </section>
  )
}
