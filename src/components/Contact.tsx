import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Instagram, Award, Check } from "lucide-react";
import { kamillyCardoso } from "../data";

interface ContactProps {
  prefilledPackages?: string[];
  prefilledTotal?: number;
}

export default function Contact({ prefilledPackages, prefilledTotal }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(kamillyCardoso.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="relative py-28 bg-brand-dark overflow-hidden border-t border-brand-border/45">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary-pink/15 ambient-glow"></div>
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-primary-lightpink/10 ambient-glow"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <div className="space-y-4 mb-14">
          <div className="inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-primary-pink font-semibold">
            <span className="h-[1px] w-6 bg-primary-lightpink"></span>
            <span>Contato Profissional</span>
            <span className="h-[1px] w-6 bg-primary-lightpink"></span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight">
            Inicie uma <span className="italic text-primary-lightpink">Parceria Comercial</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto font-light leading-relaxed">
            Entre em contato diretamente por e-mail para enviar briefings de campanhas, solicitar cotações de pacotes personalizados ou propor ações patrocinadas.
          </p>
        </div>

        {/* Big Highlighted Email Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-14 rounded-3xl bg-brand-card/85 border border-white/10 shadow-2xl relative overflow-hidden max-w-2xl mx-auto"
        >
          {/* Accent border glow */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-lightpink/40 to-transparent"></div>
          
          <div className="flex flex-col items-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-primary-lightpink/10 border border-primary-lightpink/20 flex items-center justify-center text-primary-lightpink">
              <Mail size={26} />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-mono font-bold">E-mail de Assessoria</span>
              <a 
                href={`mailto:${kamillyCardoso.email}`}
                className="block text-2xl sm:text-4xl font-serif italic text-white hover:text-primary-lightpink transition-colors duration-300 break-all py-1"
              >
                {kamillyCardoso.email}
              </a>
            </div>

            {/* Selected pricing reminder shown natively if they used the interactive packages calculator */}
            {prefilledPackages && prefilledPackages.length > 0 && (
              <div className="p-4 rounded-xl bg-primary-lightpink/5 border border-primary-lightpink/10 text-xs text-primary-lightpink text-left max-w-md w-full">
                <strong>Formatos selecionados no simulador:</strong> {prefilledPackages.join(", ")}
                <span className="block mt-1">Estimativa de Investimento: <strong>R$ {prefilledTotal?.toLocaleString("pt-BR")}</strong></span>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-4 pt-4 w-full">
              <a
                href={`mailto:${kamillyCardoso.email}`}
                className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-primary-lightpink font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center space-x-2 shadow-lg cursor-pointer"
              >
                <span>Enviar E-mail</span>
              </a>
              
              <button
                onClick={handleCopyEmail}
                className="px-8 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/5 font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center space-x-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400">Copiado!</span>
                  </>
                ) : (
                  <span>Copiar E-mail</span>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Secondary Info Row / Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mt-8">
          {/* Instagram Link Block */}
          <a
            href="https://instagram.com/kamilly_cardooso"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-4 p-5 rounded-2xl bg-brand-card/40 border border-white/5 hover:border-primary-pink/30 hover:bg-brand-card transition-all duration-300 text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-primary-pink">
              <Instagram size={20} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400 font-semibold block">Instagram Oficial</span>
              <span className="text-sm font-semibold text-white tracking-wide">{kamillyCardoso.instagramHandle}</span>
            </div>
          </a>

          {/* Response time indicator */}
          <div className="flex items-center space-x-4 p-5 rounded-2xl bg-brand-card/40 border border-white/5 text-left">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-primary-pink shrink-0">
              <Award size={20} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400 font-semibold block">Tempo de Resposta</span>
              <span className="text-sm font-semibold text-white tracking-wide">&lt; 12 horas úteis</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
