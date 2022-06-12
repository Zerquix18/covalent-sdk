/**
 * These are the "Components" in the main page https://www.covalenthq.com/docs/api/
 * Kept in the same order.
 */

export interface ContractMetadata {
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  supports_erc: string[] | null;
  logo_url: string;
}

export interface AddressWithHistoricalPricesItem extends ContractMetadata {
  update_at: string;
  quote_currency: string;
  prices: HistoricalPriceItem[];
  items: any;
}

export interface HistoricalPriceItem {
  contract_metadata: ContractMetadata;
  date: string;
  price: number;
}

export interface BalanceResponseType {
  address: string;
  updated_at: string;
  next_update_at: string;
  quote_currency: string;
  chain_id: number;
  items: WalletBalanceItem[];
  pagination: AppliedPagination | null;
}

export type INFTMetadata = any; 

export type AssetType = 'cryptocurrency' | 'stablecoin' | 'nft' | 'dust';

export interface WalletBalanceItem extends ContractMetadata {
  last_transferred_at: string;
  type: AssetType;
  balance: string;
  balance_24h: string;
  quote_rate: number | null;
  quote_rate_24h: number | null;
  quote: number | null;
  quote_24h: number | null;
  nft_data: INFTMetadata[] | null;
}

export interface HistoricalPortfolioResponseItemTokenBalance {
  balance: string;
  quote: number | null;
}

export interface HistoricalPortfolioResponseItemToken {
  timestamp: string;
  quote_rate: number;
  open: HistoricalPortfolioResponseItemTokenBalance;
  high: HistoricalPortfolioResponseItemTokenBalance;
  low: HistoricalPortfolioResponseItemTokenBalance;
  close: HistoricalPortfolioResponseItemTokenBalance;
}

export interface HistoricalPortfolioResponseItem extends ContractMetadata {
  holdings: HistoricalPortfolioResponseItemToken[];
}

export interface HistoricalPortfolioResponse {
  address: string;
  updated_at: string;
  next_update_at: string;
  quote_currency: string;
  chain_id: number;
  items: HistoricalPortfolioResponseItem[];
  pagination: AppliedPagination | null;
}

export interface AppliedPagination {
  has_more: boolean;
  page_number: number;
  page_size: number;
  total_count: number | null;
}

export interface DecodedParamItem {
  name: string;
  type: string;
  indexed: boolean;
  decoded: boolean;
  value: string;
}

export interface TransactionResponse {
  address: string;
  updated_at: string;
  next_update_at: string;
  quote_currency: string;
  chain_id: number;
  items: BlockTransactionWithContractTransfers[];
  pagination: AppliedPagination | null;
}

export interface DecodedItem {
  name: string;
  signature: string;
  params: DecodedParamItem[];
}

export interface LogEventItem {
  block_signed_at: string;
  block_height: number;
  tx_offset: number;
  log_offset: number;
  tx_hash: string;
  raw_log_topics: any;
  sender_contract_decimals: number | null;
  sender_name: string | null;
  sender_contract_ticker_symbol: string | null;
  sender_address: string;
  sender_address_label: string | null;
  sender_logo_url: string | null;
  raw_log_data: string;
  decoded: DecodedItem;
}

export interface BlockTransactionWithLogEvents {
  block_signed_at: string;
  block_height: number;
  tx_hash: string;
  tx_offset: number;
  successful: boolean;
  from_address: string;
  from_address_label: string | null;
  to_address: string;
  to_address_label: string | null;
  value: string;
  value_quote: number;
  gas_offered: number;
  gas_spent: number;
  gas_price: number;
  fees_paid: string | null;
  gas_quote: number;
  gas_quote_rate: number;
  log_events: LogEventItem[];
}

export interface SingleTransactionResponse {
  updated_at: string;
  items: BlockTransactionWithLogEvents[];
  pagination: AppliedPagination | null;
}

export interface MethodCallsForTransfers {
  sender_address: string; 
  method: string;
}

export interface TransferResponse {
  address: string;
  updated_at: string;
  next_update_at: string;
  quote_currency: string;
  items: BlockTransactionWithContractTransfers[];
  pagination: AppliedPagination | null;
}

export type TokenTransferItemType = 'IN' | 'OUT'; 

export interface TokenTransferItem {
  block_signed_at: string;
  tx_hash: string;
  from_address: string;
  from_address_label: string | null
  to_address: string;
  to_address_label: string | null
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  logo_url: string;
  transfer_type: TokenTransferItemType;
  delta: string;
  balance: string | null;
  quote_rate: number;
  delta_quote: number;
  balance_quote: number | null;
  method_calls: MethodCallsForTransfers[] | null;
}

export interface BlockTransactionWithContractTransfers {
  block_signed_at: string;
  block_height: number;
  tx_hash: string;
  tx_offset: number;
  successful: boolean;
  from_address: string;
  from_address_label: string | null;
  to_address: string;
  to_address_label: string | null;
  value: string;
  value_quote: number;
  gas_offered: number;
  gas_spent: number;
  gas_price: number;
  fees_paid: number | null;
  gas_quote: number;
  gas_quote_rate: number;
  transfers: TokenTransferItem;
}

export interface Block {
  signed_at: string;
  height: number,
}

export interface SingleBlockResponse {
  updated_at: string;
  items: Block[];
  pagination: AppliedPagination | null;
}

export interface UniswapLikeExchangeListResponse {
  updated_at: string;
  items: ExchangeVolumeV2[];
  pagination: AppliedPagination | null; 
}

export interface ExchangeVolumeV2 {
  exchange: string;
  swap_count_24h: number;
  total_liquidity_quote: number;
  volume_24h_quote: number;
  fee_24h_quote: number;
  total_supply: number;
  quote_rate: number;
  token_0: TokenV2;
  token_1: TokenV2;
  chain_name: string;
  chain_id: string;
  dex_name: string;
  volume_7d_quote: number;
  annualized_fee: number;
}

export interface TokenV2 {
  contract_address: string;
  contract_name: string;
  volume_in_24h: number;
  volume_out_24h: number;
  quote_rate: number;
  reserver: number;
  logo_url: number;
  contract_ticker_symbol: string;
  contract_decimals: number;
  volume_in_7d: number;
  volume_out_7d: number;
}

export interface EventsListResponseType {
  updated_at: string;
  items: LogEventItem[];
  pagination: AppliedPagination | null;
}

export interface UniswapV2BalanceItem {
  token_0: UniswapToken;
  token_1: UniswapToken;
  pagination: AppliedPagination | null;
}

export interface UniswapTokenWithSupply extends UniswapToken {
  total_supply: number;
}

export interface ContainerU {
  balances: UniswapV2BalanceItem[];
}

export interface UniswapToken {
  contract_decimals: number;
  contract_ticker_symbol: string;
  contract_address: string;
  logo_url: string;
  balance: number;
  quote: number;
  quote_rate: number;
}

export interface TokenHolder extends ContractMetadata {
  address: string;
  balance: string;
  total_supply: string;
  block_height: number;
}

export interface TokenHolderResponse {
  updated_at: string;
  items: TokenHolder[];
  pagination: AppliedPagination | null;
}

export interface TokenHolderDiff {
  token_holder: string;
  prev_balance: string;
  prev_block_height: number;
  next_balance: string;
  next_block_height: number;
  diff: string;
}

export interface TokenHolderDiffResponse {
  updated_at: string;
  items: TokenHolderDiff[];
  pagination: AppliedPagination | null;
}

export interface TokenV2Volume {
  chain_name: string;
  chain_id: string;
  dex_name: string;
  contract_address: number;
  contract_name: string;
  total_liquidity: number;
  total_volume_24h: number;
  logo_url: string;
  contract_ticker_symbol: string;
  contract_decimals: number;
  swap_count_24h: number;
  quote_rate: number;
  total_liquidity_quote: number;
  total_volume_24h_quote: number;
}

export interface NetworkExchangeTokenResponse {
  updated_at: string;
  items: TokenV2Volume[];
  pagination: AppliedPagination | null;
}

export interface TokenIdResponseType {
  updated_at: string;
  items: TokenIdResponse[];
  pagination: AppliedPagination | number;
}

export interface TokenIdResponse extends ContractMetadata {
  token_id: string;
}

export interface UniswapLikeVolumeChartWithQuote {
  dex_name: string;
  chain_id: string;
  dt: string;
  exchange: string;
  sum_amount0in: number;
  sum_amount0out: number;
  sum_amount1in: number;
  sum_amount1out: number;
  volume_quote: number;
  token0_quote_rate: number;
  token1_quote_rate: number;
  swap_count_24: number;
}

export interface UniswapLikePriceChartWithQuote {
  dex_name: string;
  chain_id: string;
  dt: string;
  exchange: string;
  price_of_token0_in_token1: number;
  price_of_token0_in_token1_description: string;
  price_of_token1_in_token0: number;
  price_of_token1_in_token0_description: string;
  quote_currency: string;
  price_of_token0_in_quote_currency: number;
  price_of_token1_in_quote_currency: number;
}

export interface UniswapLikeLiquidityChartWithQuote {
  dex_name: string;
  chain_id: string;
  dt: string;
  exchange: string;
  r0_c: number;
  r1_c: number;
  liquidity_quote: number;
  token0_quote_rate: number;
  token1_quote_rate: number;
}

export interface SingleNetworkExchangeTokenResponse {
  updated_at: string;
  items: ExchangeVolumeWithVolumeAndLiquidityTimeseries[];
  pagination: AppliedPagination | null;
}

export interface ExchangeVolumeWithVolumeAndLiquidityTimeseries {
  dex_name: string;
  chain_id: string;
  exchange: string;
  swap_count_24h: number;
  total_liquidity_quote: number;
  volume_24h_quote: number;
  fee_24h_quote: number;
  volume_7d_quote: number;
  annualized_fee: number;
  total_supply: number;
  quote_rate: number;
  quote_currency: string;
  block_height: number;
  token_0: TokenV2;
  token_1: TokenV2;
  token0_reserve_quote: number;
  token1_reserve_quote: number;
  volume_timeseries_7d: UniswapLikeLiquidityChartWithQuote;
  volume_timeseries_30d: UniswapLikeLiquidityChartWithQuote;
  liquidity_timeseries_7d: UniswapLikeLiquidityChartWithQuote;
  liquidity_timeseries_30d: UniswapLikeLiquidityChartWithQuote;
  price_timeseries_7d: UniswapLikeLiquidityChartWithQuote;
  price_timeseries_30d: UniswapLikeLiquidityChartWithQuote;
}

export interface NftTransactionsResponse {
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  supports_erc: string[];
  logo_url: string;
  type: AssetType;
  nft_transactions: BlockTransactionWithLogEvents[];
}

export interface NftTransactionsResponseType {
  updated_at: string;
  items: NftTransactionsResponse[];
  pagination: AppliedPagination | null;
}

export interface NftMetadataResponse extends ContractMetadata {
  type: AssetType;
  nft_data: INFTMetadata;
}

export interface NftMetadataResponseType {
  updated_at: string;
  items: NftMetadataResponse[];
  pagination: AppliedPagination | null;
}

export interface ExchangeTransaction {
  block_signed_at: string;
  tx_hash: string;
  act: string;
  address: string;
  amount_0: number;
  amount_1: number;
  amount_0_in: number;
  amount_1_in: number;
  amount_0_out: number;
  amount_1_out: number;
  to_address: string;
  from_address: string;
  sender_address: string;
  total_quote: number;
  quote_currency: string;
  token_0: ContractMetadata;
  token_1: ContractMetadata;
  token_0_quote_rate: number;
  token_1_quote_rate: number;
}

export interface AccountAddressTransactionsResponse {
  updated_at: string;
  items: ExchangeTransaction[];
  pagination: AppliedPagination | null;
}
 
export interface TokenAddressTransactionsResponse {
  updated_at: string;
  items: ExchangeTransaction[];
  pagination: AppliedPagination;
}

export interface ExchangeTransactionsResponse {
  updated_at: string;
  items: ExchangeTransaction[];
  pagination: AppliedPagination;
}

export interface EcosystemResponse {
  updated_at: string;
  items: UniswapLikeEcosystemCharts[];
  pagination: AppliedPagination;
}

export interface UniswapLikeEcosystemCharts {
  dex_name: string;
  chain_id: string;
  quote_currency: string;
  gas_token_price_quote: number
  total_swaps_24h: number;
  total_active_pairs_7d: number;
  total_fees_24h: number
  volume_chart_7d: UniswapLikeVolumeEcosystemChart;
  volume_chart_30d: UniswapLikeVolumeEcosystemChart;
  liquidity_chart_7d: UniswapLikeLiquidityEcosystemChart;
  liquidity_chart_30d: UniswapLikeLiquidityEcosystemChart;
}

export interface UniswapLikeVolumeEcosystemChart {
  dex_name: string;
  chain_id: string;
  dt: string;
  quote_currency: string;
  volume_quote: number;
  swap_count_24: number;
}

export interface UniswapLikeLiquidityEcosystemChart {
  dex_name: string;
  chain_id: string;
  dt: string;
  quote_currency: string;
  liquidity_quote: number;
}

export interface HealthData {
  synced_block_height: number;
  synced_block_signed_at: string
  latest_block_height: number;
  latest_block_signed_at: string;
}

export interface HealthDataResponse {
  updated_at: string;
  items: HealthData[];
  pagination: AppliedPagination | null;
}

export interface GenericChainInfoDisplay {
  name: string;
  chain_id: string;
  is_testnet: boolean;
  db_schema_name: string;
  label: string;
  logo_url: string;
}

export interface AllChainInfoResponse {
  updated_at: string;
  items: GenericChainInfoDisplay;
  pagination: AppliedPagination | null;
}

export interface ChainStatusResponse {
  updated_at: string;
  items: GenericChainInfoStatusDisplay[];
  pagination: AppliedPagination | null;
}

export interface GenericChainInfoStatusDisplay {
  name: string;
  chain_id: string;
  is_testnet: boolean;
  logo_url: string;
  synced_block_height: number;
  synced_blocked_signed_at: string;
}
