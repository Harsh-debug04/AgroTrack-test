// frontend/app/(site)/products/[slug]/page.tsx
import Link from "next/link";

const FORM_URL = "https://forms.gle/qZoEvtAvencEWvNo7";

const PRODUCTS: Record<string, any> = {
  "seedling-api": {
    title: "Seedling.API",
    summary: "Developer-first API returning crop calendars & stage timelines.",
    features: [
      "Per-farm timelines (sowing→harvest)",
      "JSON, CSV, webhooks",
      "Query by crop, stage, district",
      "API key auth & aggregation"
    ],
    usecases: [
      "Timed input promotions",
      "Insurer exposure modeling",
      "Procurement planning"
    ]
  },
  "agrisight": {
    title: "AgriSight",
    summary: "Visual analytics dashboard for planners and field teams.",
    features: [
      "Stage heatmaps and segments",
      "Campaign window suggestions",
      "Exportable pilot reports"
    ],
    usecases: [
      "Campaign planning",
      "Field validation and impact tracking",
      "Donor reporting"
    ]
  }
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS[params.slug];
  if (!product) return <div className="container py-12"><p>Product not found.</p></div>;

  return (
    <section className="container py-12">
      <div className="content-card">
        <h1>{product.title}</h1>
        <p className="lead">{product.summary}</p>

        <div className="grid-2 mt-6">
          <div>
            <h3>Features</h3>
            <ul className="bullets">
              {product.features.map((f: string) => <li key={f}>{f}</li>)}
            </ul>
          </div>
          <div>
            <h3>Use cases</h3>
            <ul className="bullets">
              {product.usecases.map((u: string) => <li key={u}>{u}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="coming-soon">Coming soon</div>
          <div className="mt-4">
            <a href={FORM_URL} target="_blank" rel="noreferrer" className="btn-brand">Join pilot</a>
          </div>
        </div>
      </div>
    </section>
  );
}
