import { useState, useCallback } from 'react'
import { translations, Language, TranslationKeys } from '../i18n/translations'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    // 从 localStorage 读取语言设置，默认为浏览器语言
    const saved = localStorage.getItem('language')
    if (saved && (saved === 'en' || saved === 'zh')) {
      return saved
    }
    // 根据浏览器语言自动选择
    const browserLang = navigator.language.toLowerCase()
    return browserLang.startsWith('zh') ? 'zh' : 'en'
  })

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next = prev === 'en' ? 'zh' : 'en'
      localStorage.setItem('language', next)
      return next
    })
  }, [])

  const t: TranslationKeys = translations[language]

  return { language, toggleLanguage, t }
}
