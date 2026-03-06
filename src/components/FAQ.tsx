import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { TranslationKeys } from '../i18n/translations'

interface FAQProps {
  t: TranslationKeys
}

export function FAQ({ t }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: t.faq.whatIs.question,
      answer: t.faq.whatIs.answer,
    },
    {
      question: t.faq.compatible.question,
      answer: t.faq.compatible.answer,
    },
    {
      question: t.faq.install.question,
      answer: t.faq.install.answer,
    },
    {
      question: t.faq.free.question,
      answer: t.faq.free.answer,
    },
    {
      question: t.faq.models.question,
      answer: t.faq.models.answer,
    },
  ]

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t.faq.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-cyber-blue flex-shrink-0" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
