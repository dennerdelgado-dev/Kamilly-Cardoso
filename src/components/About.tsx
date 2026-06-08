import { motion } from "motion/react";
import { Sparkles, Heart, Anchor, ShieldCheck } from "lucide-react";
import { kamillyCardoso, getOptimizedImageUrl } from "../data";

export default function About() {
  const highlights = [
    { 
      icon: Heart, 
      title: "Conexão Real", 
      desc: "Autenticidade e transparência que geram confiança imediata com seguidoras qualificadas." 
    },
    { 
      icon: Sparkles, 
      title: "Autoridade Estética", 
      desc: "Afinidade nativa com as maiores tendências de cabelo, saúde capilar e skincare." 
    },
    { 
      icon: ShieldCheck, 
      title: "Parceria Segura", 
      desc: "Comprometimento com métricas e cronogramas para garantir parcerias profissionais." 
    }
  ];

  return (
    <section id="sobre" className="relative py-24 bg-brand-dark/95 overflow-hidden">
      {/* Decorative vector background lines */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary-nude ambient-glow -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Interactive Visual with overlapping aesthetic frames */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative w-full max-w-[380px] mx-auto aspect-[4/5]">
              {/* Decorative behind border offset */}
              <div className="absolute -inset-4 rounded-3xl border border-primary-lightpink/20 -rotate-2 scale-[1.01] pointer-events-none"></div>

              {/* Picture image card */}
              <motion.div
                whileHover={{ rotate: 1, scale: 1.01 }}
                className="w-full h-full rounded-2xl overflow-hidden glass-premium shadow-2xl p-1.5"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
                  <img
                    src={getOptimizedImageUrl("/images/about.webp", 500)}
                    alt="Kamilly Cardoso Lifestyle and Skincare Aesthetic representation"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Small absolute graphic card inside */}
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-dark/90 backdrop-blur-md border border-brand-border p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-primary-lightpink block">Foco Total</span>
                      <span className="text-sm font-semibold text-white">Audiência Qualificada</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary-pink/10 flex items-center justify-center text-primary-pink">
                      ✨
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Text Copy & Pillar Bulletpoints */}
          <div className="lg:col-span-7 space-y-10 order-1 lg:order-2 text-left">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-xs uppercase tracking-widest text-primary-lightpink font-semibold"
              >
                <span className="h-[1px] w-8 bg-primary-lightpink"></span>
                <span>Sobre a Criadora</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight"
              >
                Prazer, eu sou a<br />
                <span className="italic text-primary-lightpink">Kamilly Cardoso</span>
              </motion.h2>
            </div>

            {/* The actual bio copy splits beautifully for editorial readability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed font-normal"
            >
              <p className="font-semibold text-white text-lg">Seja bem-vindo(a)!</p>
              <p>
                Eu sou a Kamilly Cardoso, tenho 18 anos e sou apaixonada por criar conteúdo para as redes sociais. No meu dia a dia, transformo tendências em ferramentas de conexão humana.
              </p>
              <p>
                Compartilho dicas de cabelo, beleza, moda, lifestyle e achadinhos, sempre de forma autêntica e transparente.
              </p>
              <p>
                Meu objetivo é criar uma conexão real com o público, gerando confiança e influência genuína nas decisões de compra.
              </p>
            </motion.div>

            {/* Structured Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="p-5 rounded-2xl bg-brand-card/45 border border-brand-border/60 hover:bg-brand-card/85 hover:border-primary-lightpink/20 transition-all duration-300 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-pink/15 to-primary-lightpink/5 flex items-center justify-center text-primary-pink">
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-serif font-bold text-white text-base tracking-wide">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
