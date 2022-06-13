import fetchMock from "jest-fetch-mock";
import { EcosystemResponse, HealthDataResponse, NetworkExchangeTokenResponse, UniswapLikeExchangeListResponse } from '../models';
import CovalentExchange from './CovalentExchange';

fetchMock.enableMocks();
const exchange = new CovalentExchange({ key: '' }, 'uniswap_v2', 1);

const pools: UniswapLikeExchangeListResponse = {
  "updated_at":"2022-06-13T12:42:29.839Z",
  "items":[], // could not get this while testing...
  "pagination":{
    "has_more":false,"page_number":0,
    "page_size":100,
    "total_count":null
  }
};

const tokens: NetworkExchangeTokenResponse = {
  "updated_at":"2022-06-13T16:16:39.421Z",
  "items": [
    {
      "chain_name":"eth-mainnet",
      "chain_id":"1",
      "dex_name":"uniswap_v2",
      "contract_address":"0xae50f3d3940fa0f0b31b50ddbc0da9bc43a155a3",
      "contract_name":"Aeonverse",
      "total_liquidity":"1000000548866875756082955097121",
      "total_volume_24h":"0",
      "logo_url":"https://logos.covalenthq.com/tokens/0xae50f3d3940fa0f0b31b50ddbc0da9bc43a155a3.png",
      "contract_ticker_symbol":"AEON",
      "contract_decimals":18,
      "swap_count_24h":0,
      "quote_rate":0.0041623157,
      "total_liquidity_quote":4.16231808E9,
      "total_volume_24h_quote":0.0
    }
  ],
  "pagination": {
    "has_more":true,
    "page_number":0,
    "page_size":100,
    "total_count":null
 },
};

const ecosystem: EcosystemResponse = {
  "updated_at":"2022-06-13T16:16:39.421Z",
  "items": [
    {
      "dex_name":"uniswap_v2",
      "chain_id":"1",
      "quote_currency":"USD",
      "gas_token_price_quote":1223.0922,
      "total_swaps_24h":46489,
      "total_active_pairs_7d":3972,
      "total_fees_24h":567012.06,
      "volume_chart_7d": [
        {
          "dex_name":"uniswap_v2",
          "chain_id":"1",
          "dt":"2022-06-06T00:00:00Z",
          "quote_currency":"USD",
          "volume_quote":1.5272576E8,
          "swap_count_24":40794
        }
      ],
      "volume_chart_30d": [
        {
          "dex_name":"uniswap_v2",
          "chain_id":"1",
          "dt":"2022-05-14T00:00:00Z",
          "quote_currency":"USD",
          "volume_quote":2.14260336E8,
          "swap_count_24":50395
        }
      ],
      "liquidity_chart_7d": [
        {
          "dex_name":"uniswap_v2",
          "chain_id":"1",
          "dt":"2022-06-06T00:00:00Z",
          "quote_currency":"USD",
          "liquidity_quote":1.56104538E9
        }
      ],
      "liquidity_chart_30d": [
        {
          "dex_name":"uniswap_v2",
          "chain_id":"1",
          "dt":"2022-05-14T00:00:00Z",
          "quote_currency":"USD",
          "liquidity_quote":1.66882816E9
        }
      ],
    }
  ],
  "pagination": null,
};

const healthData: HealthDataResponse = {
  "updated_at":"2022-06-13T19:36:56.678Z",
  "items":[
    {
      "synced_block_height":14957723,
      "synced_block_signed_at":"2022-06-13T19:36:56.678Z",
      "latest_block_height":14957755,
      "latest_block_signed_at":"2022-06-13T19:42:49Z"
    }
  ],
  "pagination":{
    "has_more":false,
    "page_number":0,
    "page_size":100,
    "total_count":null
  }
};

const poolsResponse = {
  data: pools,
  error: false,
  error_message: null,
  error_code: null
};

const tokensResponse = {
  data: tokens,
  error: false,
  error_message: null,
  error_code: null
};

const ecosystemResponse = {
  data: ecosystem,
  error: false,
  error_message: null,
  error_code: null
};

const healthDataResponse = {
  data: healthData,
  error: false,
  error_message: null,
  error_code: null
}

describe('test exchanges', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('can fetch pools', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(poolsResponse));

    const list = await exchange.pools();
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/pools/?key=')
    expect(list).toStrictEqual(pools);
  });

  it('can fetch tokens', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(tokensResponse));

    const list = await exchange.tokens();
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/?key=')
    expect(list).toStrictEqual(tokens);
  });

  it('can fetch ecosystem', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(ecosystemResponse));

    const list = await exchange.ecosystemChartData();
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/ecosystem/?key=')
    expect(list).toStrictEqual(ecosystem);
  });
  
  it('can fetch healt data', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(healthDataResponse));

    const list = await exchange.healthData();
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/health/?key=')
    expect(list).toStrictEqual(healthData);
  });
});
