# Covalent SDK

A fully tested SDK for the Covalent API with Typescript support. It supports all endpoints to easily fetch data from Covalent.

## Installation

You can install the SDK using npm:

```
npm install covalent-sdk
```

You need to get an API key using [Covalent's website](https://www.covalenthq.com/platform/#/auth/register/). Once you have it, you can initialize the SDK using:

```typescript
const covalent = new Covalent({ key: '' });
```

The constructor takes two parameters:
* A group of options, including a required `key`, and optional `version` (defaults to v1).
* A default chain number. It defaults to 1 (Ethereum's mainnet). This allows you to call different methods later without having to specify a chain, but you always have the option to specify a chain.

You can get the current options with `covalent.getOptions()` and set them with `covalent.setOptions({ key: '' })`.

## Chains

### Get all chains

[Returns a list of all chains](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20all%20chains/USD/1).

```typescript
async function main() {
  const chains = await covalent.chains().list();
}
```

### Get all chain statuses

[Returns a list of all chain statuses](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20all%20chain%20statuses/USD/1).

```typescript
async function main() {
  const chains = await covalent.chains().statuses();
}
```

## Address

### Get token balances for address

[Return the token balances for a specific address in a chain](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20token%20balances%20for%20address/USD/1).

```typescript
async function main() {
  const address = '';
  const chainId = 1; // ether's mainnet, optional parameter
  const balances = await covalent.address(address, chainId).balances();
}
```

The `balances` function also takes optional parameters `nft` and `no-nft-check` as an object.

### Get historical portfolio value over time

[Return wallet value for the last 30 days at 24 hour interval timestamps](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20historical%20portfolio%20value%20over%20time/USD/1).

```typescript
async function main() {
  const address = '';
  const chainId = 1; // ether's mainnet, optional parameter
  const portfolio = await covalent.address(address, chainId).portfolio();
}
```

### Get ERC20 token transfers for address

[Return all ERC20 token contract transfers along with their historical prices at the time of their transfer](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/1).

```typescript
async function main() {
  const address = '';
  const chainId = 1; // ether's mainnet, optional parameter
  const contract = '';
  const transfers = await covalent.address(address, chainId).tokenTransfers(contract);
}
```

### Get log events by contract address

[Return a paginated list of decoded log events emitted by a particular smart contract](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20log%20events%20by%20contract%20address/USD/1).

```typescript
async function main() {
  const address = '';
  const chainId = 1; // ether's mainnet, optional parameter
  const params = {
    "starting-block": 12115107,
    "ending-block": 12240004
  };
  const logEvents = await covalent.address(address, chainId).logEvents(params);
}
```

## Blocks

### Get a block

[Return a single block](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20a%20block/USD/1).

```typescript
async function main() {
  const chainId = 1; // ether's mainnet, optional parameter
  const lastBlock = await covalent.blocks(chainId).get();
  const specificBlock = await covalent.blocks(chainId).get(14946920);
}
```

### Get block heights

[Return all the block height(s) of a particular chain within a date range](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20block%20heights/USD/1).

```typescript
async function main() {
  const chainId = 1; // ether's mainnet, optional parameter
  const blocks = await covalent.blocks().between('2021-01-01', '2021-01-03'); // YYYY-MM-DD
}
```

## Token

### Get token holders as of any block height

[Return a paginated list of token holders. If `block-height` is omitted, the latest block is used](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/1).

```typescript
async function main() {
  const tokenAddress = '';
  const chainId = 1; // ether's mainnet, optional parameter
  const holders = await covalent.token(tokenAddress, chainId).holders();
}
```

### Get changes in token holders between two block heights

[Return a paginated list of token holders and their current/historical balances, where the token balance of the token holder changes between `starting-block` and `ending-block`](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/1).

```typescript
async function main() {
  const tokenAddress = '';
  const chainId = 1; // ether's mainnet, optional parameter
  const params = {
    "starting-block": 12500000,
    "ending-block": 12500100
  };
  const holders = await covalent.token(tokenAddress, chainId).holdersChanges(params);
}
```

### Get NFT token IDs for contract

[Return a list of all token IDs for the NFT contract on the blockchain](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20NFT%20token%20IDs%20for%20contract/USD/1).

```typescript
async function main() {
  const tokenAddress = '';
  const chainId = 1; // ether's mainnet, optional parameter
  const nftTokenIds = await covalent.token(tokenAddress, chainId).nftTokenIds();
}
```

### Get NFT transactions for contract

[Return a list of transactions](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20NFT%20transactions%20for%20contract/USD/1).

```typescript
async function main() {
  const tokenAddress = '';
  const chainId = 1; // ether's mainnet, optional parameter
  const nftTransactions = await covalent.token(tokenAddress, chainId).nftTransactions('123');
}
```

### Get NFT external metadata for contract

[Return the external metadata. Both ERC721 as well as ERC1155 standards are supported](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20NFT%20external%20metadata%20for%20contract/USD/1).

```typescript
async function main() {
  const tokenAddress = '';
  const chainId = 1; // ether's mainnet, optional parameter
  const nftMetadata = await covalent.token(tokenAddress, chainId).nftMetadata('123');
}
```

## Transaction

### Get a transaction

[Return the transaction data with their decoded event logs](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20a%20transaction/USD/1).

```typescript
async function main() {
  const chainId = 1; // ether's mainnet, optional parameter
  const nftMetadata = await covalent.transactions(chainId).get('tx hash');
}
```

## Topics

### Get log events by topic hash(es)

[Return a paginated list of decoded log events with one or more topic hashes separated by a comma](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/1).

```typescript
async function main() {
  const chainId = 1; // ether's mainnet, optional parameter
  const TOPICS = ['0x804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a'];
  const params = {
    "starting-block": 12500000,
    "ending-block": 12500100
  };

  const topics = await covalent.topics(TOPICS, chainId).get(params);
}
```

## Pricing

### Get historical token prices

[Return their historical prices. Can filter by date ranges and convert to `quote_currency`. Only daily granularity is supported](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20historical%20token%20prices/USD/1).

```typescript
async function main() {
  const chainId = 1; // ether's mainnet, optional parameter
  const CONTRACT_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'; // DAI
  const topics = await covalent.pricing(chainId).prices([CONTRACT_ADDRESS]);
}
```

## Exchange

### Get XY=K pools

[Return pool information across all XY=K pools including LP token prices, reserves, exchange volumes and fees](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20historical%20token%20prices/USD/1).

```typescript
async function main() {
  const exchangeName = 'uniswap_v2';
  const chainId = 1; // ether's mainnet, optional parameter
  const pools = await covalent.exchange(exchangeName, chainId).pools();
}
```

### Get XY=K pools by address

[Return pool information across all XY=K pools including LP token prices, reserves, exchange volumes and fees for address](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20historical%20token%20prices/USD/1).


```typescript
async function main() {
  const exchangeName = 'uniswap_v2';
  const chainId = 1; // ether's mainnet, optional parameter
  const address = '';
  const pools = await covalent.exchange(exchangeName, chainId).address(address).pools();
}
```

### Get XY=K address exchange balances

[Return address exchange balances for a specific DEX](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20historical%20token%20prices/USD/1).

```typescript
async function main() {
  const exchangeName = 'uniswap_v2';
  const chainId = 1; // ether's mainnet, optional parameter
  const address = '';
  const balances = await covalent.exchange(exchangeName, chainId).address(address).balances();
}
```

### Get XY=K network exchange tokens

[Return network exchange tokens for a specific DEX](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20historical%20token%20prices/USD/1).

```typescript
async function main() {
  const exchangeName = 'uniswap_v2';
  const chainId = 1; // ether's mainnet, optional parameter
  const balances = await covalent.exchange(exchangeName, chainId).tokens();
}
```

### Get XY=K supported DEXes

[Returns a list of DEXes currently supported by the XY=K endpoints](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20XY=K%20supported%20DEXes/USD/1).

```typescript
async function main() {
  const exchanges = await covalent.exchanges();
}
```

### Get XY=K single network exchange token

[Return single network exchange token for a specific DEX](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20XY=K%20supported%20DEXes/USD/1).

```typescript
async function main() {
  const exchangeName = 'uniswap_v2';
  const chainId = 1; // ether's mainnet, optional parameter
  const tokenId = '';
  const token = await covalent.exchange(exchangeName, chainId).token(tokenId).get();
}
```

### Get XY=K transactions for account address

[Return transactions for account address for a specific DEX](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20XY=K%20supported%20DEXes/USD/1).

```typescript
async function main() {
  const exchangeName = 'uniswap_v2';
  const chainId = 1; // ether's mainnet, optional parameter
  const balances = await covalent.exchange(exchangeName, chainId).transactions();
}
```

### Get XY=K transactions for token address

[Return transactions for token address for a specific DEX](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20XY=K%20supported%20DEXes/USD/1).

```typescript
async function main() {
  const exchangeName = 'uniswap_v2';
  const chainId = 1; // ether's mainnet, optional parameter
  const tokenId = '';
  const token = await covalent.exchange(exchangeName, chainId).token(tokenId).transactions();
}
```

### Get XY=K ecosystem chart data

[Return ecosystem chart data for a specific DEX](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20XY=K%20supported%20DEXes/USD/1).

```typescript
async function main() {
  const exchangeName = 'uniswap_v2';
  const chainId = 1; // ether's mainnet, optional parameter
  const balances = await covalent.exchange(exchangeName, chainId).ecosystemChartData();
}
```

### Get XY=K health data

[Return last synced block height data and latest block height for a specific DEX](https://www.covalenthq.com/docs/api/?utm_source=covalent&utm_medium=docs#/0/Get%20XY=K%20supported%20DEXes/USD/1).

```typescript
async function main() {
  const exchangeName = 'uniswap_v2';
  const chainId = 1; // ether's mainnet, optional parameter
  const balances = await covalent.exchange(exchangeName, chainId).healthData();
}
```
