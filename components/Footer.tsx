// frontend/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const email = "hello@agrotrack.org.in";
  const form = "https://forms.gle/qZoEvtAvencEWvNo7";

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-title">Agrotrack</div>
            <div className="muted">Ground-truth agricultural intelligence — pilot: Bihar.</div>
            <div className="muted mt-3">Contact: <a href={`mailto:${email}`}>{email}</a></div>
          </div>

          <div>
            <div className="muted font-semibold">Quick links</div>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/for-ngos">For NGOs</Link></li>
            </ul>
          </div>

          <div>
            <div className="muted font-semibold">Pilot</div>
            <p className="muted">Join our pilot & newsletter — one form for both.</p>
            <div className="mt-3">
              <a href={form} target="_blank" rel="noreferrer" className="btn-brand">Join</a>
            </div>
          </div>
        </div>

        <div className="container small muted mt-6">© {new Date().getFullYear()} Agrotrack · All rights reserved</div>
      </footer>

      <div className="india-flag" title="Made in India">🇮🇳</div>
    </>
  );
}
