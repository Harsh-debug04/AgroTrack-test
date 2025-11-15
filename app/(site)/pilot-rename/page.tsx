// frontend/app/(site)/pilot-program/page.tsx
"use client";
import React from "react";

const FORM_URL = "https://forms.gle/qZoEvtAvencEWvNo7";

export default function PilotProgram() {
  return (
    <section className="container py-12">
      <div className="content-card">
        <h1>Pilot Program — Bihar</h1>
        <p className="lead mt-3">
          Agrotrack pilot helps collect consented field events, build per-farm crop calendars and measure on-ground adoption for targeted interventions.
        </p>

        <div className="mt-6 grid-2">
          <div>
            <h3>What the pilot does</h3>
            <ul className="bullets">
              <li>Collect key field events (sowing, transplant, flowering, harvest).</li>
              <li>Provide partner NGOs free dashboards and exports.</li>
              <li>Create aggregated timelines for enterprise planning.</li>
            </ul>
          </div>
          <div>
            <h3>Who can join</h3>
            <ul className="bullets">
              <li>NGOs / FPOs running field programs</li>
              <li>Input companies testing regional launches</li>
              <li>Insurers and researchers seeking stage-level exposure data</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <a href={FORM_URL} className="btn-brand" target="_blank" rel="noreferrer">Apply to join the pilot (Google Form)</a>
        </div>
      </div>
    </section>
  );
}
