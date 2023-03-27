import { ErrorProps } from '../generalProps';
import { FarmsProps } from './props';

export type FarmsEvents = {
  'Farms Click Add Liquidity': FarmsProps;
  'Farms Click Stake': FarmsProps;
  'Farms Confirm Stake': FarmsProps;
  'Farms Confirm Stake Error': FarmsProps & ErrorProps;
  'Farms Cancel Stake Sign': FarmsProps;
  'Farms Sign Stake Success': FarmsProps;
};
