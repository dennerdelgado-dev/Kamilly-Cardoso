import { motion } from "motion/react";
import { Sparkles, Heart, TrendingUp, ShoppingBag, Video, Rocket, CheckCircle } from "lucide-react";
import { kamillyCardoso } from "../data";

export default function Differentials() {
  const { differentials, reasons } = kamillyCardoso;

  // Icon mapping helper
  const iconMap: { [key: string]: any } = {
    Sparkles: Sparkles,
    Heart: Heart,
    TrendingUp: TrendingUp,
    ShoppingBag: ShoppingBag,
    Video: Video,
    Rocket: Rocket,
  };

  return (
    <section id="diferenciais" className="relative py-24 bg-brand-dark overflow-hidden border-t border-brand-border/40">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-lightpink/5 ambient-glow -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-20 text-center">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-primary-lightpink font-semibold">
            <span className="h-[1px] w-6 bg-primary-lightpink"></span>
            <span>Por que Anunciar?</span>
            <span className="h-[1px] w-6 bg-primary-lightpink"></span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
            Diferenciais de <span className="italic text-primary-lightpink">Conversão</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto font-normal leading-relaxed">
            A união perfeita de criatividade estética e precisão de conversão. Entenda por que grandes marcas escolhem o conteúdo da Kamilly Cardoso.
          </p>
        </div>

        {/* Bento Grid Layout - 3 columns, asymmetric cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Alcance além (Span 2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-8 rounded-3xl bg-brand-card/75 border border-brand-border/60 hover:border-primary-pink/20 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/10 transition-colors"></div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-pink/15 to-primary-lightpink/5 flex items-center justify-center text-primary-lightpink">
                <Sparkles size={22} />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  {differentials[0].title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 font-normal leading-relaxed max-w-xl">
                  {differentials[0].description}
                </p>
              </div>
            </div>

            {/* Micro aesthetic element inside card */}
            <div className="mt-8 pt-6 border-t border-brand-border/30 flex justify-between items-center text-xs text-gray-500 font-mono">
              <span>ALCANCE INTEGRAL</span>
              <span className="text-primary-pink">21.7M+ Impressões Ativas</span>
            </div>
          </motion.div>

          {/* Card 2: Conexão Genuína (Span 1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-brand-card/75 border border-brand-border/60 hover:border-primary-pink/20 transition-all duration-300 flex flex-col justify-between text-left group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-pink/15 to-primary-lightpink/5 flex items-center justify-center text-rose-300">
                <Heart size={21} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                  {differentials[1].title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 font-normal leading-relaxed">
                  {differentials[1].description}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border/30 flex justify-between items-center text-[10px] text-gray-500 font-mono">
              <span>RETENÇÃO</span>
              <span className="text-rose-300">Comunidade Ativa</span>
            </div>
          </motion.div>

          {/* Card 3: Alta Capacidade de Viralização (Span 1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-brand-card/75 border border-brand-border/60 hover:border-primary-pink/20 transition-all duration-300 flex flex-col justify-between text-left group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-pink/15 to-primary-lightpink/5 flex items-center justify-center text-emerald-300">
                <TrendingUp size={21} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                  {differentials[2].title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 font-normal leading-relaxed">
                  {differentials[2].description}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border/30 flex justify-between items-center text-[10px] text-gray-500 font-mono">
              <span>VIRALIZAÇÃO</span>
              <span className="text-emerald-300">Algoritmo Amigável</span>
            </div>
          </motion.div>

          {/* Card 4: Especialista de decisão de compra (Span 2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 p-8 rounded-3xl bg-brand-card/75 border border-brand-border/60 hover:border-primary-pink/20 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/10 transition-colors"></div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-pink/15 to-primary-lightpink/5 flex items-center justify-center text-primary-lightpink">
                <ShoppingBag size={21} />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  {differentials[3].title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 font-normal leading-relaxed max-w-xl">
                  {differentials[3].description}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border/30 flex justify-between items-center text-xs text-gray-500 font-mono">
              <span>CONVERSÃO DE PRODUTO</span>
              <span className="text-primary-pink">Especialista em Shopee e SHEIN</span>
            </div>
          </motion.div>

          {/* Card 5: Conteúdo Profissional (Span 1.5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1.5 p-8 rounded-3xl bg-brand-card/75 border border-brand-border/60 hover:border-primary-pink/20 transition-all duration-300 flex flex-col justify-between text-left group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-pink/15 to-primary-lightpink/5 flex items-center justify-center text-primary-pink">
                <Video size={20} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                  {differentials[4].title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 font-normal leading-relaxed">
                  {differentials[4].description}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border/30 flex justify-between items-center text-[10px] text-gray-500 font-mono">
              <span>DELIVERABLES</span>
              <span className="text-primary-pink">Gravações 4K Estéticas</span>
            </div>
          </motion.div>

          {/* Card 6: Público engajado qualificado (Span 1.5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-1.5 p-8 rounded-3xl bg-brand-card/75 border border-brand-border/60 hover:border-primary-pink/20 transition-all duration-300 flex flex-col justify-between text-left group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-pink/15 to-primary-lightpink/5 flex items-center justify-center text-sky-300">
                <Rocket size={20} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                  {differentials[5].title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 font-normal leading-relaxed">
                  {differentials[5].description}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border/30 flex justify-between items-center text-[10px] text-gray-500 font-mono">
              <span>DEMOGRAFIA ATIVA</span>
              <span className="text-sky-300">Alta Densidade Feminina</span>
            </div>
          </motion.div>

        </div>

        {/* Small Bottom Features Panel representing "Razões rápidas para anunciar" */}
        <div className="mt-16 p-8 rounded-3xl bg-brand-card border border-brand-border text-left">
          <h4 className="font-serif text-xl font-bold text-white mb-6">Em resumo, por que as marcas escolhem a Kamilly?</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {reasons.slice(0, 4).map((r, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle size={15} className="text-primary-pink shrink-0" />
                <span>{r.replace("✓ ", "")}</span>
              </div>
            ))}
            {reasons.slice(4).map((r, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle size={15} className="text-primary-pink shrink-0" />
                <span>{r.replace("✓ ", "")}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
