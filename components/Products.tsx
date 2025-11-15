// frontend/components/Products.tsx
import Link from "next/link";

const items = [
  { slug: "seedling-api", title: "Seedling.API", desc: "Developer API for crop timelines." },
  { slug: "agrisight", title: "AgriSight", desc: "Dashboard for planners and field teams." }
];

export default function Products() {
  return (
    <div className="container">
      <div className="grid-2">
        {items.map(i => (
          <div key={i.slug} className="content-card">
            <h3>{i.title}</h3>
            <p className="muted">{i.desc}</p>
            <div className="mt-4 flex-between">
              <Link href={`/products/${i.slug}`} className="btn-outline">Learn more</Link>
              <span className="muted">Pilot: Bihar</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
