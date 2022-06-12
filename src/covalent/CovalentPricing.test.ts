import CovalentPricing from './CovalentPricing';
import fetchMock from "jest-fetch-mock";
import { AddressWithHistoricalPricesItem } from '../models';

fetchMock.enableMocks();
const pricing = new CovalentPricing({ key: '' }, 1);

const priceData: AddressWithHistoricalPricesItem[] = [
  {
    "contract_decimals":18,
    "contract_name":"Dai Stablecoin",
    "contract_ticker_symbol":"DAI",
    "contract_address":"0x6b175474e89094c44da98b954eedeac495271d0f",
    "supports_erc":["erc20"],
    "logo_url":"https://logos.covalenthq.com/tokens/0x6b175474e89094c44da98b954eedeac495271d0f.png",
    "update_at":"2022-06-12T01:33:29.530963201Z",
    "quote_currency":"USD",
    "prices":[
      {
        "contract_metadata":
        {
          "contract_decimals":18,
          "contract_name":"Dai Stablecoin",
          "contract_ticker_symbol":"DAI",
          "contract_address":"0x6b175474e89094c44da98b954eedeac495271d0f",
          "supports_erc":["erc20"],
          "logo_url":"https://logos.covalenthq.com/tokens/0x6b175474e89094c44da98b954eedeac495271d0f.png"
        },
        "date":"2022-06-12",
        "price":1.0021615
      }
    ],
    "items":[
      {
        "contract_metadata": {
          "contract_decimals":18,
          "contract_name":
          "Dai Stablecoin",
          "contract_ticker_symbol":"DAI",
          "contract_address":"0x6b175474e89094c44da98b954eedeac495271d0f",
          "supports_erc":["erc20"],
          "logo_url":"https://logos.covalenthq.com/tokens/0x6b175474e89094c44da98b954eedeac495271d0f.png"
        },
        "date":"2022-06-12",
        "price":1.0021615
      }
    ]
  }
];

const priceResponse = {
  data: priceData,
  error: false,
  error_message: null,
  error_code: null
};

const CONTRACT_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'; // DAI

describe('test pricing', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('can get prices', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(priceResponse));

    const prices = await pricing.prices([CONTRACT_ADDRESS]);
    expect(fetchMock.mock.calls[0][0]).toEqual(`https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/1/USD/${CONTRACT_ADDRESS}/?key=`)
    expect(prices).toStrictEqual(priceData);
  });
});
