// composables/usePreferences.ts (ou .js)
import { useState, useCookie } from '#app'
import { watch } from 'vue'

export const usePreferences = () => {
  const theme = useState('theme', () => process.client ? localStorage.getItem('theme') || 'light' : 'light')
  const lang = useState('lang', () => process.client ? localStorage.getItem('lang') || 'fr' : 'fr')

  if (process.client) {
    watch(theme, (newVal) => {
      localStorage.setItem('theme', newVal)
      document.documentElement.setAttribute('data-theme', newVal)
    })

    watch(lang, (newVal) => {
      localStorage.setItem('lang', newVal)
    })
  }

  return {
    theme,
    lang,
    setTheme: (val) => (theme.value = val),
    setLang: (val) => (lang.value = val),
  }
}
