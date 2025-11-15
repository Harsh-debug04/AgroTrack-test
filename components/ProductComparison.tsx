// frontend/components/ProductComparison.tsx
export default function ProductComparison() {
  return (
    <div className="content-card">
      <table className="comparison">
        <thead>
          <tr><th>Feature</th><th>Seedling.API</th><th>AgriSight</th></tr>
        </thead>
        <tbody>
          <tr><td>Primary user</td><td>Dev teams</td><td>Product teams</td></tr>
          <tr><td>Output</td><td>JSON/CSV/Webhooks</td><td>Dashboards & exports</td></tr>
          <tr><td>Best for</td><td>Automation</td><td>Campaign planning</td></tr>
        </tbody>
      </table>
    </div>
  );
}
