export interface CovalentOptions {
  key: string;
  version?: string;
}

export interface CovalentParameters {
  [key: string]: string | number | null;
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
