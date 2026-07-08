import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Die IT-Anleitungen werden zur Laufzeit per fs.readdirSync geladen –
  // das erkennt Next.js' automatische Datei-Verfolgung nicht zuverlässig,
  // deshalb hier explizit für den Vercel-Deploy einschließen.
  outputFileTracingIncludes: {
    "/api/it-hilfe": ["src/content/it-anleitungen/**/*"],
  },
};

export default nextConfig;
