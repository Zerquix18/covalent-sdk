import { CovalentDexName, CovalentExchangeHealthDataOptions, CovalentExchangePoolsOptions, CovalentExchangeTokensOptions, CovalentOptions, EcosystemResponse, HealthDataResponse, NetworkExchangeTokenResponse, UniswapLikeExchangeListResponse } from "../models";
import { fetchFromCovalent } from "../utils";
import CovalentExchangeAddress from "./exchanges/CovalentExchangeAddress";
import CovalentExchangeToken from "./exchanges/CovalentExchangeToken";

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

  token(contractAddress: string) {
    return new CovalentExchangeToken(this.options, this.dexName, contractAddress, this.chainId);
  }

  address(address: string) {
    return new CovalentExchangeAddress(this.options, this.dexName, address, this.chainId);
  }
}

export default CovalentExchange;
