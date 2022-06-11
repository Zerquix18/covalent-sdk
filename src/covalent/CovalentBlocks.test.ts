import fetchMock from "jest-fetch-mock";
import { SingleBlockResponse } from "../models";
import CovalentBlocks from './CovalentBlocks';

fetchMock.enableMocks();
const blocks = new CovalentBlocks({ key: '' }, 1);

const block: SingleBlockResponse = {
  "updated_at":"2022-06-11T23:07:51.173233236Z",
  "items":[
    {"signed_at":"2022-06-11T23:07:20Z",
    "height":14946920
    }
  ],
  "pagination":null,
};

const range: SingleBlockResponse = {
  "updated_at":"2022-06-11T23:11:47.141431236Z",
  "items":
    [
      {"signed_at":"2021-01-01T00:00:00Z","height":11565019}
    ],
    "pagination":{"has_more":true,"page_number":0,"page_size":100,"total_count":null}
};

const latestBlockResponse = {
  data: block,
  error: false,
  error_message: null,
  error_code: null
};

const specificBlockResponse = {
  data: block,
  error: false,
  error_message: null,
  error_code: null
};

const rangeResponse = {
  data: range,
  error: false,
  error_message: null,
  error_code: null
};

describe('test blocks', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('can get the latest block', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(latestBlockResponse));

    const balances = await blocks.get('latest');
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/block_v2/latest/?key=')
    expect(balances).toStrictEqual(block);
  });

  it('can get a specific block', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(specificBlockResponse));

    const balances = await blocks.get(14946920);
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/block_v2/14946920/?key=')
    expect(balances).toStrictEqual(block);
  });

  it('can get blocks in a range', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(rangeResponse));

    const balances = await blocks.between('2021-01-01', '2021-01-03');
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/block_v2/2021-01-01/2021-01-03/?key=')
    expect(balances).toStrictEqual(range);
  });
});
