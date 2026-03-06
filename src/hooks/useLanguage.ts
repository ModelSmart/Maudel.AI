import { useState, useCallback } from 'react'
import { translations, Language, TranslationKeys } from '../i18n/translations'

const LANGUAGE_KEY = 'maudelclaw_language'

// 语言映射：浏览器语言 -> 应用语言
const languageMap: Record<string, Language> = {
  'en': 'en',
  'en-US': 'en',
  'en-GB': 'en',
  'zh': 'zh',
  'zh-CN': 'zh',
  'zh-Hans': 'zh',
  'zh-TW': 'zh-TW',
  'zh-Hant': 'zh-TW',
  'zh-HK': 'zh-TW',
  'ja': 'ja',
  'fr': 'fr',
  'de': 'de',
  'es': 'es',
  'ru': 'ru',
  'vi': 'vi',
  'ar': 'ar',
  'th': 'th',
}

// 支持的语言列表
export const supportedLanguages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh', name: 'Chinese (Simplified)', nativeName: '简体中文' },
  { code: 'zh-TW', name: 'Chinese (Traditional)', nativeName: '繁體中文' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย' },
]

function detectBrowserLanguage(): Language {
  const browserLang = navigator.language || (navigator as any).userLanguage

  // 直接匹配
  if (browserLang in languageMap) {
    return languageMap[browserLang]
  }

  // 前缀匹配 (例如 en-AU -> en)
  const prefix = browserLang.split('-')[0]
  if (prefix in languageMap) {
    return languageMap[prefix]
  }

  // 默认英语
  return 'en'
}

function getStoredLanguage(): Language | null {
  const stored = localStorage.getItem(LANGUAGE_KEY)
  if (stored && stored in translations) {
    return stored as Language
  }
  return null
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    // 优先使用存储的语言设置
    const stored = getStoredLanguage()
    if (stored) {
      return stored
    }
    // 否则检测浏览器语言
    return detectBrowserLanguage()
  })

  const changeLanguage = useCallback((newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem(LANGUAGE_KEY, newLanguage)
  }, [])

  const t: TranslationKeys = translations[language] || translations.en

  return { language, changeLanguage, t, supportedLanguages }
}
