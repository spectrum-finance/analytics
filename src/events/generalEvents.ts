import {
  LocaleProps,
  NetworkProps,
  ThemeProps,
  TokenProps,
  TraceProps,
  WebVitalsProps,
} from './generalProps';

export type GeneralEvents = {
  'Page Viewed': undefined;
  'App Loaded': undefined;

  'Web Vitals': WebVitalsProps;

  'Cookies Accepted': undefined;
  'Cookies Rejected': undefined;

  'Select Network': NetworkProps;
  'Select Theme': ThemeProps;
  'Select Locale': LocaleProps;

  // 'Open Select Token Modal': TraceProps;
  'Select Token': TokenProps & TraceProps;

  'Click MAX Button': TokenProps & TraceProps;
};
