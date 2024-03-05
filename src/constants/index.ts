import { navLink, Coin } from "@/types";


export const navLinks: navLink[] = [
    {
        label: "Crypto Taxes",
        value: "crypto taxes",
        route: "/crypto-taxes"
    },
    {
        label: "Free tools",
        value: "free tools",
        route: "/free-tools"
    },
    {
        label: "Resource Center",
        value: "resource center",
        route: "resource-center"
    }
]

export const trendingCoins : Coin[] = [
    {
        id: "001",
        label: "Bitcoin",
        value: "bitcoin",
        symbol: "BTC",
        iconPath: "/assets/images/bitcoin-icon.svg",
        priceChange: {
            value: 3.45
        }
    },
    {
        id: "002",
        label: "Solana",
        value: "solana",
        symbol:"SOL",
        iconPath: "/assets/images/bitcoin-icon.svg",
        priceChange: {
            value: 2.04
        }
    },
    {
        id: "003",
        label: "Dogecoin",
        value: "dogecoin",
        symbol: "DOGC",
        iconPath: "/assets/images/bitcoin-icon.svg",
        priceChange: {
            value: 1.23
        }
    }
]