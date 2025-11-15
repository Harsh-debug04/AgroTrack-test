// frontend/components/ValueGrid.tsx
import TimingIcon from "./icons/TimingIcon";
import PrivacyIcon from "./icons/PrivacyIcon";
import LowTechIcon from "./icons/LowTechIcon";
import ActionableIcon from "./icons/ActionableIcon";
import PilotReadyIcon from "./icons/PilotReadyIcon";
import ReportsIcon from "./icons/ReportsIcon";

const items = [
  { title: "Stage-accurate timing", text: "Per-farm crop calendars for precise pushes.", icon: <TimingIcon /> },
  { title: "Privacy-first", text: "Consent and PII separation.", icon: <PrivacyIcon /> },
  { title: "Low-tech capture", text: "Mobile/CSV friendly forms.", icon: <LowTechIcon /> },
  { title: "Actionable outputs", text: "APIs, CSV, and webhooks.", icon: <ActionableIcon /> },
  { title: "Pilot-ready", text: "Quick NGO onboarding.", icon: <PilotReadyIcon /> },
  { title: "Exportable reports", text: "PDF/CSV for stakeholders.", icon: <ReportsIcon /> }
];

export default function ValueGrid() {
  return (
    <div className="container py-8">
      <div className="grid-3">
        {items.map(it => (
          <div className="content-card" key={it.title}>
            <div className="icon-square">{it.icon}</div>
            <h4 className="mt-3">{it.title}</h4>
            <p className="muted">{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
