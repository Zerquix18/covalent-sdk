import { AddressWithHistoricalPricesItem, CovalentAPIPricingOptions, CovalentOptions } from "../models";
import { fetchFromCovalent } from "../utils";

class CovalentPricing {
  private options: CovalentOptions;
  private chainId: number;

  constructor(options: CovalentOptions, chainId: number) {
    this.options = options;
    this.chainId = chainId;
  }

  async prices(contractAddresses: string[], currency: string = 'USD', parameters?: CovalentAPIPricingOptions) {
    const path = `pricing/historical_by_addresses_v2/${this.chainId}/${currency}/${contractAddresses.join(',')}`;

    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as AddressWithHistoricalPricesItem[];
  }
}

export default CovalentPricing;
