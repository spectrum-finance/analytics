import { ErrorProps } from '../generalProps';
import { FarmProps, StakeProps } from './props';

export type FarmEvents = {
  'Farm Click Add Liquidity': FarmProps;
  'Farm Stake Submit': FarmProps & StakeProps;
  'Farm Stake Confirm Modal': FarmProps & StakeProps;
  'Farm Stake Confirm Modal Error': FarmProps & StakeProps & ErrorProps;
  'Farm Stake Sign Success': FarmProps & StakeProps;
  'Farm Stake Sign Error': FarmProps & StakeProps & ErrorProps;
  'Farm Stake Cancel Sign': FarmProps & StakeProps;
  'Farm Click Manage Add Liquidity': FarmProps;
  'Farm Click Manage Unstake': FarmProps;
  'Farm Unstake Confirm Modal': FarmProps & StakeProps;
  'Farm Unstake Confirm Modal Error': FarmProps & StakeProps & ErrorProps;
  'Farm Unstake Sign Success': FarmProps & StakeProps;
  'Farm Unstake Sign Error': FarmProps & StakeProps & ErrorProps;
};
