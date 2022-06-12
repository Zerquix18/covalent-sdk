import { CovalentOptions } from "./models";
import CovalentChains from "./covalent/CovalentChains";
import CovalentAddress from "./covalent/CovalentAddress";
import CovalentBlocks from "./covalent/CovalentBlocks";
import CovalentTransaction from "./covalent/CovalentTransaction";
import CovalentPricing from "./covalent/CovalentPricing";

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
}

export default Covalent;
