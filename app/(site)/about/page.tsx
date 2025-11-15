// frontend/app/(site)/about/page.tsx
import MeetFounders from "@/components/MeetFounders";

export default function AboutPage() {
  return (
    <section className="container py-12">
      <div className="content-card">
        <h1>About Agrotrack</h1>
        <p className="lead">
          Agrotrack bridges the information gap between farmers and institutions. We convert consented field events into per-farm crop calendars and enterprise-ready insights — starting with a pilot in Bihar.
        </p>
      </div>

      <div className="mt-8 content-card">
        <h2>Our approach</h2>
        <ul className="bullets">
          <li>Consent-first capture and PII separation</li>
          <li>Low-data, field-friendly capture and CSV imports</li>
          <li>APIs & dashboards for enterprise planning</li>
        </ul>
      </div>

      <div className="mt-10">
        <h2>Meet the founders</h2>
        <MeetFounders />
      </div>
    </section>
  );
}
