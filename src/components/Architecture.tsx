import { motion } from 'framer-motion'
import { Cpu, Database, Globe, Server, Layers, GitBranch } from 'lucide-react'
import { TranslationKeys } from '../i18n/translations'

interface ArchitectureProps {
  t: TranslationKeys
}

export function Architecture({ t }: ArchitectureProps) {
  const techStack = [
    { label: t.architecture.techStack.frontend, value: 'React + TypeScript + Vite', icon: Globe },
    { label: t.architecture.techStack.desktop, value: 'Tauri 2 (Rust)', icon: Layers },
    { label: t.architecture.techStack.backend, value: 'Hono + Node.js', icon: Server },
    { label: t.architecture.techStack.sdk, value: 'Agent SDK + Vercel AI', icon: Cpu },
    { label: t.architecture.techStack.database, value: 'SQLite / PostgreSQL', icon: Database },
    { label: t.architecture.techStack.protocol, value: 'MCP (Model Context)', icon: GitBranch },
  ]

  const workflowSteps = [
    { title: t.architecture.workflow.step1, desc: t.architecture.workflow.step1Desc },
    { title: t.architecture.workflow.step2, desc: t.architecture.workflow.step2Desc },
    { title: t.architecture.workflow.step3, desc: t.architecture.workflow.step3Desc },
    { title: t.architecture.workflow.step4, desc: t.architecture.workflow.step4Desc },
    { title: t.architecture.workflow.step5, desc: t.architecture.workflow.step5Desc },
  ]

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-dark/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t.architecture.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.architecture.subtitle}
          </p>
        </motion.div>

        {/* Three Component Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            {t.architecture.threeComponent.title}
          </h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Architecture Diagram */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Halo Desktop */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card w-full md:w-1/3 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple mx-auto mb-4 flex items-center justify-center">
                  <Monitor size={32} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {t.architecture.threeComponent.halo}
                </h4>
                <p className="text-sm text-gray-400">React + Tauri 2</p>
              </motion.div>

              {/* Connection Lines */}
              <div className="hidden md:flex items-center">
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyber-blue to-cyber-purple" />
                <div className="w-2 h-2 rounded-full bg-cyber-purple mx-2" />
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyber-purple to-cyber-pink" />
              </div>

              {/* Agent Flow Backend */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card w-full md:w-1/3 text-center bg-gradient-to-br from-cyber-purple/10 to-cyber-pink/10"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyber-purple to-cyber-pink mx-auto mb-4 flex items-center justify-center">
                  <Server size={32} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {t.architecture.threeComponent.agentFlow}
                </h4>
                <p className="text-sm text-gray-400">Hono + Agent SDK</p>
              </motion.div>

              {/* Connection Lines */}
              <div className="hidden md:flex items-center">
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyber-pink to-cyber-green" />
                <div className="w-2 h-2 rounded-full bg-cyber-green mx-2" />
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyber-green to-cyber-blue" />
              </div>

              {/* Happy Mobile */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card w-full md:w-1/3 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyber-green to-cyber-blue mx-auto mb-4 flex items-center justify-center">
                  <Globe size={32} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {t.architecture.threeComponent.happy}
                </h4>
                <p className="text-sm text-gray-400">React Native</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            {t.architecture.techStack.title}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card flex items-center space-x-4"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 flex items-center justify-center neon-border">
                  <tech.icon size={24} className="text-cyber-blue" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">{tech.label}</div>
                  <div className="text-base font-semibold text-white font-mono">
                    {tech.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            {t.architecture.workflow.title}
          </h3>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink hidden md:block" />

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 hidden md:block" />
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center text-white font-bold text-xl z-10 relative">
                      {index + 1}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-cyber-blue/30 blur-xl animate-pulse" />
                  </div>
                  <div className="flex-1 card">
                    <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Missing import
function Monitor(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  )
}
