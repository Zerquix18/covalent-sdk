export * from './covalentModels';

export interface CovalentOptions {
  key: string;
  version?: string;
}

export interface CovalentParameters {
  [key: string]: string | number | null | undefined | boolean;
}

export interface CovalentFetchOptions extends CovalentOptions {
  path: string;
  parameters?: CovalentParameters;
}

export interface CovalentAPIBaseResponse {
  data: unknown;
  error: boolean;
  error_message: string | null;
  error_code: number | null;
}

export interface CovalentAPIPaginationParameters {
  'page-number'?: number;
  'page-size'?: number;
}

export interface CovalentAPIPricingOptions extends CovalentParameters, CovalentAPIPaginationParameters {
  from?: string;
  to?: string;
  'prices-at-asc'?: string;
}

export interface CovalentAPITopicEventsOptions extends CovalentParameters, CovalentAPIPaginationParameters {
  'starting-block': number;
  'ending-block': number;
  'secondary-topics'?: string;
  'sender-address'?: string;
}

export interface CovalentChainsBalancesOptions extends CovalentParameters {
  nft: boolean;
  'no-nft-fetch': boolean;
}

export interface CovalentTransactionOptions extends CovalentParameters, CovalentAPIPaginationParameters {
  'no-logs': boolean;
}
