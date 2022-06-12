export * from './covalentModels';

export interface CovalentOptions {
  key: string;
  version?: string;
}

export interface CovalentParameters {
  [key: string]: string | number | null | undefined;
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

export interface CovalentAPIPricingOptions extends CovalentParameters {
  from?: string;
  to?: string;
  'prices-at-asc'?: string;
  'page-number'?: number;
  'page-size'?: number;
}


