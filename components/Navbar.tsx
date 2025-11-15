// frontend/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useTranslation from "./useTranslation";

export default function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    setMounted(true);
    try {
      const s = localStorage.getItem("agro-theme");
      const initial = s === "dark" ? "dark" : "light";
      setTheme(initial);
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(initial);
      root.style.colorScheme = initial === "dark" ? "dark" : "light";
    } catch (e) {}
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(next);
      root.style.colorScheme = next === "dark" ? "dark" : "light";
      localStorage.setItem("agro-theme", next);
    } catch (e) {}
  }

  const menu = [
    { href: "/", label: "Home" },
    { href: "/about", label: t("nav.about") || "About" },
    { href: "/products", label: "Products" },
    { href: "/partners", label: "Partners" },
    { href: "/pilot-program", label: t("nav.pilot") || "Pilot" }
  ];

  return (
    <header className="nav" role="banner">
      <div className="nav-inner container">
        <Link href="/" className="brand" aria-label="Agrotrack home">
          <div className="brand-mark" aria-hidden>A</div>
          <div className="brand-text">
            <div className="brand-title">Agrotrack</div>
            <div className="brand-sub">Ground-truth intelligence</div>
          </div>
        </Link>

        <nav className="nav-links" role="navigation" aria-label="Primary">
          {menu.map(m => <Link key={m.href} href={m.href}>{m.label}</Link>)}

          <a href="https://forms.gle/qZoEvtAvencEWvNo7" className="btn-small" target="_blank" rel="noreferrer">Join</a>

          <button onClick={toggleTheme} aria-label="Toggle theme" className="icon-btn" title="Toggle theme" style={{ marginLeft: 8 }}>
            {mounted ? (theme === "dark" ? "🌞" : "🌙") : "🌙"}
          </button>
        </nav>

        <button className="hamburger" aria-label="Open menu" onClick={() => setMenuOpen(s => !s)}>☰</button>
      </div>

      {menuOpen && (
        <nav className="nav-links open" aria-hidden={!menuOpen}>
          {menu.map(m => (
            <Link key={m.href} href={m.href} onClick={() => setMenuOpen(false)}>{m.label}</Link>
          ))}
          <a href="https://forms.gle/qZoEvtAvencEWvNo7" className="btn-small" target="_blank" rel="noreferrer">Join</a>
        </nav>
      )}
    </header>
  );
}
