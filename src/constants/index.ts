import { navLink, Coin, DashboardTab, RenderLabelValueProps } from "@/types";

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

export const fundamentalList1: RenderLabelValueProps[] = [
  {
    label: "Bitcoin Price",
    value: "$16416.50"
  },
  {
    label: "24h Low/ 24h High",
    value: "$16416.50/ $16416.50"
  },
  {
    label: "7d Low/ 7d High",
    value: "$16416.50/ $16416.50"
  },
  {
    label: "Trading volume",
    value: "$16416.50"
  },
  {
    label: "Market Cap Rank",
    value: "#1"
  }
]

export const fundamentalList2: RenderLabelValueProps[] = [
  {
    label: "Bitcoin Price",
    value: "$16416.50"
  },
  {
    label: "24h Low/ 24h High",
    value: "$16416.50/ $16416.50"
  },
  {
    label: "7d Low/ 7d High",
    value: "$16416.50/ $16416.50"
  },
  {
    label: "All time high",
    value: "$16416.50",
    additionalInfo: "Nov 20, 2021 (about 1 year)"
  },
  {
    label: "Market Cap Rank",
    value: "#1",
    additionalInfo: "Nov 20, 2021 (about 1 year)"
  }
]

