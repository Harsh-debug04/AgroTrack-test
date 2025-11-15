// frontend/components/useTranslation.ts
export default function useTranslation() {
  const t = (k: string, fallback?: string) => {
    const en: Record<string, string> = {
      "nav.about": "About",
      "nav.forNgos": "For NGOs",
      "nav.pilot": "Pilot",
    };
    return en[k] ?? fallback ?? k;
  };
  return { t };
}
