import { AmmPoolProps } from '../generalProps';

export type FarmProps = {
  farm_id: string;
  farm_status: string;
  farm_name: string;
  farm_x_name: string;
  farm_y_name: string;
  farm_total_staked_x: number;
  farm_total_staked_y: number;
  farm_total_staked_usd: number;
  farm_apr: number;

  farm_user_staked_x: number;
  farm_user_staked_y: number;
  farm_user_available_x: number;
  farm_user_available_y: number;
} & AmmPoolProps;

export type StakeProps = {
  stake_x_amount: number;
  stake_y_amount: number;
} & FarmProps;
