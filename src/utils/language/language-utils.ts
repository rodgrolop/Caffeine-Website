import i18n from 'i18next'
import { enUS, es } from 'date-fns/locale'
const AVAILABLE_LANGUAGES = ['en', 'es']

export const sanitizeLanguage = (): string =>
    AVAILABLE_LANGUAGES.includes(i18n.language.slice(0, 2))
        ? i18n.language.slice(0, 2)
        : 'en'

export const getFNSLocale = (): Locale => {
    return sanitizeLanguage() === 'es' ? es : enUS
}
