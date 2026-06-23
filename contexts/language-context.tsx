"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

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
  [key: string]: unknown
}

type LanguageContextType = {
  currentLanguage: Language
  setLanguage: (code: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translationsMap: Record<string, Translations> = {
  en: enTranslations,
  ko: koTranslations,
  zh: zhTranslations,
  ru: ruTranslations,
  es: esTranslations,
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])
  const [translations, setTranslations] = useState<Translations>(translationsMap.en)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      const lang = languages.find((l) => l.code === savedLanguage)
      if (lang) setCurrentLanguage(lang)
    }
  }, [])

  useEffect(() => {
    setTranslations(translationsMap[currentLanguage.code] || translationsMap.en)
    localStorage.setItem("language", currentLanguage.code)
  }, [currentLanguage])

  const setLanguage = (code: string) => {
    const lang = languages.find((l) => l.code === code)
    if (lang) setCurrentLanguage(lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let result: unknown = translations

    for (const k of keys) {
      if (result && typeof result === "object" && k in (result as object)) {
        result = (result as Record<string, unknown>)[k]
      } else {
        return key
      }
    }

    return typeof result === "string" ? result : key
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}