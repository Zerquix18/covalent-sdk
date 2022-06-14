import { CovalentExchangeItemResult } from "./models";
import fetchMock from "jest-fetch-mock";
import Covalent from "./Covalent";

fetchMock.enableMocks();
const covalent = new Covalent({ key: '' });

const exchanges: CovalentExchangeItemResult = {
  "updated_at":"2022-06-13T23:11:57.593128608Z",
  "items": [
    {
      "chain_id":"1",
      "chain_name":"eth-mainnet",
      "dex_name":"uniswap_v2",
      "factory_contract_address":"0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
      "router_contract_addresses":[
         "0x7a250d5630b4cf539739df2c5dacb4c659f2488d"
      ],
      "swap_fee":0.003
    }
  ],
  "pagination": null,
}

const exchangesResponse = {
  data: exchanges,
  error: false,
  error_message: null,
  error_code: null
};

describe('test covalent', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('can fetch exchanges', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(exchangesResponse));

    const list = await covalent.exchanges();
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/xy=k/supported_dexes/?key=')
    expect(list).toStrictEqual(exchanges);
  });
});
