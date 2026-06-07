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
      image: "https://lh3.googleusercontent.com/d/1g4Uj1kwjhQbd0rvkdHEnDhHuSPAjyJd6=w450" 
    },
    { 
      title: "Beleza", 
      description: "Skincare simplificado, maquiagens para o dia a dia e avaliações honestas de lançamentos de cosméticos.",
      image: "https://lh3.googleusercontent.com/d/1A1qZCrenluvklvua3BJh2vnSdf9kQazU=w450" 
    },
    { 
      title: "Moda", 
      description: "Provadores interativos, combinação de looks fáceis de reproduzir e inspirações de outfits modernos e casuais.",
      image: "https://lh3.googleusercontent.com/d/11QQGywY7hfZv0nmY2ccYQ0xXqJSo-Dnu=w450" 
    },
    { 
      title: "Lifestyle", 
      description: "Rotina criativa, hábitos saudáveis, vlogs estéticos de um dia comum e bem-estar de forma leve.",
      image: "https://lh3.googleusercontent.com/d/1QjzlB3zy-sHfHC4Jgo-D2deXwgd9QZv5=w450" 
    },
    { 
      title: "Achadinhos", 
      description: "Indicações dos melhores produtos das principais plataformas (Shopee, SHEIN e Mercado Livre) testados e aprovados.",
      image: "https://lh3.googleusercontent.com/d/1FRXlMnAqVhx_xoS-J9cN5keBNJ2NH0f_=w450" 
    },
    { 
      title: "Produtos Virais", 
      description: "Testes práticos de itens que estão bombando nas redes sociais, validando sua eficácia e custo-benefício.",
      image: "https://lh3.googleusercontent.com/d/1oSS3qlgL3jaGQLRG12HLkXlVa5xmeuqh=w450" 
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
    { name: "@madufitnes", logo: "https://lh3.googleusercontent.com/d/1oSqM-3_FZoySCHyrZYCD96iH2FAOqo-4=w160", url: "https://instagram.com/madufitnes" },
    { name: "Shopee", logo: "https://lh3.googleusercontent.com/d/1X8mx64Wi02yVuxLeLmO6YmEQ_OnCp8Ga=w160", url: "https://shopee.com.br" },
    { name: "SHEIN", logo: "https://lh3.googleusercontent.com/d/1SJ-cvmki06rx-C8lq08ZQporDzkAGG-9=w160", url: "https://br.shein.com" },
    { name: "Mercado Livre", logo: "https://lh3.googleusercontent.com/d/1T8Mr_xwJyOVJrZoz8AyY_0Xkt7OG_SDC=w160", url: "https://www.mercadolivre.com.br" },
    { name: "AliExpress", logo: "https://lh3.googleusercontent.com/d/1c98gwbKjeWyo6RGZ8sdlE0b3L91nDXlZ=w160", url: "https://pt.aliexpress.com" },
    { name: "Essendy", logo: "https://lh3.googleusercontent.com/d/1_6txgcfG-6iuTBAELD3I9JtfqODaD28N=w160", url: "https://www.essendy.com.br" }
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
export default kamillyCardoso;
