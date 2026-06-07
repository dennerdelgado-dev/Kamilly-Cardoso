import { motion } from "motion/react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { kamillyCardoso } from "../data";

export default function Pillars() {
  const pillars = kamillyCardoso.pillars;

  return (
    <section id="nichos" className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Background glow visual element */}
      <div className="absolute top-1/4 right-[5%] w-80 h-80 rounded-full bg-primary-pink ambient-glow"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-primary-lightpink font-semibold">
              <span className="h-[1px] w-8 bg-primary-lightpink"></span>
              <span>Construção de Conteúdo</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
              Nichos de Atuação &<br />
              <span className="italic text-primary-lightpink">Pilares Editoriais</span>
            </h2>
          </div>
          
          <p className="mt-4 md:mt-0 text-gray-400 text-sm max-w-sm font-normal leading-relaxed">
            Pautas planejadas com foco em entretenimento, utilidade prática e indicação honesta de produtos de alto giro comercial.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative h-[360px] rounded-3xl overflow-hidden glass-premium flex flex-col justify-end p-8 border border-brand-border/40 hover:border-primary-lightpink/30 transition-all duration-300 shadow-xl"
            >
              {/* Card Background image with soft dark gradient overlay */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/70 to-black/20 z-10 group-hover:via-brand-dark/65 transition-all duration-300"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Decorative Floating Icon */}
              <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-brand-dark/80 backdrop-blur-md border border-brand-border flex items-center justify-center text-primary-lightpink/40 group-hover:text-primary-lightpink group-hover:border-primary-lightpink/30 group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight size={16} />
              </div>

              {/* Card Content info */}
              <div className="relative z-10 space-y-3 text-left">
                <div className="flex items-center space-x-1.5">
                  <span className="text-xs text-primary-lightpink/80 font-mono tracking-widest uppercase">PILAR 0{index + 1}</span>
                  <span className="w-1 h-1 rounded-full bg-primary-pink"></span>
                  <Sparkles size={11} className="text-primary-pink/60 animate-pulse" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide group-hover:text-primary-lightpink transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-300 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Micro Copy Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <span className="inline-block px-5 py-2.5 rounded-full bg-brand-card/30 border border-brand-border/40 text-[11px] uppercase tracking-widest text-gray-400 font-mono">
            🛍️ Perfeito para: Marcas de Beleza, Cosméticos, Moda, Lojas Shopee, SHEIN e Mercado Livre
          </span>
        </motion.div>

      </div>
    </section>
  );
}
