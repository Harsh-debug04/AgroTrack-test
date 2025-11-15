// frontend/components/HowItWorks.tsx
export default function HowItWorks() {
  const steps = [
    { title: "Onboard", text: "NGOs onboard farmers with consent." },
    { title: "Collect", text: "Capture events via forms/CSV." },
    { title: "Insights", text: "Aggregate into per-farm calendars." }
  ];
  return (
    <div className="container py-8">
      <h2 className="center">How it works</h2>
      <div className="grid-3">
        {steps.map(s => (
          <div className="content-card" key={s.title}>
            <div className="step">{s.title[0]}</div>
            <h4 className="mt-3">{s.title}</h4>
            <p className="muted">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
