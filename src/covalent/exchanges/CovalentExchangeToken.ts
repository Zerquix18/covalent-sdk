import { BalanceResponseType, CovalentDexName, CovalentExchangeAddressPoolsOptions, CovalentExchangeTokenGetOptions, CovalentExchangeTokenTransactionsOptions, CovalentOptions, SingleNetworkExchangeTokenResponse, TokenAddressTransactionsResponse, UniswapLikeExchangeListResponse } from "../../models";
import { fetchFromCovalent } from "../../utils";

class CovalentExchangeAddress {
  private options: CovalentOptions;
  private dexName: CovalentDexName;
  private contractAddress: string;
  private chainId: number;

  constructor(options: CovalentOptions, dexName: CovalentDexName, contractAddress: string, chainId: number) {
    this.options = options;
    this.dexName = dexName;
    this.contractAddress = contractAddress;
    this.chainId = chainId;
  }

  async get(parameters?: CovalentExchangeTokenGetOptions) {
    const path = `${this.chainId}/xy=k/${this.dexName}/tokens/address/${this.contractAddress}`;

    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as SingleNetworkExchangeTokenResponse;
  }

  async transactions(parameters?: CovalentExchangeTokenTransactionsOptions) {
    const path = `${this.chainId}/xy=k/${this.dexName}/tokens/address/${this.contractAddress}/transactions`;

    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as TokenAddressTransactionsResponse;
  }
}

export default CovalentExchangeAddress;
