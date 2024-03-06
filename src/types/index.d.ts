export interface navLink {
  label: string;
  value: string;
  route: string;
}

interface ChangeIndicatorProps {
  value: number;
}

export interface Coin {
  id: string;
  label: string;
  symbol: string;
  value: string;
  iconPath: string;
  priceChange: ChangeIndicatorProps;
}

export interface PriceMeterProps {
  low: {
    label: string;
    value: number;
  };
  high: {
    label: string;
    value: number;
  };
}

export interface DashboardTab {
    label: string,
    value: string,
}

export interface RenderLabelValueProps {
  label: string;
  value: string;
  additionalInfo?: string;
}

export interface EstimateMeterProps {
  label: string;
  value: number;
  color: string;
}

export interface CalculateCardProps {
  label: string,
  imgPath: string,
  btnText: string
}

export interface ButtonProps {
  btnText: string,
  targetRoute: string
}

export interface TeamMemberCardProps {
  userImg: string,
  name: string,
  designation: string,
  description: string
}
