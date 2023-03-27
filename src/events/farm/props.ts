export type FarmsProps = {
  farm_id: string;
  pool_id: string;
  pool_name: string;
  x_name: string;
  y_name: string;
};

export type ExtendedFarmsProps = {
  x_amount: number;
  y_amount: number;
  lp_amount: number;
  lp_usd: number;
} & FarmsProps;
