// frontend/components/WhoWeHelp.tsx
export default function WhoWeHelp() {
  const items = [
    { title: "Input companies", desc: "Time product pushes to crop stages" },
    { title: "Insurers", desc: "Stage-based exposure modeling" },
    { title: "NGOs & FPOs", desc: "Impact reporting & outreach" }
  ];
  return (
    <div className="container py-8">
      <div className="grid-3">
        {items.map(it => (
          <div className="content-card" key={it.title}>
            <div className="icon-square">{it.title.split(" ")[0].slice(0,2).toUpperCase()}</div>
            <h4 className="mt-3">{it.title}</h4>
            <p className="muted">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
