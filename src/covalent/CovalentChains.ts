import { ChainStatusResponse, CovalentOptions, GenericChainInfoDisplay } from "../models";
import { fetchFromCovalent } from "../utils";

class CovalentChains {
  private options: CovalentOptions;

  constructor(options: CovalentOptions) {
    this.options = options;
  }

  async list() {
    const path = 'chains';
    const result = await fetchFromCovalent({ ...this.options, path });
    return result as GenericChainInfoDisplay;
  }

  async statuses() {
    const path = 'chains/statuses';
    const result = await fetchFromCovalent({ ...this.options, path });
    return result as ChainStatusResponse;
  }
}

export default CovalentChains;
