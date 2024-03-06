import { navLink, Coin, DashboardTab } from "@/types";

export const navLinks: navLink[] = [
  {
    label: "Crypto Taxes",
    value: "crypto taxes",
    route: "/crypto-taxes",
  },
  {
    label: "Free tools",
    value: "free tools",
    route: "/free-tools",
  },
  {
    label: "Resource Center",
    value: "resource center",
    route: "resource-center",
  },
];

export const trendingCoins: Coin[] = [
  {
    id: "001",
    label: "Bitcoin",
    value: "bitcoin",
    symbol: "BTC",
    iconPath: "/assets/images/bitcoin-icon.svg",
    priceChange: {
      value: 3.45,
    },
  },
  {
    id: "002",
    label: "Solana",
    value: "solana",
    symbol: "SOL",
    iconPath: "/assets/images/bitcoin-icon.svg",
    priceChange: {
      value: 2.04,
    },
  },
  {
    id: "003",
    label: "Dogecoin",
    value: "dogecoin",
    symbol: "DOGC",
    iconPath: "/assets/images/bitcoin-icon.svg",
    priceChange: {
      value: 1.23,
    },
  },
];


export const dashboardTabOptions: DashboardTab[] = [
  {
    label: "Overview",
    value: "overview"
  },
  {
    label: "Fundamentals",
    value: "fundamentals"
  },
  {
    label: "News Insights",
    value: "news-insights"
  },
  {
    label: "Sentiments",
    value: "sentiments"
  },
  {
    label: "Team",
    value: "team"
  },
  {
    label: "Technicals",
    value: "technicals"
  },
  {
    label: "Tokenomics",
    value: "tokenomics"
  }
]