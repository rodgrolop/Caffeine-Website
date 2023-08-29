import i18n from "i18next";

const AVAILABLE_LANGUAGES = ["en", "es"];

const options = {
  year: "numeric" as const,
  month: "long" as const,
  day: "numeric" as const,
};

export const sanitizeLanguage = (): string =>
  AVAILABLE_LANGUAGES.includes(i18n.language.slice(0, 2))
    ? i18n.language.slice(0, 2)
    : "en";

export const customDateFormat = (date: string): string =>
  new Date(date).toLocaleDateString(
    sanitizeLanguage() === "es" ? "es-ES" : "en-US",
    options
  );
