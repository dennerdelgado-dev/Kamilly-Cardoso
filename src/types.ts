export interface StatCard {
  label: string;
  value: string;
  subtext?: string;
  icon: string;
}

export interface MetricItem {
  name: string;
  value: string;
  growth?: string;
  icon?: string;
}

export interface DemographyAge {
  range: string;
  percentage: number;
}

export interface DemographyGender {
  label: string;
  percentage: number;
}

export interface DemographyCity {
  city: string;
  rank: number;
  barColor?: string;
}

export interface HighlightVideo {
  title: string;
  views: string;
  image: string;
  category: string;
  likes?: string;
  shares?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface DifferentialItem {
  title: string;
  description: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  segment: string;
  budget: string;
  proposal: string;
  selectedPackages: string[];
}
