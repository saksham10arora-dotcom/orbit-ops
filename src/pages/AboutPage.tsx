import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Brain, Map, Wind } from "lucide-react";

const stack = [
  { layer: "Frontend",      tech: "React 18 + TypeScript + Vite" },
  { layer: "UI",            tech: "shadcn/ui + Tailwind CSS + Recharts + Leaflet" },
  { layer: "Backend",       tech: "FastAPI (Python) — Vercel serverless functions" },
  { layer: "ML",            tech: "scikit-learn Random Forest — trained per-request on live data" },
  { layer: "Auth",          tech: "Supabase (email / password)" },
  { layer: "Air Quality",   tech: "Open-Meteo Air Quality API" },
  { layer: "Weather",       tech: "Open-Meteo Forecast API" },
  { layer: "Geocoding",     tech: "OpenStreetMap Nominatim" },
  { layer: "Hosting",       tech: "Vercel (free tier)" },
];

const features = [
  { icon: Wind,  title: "Live AQI",        desc: "Real-time US AQI, PM2.5, PM10, NO2, O3 and weather for any city worldwide." },
  { icon: Map,   title: "Interactive Map", desc: "Fly-to animation on city search. Satellite and street tile layers." },
  { icon: Brain, title: "AI Forecast",     desc: "Random Forest trained on 7 days of hourly data — predicts next 6 hours with 80% confidence intervals." },
];

const team = ["Satyansh Gaur", "Saksham Arora", "Sarthak Mehta", "Vaibhav"];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-4xl space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3">About OrbitAir</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A hyperlocal air quality platform built at a hackathon. Search any city, get real-time data, and see an AI-powered 6-hour forecast — no API keys required.
          </p>
          <a
            href="https://github.com/saksham10arora-dotcom/orbit-ops"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 text-white text-sm rounded-md transition-colors"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.title}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <f.icon className="h-5 w-5 text-blue-400" />
                  {f.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {stack.map((s) => (
                <div key={s.layer} className="flex items-start gap-4 py-3">
                  <span className="text-sm font-medium w-28 shrink-0 text-muted-foreground">{s.layer}</span>
                  <span className="text-sm">{s.tech}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {team.map((name) => (
              <Badge key={name} variant="secondary" className="text-sm px-3 py-1">{name}</Badge>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
