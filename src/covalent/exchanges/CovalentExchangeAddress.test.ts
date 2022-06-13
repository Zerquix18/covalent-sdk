import fetchMock from "jest-fetch-mock";
import { AccountAddressTransactionsResponse, BalanceResponseType, UniswapLikeExchangeListResponse } from '../../models';
import CovalentExchangeAddress from './CovalentExchangeAddress';

fetchMock.enableMocks();
const address = new CovalentExchangeAddress({ key: '' }, 'uniswap_v2', 'vitalik.eth', 1);

// tried and tried and could not get an address that would give me results.

const pools: UniswapLikeExchangeListResponse = {
  "updated_at":"2022-06-13T20:55:34.927Z",
  "items":[],
  "pagination":{
    "has_more":false,
    "page_number":0,
    "page_size":100,
    "total_count":null
  }
};

const balances: BalanceResponseType = {
  "address":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
  "updated_at":"2022-06-13T22:22:24.344997386Z",
  "next_update_at":"2022-06-13T22:27:24.344998966Z",
  "quote_currency":"USD",
  "chain_id":1,
  "items":[],
  // "pancakeswap":{"balances":[]} /* for som reason it also returned this.
};

const transactions: AccountAddressTransactionsResponse = {
  "updated_at":"2022-06-13T22:33:50.258555788Z",
  "items":[],
  "pagination":null
};

const poolsResponse = {
  data: pools,
  error: false,
  error_message: null,
  error_code: null
};

const balancesResponse = {
  data: balances,
  error: false,
  error_message: null,
  error_code: null
};

const transactionsResponse = {
  data: transactions,
  error: false,
  error_message: null,
  error_code: null
};

describe('test exchange address', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('can fetch address pools', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(poolsResponse));

    const list = await address.pools();
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/pools/address/vitalik.eth/?key=')
    expect(list).toStrictEqual(pools);
  });

  it('can fetch address balances', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(balancesResponse));

    const list = await address.balances();
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/address/vitalik.eth/balances/?key=')
    expect(list).toStrictEqual(balances);
  });

  it('can fetch address transactions', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(transactionsResponse));

    const list = await address.transactions();
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/address/vitalik.eth/transactions/?key=')
    expect(list).toStrictEqual(transactions);
  });
});
