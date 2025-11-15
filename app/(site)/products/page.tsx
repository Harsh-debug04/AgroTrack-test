// frontend/app/(site)/products/page.tsx
import Products from "@/components/Products";
import ProductComparison from "@/components/ProductComparison";

export default function ProductsIndex() {
  return (
    <section className="container py-12">
      <div className="content-card text-center">
        <h1>Products</h1>
        <p className="lead">Two complementary offerings — a developer API and a visual analytics product for business teams.</p>
      </div>

      <div className="mt-8">
        <Products />
      </div>

      <div className="mt-8 content-card">
        <h2>Product comparison</h2>
        <ProductComparison />
      </div>
    </section>
  );
}
