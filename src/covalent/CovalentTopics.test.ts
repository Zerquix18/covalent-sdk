import fetchMock from "jest-fetch-mock";
import { CovalentAPITopicEventsOptions, EventsListResponseType } from '../models';
import CovalentTopics from './CovalentTopics';

fetchMock.enableMocks();
const TOPICS = ['0x804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a'];

const topics = new CovalentTopics({ key: '' }, TOPICS, 1);

const params: CovalentAPITopicEventsOptions = {
  "starting-block": 12500000,
  "ending-block": 12500100
};

const eventList: EventsListResponseType = {
  "updated_at":"2022-06-12T17:54:37.344232619Z",
  "items": [
    {
      "block_signed_at":"2021-05-24T23:17:48Z",
      "block_height":12500001,
      "tx_offset":55,
      "log_offset":133,
      "tx_hash":"0xfcc8ac1834c9d4072769e3000cf0b31e717a63c669826af4135504c83f8b8277",
      "raw_log_topics":[
         "0x804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a",
         "0x000000000000000000000000514910771af9ca656af840dff83e8264ecf986ca"
      ],
      "sender_contract_decimals":0,
      "sender_name":null,
      "sender_contract_ticker_symbol":null,
      "sender_address":"0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9",
      "sender_address_label":null,
      "sender_logo_url":"https://logos.covalenthq.com/tokens/1/0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9.png",
      "raw_log_data":"0x00000000000000000000000000000000000000000000013844fd4b40c1a8d37b00000000000000000000000000000000000000000019de33cc7328f9059c58f500000000000000000000000000000000000000000000bc9e60c033968220a4ab0000000000000000000000000000000000000000033b51940b994f792ebbc8f20000000000000000000000000000000000000000033c50a65d561d37d0015b59",
      "decoded": {
        "name":"ReserveDataUpdated",
        "signature":"ReserveDataUpdated(indexed address reserve, uint256 liquidityRate, uint256 stableBorrowRate, uint256 variableBorrowRate, uint256 liquidityIndex, uint256 variableBorrowIndex)",
        "params":[
          {
              "name":"reserve",
              "type":"address",
              "indexed":true,
              "decoded":true,
              "value":"0x514910771af9ca656af840dff83e8264ecf986ca"
          },
        ]
      },
    }
  ],
  "pagination": null
};

const eventsResponse = {
  data: eventList,
  error: false,
  error_message: null,
  error_code: null
};

describe('test topics', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('can events for a topic', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(eventsResponse));

    const result = await topics.events(params);
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/events/topics/0x804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a/?starting-block=12500000&ending-block=12500100&key=')
    expect(result).toStrictEqual(eventList);
  });
});
