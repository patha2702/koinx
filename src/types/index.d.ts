export interface navLink {
    label: string,
    value: string,
    route: string
}

interface ChangeIndicatorProps {
    value: number;
  }

export interface Coin {
    id: string,
    label: string,
    symbol: string,
    value: string,
    iconPath: string,
    priceChange: ChangeIndicatorProps
}