import fetchMock from "jest-fetch-mock";
import { SingleNetworkExchangeTokenResponse, TokenAddressTransactionsResponse } from '../../models';
import CovalentExchangeToken from './CovalentExchangeToken';

fetchMock.enableMocks();
const TOKEN = '0x6b175474e89094c44da98b954eedeac495271d0f'; // DAI
const token = new CovalentExchangeToken({ key: '' }, 'uniswap_v2', TOKEN, 1);

const tokenResult: SingleNetworkExchangeTokenResponse = {
  "updated_at":"2022-06-13T20:55:34.927Z",
  "items":[
    {
      "dex_name":"uniswap_v2",
      "chain_id":"1",
      "exchange":"0x025d34acfd5c65cfd5a73209f99608c9e13338f3",
      "swap_count_24h":1,
      "total_liquidity_quote":3044.173,
      "volume_24h_quote":156.712,
      "fee_24h_quote":0.47013602,
      "volume_7d_quote":293.05463,
      "annualized_fee":0.056215435,
      "total_supply":"22483595548409571670956",
      "quote_rate":0.1353953,
      "quote_currency":"USD",
      "block_height":14958398,
      "token_0":{
         "contract_address":"0x6b175474e89094c44da98b954eedeac495271d0f",
         "contract_name":"Dai Stablecoin",
         "volume_in_24h":"0",
         "volume_out_24h":"164400402938043280433",
         "quote_rate":0.9997574,
         "reserve":"1520742655466981410970",
         "logo_url":"https://logos.covalenthq.com/tokens/0x6b175474e89094c44da98b954eedeac495271d0f.png",
         "contract_ticker_symbol":"DAI",
         "contract_decimals":18,
         "volume_in_7d":"0",
         "volume_out_7d":"320353540271783555633"
      },
      "token_1":{
         "contract_address":"0xe3818504c1b32bf1557b16c238b2e01fd3149c17",
         "contract_name":"PILLAR",
         "volume_in_24h":"33419296152576721350429",
         "volume_out_24h":"0",
         "quote_rate":0.004460402,
         "reserve":"341628289694264667055935",
         "logo_url":"https://logos.covalenthq.com/tokens/0xe3818504c1b32bf1557b16c238b2e01fd3149c17.png",
         "contract_ticker_symbol":"PLR",
         "contract_decimals":18,
         "volume_in_7d":"59598540302620511556977",
         "volume_out_7d":"0"
      },
      "token0_reserve_quote":1520.3738,
      "token1_reserve_quote":1523.7994,
      "volume_timeseries_7d": [
        {
          "dex_name":"uniswap_v2",
          "chain_id":"1",
          "dt":"2022-05-19T00:00:00Z",
          "exchange":"0x025d34acfd5c65cfd5a73209f99608c9e13338f3",
          "sum_amount0in":"0",
          "sum_amount0out":"84910665065706495289",
          "sum_amount1in":"11065470992152734636282",
          "sum_amount1out":"0",
          "volume_quote":122.65331,
          "token0_quote_rate":0.9503277,
          "token1_quote_rate":0.007584017,
          "swap_count_24":1
        }
      ],
      "volume_timeseries_30d": [
        {
          "dex_name":"uniswap_v2",
          "chain_id":"1",
          "dt":"2022-05-19T00:00:00Z",
          "exchange":"0x025d34acfd5c65cfd5a73209f99608c9e13338f3",
          "sum_amount0in":"0",
          "sum_amount0out":"84910665065706495289",
          "sum_amount1in":"11065470992152734636282",
          "sum_amount1out":"0",
          "volume_quote":122.65331,
          "token0_quote_rate":0.9503277,
          "token1_quote_rate":0.007584017,
          "swap_count_24":1
        }
      ],
      "liquidity_timeseries_7d": [
        {
          "dex_name":"uniswap_v2",
          "chain_id":"1",
          "dt":"2022-05-19T00:00:00Z",
          "exchange":"0x025d34acfd5c65cfd5a73209f99608c9e13338f3",
          "r0_c":"1956409799001957406945",
          "r1_c":"265257922261714315735254",
          "liquidity_quote":3870.9512,
          "token0_quote_rate":0.9503277,
          "token1_quote_rate":0.007584017
        }
      ],
      "liquidity_timeseries_30d": [
        {
          "dex_name":"uniswap_v2",
          "chain_id":"1",
          "dt":"2022-05-19T00:00:00Z",
          "exchange":"0x025d34acfd5c65cfd5a73209f99608c9e13338f3",
          "r0_c":"1956409799001957406945",
          "r1_c":"265257922261714315735254",
          "liquidity_quote":3870.9512,
          "token0_quote_rate":0.9503277,
          "token1_quote_rate":0.007584017
        }
      ],
      "price_timeseries_7d": [
        {
          "dex_name":"uniswap_v2",
          "chain_id":"1",
          "dt":"2022-05-19T00:00:00Z",
          "exchange":"0x025d34acfd5c65cfd5a73209f99608c9e13338f3",
          "price_of_token0_in_token1":135.58403,
          "price_of_token0_in_token1_description":"The price of DAI in PLR is 135.58403",
          "price_of_token1_in_token0":0.0073755,
          "price_of_token1_in_token0_description":"The price of PLR in DAI is 0.0073755",
          "quote_currency":"USD",
          "price_of_token0_in_quote_currency":0.9503277,
          "price_of_token1_in_quote_currency":0.007584017
        }
      ],
      "price_timeseries_30d": [
        {
          "dex_name":"uniswap_v2",
          "chain_id":"1",
          "dt":"2022-05-19T00:00:00Z",
          "exchange":"0x025d34acfd5c65cfd5a73209f99608c9e13338f3",
          "price_of_token0_in_token1":135.58403,
          "price_of_token0_in_token1_description":"The price of DAI in PLR is 135.58403",
          "price_of_token1_in_token0":0.0073755,
          "price_of_token1_in_token0_description":"The price of PLR in DAI is 0.0073755",
          "quote_currency":"USD",
          "price_of_token0_in_quote_currency":0.9503277,
          "price_of_token1_in_quote_currency":0.007584017
        }
      ],
    }
  ],
  "pagination":{
    "has_more":false,
    "page_number":0,
    "page_size":100,
    "total_count":null
  }
};

const transactions: TokenAddressTransactionsResponse = {
  "updated_at":"2022-06-13T23:02:59.748107973Z",
  "items":[
    {
      "block_signed_at":"2022-06-12T06:12:53Z",
      "tx_hash":"0xc7590626d72c4507aaf3615d5ba295d7a169430f2adb94d1956ddc1f067b8827",
      "act":"SWAP",
      "address":"0x087bf4ecd89c0a37a52d08ca3c47642e1af471e7",
      "amount_0":null,
      "amount_1":null,
      "amount_0_in":"0",
      "amount_1_in":"178442096154954988972",
      "amount_0_out":"48949411742450701054",
      "amount_1_out":"0",
      "to_address":"0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",
      "from_address":null,
      "sender_address":"0x0eae044f00b0af300500f090ea00027097d03000",
      "total_quote":31.931139,
      "quote_currency":"USD",
      "token_0":{
         "contract_decimals":18,
         "contract_name":"Dai Stablecoin",
         "contract_ticker_symbol":"DAI",
         "contract_address":"0x6b175474e89094c44da98b954eedeac495271d0f",
         "supports_erc":null,
         "logo_url":"https://logos.covalenthq.com/tokens/0x6b175474e89094c44da98b954eedeac495271d0f.png"
      },
      "token_1":{
         "contract_decimals":18,
         "contract_name":"DeFiYieldProtocol",
         "contract_ticker_symbol":"DYP",
         "contract_address":"0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17",
         "supports_erc":null,
         "logo_url":"https://logos.covalenthq.com/tokens/0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17.png"
      },
      "token_0_quote_rate":1.1903003,
      "token_1_quote_rate":0.17894398
    },
  ],
  "pagination": {
    "has_more":false,
    "page_number":0,
    "page_size":100,
    "total_count":null
  }
};

const tokenResponse = {
  data: tokenResult,
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

  it('can fetch a token from exchange', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(tokenResponse));

    const result = await token.get();
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/address/0x6b175474e89094c44da98b954eedeac495271d0f/?key=')
    expect(result).toStrictEqual(tokenResult);
  });

  it('can fetch a token transactions from exchange', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(transactionsResponse));

    const list = await token.transactions();
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/address/0x6b175474e89094c44da98b954eedeac495271d0f/transactions/?key=')
    expect(list).toStrictEqual(transactions);
  });
});
