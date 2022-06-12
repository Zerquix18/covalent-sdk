import { buildQueryString, fetchFromCovalent } from ".";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

const wrongApiKeyResponse = {
  data: null,
  error: true,
  error_message: "Unregistered or inactive API key",
  error_code: 401
};

describe('test utils', () => {
  it('can build a query string', () => {
    expect(buildQueryString({ covalent: 'API' })).toBe('covalent=API');
    expect(buildQueryString({ name: 'covalent', value: 1 })).toBe('name=covalent&value=1');
    expect(buildQueryString({ name: 'covalent', value: null })).toBe('name=covalent&value=null');
    expect(buildQueryString({ name: 'covalent', value: '' })).toBe('name=covalent&value=');
    expect(buildQueryString({ name: 'covalent', value: false })).toBe('name=covalent&value=0');
    expect(buildQueryString({ name: 'covalent', value: true })).toBe('name=covalent&value=1');
  });

  it('it can call the API with the wrong API key', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(wrongApiKeyResponse));

    try {
      await fetchFromCovalent({ key: '', path: 'chains' });
    } catch (e) {
      expect((e as Error).message).toEqual('[401]: Unregistered or inactive API key');
    } finally {
      expect(fetchMock.mock.calls[0][0]).toEqual('https://api.covalenthq.com/v1/chains/?key=')
    }
  });
});
