import { CovalentOptions, CovalentTransactionOptions, SingleTransactionResponse } from "../models";
import { fetchFromCovalent } from "../utils";

class CovalentTransaction {
  private options: CovalentOptions;
  private chainId: number;

  constructor(options: CovalentOptions, chainId: number) {
    this.options = options;
    this.chainId = chainId;
  }

  async get(txHash: string, parameters?: CovalentTransactionOptions) {
    const path = `${this.chainId}/transaction_v2/${txHash}`;
    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as SingleTransactionResponse;
  }
}

export default CovalentTransaction;
