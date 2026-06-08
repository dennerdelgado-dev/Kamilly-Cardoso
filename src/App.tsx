import { useState, lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";

// Lazy-loaded components below the fold for optimal mobile performance and minimal bundle size
const About = lazy(() => import("./components/About"));
const Pillars = lazy(() => import("./components/Pillars"));
const Metrics = lazy(() => import("./components/Metrics"));
const Demographics = lazy(() => import("./components/Demographics"));
const Highlights = lazy(() => import("./components/Highlights"));
const Differentials = lazy(() => import("./components/Differentials"));
const Packages = lazy(() => import("./components/Packages"));
const Contact = lazy(() => import("./components/Contact"));
const FloatingActions = lazy(() => import("./components/FloatingActions"));

export default function App() {
  // Sync state between selected pricing packages and the pre-filled contact form
  const [selectedPacks, setSelectedPacks] = useState<string[]>([]);
  const [prefilledTotal, setPrefilledTotal] = useState<number>(0);

  const handleSelectPackages = (packageNames: string[], totalPrice: number) => {
    setSelectedPacks(packageNames);
    setPrefilledTotal(totalPrice);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans antialiased overflow-x-hidden selection:bg-primary-pink/30 selection:text-white">
      {/* Absolute Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-lightpink/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
      
      {/* Core Layout Containers */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Top Header */}
        <Header />

        {/* Hero Section Banner */}
        <Hero />

        {/* Brands Trust Marquee Ribbon */}
        <Brands />

        {/* Detailed Professional About Block */}
        <Suspense fallback={<div className="min-h-[500px]" />}>
          <About />
        </Suspense>

        {/* Core Content Pillar Categories */}
        <Suspense fallback={<div className="min-h-[700px]" />}>
          <Pillars />
        </Suspense>

        {/* Key Metrics Board Dashboard */}
        <Suspense fallback={<div className="min-h-[800px]" />}>
          <Metrics />
        </Suspense>

        {/* Verified Demographics Split Grid */}
        <Suspense fallback={<div className="min-h-[600px]" />}>
          <Demographics />
        </Suspense>

        {/* Instagram Spotlight Highlight Section */}
        <Suspense fallback={<div className="min-h-[600px]" />}>
          <Highlights />
        </Suspense>

        {/* Core Bento Differentials Grid */}
        <Suspense fallback={<div className="min-h-[600px]" />}>
          <Differentials />
        </Suspense>

        {/* Collaboration Pricing Packages with dynamic proposal estimator */}
        <Suspense fallback={<div className="min-h-[800px]" />}>
          <Packages onSelectPackages={handleSelectPackages} />
        </Suspense>

        {/* Contact Input Forms Grid */}
        <Suspense fallback={<div className="min-h-[650px]" />}>
          <Contact prefilledPackages={selectedPacks} prefilledTotal={prefilledTotal} />
        </Suspense>

        {/* Floating Utilities */}
        <Suspense fallback={null}>
          <FloatingActions />
        </Suspense>

        {/* Footer layout: Minimal unbranded matching exact copyright requirement */}
        <footer className="w-full bg-brand-dark border-t border-brand-border/40 py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1">
              <span className="font-serif text-sm tracking-widest font-black text-white">KAMILLY CARDOSO</span>
              <p className="text-xs text-gray-400 font-normal">
                Criadora de Conteúdo • Beleza • Cabelos • Moda • Lifestyle • Achadinhos
              </p>
            </div>
            
            <div className="text-xs text-gray-500 font-mono">
              <span>© 2026 Kamilly Cardoso. Todos os direitos reservados.</span>
              <span className="block md:inline md:ml-2">Dicas de cabelo, beleza, moda, lifestyle e achadinhos.</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
