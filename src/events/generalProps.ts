import { AnalyticsNetwork } from '../@types/types';
import { ElementLocation, ElementName } from './primitives';

export type WebVitalsProps =
  | { cumulative_layout_shift: number }
  | { first_contentful_paint_ms: number }
  | { first_input_delay_ms: number }
  | { largest_contentful_paint_ms: number };

export type AmmPoolProps = {
  amm_pool_id: string;
  amm_pool_name: string;
  amm_pool_tvl: number;
  amm_pool_fee: number;
};

export type TokenProps = {
  token_name: string;
  toke_id: string;
};

export type LiquidityOperationBasedProps = {
  x_name: string;
  x_amount: number;
  x_usd: number;
  y_name: string;
  y_amount: number;
  y_usd: number;
  lp_usd: number;
};

export type OperationSettingsProps = {
  settings_slippage: number;
  settings_nitro: number;
  settings_fee_currency: FeeCurrency;
};

export type ErrorProps = {
  error_string: string;
};

export type FeeCurrency =
  | 'ergo-erg'
  | 'ergo-spf'
  | 'cardano-ada'
  | 'cardano-spf';

export type LocaleProps = {
  locale: string;
};

export type NetworkProps = {
  network: AnalyticsNetwork;
};

export type ThemeProps = {
  theme: string;
};

export type TraceProps = {
  element_location: ElementLocation;
  element_name: ElementName;
};
