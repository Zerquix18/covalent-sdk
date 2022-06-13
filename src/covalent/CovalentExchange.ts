import { CovalentDexName, CovalentExchangeHealthDataOptions, CovalentExchangePoolsOptions, CovalentExchangeTokensOptions, CovalentOptions, EcosystemResponse, HealthDataResponse, NetworkExchangeTokenResponse, UniswapLikeExchangeListResponse } from "../models";
import { fetchFromCovalent } from "../utils";

class CovalentExchange {
  private options: CovalentOptions;
  private dexName: CovalentDexName;
  private chainId: number;

  constructor(options: CovalentOptions, dexName: CovalentDexName, chainId: number) {
    this.options = options;
    this.dexName = dexName;
    this.chainId = chainId;
  }

  async pools(parameters?: CovalentExchangePoolsOptions) {
    const path = `${this.chainId}/xy=k/${this.dexName}/pools`;

    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as UniswapLikeExchangeListResponse;
  }

  async tokens(parameters?: CovalentExchangeTokensOptions) {
    const path = `${this.chainId}/xy=k/${this.dexName}/tokens`;

    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as NetworkExchangeTokenResponse;
  }

  async ecosystemChartData(parameters?: CovalentExchangeTokensOptions) {
    const path = `${this.chainId}/xy=k/${this.dexName}/ecosystem`;

    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as EcosystemResponse;
  }

  async healthData(parameters?: CovalentExchangeHealthDataOptions) {
    const path = `${this.chainId}/xy=k/${this.dexName}/health`;

    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as HealthDataResponse;
  }

}

export default CovalentExchange;
