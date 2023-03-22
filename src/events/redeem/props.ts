import {
  AmmPoolProps,
  LiquidityOperationBasedProps,
  NetworkProps,
  OperationSettingsProps,
} from '../generalProps';

export type RedeemProps = {
  percent_of_liquidity: number;
} & OperationSettingsProps &
  LiquidityOperationBasedProps &
  AmmPoolProps &
  NetworkProps;
