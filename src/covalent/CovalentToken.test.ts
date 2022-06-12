import fetchMock from "jest-fetch-mock";
import { CovalentTokenHolderChangesOptions, NftMetadataResponseType, NftTransactionsResponseType, TokenHolderDiffResponse, TokenHolderResponse, TokenIdResponseType } from "../models";
import CovalentToken from './CovalentToken';

const TOKEN = '0x3883f5e181fccaf8410fa61e12b59bad963fb645';
const TOKEN2 = '0xe4605d46fd0b3f8329d936a8b258d69276cba264';

fetchMock.enableMocks();
const token = new CovalentToken({ key: '' }, TOKEN, 1);
const token2 = new CovalentToken({ key: '' }, TOKEN2, 1);

const paramsForHolderChanges: CovalentTokenHolderChangesOptions = {
  "starting-block": 12500100,
  "ending-block": 13210000
};

const tokenHolders: TokenHolderResponse = {
  "updated_at":"2022-06-12T20:42:25.027187477Z",
  "items": [
    {
      "contract_decimals":18,
      "contract_name":"Theta Token",
      "contract_ticker_symbol":"THETA",
      "contract_address":"0x3883f5e181fccaf8410fa61e12b59bad963fb645",
      "supports_erc":null,
      "logo_url":"https://logos.covalenthq.com/tokens/1/0x3883f5e181fccaf8410fa61e12b59bad963fb645.png",
      "address":"0xc15149236229bd13f0aec783a9cc8e8059fb28da",
      "balance":"100000100000000000000000000",
      "total_supply":"1000000000000000000000000000",
      "block_height":14952163
    }
  ],
  "pagination":{
    "has_more":true,
    "page_number":0,
    "page_size":100,
    "total_count":null
 }
};

const tokenHoldersChanges: TokenHolderDiffResponse = {
  "updated_at":"2022-06-12T20:58:46.192738628Z",
  "items": [
    {
      "token_holder":"0xc15149236229bd13f0aec783a9cc8e8059fb28da",
      "prev_balance":"100000100000000000000000000",
      "prev_block_height":12500100,
      "next_balance":"100000100000000000000000000",
      "next_block_height":13210000,
      "diff":"0"
    }
  ],
  "pagination": {
    "has_more":true,
    "page_number":0,
    "page_size":100,
    "total_count":null
 }
};

const nftIds: TokenIdResponseType = {
  "updated_at": "2022-06-12T21:18:17.030290366Z",
  "items": [
    {
      "contract_decimals":0,
      "contract_name":"Meme Ltd.",
      "contract_ticker_symbol":"MEMES",
      "contract_address":"0xe4605d46fd0b3f8329d936a8b258d69276cba264",
      "supports_erc":null,
      "logo_url":"https://logos.covalenthq.com/tokens/0xe4605d46fd0b3f8329d936a8b258d69276cba264.png",
      "token_id":"1"
    }
  ],
  "pagination":{
    "has_more":true,
    "page_number":0,
    "page_size":100,
    "total_count":null
 }
};

const nftTransactions: NftTransactionsResponseType = {
  "updated_at":"2022-06-12T21:36:39.264021662Z",
  "items": [
    {
      "contract_decimals":0,
      "contract_name":"Meme Ltd.",
      "contract_ticker_symbol":"MEMES",
      "contract_address":"0xe4605d46fd0b3f8329d936a8b258d69276cba264",
      "supports_erc":[
         "erc20"
      ],
      "logo_url":"https://logos.covalenthq.com/tokens/1/0xe4605d46fd0b3f8329d936a8b258d69276cba264.png",
      "type":"nft",
      "nft_transactions": [
        {
          "block_signed_at":"2022-06-04T04:43:30Z",
          "block_height":14901365,
          "tx_hash":"0xd308f0e7a91e0d1e293c201222b1025ef3ff84ffc7056460df47702b2eecb287",
          "tx_offset":55,
          "successful":true,
          "from_address":"0xd0c877b474cd51959931a7f70d7a6c60f50cdae7",
          "from_address_label":null,
          "to_address":"0xe4605d46fd0b3f8329d936a8b258d69276cba264",
          "to_address_label":null,
          "value":"0",
          "value_quote":0.0,
          "gas_offered":56319,
          "gas_spent":56319,
          "gas_price":24741492332,
          "fees_paid":"1393416106645908",
          "gas_quote":2.501252160556852,
          "gas_quote_rate":1795.0504150390625,
          "log_events": [
            {
              "block_signed_at":"2022-06-04T04:43:30Z",
              "block_height":14901365,
              "tx_offset":55,
              "log_offset":64,
              "tx_hash":"0xd308f0e7a91e0d1e293c201222b1025ef3ff84ffc7056460df47702b2eecb287",
              "raw_log_topics":[
                 "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                 "0x000000000000000000000000d0c877b474cd51959931a7f70d7a6c60f50cdae7",
                 "0x000000000000000000000000d0c877b474cd51959931a7f70d7a6c60f50cdae7",
                 "0x0000000000000000000000007d72cb94b93ac5413364d25b3293a364879b31b1"
              ],
              "sender_contract_decimals":null,
              "sender_name":null,
              "sender_contract_ticker_symbol":null,
              "sender_address":"0xe4605d46fd0b3f8329d936a8b258d69276cba264",
              "sender_address_label":null,
              "sender_logo_url":null,
              "raw_log_data":"0x000000000000000000000000000000000000000000000000000000000000007b0000000000000000000000000000000000000000000000000000000000000001",
              "decoded": {
                "name":"TransferSingle",
                "signature":"TransferSingle(indexed address _operator, indexed address _from, indexed address _to, uint256 _id, uint256 _amount)",
                "params":[
                  {
                     "name":"_operator",
                     "type":"address",
                     "indexed":true,
                     "decoded":true,
                     "value":"0xd0c877b474cd51959931a7f70d7a6c60f50cdae7"
                  },
                ]
              }
            }
          ]
        }
      ],
    }
  ],
  "pagination": null,
};

const nftMetadata: NftMetadataResponseType = {
  "updated_at":"2022-06-12T21:52:20.228660941Z",
  "items":[
    {
      "contract_decimals":0,
      "contract_name":"Meme Ltd.",
      "contract_ticker_symbol":"MEMES",
      "contract_address":"0xe4605d46fd0b3f8329d936a8b258d69276cba264",
      "supports_erc":["erc20"],
      "logo_url":"https://logos.covalenthq.com/tokens/1/0xe4605d46fd0b3f8329d936a8b258d69276cba264.png",
      "type":"nft",
      "nft_data":[
        {
          "token_id":"123",
          "token_balance":null,
          "token_url":"https://api.dontbuymeme.com/memes/123",
          "supports_erc":["erc20","erc1155"],
          "token_price_wei":"8000000000000000000",
          "token_quote_rate_eth":"8",
          "original_owner":"0x1532cf8977d51de6a609015a23365cdb25064bc1",
          "external_data": {
            "name":"I wish I was understood",
            "description":null,
            "image":"https://images.dontbuymeme.com/artist-series/fewocious/static/i-wish-i-was-understood.jpg",
            "image_256":"https://image-proxy.svc.prod.covalenthq.com/cdn-cgi/image/width=256,fit/https://images.dontbuymeme.com/artist-series/fewocious/static/i-wish-i-was-understood.jpg",
            "image_512":"https://image-proxy.svc.prod.covalenthq.com/cdn-cgi/image/width=512,fit/https://images.dontbuymeme.com/artist-series/fewocious/static/i-wish-i-was-understood.jpg",
            "image_1024":"https://image-proxy.svc.prod.covalenthq.com/cdn-cgi/image/width=1024,fit/https://images.dontbuymeme.com/artist-series/fewocious/static/i-wish-i-was-understood.jpg",
            "animation_url":null,
            "external_url":"https://dontbuymeme.com/artist-series/fewocious",
            "attributes":[
              {"trait_type":"Set","value":"Artist Drop 8 - Fewocious"},
              {"trait_type":"Artist","value":"Fewocious"},
              {"trait_type":"Type","value":"Pop Surreal"},
              {"display_type":"date","trait_type":"birthday","value":1609267020},
              {"trait_type":"Max Supply","value":"100"}
            ],
            "owner":null
          },
          "owner":null,
          "owner_address":"0x7d72cb94b93ac5413364d25b3293a364879b31b1",
          "burned":false
        }
      ]
    }
  ],
  "pagination":null
};


const tokenHolderResponse = {
  data: tokenHolders,
  error: false,
  error_message: null,
  error_code: null
};

const tokenHolderChangesResponse = {
  data: tokenHoldersChanges,
  error: false,
  error_message: null,
  error_code: null
};

const nftIdsResponse = {
  data: nftIds,
  error: false,
  error_message: null,
  error_code: null
};

const nftTransactionsResponse = {
  data: nftTransactions,
  error: false,
  error_message: null,
  error_code: null
};

const nftMetadataResponse = {
  data: nftMetadata,
  error: false,
  error_message: null,
  error_code: null
};

describe('test token', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('can fetch a token holders', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(tokenHolderResponse));

    const holders = await token.holders();
    expect(fetchMock.mock.calls[0][0]).toEqual(`https://api.covalenthq.com/v1/1/tokens/${TOKEN}/token_holders/?key=`)
    expect(holders).toStrictEqual(tokenHolders);
  });

  it('can fetch a token holders changes', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(tokenHolderChangesResponse));

    const holderChanges = await token.holderChanges(paramsForHolderChanges);
    expect(fetchMock.mock.calls[0][0]).toEqual(`https://api.covalenthq.com/v1/1/tokens/${TOKEN}/token_holders_changes/?starting-block=12500100&ending-block=13210000&key=`)
    expect(holderChanges).toStrictEqual(tokenHoldersChanges);
  });

  it('can fetch a token nfts', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(nftIdsResponse));

    const nftTokenIds = await token2.nftTokenIds();
    expect(fetchMock.mock.calls[0][0]).toEqual(`https://api.covalenthq.com/v1/1/tokens/${TOKEN2}/nft_token_ids/?key=`)
    expect(nftTokenIds).toStrictEqual(nftIds);
  });

  it('can fetch a token nft transactions', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(nftTransactionsResponse));

    const nftTransactions = await token2.nftTransactions('123');
    expect(fetchMock.mock.calls[0][0]).toEqual(`https://api.covalenthq.com/v1/1/tokens/${TOKEN2}/nft_transactions/123/?key=`)
    expect(nftTransactions).toStrictEqual(nftTransactions);
  });

  it('can fetch a token nft metadata', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(nftMetadataResponse));

    const result = await token2.nftMetadata('123');
    expect(fetchMock.mock.calls[0][0]).toEqual(`https://api.covalenthq.com/v1/1/tokens/${TOKEN2}/nft_metadata/123/?key=`)
    expect(result).toStrictEqual(nftMetadata);
  });
});
