import { LucideIcon } from "lucide-react";

export interface NavLink {
  href:  string;
  label: string;
}

export interface Feature {
  icon:   LucideIcon;
  title:  string;
  desc:   string;
  badge?: string;
}

export interface PricingPlan {
  name:     string;
  icon:     LucideIcon;
  tagline:  string;
  price:    Record<string, number>;
  featured: boolean;
  cta:      string;
  features: string[];
}

export interface Stat {
  icon:   LucideIcon;
  value:  number;
  suffix: string;
  label:  string;
  color:  string;
}

export interface FAQ {
  q: string;
  a: string;
}
