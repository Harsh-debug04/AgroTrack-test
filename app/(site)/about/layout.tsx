// frontend/app/(site)/layout.tsx  (REPLACE ENTIRE FILE)
import type { ReactNode } from "react";

/**
 * Group layout for site routes.
 * IMPORTANT: do NOT include <html> or <body> here, and DO NOT render Navbar or Footer.
 * Root layout handles global chrome (Navbar/Footer).
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    // purely structural wrapper for site pages
    <div className="site-layout">
      {children}
    </div>
  );
}
