import { CovalentOptions } from "./models";
import CovalentChains from "./covalent/CovalentChains";
import CovalentAddress from "./covalent/CovalentAddress";

class Covalent {
  private options: CovalentOptions;

  constructor(options: CovalentOptions) {
    this.options = options;
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

  address(address: string, chain: number) {
    return new CovalentAddress(this.options, address, chain);
  }
}

export default Covalent;
