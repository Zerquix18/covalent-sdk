import { BalanceResponseType, CovalentAddressLogEventsOptions, CovalentChainsBalancesOptions, CovalentOptions, HistoricalPortfolioResponse } from "../models";
import { fetchFromCovalent } from "../utils";

class CovalentChains {
  private options: CovalentOptions;
  private address: string;
  private chain: number;

  constructor(options: CovalentOptions, address: string, chain: number) {
    this.options = options;
    this.address = address;
    this.chain = chain;
  }

  async balances(parameters?: CovalentChainsBalancesOptions) {
    const path = `${this.chain}/address/${this.address}/balances_v2`;
    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as BalanceResponseType;
  }

  async portfolio() {
    const path = `${this.chain}/address/${this.address}/portfolio_v2`;
    const result = await fetchFromCovalent({ ...this.options, path });
    return result as HistoricalPortfolioResponse;
  }

  async tokenTransfers(contract: string) {
    const path = `${this.chain}/address/${this.address}/transfers_v2`;
    const parameters = {
      'contract-address': contract,
    };

    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as HistoricalPortfolioResponse;
  }

  async logEvents(parameters: CovalentAddressLogEventsOptions) {
    const path = `${this.chain}/events/address/${this.address}`;
    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as HistoricalPortfolioResponse;
  }
}

export default CovalentChains;
