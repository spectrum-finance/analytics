import { DepositEvents } from './deposit/events';
import { FarmEvents } from './farm/events';
import { GeneralEvents } from './generalEvents';
import { RedeemEvents } from './redeem/events';
import { SwapEvents } from './swap/events';
import { WalletEvents } from './wallet/events';

export { DepositProps } from './deposit/props';
export { FarmProps, StakeProps } from './farm/props';
export { RedeemProps } from './redeem/props';
export { SwapProps } from './swap/props';
export { WalletProps } from './wallet/props';

export type AnalyticsEvents = GeneralEvents &
  SwapEvents &
  DepositEvents &
  RedeemEvents &
  WalletEvents &
  FarmEvents;
