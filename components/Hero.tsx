// frontend/components/Hero.tsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <div className="kicker">Pilot: Bihar — Consent-first data</div>
          <h1 className="hero-title">Turn field events into actionable crop timelines</h1>
          <p className="lead">Agrotrack converts farmer-sourced events into per-farm crop calendars and enterprise-ready insights — so companies act at the right stage.</p>

          <div className="hero-ctas">
            <a href="https://forms.gle/qZoEvtAvencEWvNo7" className="btn-brand" target="_blank" rel="noreferrer">Join Pilot</a>
            <a href="/products" className="btn-outline">See products</a>
          </div>
        </div>

        <div className="hero-visual">
          
          <div className="visual-placeholder">Illustration</div>
        </div>
      </div>
    </section>
  );
}
