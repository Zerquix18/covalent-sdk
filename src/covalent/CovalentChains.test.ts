import CovalentChains from './CovalentChains';
import fetchMock from "jest-fetch-mock";
import { ChainStatusResponse, GenericChainInfoDisplay } from '../models';

fetchMock.enableMocks();
const chains = new CovalentChains({ key: '' });

const chainResponse: GenericChainInfoDisplay = {
  "name":"eth-mainnet",
  "chain_id":"1",
  "is_testnet":false,
  "db_schema_name":"chain_eth_mainnet",
  "label":"Ethereum Mainnet",
  "logo_url":"https://www.covalenthq.com/static/images/icons/display-icons/ethereum-eth-logo.png"
};

const chainStatus: ChainStatusResponse = {
  "updated_at": "",
  "items": [
    {
      "name":"eth-mainnet",
      "chain_id":"1",
      "is_testnet":false,
      "logo_url":"https://www.covalenthq.com/static/images/icons/display-icons/ethereum-eth-logo.png",
      "synced_block_height":14946567,
      "synced_blocked_signed_at":"2022-06-11T21:38:44Z"
    },
  ],
  "pagination": null,
}

const allChainsResponse = {
  data: [chainResponse],
  error: false,
  error_message: null,
  error_code: null
};

const chainStatusResponse = {
  data: chainStatus,
  error: false,
  error_message: null,
  error_code: null
};

describe('test chains', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('can list all chains', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(allChainsResponse));

    const allChains = await chains.list();
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/chains/?key=')
    expect(allChains).toContainEqual(chainResponse);
  });

  it('can list all chains statuses', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(chainStatusResponse));

    const statuses = await chains.statuses();
    expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/chains/statuses/?key=')
    expect(statuses).toStrictEqual(chainStatus);
  });
});
