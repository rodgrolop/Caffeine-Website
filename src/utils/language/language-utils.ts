import { useT } from "talkr";

const AVAILABLE_LANGUAGES = ["en", "es"];

const options = {
  year: "numeric" as const,
  month: "long" as const,
  day: "numeric" as const,
};

export const useSanitizeLanguage = (): { language: () => string } => {
  const { locale } = useT();
  const language = (): string =>
    AVAILABLE_LANGUAGES.includes(locale.slice(0, 2))
      ? locale.slice(0, 2)
      : "en";
  return { language };
};

export const customDateFormat = (date: string): string =>
  new Date(date).toLocaleDateString(
    useSanitizeLanguage().language() === "es" ? "es-ES" : "en-US",
    options
  );
