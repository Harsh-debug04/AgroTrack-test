// frontend/components/ThemeProvider.tsx
"use client";
import { ThemeProvider as NextTheme } from "next-themes";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextTheme attribute="class" defaultTheme="system" enableSystem storageKey="agrotrack-theme">
      {children}
    </NextTheme>
  );
}
