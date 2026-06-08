import { useMemo } from "react";
import { Instagram, Eye, TrendingUp, Sparkles, ChevronDown, Award } from "lucide-react";
import { kamillyCardoso } from "../data";

// ID do Google Drive da imagem hero
const HERO_DRIVE_ID = "1u0_cqy50-AfdtT614-AWuCKXm4PpAX6M";

function driveUrl(id: string, width: number) {
  return `https://lh3.googleusercontent.com/d/${id}=w${width}-rw`;
}

export default function Hero() {
  const heroSrc = useMemo(() => driveUrl(HERO_DRIVE_ID, 800), []);
  const heroSrcSet = useMemo(() => [
    `${driveUrl(HERO_DRIVE_ID, 400)} 400w`,
    `${driveUrl(HERO_DRIVE_ID, 600)} 600w`,
    `${driveUrl(HERO_DRIVE_ID, 800)} 800w`,
  ].join(", "), []);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-brand-dark">
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-lightpink ambient-glow"></div>
      <div className="absolute bottom-1/4 right-[10%] w-[450px] h-[450px] rounded-full bg-primary-pink ambient-glow"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Creative Copy & Call to Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
          
          {/* Location & Title Badge */}
          <div className="inline-block self-start px-3 py-1 bg-primary-lightpink/10 text-primary-lightpink border border-primary-lightpink/20 rounded-full text-[10px] uppercase tracking-widest">
            Lifestyle & Beauty Creator • {kamillyCardoso.location}
          </div>

          {/* Headline and Tagline */}
          <div className="space-y-4">
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-normal leading-[0.95] text-white tracking-tighter">
              Kamilly<br />
              <span className="italic text-primary-lightpink">
                Cardoso
              </span>
            </h1>

            <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-primary-lightpink uppercase">
              {kamillyCardoso.tagline}
            </p>
          </div>

          {/* Supporting Copy */}
          <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed max-w-xl">
            {kamillyCardoso.mainPhrase}
          </p>

          {/* Core Action Call buttons */}
          <div className="flex flex-[1] flex-col sm:flex-row gap-4 pt-4">
            {/* Primary Business Button */}
            <button
              onClick={() => handleScrollTo("#contato")}
              className="bg-white text-black px-6 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-primary-lightpink transition-all duration-300 shadow-xl"
            >
              <span className="relative flex items-center justify-center space-x-1.5">
                <span>Fazer Parceria</span>
                <Sparkles size={13} className="animate-pulse text-indigo-950" />
              </span>
            </button>

            {/* Premium Highlight Instagram Button */}
            <a
              href="https://instagram.com/kamilly_cardooso"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:brightness-110 text-white px-6 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-1.5 shadow-lg shadow-pink-500/15 cursor-pointer"
            >
              <Instagram size={13} />
              <span>Ver Instagram Oficial</span>
            </a>

            {/* Secondary Stats Button */}
            <button
              onClick={() => handleScrollTo("#estatisticas")}
              className="px-6 py-4 rounded-full border border-white/20 text-[11px] uppercase tracking-widest font-bold text-white hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-1.5"
            >
              <span>Estatísticas</span>
              <ChevronDown size={13} className="group-hover:translate-y-1 transition-transform animate-bounce" />
            </button>
          </div>
        </div>

        {/* Right Side: Showcase Frame with Kamilly Cardoso Profile */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <div className="relative mx-auto w-full max-w-[400px] h-[520px] rounded-3xl overflow-hidden shadow-2xl p-2 bg-gradient-to-br from-brand-border via-brand-border/20 to-primary-lightpink/20 border border-brand-border/40">
            {/* Outer high-end glass border overlay */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none border-[1.5px] border-primary-lightpink/20 z-20"></div>

            {/* Main Picture image with cinematic lighting and soft pink glow overlay */}
            <div className="relative w-full h-full rounded-[20px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/10 z-10 mix-blend-multiply opacity-75"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-pink/10 via-transparent to-primary-lightpink/5 z-10 pointer-events-none"></div>
              
              <img
                src={heroSrc}
                srcSet={heroSrcSet}
                sizes="(max-width: 640px) 400px, 800px"
                width={400}
                height={516}
                alt="Kamilly Cardoso Digital Influencer"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                fetchPriority="high"
                decoding="async"
              />

              {/* Verified badge inside portrait */}
              <div className="absolute top-4 right-4 z-20 flex items-center space-x-1.5 bg-brand-dark/80 backdrop-blur-md border border-brand-border px-3.5 py-1.5 rounded-full shadow-lg">
                <Award size={13} className="text-primary-lightpink" />
                <span className="font-mono text-[10px] text-white tracking-widest uppercase font-semibold">
                  MÚLTIPLOS MILHÕES
                </span>
              </div>

              {/* Visual Interactive Instagram Link Accent */}
              <a
                href="https://instagram.com/kamilly_cardooso"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-6 right-6 z-20 space-y-1 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-primary-pink transition-all duration-300 group/spot pointer-events-auto block hover:bg-black/80"
              >
                <span className="font-serif text-xl font-bold text-white tracking-wide block group-hover/spot:text-primary-lightpink transition-colors duration-300 flex items-center justify-between">
                  <span>Kamilly Cardoso</span>
                  <Instagram size={16} className="text-primary-pink group-hover/spot:scale-115 transition-transform duration-300" />
                </span>
                <span className="text-[11px] text-primary-lightpink tracking-wider uppercase font-medium flex items-center justify-between">
                  <span>18 Anos • @kamilly_cardooso</span>
                  <span className="text-xs group-hover/spot:translate-x-1.5 transition-transform duration-300">Acessar perfil ↗</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Quick Statistics Bottom Horizontal Ribbon */}
      <div className="relative z-20 mt-16 lg:mt-24 w-full border-y border-brand-border bg-brand-card/45 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-brand-border/40">
            
            {/* Instagram follower */}
            <div className="flex flex-col items-center text-center justify-center pt-4 md:pt-0">
              <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight flex items-center justify-center">
                <Instagram size={18} className="text-primary-lightpink mr-1.5 shrink-0" />
                <span>32,8k</span>
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-400 mt-1">Seguidores Instagram</span>
            </div>

            {/* TikTok follower */}
            <div className="flex flex-col items-center text-center justify-center pt-4 md:pt-0">
              <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight flex items-center justify-center">
                <span className="font-sans font-black mr-1.5 text-primary-pink shrink-0 text-sm">𝅘𝅥𝅯</span>
                <span>22,6k</span>
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-400 mt-1">Seguidores TikTok</span>
            </div>

            {/* Total Views */}
            <div className="flex flex-col items-center text-center justify-center pt-4 md:pt-0">
              <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight flex items-center justify-center text-gradient-pink">
                <Eye size={18} className="text-primary-lightpink mr-1.5 shrink-0" />
                <span>21,7M</span>
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-400 mt-1">Visualizações (30D)</span>
            </div>

            {/* Reach accounts */}
            <div className="flex flex-col items-center text-center justify-center pt-4 md:pt-0">
              <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight flex items-center justify-center">
                <TrendingUp size={18} className="text-primary-lightpink mr-1.5 shrink-0" />
                <span>+7M</span>
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-400 mt-1">Contas Alcançadas</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
