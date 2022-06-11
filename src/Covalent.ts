import { CovalentOptions } from "./models";
import CovalentChains from "./covalent/CovalentChains";

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
}

export default Covalent;
