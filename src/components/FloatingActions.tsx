import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      
      <div className="flex items-center space-x-3 pointer-events-auto">
        {/* Scroll back to top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleScrollToTop}
              className="w-12 h-12 rounded-full bg-brand-card/90 backdrop-blur-md border border-brand-border text-gray-300 hover:text-white hover:border-primary-lightpink/35 flex items-center justify-center shadow-lg transition-colors cursor-pointer"
              title="Voltar ao Topo"
            >
              <ArrowUp size={16} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
