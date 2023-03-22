import {
  AmmPoolProps,
  LiquidityOperationBasedProps,
  NetworkProps,
  OperationSettingsProps,
} from '../generalProps';

export type DepositProps = LiquidityOperationBasedProps &
  OperationSettingsProps &
  AmmPoolProps &
  NetworkProps;
