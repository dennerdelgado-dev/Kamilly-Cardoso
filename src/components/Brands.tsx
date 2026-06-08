import { motion } from "motion/react";
import { kamillyCardoso } from "../data";

export default function Brands() {
  const brands = kamillyCardoso.brands;

  const getBrandHandle = (name: string) => {
    switch (name) {
      case "@madufitnes": return "@madufitnes";
      case "Shopee": return "@shopee_br";
      case "SHEIN": return "@sheinbrasil_";
      case "Mercado Livre": return "@mercadolivre";
      case "AliExpress": return "@aliexpressbr";
      case "Essendy": return "@essendyoficial";
      default: return name.startsWith("@") ? name : `@${name.toLowerCase().replace(/\s+/g, "")}`;
    }
  };

  return (
    <section className="relative py-16 bg-brand-dark border-t border-white/5 overflow-hidden">
      {/* Background ambient aesthetic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-pink/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title Header */}
        <div className="text-center space-y-2 mb-10">
          <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-pink-300 font-mono">PARCERIAS DE SUCESSO</p>
          <h2 className="font-serif text-3xl tracking-wide font-light text-white">
            Marcas que <span className="italic text-primary-lightpink">já confiaram no meu trabalho</span>
          </h2>
        </div>

        {/* Minimalist interactive @ handles list */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {brands.map((brand) => {
            const handle = getBrandHandle(brand.name);
            return (
              <motion.a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="px-6 py-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-primary-lightpink/30 text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2.5 font-mono text-sm tracking-wide shadow-sm group"
              >
                <span className="text-primary-lightpink font-sans font-bold text-base transition-colors duration-300 group-hover:text-primary-pink">@</span>
                <span className="font-sans font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                  {handle.replace("@", "")}
                </span>
                <span className="text-gray-600 group-hover:text-primary-lightpink/95 text-[10px] pl-1 font-sans transition-colors duration-300">↗</span>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}


