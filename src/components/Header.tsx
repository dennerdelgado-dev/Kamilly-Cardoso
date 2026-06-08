import { useState, useEffect } from "react";
import { Menu, X, Instagram, Sparkles } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#sobre" },
    { label: "Nichos", href: "#nichos" },
    { label: "Estatísticas", href: "#estatisticas" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Formatos", href: "#formatos" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        id="app_header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-3 bg-brand-dark/85 backdrop-blur-md border-b border-brand-border" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <span className="text-2xl font-serif italic tracking-tighter text-white group-hover:opacity-90 transition-all duration-300">
              Kamilly Cardoso
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-gray-300 hover:text-primary-lightpink transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://instagram.com/kamilly_cardooso"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-primary-lightpink transition-colors"
              title="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#contato"
              className="px-5 py-2 border border-primary-lightpink text-primary-lightpink rounded-full hover:bg-primary-lightpink hover:text-black font-semibold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 shadow-sm"
            >
              Mídia Kit 2026
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-primary-lightpink transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[60px] z-40 w-full h-[calc(100vh-60px)] bg-brand-dark/95 backdrop-blur-xl border-t border-brand-border md:hidden flex flex-col justify-between p-8 animate-slide-down"
        >
          <div className="space-y-6 flex flex-col pt-8">
            {menuItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                style={{ animationDelay: `${index * 0.05}s` }}
                className="text-left text-lg font-serif tracking-wide text-gray-300 hover:text-primary-lightpink transition-colors py-2 border-b border-brand-border/40 flex justify-between items-center opacity-0 animate-fade-in-left"
              >
                <span>{item.label}</span>
                <Sparkles size={14} className="text-primary-lightpink/30" />
              </button>
            ))}
          </div>

          <div className="space-y-4 pb-12">
            <div className="flex justify-center space-x-6 text-gray-400">
              <a
                href="https://instagram.com/kamilly_cardooso"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-lightpink transition-colors flex items-center space-x-2 text-sm"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <span className="text-brand-border">|</span>
              <a
                href="https://tiktok.com/@kamilly_cardooso"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-lightpink transition-colors flex items-center space-x-2 text-sm"
              >
                <span className="font-bold font-mono">𝅘𝅥𝅯</span>
                <span>TikTok</span>
              </a>
            </div>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-4 rounded-xl bg-gradient-to-r from-primary-lightpink to-primary-pink text-brand-dark font-semibold text-sm uppercase tracking-widest"
            >
              Quero Fazer uma Parceria
            </a>
          </div>
        </div>
      )}
    </>
  );
}
