import CovalentAddress from './CovalentAddress';
import fetchMock from "jest-fetch-mock";
import { BalanceResponseType, CovalentAddressLogEventsOptions, EventsListResponseType, HistoricalPortfolioResponse, TransactionResponse } from '../models';

fetchMock.enableMocks();
const address = new CovalentAddress({ key: '' }, 'vitalik.eth', 1);
const address2 = new CovalentAddress({ key: '' }, '0xc0da01a04c3f3e0be433606045bb7017a7323e38', 1);

const params: CovalentAddressLogEventsOptions = {
  "starting-block": 12115107,
  "ending-block": 12240004
};

const addressBalance: BalanceResponseType = {
  "address":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
  "updated_at":"2022-06-11T21:58:20.829299276Z",
  "next_update_at":"2022-06-11T22:03:20.829299436Z",
  "quote_currency":"USD",
  "chain_id":1,
  "items": [
    {
      "contract_decimals":18,
      "contract_name":"Pulsex",
      "contract_ticker_symbol":"PLSX",
      "contract_address":"0xec8994095707fd894dc88725703f0c96d309a93e",
      "supports_erc":[
         "erc20"
      ],
      "logo_url":"https://logos.covalenthq.com/tokens/1/0xec8994095707fd894dc88725703f0c96d309a93e.png",
      "last_transferred_at":"2022-01-08T08:01:29Z",
      "type":"cryptocurrency",
      "balance":"29738778965912797976213366402",
      "balance_24h":"29738778965912797976213366402",
      "quote_rate":9.5329796E19,
      "quote_rate_24h":null,
      "quote":2.8349918E30,
      "quote_24h":null,
      "nft_data":null
    }
  ],
  "pagination": null,
};

const addressPortfolio: HistoricalPortfolioResponse = {
  "address":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
  "updated_at":"2022-06-11T22:09:12.566391636Z",
  "next_update_at":"2022-06-11T22:14:12.566391996Z",
  "quote_currency":"USD",
  "chain_id":1,
  "items": [
    {
      "contract_decimals":18,
      "contract_name": "Pulsex",
      "contract_ticker_symbol":"PLSX",
      "contract_address":"0xec8994095707fd894dc88725703f0c96d309a93e",
      "supports_erc": null,
      "logo_url":"https://logos.covalenthq.com/tokens/1/0xec8994095707fd894dc88725703f0c96d309a93e.png",
      "holdings":[
        {
          "timestamp":"2022-06-11T00:00:00Z",
          "quote_rate":9.534426E19,
          "open":{
            "balance":"29738778965912797976213366402",
            "quote":2.835422E30
          },
          "high": {
            "balance":"29738778965912797976213366402",
            "quote":2.835422E30
          },
          "low":{
            "balance":"29738778965912797976213366402",
            "quote":2.835422E30
          },
          "close": {
            "balance":"29738778965912797976213366402",
            "quote":2.835422E30
          }
        },
      ],
    }
  ],
  "pagination": null,
};

const addressTransactions: TransactionResponse = {
  "address":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
  "updated_at":"2022-06-11T22:26:21.233266923Z",
  "next_update_at":"2022-06-11T22:31:21.233267152Z",
  "quote_currency":"USD",
  "chain_id":1,
  "items": [
    {
      "block_signed_at":"2022-05-15T18:04:19Z",
      "block_height":14781415,
      "tx_hash":"0x2de2dca7cf18a3580d8b1232548ba43164480fd04aec10ed79d97b2934468aff",
      "tx_offset":9,
      "successful":true,
      "from_address":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
      "from_address_label":null,
      "to_address":"0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
      "to_address_label":null,
      "value":"0",
      "value_quote":0.0,
      "gas_offered":207626,
      "gas_spent":162914,
      "gas_price":17677075487,
      "fees_paid":null,
      "gas_quote":5.965071835208102,
      "gas_quote_rate":2071.318359375,
      "transfers": {
        "block_signed_at":"2022-05-15T18:04:19Z",
        "tx_hash":"0x2de2dca7cf18a3580d8b1232548ba43164480fd04aec10ed79d97b2934468aff",
        "from_address":"0xcb0c5d9d92f4f2f80cce7aa271a1e148c226e19d",
        "from_address_label":null,
        "to_address":"0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
        "to_address_label":null,
        "contract_decimals":18,
        "contract_name":"Dai Stablecoin",
        "contract_ticker_symbol":"DAI",
        "contract_address":"0x6b175474e89094c44da98b954eedeac495271d0f",
        "logo_url":"https://logos.covalenthq.com/tokens/0x6b175474e89094c44da98b954eedeac495271d0f.png",
        "transfer_type":"IN",
        "delta":"761823639743727125766650",
        "balance":null,
        "quote_rate":0.9644291400909424,
        "delta_quote":734724.9177789947,
        "balance_quote":null,
        "method_calls":null
      }
    }
  ],
  "pagination": {
    "has_more":false,
    "page_number":0,
    "page_size":100,
    "total_count":null
  }
};

const logEvents: EventsListResponseType = {
  "updated_at":"2022-06-12T22:16:06.222635733Z",
  "items": [
    {
      "block_signed_at":"2021-03-26T14:12:45Z",
      "block_height":12115107,
      "tx_offset":102,
      "log_offset":146,
      "tx_hash":"0x1db1c67a0dcca7746adcaf381773d1462737ac2aa96024e71f343f257ffac584",
      "raw_log_topics":[
         "0x877856338e13f63d0c36822ff0ef736b80934cd90574a3a5bc9262c39d217c46"
      ],
      "sender_contract_decimals":0,
      "sender_name":"Compound Governor Alpha",
      "sender_contract_ticker_symbol":null,
      "sender_address":"0xc0da01a04c3f3e0be433606045bb7017a7323e38",
      "sender_address_label":null,
      "sender_logo_url":"https://logos.covalenthq.com/tokens/1/0xc0da01a04c3f3e0be433606045bb7017a7323e38.png",
      "raw_log_data":"0x0000000000000000000000000dc1f2633d657122d67735d9606e0b29f5523aef000000000000000000000000000000000000000000000000000000000000002a00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000de3aebf3bb7ea44",
      "decoded": {
        "name":"VoteCast",
        "signature":"VoteCast(address voter, uint256 proposalId, bool support, uint256 votes)",
        "params":[
          {
             "name":"voter",
             "type":"address",
             "indexed":false,
             "decoded":true,
             "value":"0x0dc1f2633d657122d67735d9606e0b29f5523aef"
          },
        ]
      }
    }
  ],
  "pagination": {
    "has_more":false,
    "page_number":0,
    "page_size":100,
    "total_count":null
 }
};

const balancesResponse = {
  data: addressBalance,
  error: false,
  error_message: null,
  error_code: null
};

const portfolioResponse = {
  data: addressPortfolio,
  error: false,
  error_message: null,
  error_code: null
};

const transactionsResponse = {
  data: addressTransactions,
  error: false,
  error_message: null,
  error_code: null
};

const logEventsResponse = {
  data: logEvents,
  error: false,
  error_message: null,
  error_code: null
};

const CONTRACT_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'; // DAI

describe('test address', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('can get balances', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(balancesResponse));

    const balances = await address.balances();
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/address/vitalik.eth/balances_v2/?key=')
    expect(balances).toStrictEqual(addressBalance);
  });

  it('can get portfolio', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(portfolioResponse));

    const portfolio = await address.portfolio();
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/address/vitalik.eth/portfolio_v2/?key=')
    expect(portfolio).toStrictEqual(addressPortfolio);
  });

  it('can get transactions', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(transactionsResponse));

    const transactions = await address.tokenTransfers(CONTRACT_ADDRESS);
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/address/vitalik.eth/transfers_v2/?contract-address=' + CONTRACT_ADDRESS + '&key=')
    expect(transactions).toStrictEqual(addressTransactions);
  });

  it('can get log events', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(logEventsResponse));

    const result = await address2.logEvents(params);
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/events/address/0xc0da01a04c3f3e0be433606045bb7017a7323e38/?starting-block=12115107&ending-block=12240004&key=')
    expect(result).toStrictEqual(logEvents);
  });
});
