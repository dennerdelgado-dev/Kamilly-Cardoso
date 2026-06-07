import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Flame, ShoppingBag, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { kamillyCardoso } from "../data";
import { PricingPackage } from "../types";

interface PackagesProps {
  onSelectPackages: (packageNames: string[], totalPrice: number) => void;
}

export default function Packages({ onSelectPackages }: PackagesProps) {
  const packages = kamillyCardoso.packages;
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleTogglePackage = (pkg: PricingPackage) => {
    let newSelected: string[];
    if (selectedIds.includes(pkg.id)) {
      newSelected = selectedIds.filter((id) => id !== pkg.id);
    } else {
      newSelected = [...selectedIds, pkg.id];
    }
    setSelectedIds(newSelected);

    // Calculate details and push to parent state
    const selectedPkgs = packages.filter((p) => newSelected.includes(p.id));
    const pkgNames = selectedPkgs.map((p) => p.name);
    const subtotal = selectedPkgs.reduce((acc, p) => acc + p.price, 0);
    const discount = newSelected.length >= 2 ? subtotal * 0.1 : 0; // 10% discount for combo packs
    const finalTotal = subtotal - discount;
    onSelectPackages(pkgNames, finalTotal);
  };

  // Quick helper to see if a package is selected
  const isSelected = (id: string) => selectedIds.includes(id);

  // Calculates instant visual variables for the sidebar checklist
  const selectedPackagesData = packages.filter((p) => selectedIds.includes(p.id));
  const subtotal = selectedPackagesData.reduce((acc, p) => acc + p.price, 0);
  const discount = selectedIds.length >= 2 ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  const handleScrollToContact = () => {
    const el = document.querySelector("#contato");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="formatos" className="relative py-24 bg-brand-dark/95 border-t border-brand-border/40 overflow-hidden">
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-1/4 right-[5%] w-80 h-80 rounded-full bg-primary-pink/10 ambient-glow"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-20 text-center">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-primary-lightpink font-semibold">
            <span className="h-[1px] w-6 bg-primary-lightpink"></span>
            <span>Investimento Comercial</span>
            <span className="h-[1px] w-6 bg-primary-lightpink"></span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
            Formatos & <span className="italic text-primary-lightpink">Pacotes de Parceria</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto font-normal leading-relaxed">
            Selecione uma das opções abaixo ou monte seu combo personalizado usando nosso construtor de propostas interativo.
          </p>
        </div>

        {/* Pricing Cards Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch mb-16">
          {packages.map((pkg) => {
            const isPkgSelected = isSelected(pkg.id);
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative p-6 rounded-3xl flex flex-col justify-between text-left transition-all duration-300 ${
                  pkg.isPopular 
                    ? "bg-gradient-to-b from-brand-card via-brand-card to-pink-500/10 border-2 border-primary-pink shadow-lg shadow-pink-500/10" 
                    : "bg-brand-card border border-brand-border/60 hover:border-brand-border"
                } ${isPkgSelected ? "ring-2 ring-primary-lightpink ring-offset-2 ring-offset-brand-dark" : ""}`}
              >
                {/* Popularity Badge */}
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary-pink text-brand-dark flex items-center space-x-1 text-[10px] tracking-widest font-mono font-black uppercase shadow-md">
                    <Flame size={12} className="fill-brand-dark animate-pulse" />
                    <span>MAIS POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Title & Price */}
                  <div className="space-y-2 mb-6">
                    <h3 className="font-serif text-lg font-extrabold text-white tracking-wide">{pkg.name}</h3>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-sm font-semibold text-gray-400">R$</span>
                      <span className="text-3xl font-mono font-bold text-white tracking-tight">{pkg.price}</span>
                      {pkg.id === "mensal" && <span className="text-xs text-gray-400 ml-1">/mês</span>}
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal min-h-[48px]">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Bullet Benefits lists */}
                  <div className="space-y-3.5 mb-8 border-t border-brand-border/40 pt-6">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check size={14} className="text-primary-pink shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-300 leading-snug font-normal">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA: Interactive Toggle checkbox */}
                <button
                  onClick={() => handleTogglePackage(pkg)}
                  className={`w-full py-3.5 rounded-xl text-xs uppercase tracking-widest font-mono font-bold transition-all ${
                    isPkgSelected
                      ? "bg-emerald-500 text-white"
                      : pkg.isPopular
                        ? "bg-primary-lightpink text-brand-dark hover:bg-white"
                        : "bg-brand-dark border border-brand-border text-gray-300 hover:text-white hover:border-primary-lightpink/20"
                  }`}
                >
                  {isPkgSelected ? "✓ SELECIONADO" : "➕ ESTIMAR COMBO"}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Interactive Proposal Builder Dashboard widget */}
        <AnimatePresence>
          {selectedIds.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="p-8 rounded-3xl bg-brand-card border border-brand-border flex flex-col lg:flex-row justify-between items-center gap-8 text-left"
            >
              {/* Left Column: Summary and list of checked packages */}
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center space-x-2 text-primary-pink">
                  <Sparkles size={16} />
                  <span className="text-xs font-mono uppercase tracking-widest font-black">PROPOSTA PERSONALIZADA CONSTRUÍDA</span>
                </div>

                <h4 className="font-serif text-2xl font-bold text-white">Excelente escolha de formatos!</h4>
                
                {/* List of checked items chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedPackagesData.map((p) => (
                    <span key={p.id} className="px-3.5 py-1.5 rounded-full bg-brand-dark border border-brand-border text-xs text-primary-lightpink font-semibold">
                      {p.name}
                    </span>
                  ))}
                </div>

                {/* Bundle Multi-discount alert notification */}
                {selectedIds.length >= 2 ? (
                  <p className="text-xs text-emerald-400 font-medium flex items-center">
                    🎉 Combo ativo! Você ganhou 10% de desconto progressivo por fechar múltiplos formatos.
                  </p>
                ) : (
                  <p className="text-xs text-gray-400 font-normal">
                    💡 Selecione mais 1 formato para ganhar 10% de desconto progressivo no valor final!
                  </p>
                )}
              </div>

              {/* Right Column: Calculations and submission trigger */}
              <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-6 lg:justify-end">
                <div className="text-center sm:text-right space-y-1">
                  {discount > 0 && (
                    <span className="text-xs text-gray-500 line-through block font-mono">
                      Subtotal: R$ {subtotal.toLocaleString("pt-BR")}
                    </span>
                  )}
                  <span className="text-xs text-gray-400 uppercase font-mono tracking-widest block">Investimento Estimado</span>
                  <span className="text-3xl sm:text-4xl font-mono text-gradient-pink font-bold block leading-none">
                    R$ {total.toLocaleString("pt-BR")}
                  </span>
                </div>

                {/* Dispatch Button */}
                <button
                  onClick={handleScrollToContact}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary-lightpink to-primary-pink text-brand-dark hover:scale-103 font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-transform shadow-lg shadow-pink-500/10"
                >
                  <span>Anunciar Com Esses Itens</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
