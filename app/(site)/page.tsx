// frontend/app/(site)/page.tsx
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import ValueGrid from "@/components/ValueGrid";
import WhoWeHelp from "@/components/WhoWeHelp";
import HowItWorks from "@/components/HowItWorks";
import CTAForm from "@/components/CTAForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <ValueGrid />
      <WhoWeHelp />
      <HowItWorks />
      <CTAForm />
    </>
  );
}
