// frontend/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agrotrack — Ground-truth intelligence",
  description: "Agrotrack converts farmer-sourced field events into actionable crop calendars — pilot: Bihar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="app-root">
          <Navbar />
          <main className="site-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
