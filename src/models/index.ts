export * from './covalentModels';

export interface CovalentOptions {
  key: string;
  version?: string;
}

export interface CovalentParameters {
  [key: string]: string | number | null | undefined | boolean | string[] | number[];
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

export interface CovalentTokenHolderOptions extends CovalentParameters, CovalentAPIPaginationParameters {
  'block-height': 'latest' | number;
}

export interface CovalentTokenHolderChangesOptions extends CovalentParameters, CovalentAPIPaginationParameters {
  'starting-block': number;
  'ending-block': number;
};

export interface CovalentTokenNftIds extends CovalentParameters, CovalentAPIPaginationParameters {

}

export interface CovalentTokenNftTransactions extends CovalentParameters, CovalentAPIPaginationParameters {
  
}

export interface CovalentAddressLogEventsOptions extends CovalentParameters, CovalentAPIPaginationParameters {
  'starting-block': number;
  'ending-block': number;
};

export type CovalentDexName = (
  'uniswap_v2' |
  'sushiswap' |
  'pancakeswap_v2' |
  'quickswap' |
  'pangolin' |
  'spiritswap' |
  'spookyswap' |
  'traderjo' |
  'standard' |
  'apeswap_v2' |
  'katana' |
  'stellaswap' |
  'beamswap' |
  string
);

export interface CovalentExchangePoolsOptions extends CovalentParameters, CovalentAPIPaginationParameters {
  'contract-addresses'?: string[];
  'tickers'?: string[];
}

export interface CovalentExchangeTokensOptions extends CovalentParameters, CovalentAPIPaginationParameters {

}


export interface CovalentExchangeHealthDataOptions extends CovalentParameters, CovalentAPIPaginationParameters {

}