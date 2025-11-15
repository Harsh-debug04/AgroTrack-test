// frontend/components/WhoWeHelp.tsx
import InputIcon from "./icons/InputIcon";
import InsurersIcon from "./icons/InsurersIcon";
import NgosIcon from "./icons/NgosIcon";

export default function WhoWeHelp() {
  const items = [
    { title: "Input companies", desc: "Time product pushes to crop stages", icon: <InputIcon /> },
    { title: "Insurers", desc: "Stage-based exposure modeling", icon: <InsurersIcon /> },
    { title: "NGOs & FPOs", desc: "Impact reporting & outreach", icon: <NgosIcon /> }
  ];
  return (
    <div className="container py-8">
      <div className="grid-3">
        {items.map(it => (
          <div className="content-card" key={it.title}>
            <div className="icon-square">{it.icon}</div>
            <h4 className="mt-3">{it.title}</h4>
            <p className="muted">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
