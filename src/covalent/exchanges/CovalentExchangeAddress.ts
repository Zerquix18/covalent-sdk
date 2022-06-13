import { BalanceResponseType, CovalentDexName, CovalentExchangeAddressPoolsOptions, CovalentOptions, UniswapLikeExchangeListResponse } from "../../models";
import { fetchFromCovalent } from "../../utils";

class CovalentExchangeAddress {
  private options: CovalentOptions;
  private dexName: CovalentDexName;
  private address: string;
  private chainId: number;

  constructor(options: CovalentOptions, dexName: CovalentDexName, address: string, chainId: number) {
    this.options = options;
    this.dexName = dexName;
    this.address = address;
    this.chainId = chainId;
  }

  async pools(parameters?: CovalentExchangeAddressPoolsOptions) {
    const path = `${this.chainId}/xy=k/${this.dexName}/pools/address/${this.address}`;

    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as UniswapLikeExchangeListResponse;
  }

  async balances() {
    const path = `${this.chainId}/xy=k/${this.dexName}/address/${this.address}/balances`;

    const result = await fetchFromCovalent({ ...this.options, path });
    return result as BalanceResponseType;
  }

  async transactions() {
    const path = `${this.chainId}/xy=k/${this.dexName}/address/${this.address}/transactions`;

    const result = await fetchFromCovalent({ ...this.options, path });
    return result as BalanceResponseType;
  }
}

export default CovalentExchangeAddress;
