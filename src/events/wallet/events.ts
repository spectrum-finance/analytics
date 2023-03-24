import { ErrorProps, TraceProps } from '../generalProps';
import { WalletProps } from './props';

export type WalletEvents = {
  'Click Connect Wallet Button': TraceProps;
  'Connect Wallet Success': WalletProps;
  'Connect Wallet Error': WalletProps & ErrorProps;
  'Install Wallet Extension Redirect': WalletProps;
  'Open Connected Wallet Modal': WalletProps;
  'Disconnect Wallet': WalletProps;
};
