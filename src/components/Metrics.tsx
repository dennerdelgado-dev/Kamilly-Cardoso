import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Activity, 
  BarChart2, 
  Award, 
  Eye, 
  Search, 
  ExternalLink, 
  X, 
  Smartphone, 
  Sparkles, 
  ArrowUpRight 
} from "lucide-react";
import { kamillyCardoso } from "../data";

export default function Metrics() {
  const { metrics } = kamillyCardoso;
  const [activeTab, setActiveTab] = useState<string>("reach");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>("");

  const performanceProofs = [
    {
      id: "reach",
      title: "Contas Alcançadas",
      value: metrics.reachedAccounts,
      subtext: "Últimos 30 dias",
      description: "Alcance orgânico massivo de mais de 7 Milhões de contas únicas. Uma capacidade extraordinária de distribuição viral que supera grandes veículos de mídia.",
      screenshot: "/images/metric_reach.webp",
      icon: Target,
      highlightBadge: "7.0M Alcançados",
      roiDetail: "Ideal para marcas que buscam awareness de escala nacional e atração contínua de novas clientes.",
      accent: "from-pink-500/20 to-rose-400/10",
      borderGlow: "group-hover:border-pink-400/30",
      glowColor: "bg-pink-500/10"
    },
    {
      id: "views",
      title: "Visualizações de Reels",
      value: metrics.totalViews,
      subtext: "Total Acumulado (30D)",
      description: "Mais de 21 Milhões de visualizações nos vídeos de Reels e TikTok. Conteúdo viciante que retém a audiência e maximiza a fixação das marcas de forma leve e estética.",
      screenshot: "/images/metric_views.webp",
      icon: TrendingUp,
      highlightBadge: "21.7M de Views",
      roiDetail: "Garante visualizações duradouras, impulsionando posts no carrossel de descoberta por dias.",
      accent: "from-amber-600/20 to-orange-400/10",
      borderGlow: "group-hover:border-orange-400/30",
      glowColor: "bg-orange-500/10"
    },
    {
      id: "growth",
      title: "Crescimento Acelerado",
      value: metrics.newFollowers,
      subtext: "Novos Seguidores",
      description: "Fluxo diário de novos seguidores espontâneos e apaixonados por beleza e rotinas saudáveis de cuidados, prontos para consumir novas indicações.",
      screenshot: "/images/metric_growth.webp",
      icon: Users,
      highlightBadge: "+8.1K Seguidores",
      roiDetail: "Comunidade extremamente ativa, em expansão acelerada, gerando engajamento ultra-receptivo.",
      accent: "from-purple-500/20 to-indigo-400/10",
      borderGlow: "group-hover:border-purple-400/30",
      glowColor: "bg-purple-500/10"
    },
    {
      id: "visits",
      title: "Visitas ao Perfil",
      value: metrics.profileVisits,
      subtext: "Impulsos de Ação (30D)",
      description: "Mais de 42 mil visitas orgânicas ao perfil. Isso comprova que a audiência busca ativamente saber quem ela indica na bio, expandindo cliques em links significativamente.",
      screenshot: "/images/metric_visits.webp",
      icon: Activity,
      highlightBadge: "42.9K Cliques/Ações",
      roiDetail: "Caminho direto de conversão para lojas online de parceiros, comissões de afiliados e páginas de vendas.",
      accent: "from-teal-500/20 to-emerald-400/10",
      borderGlow: "group-hover:border-teal-400/30",
      glowColor: "bg-teal-500/10"
    },
    {
      id: "nonfollowers",
      title: "Público Não Seguidor",
      value: metrics.unfollowedViewsPercentage,
      subtext: "Taxa de Descoberta",
      description: "Impressionantes 97,9% do alcance vêm de pessoas que ainda não a seguem. Isso valida o poder de viralização contínua do algoritmo de descoberta do perfil.",
      screenshot: "/images/metric_nonfollowers.webp",
      icon: Eye,
      highlightBadge: "97.9% Descoberta Orgânica",
      roiDetail: "Perfeito para marcas que querem prospectar novos clientes frios sem custos de anúncios pagos.",
      accent: "from-blue-500/20 to-cyan-400/10",
      borderGlow: "group-hover:border-cyan-400/30",
      glowColor: "bg-blue-500/10"
    },
    {
      id: "interactions",
      title: "Interações com a Audiência",
      value: metrics.interactions,
      subtext: "Últimos 30 dias",
      description: "Interações reais e altamente qualificadas, repletas de comentários desejando produtos, curtidas sinceras, compartilhamentos em massa e posts salvos.",
      screenshot: "/images/metric_interactions.webp",
      icon: Sparkles,
      highlightBadge: "3.2K+ Conversões",
      roiDetail: "A audiência não apenas visualiza, ela debate, salva receitas, consome e compra ativamente os produtos indicados.",
      accent: "from-fuchsia-500/20 to-pink-400/10",
      borderGlow: "group-hover:border-fuchsia-400/30",
      glowColor: "bg-fuchsia-500/10"
    }
  ];

  const currentProof = performanceProofs.find(p => p.id === activeTab) || performanceProofs[0];

  const handleOpenLightbox = (image: string, title: string) => {
    setLightboxImage(image);
    setLightboxTitle(title);
  };

  return (
    <section id="estatisticas" className="relative py-24 bg-brand-dark overflow-hidden border-t border-brand-border/40">
      {/* Background elegant lighting glow */}
      <div className="absolute top-1/4 right-[10%] w-[600px] h-[600px] bg-primary-pink/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-[5%] w-[400px] h-[400px] bg-primary-lightpink/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="space-y-4 mb-20 text-center">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-pink-300 font-mono">
            <span className="h-[1px] w-8 bg-primary-lightpink/60"></span>
            <span>Performance Comprovada</span>
            <span className="h-[1px] w-8 bg-primary-lightpink/60"></span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
            NOSSOS NÚMEROS <span className="italic text-primary-lightpink">REAIS DE ENGAJAMENTO</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto font-normal leading-relaxed">
            Sem dados fictícios ou simulações. Abaixo você tem acesso à prova social auditada direto dos dashboards das plataformas, comprovando o alto retorno comercial das nossas parcerias.
          </p>
        </div>

        {/* Dynamic Proof Dashboard Platform */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Core Bento KPIs lists */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <div className="space-y-4 text-left">
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-gray-400 uppercase bg-[#181818] px-3.5 py-1.5 rounded-full border border-white/5">
                📊 CLIQUE EM UM CARD DE PERFORMANCE PARA VERIFICAR A PROVA DO DASHBOARD
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-light text-white mt-3">
                Métricas em <span className="italic text-primary-lightpink">Destaques Criativos</span>
              </h3>
            </div>

            {/* Bento Grid layout of the interactive performance triggers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {performanceProofs.map((proof) => {
                const IsActive = proof.id === activeTab;
                const IconComponent = proof.icon;
                return (
                  <motion.button
                    key={proof.id}
                    onClick={() => setActiveTab(proof.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-5 rounded-2xl bg-[#0f0f11] border ${IsActive ? "border-primary-lightpink/60 bg-gradient-to-br " + proof.accent : "border-white/5 hover:border-white/10"} text-left transition-all duration-300 relative group overflow-hidden`}
                  >
                    {/* Top corner minimal icon indicator */}
                    <div className="flex items-center justify-between mb-3 relative z-10">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 group-hover:text-gray-400 font-semibold">
                        {proof.subtext}
                      </span>
                      <div className={`w-8 h-8 rounded-lg ${IsActive ? "bg-white/10 text-white" : "bg-white/[0.03] text-primary-lightpink/70"} flex items-center justify-center transition-colors duration-300`}>
                        <IconComponent size={15} />
                      </div>
                    </div>

                    {/* Numeric Value & Label */}
                    <div className="relative z-10 space-y-1">
                      <div className="text-2xl font-mono font-black text-white flex items-baseline space-x-1.5">
                        <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                          {proof.value}
                        </span>
                      </div>
                      <h4 className="text-sm font-serif font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                        {proof.title}
                      </h4>
                    </div>

                    {/* Highly discreet "Click to preview" flag */}
                    <div className="mt-4 flex items-center justify-between pointer-events-none relative z-10">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/5 text-[9px] text-gray-400 uppercase font-mono tracking-widest">
                        {IsActive ? "Ativo no Mockup ✓" : "Ver Comprovação 👁"}
                      </span>
                      <span className="text-[10px] text-primary-lightpink opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono">
                        Visualizar →
                      </span>
                    </div>

                    {/* Top hover light edge line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-lightpink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                );
              })}
            </div>

            {/* In-depth Analytical summary of active metric */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d0d0f] border border-white/5 text-left space-y-4">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-pink animate-pulse"></span>
                <span className="text-xs uppercase tracking-widest font-mono text-primary-lightpink font-bold">
                  DADOS VERIFICADOS &bull; AUDITADO
                </span>
              </div>
              
              <h4 className="text-lg font-serif font-medium text-white decoration-primary-pink underline-offset-4">
                {currentProof.title}: <span className="text-primary-lightpink italic font-light">{currentProof.highlightBadge}</span>
              </h4>

              <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
                {currentProof.description}
              </p>

              {/* ROI block detailing how advertiser benefits from the active metric */}
              <div className="mt-5 pt-5 border-t border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/[0.01] p-3.5 rounded-xl">
                <div className="space-y-0.5">
                  <span className="text-[9px] text-gray-500 uppercase font-mono tracking-widest block font-bold">Retorno para o Anunciante (ROI)</span>
                  <span className="text-xs text-white leading-normal font-medium block">
                    ⚡ {currentProof.roiDetail}
                  </span>
                </div>
                <button
                  onClick={() => handleOpenLightbox(currentProof.screenshot, currentProof.title)}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 active:scale-95 border border-white/15 hover:border-primary-lightpink/35 text-white rounded-lg text-[10px] font-mono tracking-widest uppercase transition-all flex items-center space-x-1.5 self-start sm:self-auto"
                >
                  <Search size={11} className="text-primary-lightpink" />
                  <span>Ampliar Prova</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Block: Pure Smartphone frame showcasing the real live screenshot */}
          <div className="lg:col-span-5 flex flex-col items-center justify-start">
            
            {/* The Smartphone Premium mockup chassis container */}
            <div className="relative w-full max-w-[340px] aspect-[9/18.5] bg-[#070708] rounded-[48px] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_0_10px_#1c1a1f,0_0_0_12px_#27252c,0_20px_50px_rgba(244,180,195,0.08)] border border-white/15 overflow-hidden group">
              
              {/* iOS top island capsule notch element */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20 flex items-center justify-center border border-white/[0.05] shadow-inner">
                {/* Simulated tiny camera pupil lens dot */}
                <span className="absolute right-5 w-2.5 h-2.5 rounded-full bg-[#101015] border border-white/5 flex items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-[#1b1b42]/60"></span>
                </span>
                {/* Speaker line */}
                <div className="w-10 h-[2px] bg-gray-800 rounded-full"></div>
              </div>

              {/* iOS top subtle time / battery indicators */}
              <div className="absolute top-5 left-8 right-8 flex justify-between items-center text-[10px] font-mono text-zinc-400 font-semibold select-none z-20">
                <span>09:41</span>
                <div className="flex items-center space-x-1.5">
                  <Smartphone size={10} className="text-zinc-500" />
                  <span className="w-4 h-2 bg-zinc-600 rounded-[1px] inline-block relative border border-zinc-500/50">
                    <span className="absolute top-0 left-0 h-full bg-zinc-300 w-[80%]"></span>
                  </span>
                </div>
              </div>

              {/* Core Screen display space housing the screenshot */}
              <div className="w-full h-full rounded-[38px] bg-zinc-950 overflow-hidden relative border border-black flex flex-col items-center justify-center">
                
                {/* Interactive premium zoom container overlay */}
                <div 
                  onClick={() => handleOpenLightbox(currentProof.screenshot, currentProof.title)}
                  className="absolute inset-0 bg-black/0 hover:bg-black/45 duration-300 transition-colors z-10 flex flex-col items-center justify-center cursor-zoom-in opacity-0 hover:opacity-100"
                >
                  <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-lg scale-90 group-hover:scale-100 transition-all duration-300">
                    <Search size={18} />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#FADADD] mt-3 font-semibold">
                    Ampliar Comprovação
                  </span>
                  <span className="text-[8px] uppercase font-mono tracking-widest text-gray-400 mt-1">
                    Painel Oficial Plataforma
                  </span>
                </div>

                {/* Animated transition of real screenshots inside viewport */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProof.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full p-1"
                  >
                    <img
                      src={currentProof.screenshot}
                      alt={`Relatório de ${currentProof.title}`}
                      className="w-full h-full object-cover object-top select-none pointer-events-none rounded-[32px] pt-12 pb-4"
                      referrerPolicy="no-referrer"
                      decoding="async"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Simulated navigation slider bar bottom indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-zinc-700 rounded-full z-20"></div>
              </div>
            </div>

            {/* Quick action info banner to reassure brand client */}
            <div className="mt-4 flex items-center justify-center space-x-1 px-3 py-1 bg-white/[0.02] border border-white/5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[9px] font-mono font-medium text-emerald-400 uppercase tracking-widest">
                Prova de Performance Verificada
              </span>
            </div>
          </div>

        </div>

        {/* Banners Proof-of-Performance strip below */}
        <div className="mt-20 pt-14 border-t border-white/[0.05]">
          <div className="text-left space-y-2 mb-8">
            <span className="text-[10px] text-primary-lightpink uppercase tracking-widest font-mono font-bold block">GALERIA DE DASHBOARDS</span>
            <h3 className="font-serif text-2xl font-light text-white">
              Todos os <span className="italic text-primary-lightpink">Relatórios de Desempenho</span>
            </h3>
            <p className="text-xs text-gray-400">
              Clique em qualquer relatório abaixo para ampliar em alta resolução e analisar cada métrica detalhadamente.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {performanceProofs.map((item) => (
              <motion.div
                key={item.id + "-thumb"}
                onClick={() => handleOpenLightbox(item.screenshot, item.title)}
                whileHover={{ scale: 1.03, y: -2 }}
                className="group relative rounded-xl overflow-hidden aspect-[9/16] bg-[#0c0c0e] border border-white/5 hover:border-primary-pink/30 cursor-zoom-in transition-all duration-300"
              >
                {/* Soft backdrop overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-300 z-10 flex flex-col justify-end p-3">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-black/80 backdrop-blur-sm border border-white/5 text-left relative z-10">
                    <p className="text-[8px] sm:text-[9px] font-mono text-primary-lightpink font-bold uppercase tracking-wider">{item.value}</p>
                    <p className="text-[9px] sm:text-[10px] text-white font-medium truncate leading-tight font-serif mt-0.5">{item.title}</p>
                  </div>
                </div>

                <img
                  src={item.screenshot}
                  alt={`Galeria Mini ${item.title}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 z-20">
                  <Search size={12} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Full Resolution Interactive Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxImage(null)}
          >
            {/* Modal Body Container with escape propagation */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#0a0a0b] border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row h-auto max-h-[90vh] shadow-2xl"
            >
              
              {/* Close Button mobile edge */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center"
              >
                <X size={16} />
              </button>

              {/* Left Column: The Large detailed visual panel */}
              <div className="flex-1 bg-zinc-950 p-4 sm:p-6 flex items-center justify-center overflow-y-auto max-h-[50vh] md:max-h-none md:h-[750px]">
                <img
                  src={lightboxImage || ""}
                  alt={`Comprovação de ${lightboxTitle}`}
                  className="max-h-full max-w-full object-contain rounded-xl select-none"
                  referrerPolicy="no-referrer"
                  decoding="async"
                />
              </div>

              {/* Right Column: Detailed Analytics Verification info */}
              <div className="w-full md:w-[320px] p-6 sm:p-8 bg-[#0f0f11] border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between text-left shrink-0">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] uppercase tracking-widest font-bold">
                    <Award size={10} />
                    <span>Dados Auditados</span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs uppercase font-mono text-primary-lightpink">Estatística Oficial</span>
                    <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                      {lightboxTitle}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    Esta captura de tela corresponde à seção oficial de insights da conta corporativa e comprova as métricas reais atingidas de maneira 100% orgânica.
                  </p>

                  <div className="space-y-2.5 pt-3">
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest block font-bold">Compromisso do Criador</span>
                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-1.5 text-xs text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                        <span>Sem manipulação ou edição de números</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                        <span>Captura recente de 30 dias de performance</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                        <span>Origem direta nos painéis do Instagram/TikTok</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 md:pt-0">
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="w-full py-3 bg-gradient-to-r from-primary-lightpink to-primary-pink text-brand-dark rounded-xl text-center text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-md shadow-primary-pink/15"
                  >
                    Confirmar Leitura ✓
                  </button>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
