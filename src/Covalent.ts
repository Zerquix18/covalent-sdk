import { CovalentOptions } from "./models";
import CovalentChains from "./covalent/CovalentChains";
import CovalentAddress from "./covalent/CovalentAddress";
import CovalentBlocks from "./covalent/CovalentBlocks";
import CovalentTransaction from "./covalent/CovalentTransaction";
import CovalentPricing from "./covalent/CovalentPricing";
import CovalentTopic from "./covalent/CovalentTopics";
import CovalentToken from "./covalent/CovalentToken";

class Covalent {
  private options: CovalentOptions;
  private defaultChain: number;

  constructor(options: CovalentOptions, defaultChain: number) {
    this.options = options;
    this.defaultChain = defaultChain;
  }

  getOptions() {
    return this.options;
  }

  setOptions(options: CovalentOptions) {
    this.options = options;
  }
  
  chains() {
    return new CovalentChains(this.options);
  }

  address(address: string, chain = this.defaultChain) {
    return new CovalentAddress(this.options, address, chain);
  }

  blocks(chain = this.defaultChain) {
    return new CovalentBlocks(this.options, chain);
  }

  transaction(chain = this.defaultChain) {
    return new CovalentTransaction(this.options, chain);
  }

  pricing(chain = this.defaultChain) {
    return new CovalentPricing(this.options, chain);
  }

  topics(topics: string[], chain = this.defaultChain) {
    return new CovalentTopic(this.options, topics, chain);
  }

  token(token: string, chain = this.defaultChain) {
    return new CovalentToken(this.options, token, chain);
  }
}

export default Covalent;
