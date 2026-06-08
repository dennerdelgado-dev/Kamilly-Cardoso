import { 
  StatCard, 
  MetricItem, 
  DemographyAge, 
  DemographyGender, 
  DemographyCity, 
  HighlightVideo, 
  PricingPackage, 
  DifferentialItem 
} from "./types";

export const kamillyCardoso = {
  name: "Kamilly Cardoso",
  age: 18,
  location: "Vitória • Espírito Santo",
  instagramHandle: "@kamilly_cardooso",
  tiktokHandle: "@kamilly_cardooso",
  email: "kamillycardooso0@gmail.com",
  nicheShort: "Beleza • Cabelos • Moda • Lifestyle • Achadinhos",
  tagline: "Criadora de Conteúdo • Beleza • Cabelos • Moda • Lifestyle",
  mainPhrase: "Conectando marcas a milhões de pessoas através de conteúdo autêntico, criativo e de alta performance.",
  aboutText: "Seja bem-vindo(a)! Eu sou a Kamilly Cardoso, tenho 18 anos e sou apaixonada por criar conteúdo para as redes sociais. Compartilho dicas de cabelo, beleza, moda, lifestyle e achadinhos, sempre de forma autêntica e transparente. Meu objetivo é criar uma conexão real com o público, gerando confiança e influência genuína nas decisões de compra.",
  
  // Hero statistics highlighted
  heroStats: [
    { label: "Seguidores Instagram", value: "32,8 mil", subtext: "@kamilly_cardooso", icon: "instagram" },
    { label: "Seguidores TikTok", value: "22,6 mil", subtext: "@kamilly_cardooso", icon: "tiktok" },
    { label: "Visualizações", value: "21,7 Milhões", subtext: "Últimos 30 dias", icon: "eye" },
    { label: "Contas Alcançadas", value: "7 Milhões", subtext: "Alcance orgânico", icon: "trending-up" }
  ],

  // Specific content pillars
  pillars: [
    { 
      title: "Cabelos", 
      description: "Tutoriais de finalização, rotinas de saúde dos fios, cronograma capilar e resenhas de produtos que viram febre.",
      image: "/images/pillars_cabelos.webp" 
    },
    { 
      title: "Beleza", 
      description: "Skincare simplificado, maquiagens para o dia a dia e avaliações honestas de lançamentos de cosméticos.",
      image: "/images/pillars_beleza.webp" 
    },
    { 
      title: "Moda", 
      description: "Provadores interativos, combinação de looks fáceis de reproduzir e inspirações de outfits modernos e casuais.",
      image: "/images/pillars_moda.webp" 
    },
    { 
      title: "Lifestyle", 
      description: "Rotina criativa, hábitos saudáveis, vlogs estéticos de um dia comum e bem-estar de forma leve.",
      image: "/images/pillars_lifestyle.webp" 
    },
    { 
      title: "Achadinhos", 
      description: "Indicações dos melhores produtos das principais plataformas (Shopee, SHEIN e Mercado Livre) testados e aprovados.",
      image: "/images/pillars_achadinhos.webp" 
    },
    { 
      title: "Produtos Virais", 
      description: "Testes práticos de itens que estão bombando nas redes sociais, validando sua eficácia e custo-benefício.",
      image: "/images/pillars_virais.webp" 
    }
  ],

  // Specific results & analytic metrics
  metrics: {
    totalViews: "21.766.709",
    totalViewsLabel: "Visualizações Totais",
    reachedAccounts: "7.069.946",
    reachedAccountsLabel: "Contas Alcançadas",
    instagramFollowers: "32.800",
    tiktokFollowers: "22.600",
    interactions: "3.200+",
    interactionsLabel: "Interações Mensais",
    newFollowers: "8.100+",
    newFollowersLabel: "Novos Seguidores (30D)",
    profileVisits: "42.949",
    profileVisitsLabel: "Visitas ao Perfil",
    unfollowedViewsPercentage: "97,9%",
    unfollowedViewsHighlight: "97,9% das visualizações vieram de pessoas que ainda não seguiam o perfil."
  },

  // Demographics
  demographics: {
    gender: [
      { label: "Mulheres", percentage: 63.5 },
      { label: "Homens", percentage: 36.5 }
    ],
    age: [
      { range: "18 a 24 anos", percentage: 27.6 },
      { range: "25 a 34 anos", percentage: 26.9 },
      { range: "13 a 17 anos", percentage: 19.3 },
      { range: "35 a 44 anos", percentage: 14.3 }
    ],
    cities: [
      { city: "São Paulo", rank: 1, barColor: "from-pink-500 to-rose-400" },
      { city: "Rio de Janeiro", rank: 2, barColor: "from-pink-400 to-rose-300" },
      { city: "Teresópolis", rank: 3, barColor: "from-pink-300 to-rose-200" },
      { city: "Serra", rank: 4, barColor: "from-pink-300 to-rose-100" },
      { city: "Salvador", rank: 5, barColor: "from-pink-200 to-pink-100" }
    ]
  },

  // Highlight high-performance content (represented inside a high-end mobile frame)
  highlights: [
    { 
      title: "Dica Capilar: Cronograma para Cachos Perfeitos", 
      views: "2,8 Milhões", 
      likes: "184 mil",
      shares: "42 mil",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&auto=format&fit=crop&q=80",
      category: "Cabelos" 
    },
    { 
      title: "Achadinho de Beleza que Vale Cada Centavo", 
      views: "877 Mil", 
      likes: "72 mil",
      shares: "18 mil",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80",
      category: "Achadinhos" 
    },
    { 
      title: "Get Ready With Me: Estilo Editorial Elegante", 
      views: "842 Mil", 
      likes: "68 mil",
      shares: "11 mil",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=80",
      category: "Moda" 
    },
    { 
      title: "Minha Rotina Estética Noturna dos Sonhos", 
      views: "663 Mil", 
      likes: "55 mil",
      shares: "9 mil",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=80",
      category: "Lifestyle" 
    }
  ],

  // Client trust signals
  brands: [
    { name: "@madufitnes", logo: "/images/brand_madufitnes.webp", url: "https://instagram.com/madufitnes" },
    { name: "Shopee", logo: "/images/brand_shopee.webp", url: "https://shopee.com.br" },
    { name: "SHEIN", logo: "/images/brand_shein.webp", url: "https://br.shein.com" },
    { name: "Mercado Livre", logo: "/images/brand_mercadolivre.webp", url: "https://www.mercadolivre.com.br" },
    { name: "AliExpress", logo: "/images/brand_aliexpress.webp", url: "https://pt.aliexpress.com" },
    { name: "Essendy", logo: "/images/brand_essendy.webp", url: "https://www.essendy.com.br" }
  ],

  // Differentials
  differentials: [
    { 
      title: "Alcance além dos seguidores", 
      description: "Meu conteúdo alcança milhões de pessoas todos os meses, levando sua marca para muito além da minha base de seguidores.",
      icon: "Sparkles"
    },
    { 
      title: "Conexão genuína com a audiência", 
      description: "Produzo conteúdos autênticos e espontâneos, criando uma relação de confiança que aumenta a credibilidade das recomendações.",
      icon: "Heart"
    },
    { 
      title: "Alta capacidade de viralização", 
      description: "Com vídeos que ultrapassam milhões de visualizações, entrego visibilidade real para marcas e produtos.",
      icon: "TrendingUp"
    },
    { 
      title: "Especialista em influenciar decisões", 
      description: "Meu conteúdo de beleza, moda, cabelos e achadinhos desperta interesse real e incentiva a ação imediata do público.",
      icon: "ShoppingBag"
    },
    { 
      title: "Conteúdo profissional e criativo", 
      description: "Cada parceria é desenvolvida com atenção milimétrica aos detalhes para valorizar a identidade da sua marca.",
      icon: "Video"
    },
    { 
      title: "Público qualificado e altamente engajado", 
      description: "Uma audiência ativa interessada em tendências, produtos e novidades, pronta para descobrir novas marcas parceiras.",
      icon: "Rocket"
    }
  ],

  // Partners choose Kamilly checks
  reasons: [
    "✓ Conteúdo autêntico",
    "✓ Alto alcance orgânico",
    "✓ Público engajado",
    "✓ Forte influência em compras",
    "✓ Conteúdo profissional",
    "✓ Excelente performance em vídeos",
    "✓ Nichos altamente comerciais"
  ],

  // Packages & Pricing formats
  packages: [
    {
      id: "stories",
      name: "Pacote Stories",
      price: 250,
      description: "Format ideal para lançamentos rápidos, cupons de desconto limitados e engajamento dinâmico.",
      features: [
        "3 Stories sequenciais e estéticos",
        "Marcação ativa do perfil da marca (@)",
        "Link direto clicável com sticker personalizado",
        "Métrica de cliques e impressões enviada após 24h",
        "Opção de caixa de perguntas para sanar dúvidas do público"
      ]
    },
    {
      id: "feed",
      name: "Pacote Feed",
      price: 400,
      description: "Perfeito para fixar um visual profissional e estético da sua marca no feed principal de forma duradoura.",
      features: [
        "1 Publicação única ou carrossel de alta qualidade",
        "Fotos profissionais com iluminação e edição estética premium",
        "Legenda vendedora focada em benefícios e CTA claro",
        "Marcação da marca na foto e menção na primeira linha do texto",
        "Fixação no topo do perfil por 3 dias"
      ]
    },
    {
      id: "reels",
      name: "Pacote Reels",
      price: 800,
      description: "A força total do alcance orgânico. Vídeos de alta conversão integrando a marca de forma autêntica.",
      features: [
        "1 Vídeo curto (Reels ou TikTok) dinâmico e estético",
        "Uso de áudios em alta e técnica de gancho nos primeiros 3s",
        "Roteiro exclusivo focado em resolver dores com seu produto",
        "Marcação como colaborador para compartilhar alcance",
        "Uso do vídeo para tráfego pago liberado por 15 dias"
      ]
    },
    {
      id: "premium",
      name: "Combo Premium",
      price: 1000,
      isPopular: true,
      description: "Fórmula de maior sucesso. O máximo impacto combinando a atração do Reels e a conversão direta dos Stories.",
      features: [
        "1 Reels dinâmico e com alto poder de retenção",
        "3 Stories focados no gancho do Reels + Link de compra direcionado",
        "Link clicável destacado em destaque permanente do perfil",
        "Copywriting persuasivo e humanizado",
        "Prioridade na produção e agendamento da parceria"
      ]
    },
    {
      id: "mensal",
      name: "Parceria Mensal",
      price: 3000,
      description: "A melhor opção para construção de marca e conversão constante. Presença diária na mente da audiência.",
      features: [
        "4 Reels estéticos exclusivos por mês (1 por semana)",
        "12 Stories distribuídos de forma estratégica (3 por semana)",
        "Link clicável contínuo na biografia ou nos destaques principais",
        "Status de embaixadora oficial da marca",
        "Direito de uso de imagem para tráfego pago ativo por 30 dias"
      ]
    }
  ]
};

const imageMap: Record<string, string> = {
  "/images/hero.webp": "1u0_cqy50-AfdtT614-AWuCKXm4PpAX6M",
  "/images/about.webp": "1aIBwmA8i-wptbTjlsbQ8u3vBXAVDUMis",
  "/images/avatar.webp": "14O2kGUjFkTZ_gk0zO5hJbXjmPCx3XcTE",
  "/images/pillars_cabelos.webp": "1CevYmCJZV4OHqcUWw67gwJiL4MR0GBvQ",
  "/images/pillars_beleza.webp": "1u0_cqy50-AfdtT614-AWuCKXm4PpAX6M",
  "/images/pillars_moda.webp": "1eA-7bpjYuXD-eCpMHmJxlvL1Eak46pIY",
  "/images/pillars_lifestyle.webp": "1yDDjL59Cgm3O8y0LpEQfSfdqhLnFhOdK",
  "/images/pillars_achadinhos.webp": "1m2mcujWN0rXLBvj2zVh_6YyPzC270ZXV",
  "/images/pillars_virais.webp": "1yDDjL59Cgm3O8y0LpEQfSfdqhLnFhOdK",
  "/images/metric_reach.webp": "15pZZBS7fi_c-aEgBGCyiQPWdpVi2TrxC",
  "/images/metric_views.webp": "1TeiQLY8n9wje1qxca9JL4crAhr1rnEK0",
  "/images/metric_growth.webp": "1aC3qIwnGY0AdO_nRCdo89PZCTudqVSaq",
  "/images/metric_visits.webp": "10AS7meNmQZwJJCs0G4S9PqBxtn9CS7Gs",
  "/images/metric_nonfollowers.webp": "1n3-hoEWy_aCsOjkRI1Qa9YeheIxeubpq",
  "/images/metric_interactions.webp": "10wdhqtmBxxLGd6Rz1R0IP95T13NUox9m"
};

export function getOptimizedImageUrl(url: string, width: number): string {
  if (!url) return "";
  
  const mappedId = imageMap[url];
  if (mappedId) {
    return `https://lh3.googleusercontent.com/d/${mappedId}=w${width}`;
  }

  if (url.includes("lh3.googleusercontent.com/d/")) {
    const base = url.split("=")[0];
    return `${base}=w${width}`;
  }
  
  return url;
}

export default kamillyCardoso;
