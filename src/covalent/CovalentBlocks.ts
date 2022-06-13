import { CovalentOptions, SingleBlockResponse } from "../models";
import { fetchFromCovalent } from "../utils";

class CovalentBlocks {
  private options: CovalentOptions;
  private chain: number;

  constructor(options: CovalentOptions, chain: number) {
    this.options = options;
    this.chain = chain;
  }

  async get(block: number | 'latest' = 'latest') {
    const path = `${this.chain}/block_v2/${block}`;
    const result = await fetchFromCovalent({ ...this.options, path });
    return result as SingleBlockResponse;
  }

  async between(date1: string, date2: string) {
    const path = `${this.chain}/block_v2/${date1}/${date2}`;

    const result = await fetchFromCovalent({ ...this.options, path });
    return result as SingleBlockResponse;
  }
}

export default CovalentBlocks;
