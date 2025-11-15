// frontend/components/ValueGrid.tsx
const items = [
  { title: "Stage-accurate timing", text: "Per-farm crop calendars for precise pushes." },
  { title: "Privacy-first", text: "Consent and PII separation." },
  { title: "Low-tech capture", text: "Mobile/CSV friendly forms." },
  { title: "Actionable outputs", text: "APIs, CSV, and webhooks." },
  { title: "Pilot-ready", text: "Quick NGO onboarding." },
  { title: "Exportable reports", text: "PDF/CSV for stakeholders." }
];

export default function ValueGrid() {
  return (
    <div className="container py-8">
      <div className="grid-3">
        {items.map(it => (
          <div className="content-card" key={it.title}>
            <h4>{it.title}</h4>
            <p className="muted">{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
