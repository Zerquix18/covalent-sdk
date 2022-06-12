import { CovalentOptions, CovalentTokenHolderChangesOptions, CovalentTokenHolderOptions, CovalentTokenNftIds, CovalentTokenNftTransactions, TokenHolderResponse } from "../models";
import { fetchFromCovalent } from "../utils";

class CovalentToken {
  private options: CovalentOptions;
  private token: string;
  private chainId: number;

  constructor(options: CovalentOptions, token: string, chainId: number) {
    this.options = options;
    this.token = token;
    this.chainId = chainId;
  }

  async holders(parameters?: CovalentTokenHolderOptions) {
    const path = `${this.chainId}/tokens/${this.token}/token_holders`;

    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as TokenHolderResponse[];
  }

  async holderChanges(parameters: CovalentTokenHolderChangesOptions) {
    const path = `${this.chainId}/tokens/${this.token}/token_holders_changes`;

    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as TokenHolderResponse[];
  }

  async nftTokenIds(parameters?: CovalentTokenNftIds) {
    const path = `${this.chainId}/tokens/${this.token}/nft_token_ids`;

    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as TokenHolderResponse[];
  }

  async nftTransactions(tokenId: string, parameters?: CovalentTokenNftTransactions) {
    const path = `${this.chainId}/tokens/${this.token}/nft_transactions/${tokenId}`;

    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as TokenHolderResponse[];
  }

  async nftMetadata(tokenId: string) {
    const path = `${this.chainId}/tokens/${this.token}/nft_metadata/${tokenId}`;

    const result = await fetchFromCovalent({ ...this.options, path });
    return result as TokenHolderResponse[];
  }
}

export default CovalentToken;
