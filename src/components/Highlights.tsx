import { motion } from "motion/react";
import { Instagram, Award, Heart, CheckCircle } from "lucide-react";
import { kamillyCardoso } from "../data";
import Image from "./Image";

export default function Highlights() {
  const instagramUrl = "https://instagram.com/kamilly_cardooso";

  return (
    <section id="instagram-spotlight" className="relative py-24 bg-brand-dark overflow-hidden border-t border-white/5">
      {/* Soft background glow accents */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 rounded-full bg-primary-pink/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 rounded-full bg-primary-lightpink/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title Header */}
        <div className="space-y-4 mb-16 text-center">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-primary-lightpink font-mono font-bold">
            <span className="h-[1px] w-8 bg-primary-lightpink/60"></span>
            <span>PRESENÇA DIGITAL EM DESTAQUE</span>
            <span className="h-[1px] w-8 bg-primary-lightpink/60"></span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
            CONECTE-SE NO <span className="italic text-primary-lightpink">INSTAGRAM OFICIAL</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto font-normal leading-relaxed">
            Acompanhe em tempo real as rotinas, lançamentos da semana e interações com a comunidade de beleza que cresce todos os dias.
          </p>
        </div>

        {/* Centered Responsive Profile Card Layout */}
        <div className="flex justify-center">
          
          {/* Premium Professional Instagram Profile Card Mockup */}
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full max-w-[480px] rounded-3xl bg-[#09090a] border border-white/10 overflow-hidden shadow-2xl relative"
          >
            {/* Premium gradient header strip mimicking active stories circle lights */}
            <div className="h-2 w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"></div>
            
            <div className="p-6 sm:p-8 space-y-6 text-left">
              
              {/* Profile Header Block */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                {/* Glowing Animated Story Avatar */}
                <div className="relative shrink-0 select-none">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 animate-spin-slow opacity-90"></div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-black overflow-hidden">
                    <Image 
                      src="/images/avatar.webp" 
                      width={96}
                      height={96}
                      alt="@kamilly_cardooso Avatar" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Profile Numeric Statistics */}
                <div className="flex-1 flex justify-around text-center py-2">
                  <div>
                    <span className="block font-mono text-base sm:text-lg font-black text-white leading-tight">410+</span>
                    <span className="block text-[10px] sm:text-xs text-zinc-400 font-medium">Publicações</span>
                  </div>
                  <div>
                    <span className="block font-mono text-base sm:text-lg font-black text-white leading-tight">32,8k</span>
                    <span className="block text-[10px] sm:text-xs text-zinc-400 font-medium">Seguidores</span>
                  </div>
                  <div>
                    <span className="block font-mono text-base sm:text-lg font-black text-white leading-tight">1.2k</span>
                    <span className="block text-[10px] sm:text-xs text-zinc-400 font-medium">Seguindo</span>
                  </div>
                </div>
              </div>

              {/* Bio text section */}
              <div className="space-y-2">
                <div className="flex items-center space-x-1.5">
                  <h3 className="font-sans font-bold text-base sm:text-lg text-white tracking-wide">kamilly_cardooso</h3>
                  <CheckCircle size={16} className="text-sky-400 fill-sky-400 shrink-0" title="Perfil Autêntico" />
                </div>
                
                <p className="text-xs uppercase tracking-widest text-[#f59e0b] font-mono font-bold">Criadora de Conteúdo Digital</p>
                
                <div className="text-xs sm:text-sm text-gray-300 space-y-1 leading-normal font-sans">
                  <p>✨ Cabelo, skincare, make e lifestyle</p>
                  <p>💌 Parcerias por direct ou e-mail</p>
                  <p>📍 {kamillyCardoso.location} | 18 Anos</p>
                  <p className="text-primary-lightpink font-medium font-mono">🔗 {instagramUrl.replace("https://", "")}</p>
                </div>
              </div>

              {/* Actions Row */}
              <div className="grid grid-cols-2 gap-3 pt-3">
                <a 
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-bold text-xs uppercase tracking-widest text-center rounded-xl transition-all duration-300 hover:brightness-110 flex items-center justify-center space-x-2 shadow-lg shadow-pink-500/10 cursor-pointer text-nowrap"
                >
                  <Instagram size={14} />
                  <span>Seguir Perfil</span>
                </a>
                
                <a 
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-xs uppercase tracking-widest text-center rounded-xl border border-white/15 hover:border-white/20 transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer text-nowrap"
                >
                  <span>Enviar Direct</span>
                </a>
              </div>

              {/* Embedded dynamic metrics to build trust with brand clients */}
              <div className="border-t border-white/[0.06] pt-5 mt-5 flex items-center justify-between text-zinc-400">
                <div className="flex items-center space-x-1.5">
                  <Heart size={14} className="text-pink-500 fill-pink-500/10" />
                  <span className="text-[11px] font-mono leading-none">Engajamento Alto</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Award size={14} className="text-primary-lightpink" />
                  <span className="text-[11px] font-mono leading-none">+7M Contas Alcançadas</span>
                </div>
              </div>

            </div>

            {/* Decorative side spotlight line */}
            <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-white/10 via-transparent to-transparent"></div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
