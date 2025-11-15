// frontend/app/(site)/partners/page.tsx
"use client";
import React from "react";

const FORM_URL = "https://forms.gle/qZoEvtAvencEWvNo7";

export default function PartnersPage() {
  return (
    <section className="container py-12" aria-labelledby="partners-heading">
      <div className="content-card">
        <h1 id="partners-heading">Partners</h1>

        <p className="lead mt-3">
          From field events to strategic insights for smarter planning.
        </p>

        <p className="muted mt-4">
          AgroTrack analyzes on-ground updates to deliver predictive crop
          timelines, enabling organizations to act at the right stage with
          maximum impact.
        </p>

        <div className="mt-6">
          <h2>What we build</h2>
          <p className="muted mt-2">
            We build connected agricultural intelligence systems that transform
            farmer inputs into clear crop timelines, segmentation insights, and
            engagement opportunities.
          </p>
        </div>

        <div className="mt-6 grid-2">
          <div>
            <h3>Partner onboarding (consent-first)</h3>
            <p className="muted">
              Onboard farmers through partner NGOs / FPOs with minimal,
              consented agricultural data. All personal information stays safely
              separated and secure.
            </p>
          </div>

          <div>
            <h3>How we help partners</h3>
            <ul className="bullets">
              <li>Real-time capture of field events.</li>
              <li>Per-farm crop timelines for smarter outreach.</li>
              <li>Exportable pilot reports for donor reporting.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3>Partner benefits</h3>
          <ul className="bullets">
            <li>Free dashboards for partners.</li>
            <li>Digitization templates for field teams.</li>
            <li>Reporting and impact measurement support.</li>
          </ul>
        </div>

        <div className="mt-8">
          <h3>Mock case study — Bihar Rice Pilot</h3>
          <p className="muted mt-2">
            Piloted with ~1,000 farmers across 3 districts — recorded sowing &
            transplant timings, delivered targeted advisories, and improved
            timely input adoption.
          </p>
        </div>

        <div className="mt-8">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-brand"
          >
            Apply to partner / Join pilot
          </a>
        </div>
      </div>

      <div className="content-card mt-6">
        <h2>Our products</h2>

        <div className="mt-3">
          <h4>Seedling.API</h4>
          <p className="muted">
            A developer-first API that returns crop calendars and stage
            predictions for programmatic scheduling.
          </p>
        </div>

        <div className="mt-3">
          <h4>AgriSight</h4>
          <p className="muted">
            Analytics suite that visualizes crop stages, field activity, and
            optimal engagement windows.
          </p>
        </div>

        <div className="mt-6">
          <h3>Contact & Founders</h3>
          <p className="muted">
            Email: <a href="mailto:info@agrotrack.org.in">info@agrotrack.org.in</a>
          </p>

          <ul className="bullets mt-3">
            <li>Aarav Asthana — CEO</li>
            <li>Suyash Sinha — COO</li>
            <li>Harshwardhan Pandey — CPO</li>
            <li>Chaitanya Vishwakarma — CTO</li>
            <li>Soumil Shukla — CMO</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
