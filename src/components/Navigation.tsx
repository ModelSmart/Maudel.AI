import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, Github, Check, ChevronDown } from 'lucide-react'
import { TranslationKeys, Language } from '../i18n/translations'
import { supportedLanguages } from '../hooks/useLanguage'

interface NavigationProps {
  t: TranslationKeys
  language: Language
  changeLanguage: (lang: Language) => void
}

export function Navigation({ t, language, changeLanguage }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const langMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 点击外部关闭语言菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'features', href: '#features' },
    { key: 'architecture', href: '#architecture' },
    { key: 'download', href: '#download' },
  ]

  const currentLang = supportedLanguages.find(l => l.code === language)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-10 h-10">
              <img
                src="/icons/icon-192x192.png"
                alt="MaudelClaw Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <span className="text-2xl font-bold gradient-text">MaudelClaw</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="text-gray-300 hover:text-cyber-blue transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {t.nav[item.key as keyof typeof t.nav]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-blue group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            {/* LLMs.txt Link */}
            <motion.a
              href="/LLMs.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyber-purple transition-colors relative group text-sm"
              whileHover={{ y: -2 }}
            >
              {t.nav.llms}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-purple group-hover:w-full transition-all duration-300" />
            </motion.a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative" ref={langMenuRef}>
              <motion.button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg neon-border text-cyber-blue hover:bg-cyber-blue/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={18} />
                <span className="font-mono text-sm">{currentLang?.nativeName}</span>
                <ChevronDown size={14} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 rounded-lg glass border border-white/10 shadow-xl overflow-hidden"
                  >
                    {supportedLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code)
                          setIsLangMenuOpen(false)
                        }}
                        className={`w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-white/10 transition-colors ${
                          language === lang.code ? 'text-cyber-blue' : 'text-gray-300'
                        }`}
                      >
                        <span>{lang.nativeName}</span>
                        {language === lang.code && <Check size={16} className="text-cyber-blue" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* GitHub Button */}
            <motion.a
              href="https://github.com/ModelSmart/MaudelClaw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 transition-all border border-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              <span>{t.nav.github}</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg neon-border"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-gray-300 hover:text-cyber-blue transition-colors"
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </a>
              ))}
              {/* LLMs.txt Link */}
              <a
                href="/LLMs.txt"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-gray-300 hover:text-cyber-purple transition-colors"
              >
                {t.nav.llms}
              </a>

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-gray-500 mb-2">Language / 语言</p>
                <div className="grid grid-cols-2 gap-2">
                  {supportedLanguages.slice(0, 6).map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`px-3 py-2 rounded text-sm ${
                        language === lang.code
                          ? 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/50'
                          : 'bg-white/5 text-gray-300 border border-white/10'
                      }`}
                    >
                      {lang.nativeName}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://github.com/ModelSmart/MaudelClaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-gray-800 text-white"
                >
                  <Github size={18} />
                  <span>{t.nav.github}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
