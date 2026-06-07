import { motion } from "motion/react";
import { Users, Globe, Eye, ArrowUpRight } from "lucide-react";
import { kamillyCardoso } from "../data";

export default function Demographics() {
  const { demographics } = kamillyCardoso;

  return (
    <section className="relative py-24 bg-brand-dark overflow-hidden border-t border-brand-border/40">
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-primary-pink/10 ambient-glow"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-20 text-center">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-primary-lightpink font-semibold">
            <span className="h-[1px] w-6 bg-primary-lightpink"></span>
            <span>Quem Acompanha</span>
            <span className="h-[1px] w-6 bg-primary-lightpink"></span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
            Análise <span className="italic text-primary-lightpink">Demográfica</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto font-normal leading-relaxed">
            Um público fiel, qualificado e de alto interesse em consumo. Uma audiência eminentemente feminina nas principais faixas de poder de compra.
          </p>
        </div>

        {/* Main Demographics 3-Column Bento Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Gênero Splitting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-brand-card/80 border border-brand-border/60 flex flex-col justify-between text-left relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-400 font-semibold">Distribuição de Gênero</span>
                <span className="p-2 rounded-xl bg-pink-500/10 text-primary-pink">
                  <Users size={16} />
                </span>
              </div>

              <h4 className="font-serif text-2xl font-bold text-white mb-2">Presença Feminina Recorde</h4>
              <p className="text-xs text-gray-400 font-normal leading-relaxed mb-8">
                Alinhamento absoluto com marcas de maquiagem, skincare, moda e autocuidado doméstico capilar.
              </p>
            </div>

            {/* Giant Radial or Split bar visualizer */}
            <div className="space-y-6">
              {demographics.gender.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-semibold text-white">{item.label}</span>
                    <span className="text-sm font-mono font-bold text-primary-lightpink">{item.percentage}%</span>
                  </div>
                  
                  {/* Outer container */}
                  <div className="w-full h-3 rounded-full bg-brand-dark border border-brand-border/40 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${
                        item.label === "Mulheres" 
                          ? "from-primary-pink to-primary-lightpink shadow-[0_0_10px_rgba(244,180,195,0.3)]" 
                          : "from-gray-600 to-gray-400"
                      }`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 mt-6 border-t border-brand-border/30">
              <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest block">Nicho Altamente Responsivo</span>
            </div>
          </motion.div>

          {/* Card 2: Faixa Etária (Age brackets) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-brand-card/80 border border-brand-border/60 flex flex-col justify-between text-left relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-400 font-semibold">Público por Faixa Etária</span>
                <span className="p-2 rounded-xl bg-pink-500/10 text-primary-pink">
                  <Globe size={16} />
                </span>
              </div>

              <h4 className="font-serif text-2xl font-bold text-white mb-2">Principais Consumidores</h4>
              <p className="text-xs text-gray-400 font-normal leading-relaxed mb-8">
                Mais de 54% da audiência possui entre 18 e 34 anos de idade. Jovens adultos tomadores de decisão em compras online.
              </p>
            </div>

            {/* Vertical Bar Visualizer lists with delay stagger */}
            <div className="space-y-4">
              {demographics.age.map((item, idx) => (
                <div key={item.range} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-300 font-medium">{item.range}</span>
                    <span className="font-mono font-bold text-primary-lightpink">{item.percentage}%</span>
                  </div>
                  
                  <div className="w-full h-2 rounded-full bg-brand-dark border border-brand-border/30 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage * 2.5}%` }} // stretch for visual impact
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary-pink via-primary-nude to-primary-lightpink"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4"></div>
          </motion.div>

          {/* Card 3: Top Cities Ranking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-brand-card/80 border border-brand-border/60 flex flex-col justify-between text-left relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-400 font-semibold">Distribuição Geográfica</span>
                <span className="p-2 rounded-xl bg-pink-500/10 text-primary-pink">
                  <Eye size={16} />
                </span>
              </div>

              <h4 className="font-serif text-2xl font-bold text-white mb-2">Principais Cidades</h4>
              <p className="text-xs text-gray-400 font-normal leading-relaxed mb-6">
                Foco concentrado nos maiores polos econômicos do país (SP, RJ e ES), garantindo alta taxa de conversão e logística rápida para e-commerces.
              </p>
            </div>

            {/* Cities Listing and rankings */}
            <div className="space-y-3">
              {demographics.cities.map((city, idx) => (
                <div key={city.city} className="flex items-center justify-between bg-brand-dark/45 border border-brand-border/45 p-2.5 rounded-xl hover:border-primary-lightpink/15 transition-all">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-lg bg-pink-500/10 text-[10px] font-mono font-bold text-primary-pink flex items-center justify-center">
                      #0{city.rank}
                    </span>
                    <span className="text-xs font-semibold text-white tracking-wide">{city.city}</span>
                  </div>
                  
                  {/* Subtle bar display */}
                  <div className="w-24 h-1.5 rounded-full bg-brand-dark overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${100 - (city.rank * 15)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${city.barColor || 'from-primary-pink to-primary-lightpink'}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
