// frontend/components/SidebarProvider.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Ctx = {
  expanded: boolean;
  setExpanded: (v: boolean) => void;
  hoverOpen: boolean;
  setHoverOpen: (v: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
};

const SidebarCtx = createContext<Ctx | null>(null);

export default function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const [hoverOpen, setHoverOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const open = expanded || hoverOpen;
    document.body.classList.toggle("with-sidebar-expanded", open);
    document.body.classList.toggle("with-sidebar-collapsed", !open);
  }, [expanded, hoverOpen]);

  return (
    <SidebarCtx.Provider value={{ expanded, setExpanded, hoverOpen, setHoverOpen, mobileOpen, setMobileOpen }}>
      {children}
    </SidebarCtx.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(SidebarCtx);
  if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
  return ctx;
}
