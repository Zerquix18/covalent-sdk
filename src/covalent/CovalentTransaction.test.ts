import fetchMock from "jest-fetch-mock";
import { SingleTransactionResponse } from '../models';
import CovalentTransaction from './CovalentTransaction';

fetchMock.enableMocks();
const transaction = new CovalentTransaction({ key: '' }, 1);

const TX_HASH = '0xbda92389200cadac424d64202caeab70cd5e93756fe34c08578adeb310bba254';

const transactionData: SingleTransactionResponse = {
  "updated_at":"2022-06-11T23:48:19.065585052Z",
  "items": [
    {
      "block_signed_at":"2020-11-06T04:54:01Z",
      "block_height":11201723,
      "tx_hash":"0xbda92389200cadac424d64202caeab70cd5e93756fe34c08578adeb310bba254",
      "tx_offset":113,
      "successful":true,
      "from_address":"0x78f32a27559170f9a005b319ed53441b9e852158",
      "from_address_label":null,
      "to_address":"0xb2be281e8b11b47fec825973fc8bb95332022a54",
      "to_address_label":null,
      "value":"50000000000000000",
      "value_quote":22.725317382812502,
      "gas_offered":522668,
      "gas_spent":340945,
      "gas_price":52000000000,
      "fees_paid":null,
      "gas_quote":8.058006668486328,
      "gas_quote_rate":454.50634765625,
      "log_events": [
        {
          "block_signed_at":"2020-11-06T04:54:01Z",
          "block_height":11201723,
          "tx_offset":113,
          "log_offset":165,
          "tx_hash":"0xbda92389200cadac424d64202caeab70cd5e93756fe34c08578adeb310bba254",
          "raw_log_topics":[
              "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
              "0x000000000000000000000000b2be281e8b11b47fec825973fc8bb95332022a54",
              "0x0000000000000000000000000000000000000000000000000000000000000000"
          ],
          "sender_contract_decimals":0,
          "sender_name":"Chi Gastoken by 1inch",
          "sender_contract_ticker_symbol":"CHI",
          "sender_address":"0x0000000000004946c0e9f43f4dee607b0ef1fa1c",
          "sender_address_label":null,
          "sender_logo_url":"https://logos.covalenthq.com/tokens/0x0000000000004946c0e9f43f4dee607b0ef1fa1c.png",
          "raw_log_data":"0x0000000000000000000000000000000000000000000000000000000000000000",
          "decoded":{
              "name":"Transfer",
              "signature":"Transfer(indexed address from, indexed address to, uint256 value)",
              "params":[
                {
                    "name":"from",
                    "type":"address",
                    "indexed":true,
                    "decoded":true,
                    "value":"0xb2be281e8b11b47fec825973fc8bb95332022a54"
                },
                {
                    "name":"to",
                    "type":"address",
                    "indexed":true,
                    "decoded":true,
                    "value":"0x0000000000000000000000000000000000000000"
                },
                {
                    "name":"value",
                    "type":"uint256",
                    "indexed":false,
                    "decoded":true,
                    "value":"0"
                }
              ]
          }
        },
      ],
    }
  ],
  "pagination": null
};

const transactionResponse = {
  data: transactionData,
  error: false,
  error_message: null,
  error_code: null
};

describe('test transactions', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('can fetch a transaction', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(transactionResponse));

    const result = await transaction.get(TX_HASH);
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/1/transaction_v2/0xbda92389200cadac424d64202caeab70cd5e93756fe34c08578adeb310bba254/?key=')
    expect(result).toStrictEqual(transactionData);
  });
});
