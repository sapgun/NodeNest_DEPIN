"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// 동적 import 대신 모든 번역 파일을 정적으로 import
import enTranslations from "../translations/en.json"
import koTranslations from "../translations/ko.json"
import zhTranslations from "../translations/zh.json"
import ruTranslations from "../translations/ru.json"
import esTranslations from "../translations/es.json"

type Language = {
  code: string
  name: string
}

export const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "ko", name: "한국어" },
  { code: "zh", name: "中文" },
  { code: "ru", name: "Русский" },
  { code: "es", name: "Español" },
]

type Translations = {
  [key: string]: any
}

type LanguageContextType = {
  currentLanguage: Language
  setLanguage: (code: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// 모든 번역을 미리 로드
const translationsMap = {
  en: enTranslations,
  ko: koTranslations,
  zh: zhTranslations,
  ru: ruTranslations,
  es: esTranslations,
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])
  const [translations, setTranslations] = useState<Translations>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      const lang = languages.find((l) => l.code === savedLanguage)
      if (lang) {
        setCurrentLanguage(lang)
      }
    }
    setIsLoading(false)
  }, [])

  // loadTranslations 함수 수정
  useEffect(() => {
    if (!isLoading) {
      // 동적 로딩 대신 미리 로드된 번역 사용
      setTranslations(translationsMap[currentLanguage.code] || translationsMap.en)
      // Save language preference to localStorage
      localStorage.setItem("language", currentLanguage.code)
    }
  }, [currentLanguage, isLoading])

  const setLanguage = (code: string) => {
    const lang = languages.find((l) => l.code === code)
    if (lang) {
      setCurrentLanguage(lang)
    }
  }

  // Translation function
  const t = (key: string): string => {
    // Split the key by dots to access nested properties
    const keys = key.split(".")
    let result = translations

    // Navigate through the nested properties
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key // Return the key itself if translation not found
      }
    }

    return result as string
  }

  if (isLoading) {
    return null // Or a loading spinner
  }

  return <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
