import { AddressWithHistoricalPricesItem, CovalentAPITopicEventsOptions, CovalentOptions, EventsListResponseType } from "../models";
import { fetchFromCovalent } from "../utils";

class CovalentTopic {
  private options: CovalentOptions;
  private topics: string[];
  private chainId: number;

  constructor(options: CovalentOptions, topics: string[], chainId: number) {
    this.options = options;
    this.topics = topics;
    this.chainId = chainId;
  }

  async events(parameters: CovalentAPITopicEventsOptions) {
    const path = `${this.chainId}/events/topics/${this.topics.join(',')}`;

    const result = await fetchFromCovalent({ ...this.options, path, parameters });
    return result as EventsListResponseType;
  }
}

export default CovalentTopic;
