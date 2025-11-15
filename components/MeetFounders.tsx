// frontend/components/MeetFounders.tsx
export default function MeetFounders() {
  const f = [
    { name: "Aarav Asthana", role: "Co-founder & CEO", img: "/founders/founder1.jpg", quote: "We started Agrotrack to make farmer data actionable." },
    { name: "Suyash Sinha", role: "Co-founder & CTO", img: "/founders/founder2.jpg", quote: "Data should empower, not confuse." },
    { name: "Harshwardhan Pandey", role: "Co-founder & Product", img: "/founders/founder3.jpg", quote: "Design for farmers first." },
    { name: "Chaitanya Vishwakarma", role: "Co-founder & Ops", img: "/founders/founder4.jpg", quote: "Scale locally, impact nationally." },
    { name: "Soumil Shukla", role: "Co-founder & Outreach", img: "/founders/founder5.jpg", quote: "Trust is our currency in the field." }
  ];
  return (
    <div className="grid-founders">
      {f.map(p => (
        <div className="profile" key={p.name}>
          <img src={p.img} alt={p.name} className="avatar" />
          <h4>{p.name}</h4>
          <div className="muted">{p.role}</div>
        </div>
      ))}
    </div>
  );
}
