import { AmmPoolProps, ErrorProps } from '../generalProps';
import { SwapProps } from './props';

export type SwapEvents = {
  'Swap Form Submit': SwapProps;
  'Swap Modal Confirm': SwapProps;
  'Swap Modal Confirm Error': SwapProps & ErrorProps;
  'Swap Signed Success': SwapProps;
  'Swap Signed Error': SwapProps & ErrorProps;
  'Swap Cancel Sign': SwapProps;
  'Swap Click Switch': undefined;
  'Swap Click Change Pool': undefined;
  'Swap Change Pool': AmmPoolProps;
};
