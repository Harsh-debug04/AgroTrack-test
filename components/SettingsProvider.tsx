// frontend/components/SettingsProvider.tsx
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Settings = {
  mounted: boolean;
};
const Context = createContext<{ mounted: boolean } | undefined>(undefined);

export default function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return <Context.Provider value={{ mounted }}>{children}</Context.Provider>;
}

export function useSettings() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("useSettings used outside SettingsProvider");
  return ctx;
}
