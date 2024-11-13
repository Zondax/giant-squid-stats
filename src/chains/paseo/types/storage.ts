import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v1001002 from './v1001002'
import * as v1001003 from './v1001003'
import * as v1002000 from './v1002000'
import * as v1002006 from './v1002006'
import * as v1003000 from './v1003000'
import * as v1003003 from './v1003003'

export class AssetRateConversionRateToNativeStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRate'
    }

    protected getName() {
        return 'ConversionRateToNative'
    }

    /**
     *  Maps an asset to its fixed point representation in the native balance.
     * 
     *  E.g. `native_amount = asset_amount * ConversionRateToNative::<T>::get(asset_kind)`
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'c41fd35de66de34fd8687f3563684c1c049a5ea1590c81162ef65494885a6f7c'
    }

    /**
     *  Maps an asset to its fixed point representation in the native balance.
     * 
     *  E.g. `native_amount = asset_amount * ConversionRateToNative::<T>::get(asset_kind)`
     */
    get asV1001002(): AssetRateConversionRateToNativeStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Maps an asset to its fixed point representation in the native balance.
     * 
     *  E.g. `native_amount = asset_amount * ConversionRateToNative::<T>::get(asset_kind)`
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'a50eaa96e26bd41b08d8a0c6a61a9813259bc22891fbbe7bf1d63bb8b5b6c667'
    }

    /**
     *  Maps an asset to its fixed point representation in the native balance.
     * 
     *  E.g. `native_amount = asset_amount * ConversionRateToNative::<T>::get(asset_kind)`
     */
    get asV1002000(): AssetRateConversionRateToNativeStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Maps an asset to its fixed point representation in the native balance.
 * 
 *  E.g. `native_amount = asset_amount * ConversionRateToNative::<T>::get(asset_kind)`
 */
export interface AssetRateConversionRateToNativeStorageV1001002 {
    get(key: v1001002.VersionedLocatableAsset): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v1001002.VersionedLocatableAsset[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<v1001002.VersionedLocatableAsset[]>
    getKeys(key: v1001002.VersionedLocatableAsset): Promise<v1001002.VersionedLocatableAsset[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1001002.VersionedLocatableAsset[]>
    getKeysPaged(pageSize: number, key: v1001002.VersionedLocatableAsset): AsyncIterable<v1001002.VersionedLocatableAsset[]>
    getPairs(): Promise<[k: v1001002.VersionedLocatableAsset, v: bigint][]>
    getPairs(key: v1001002.VersionedLocatableAsset): Promise<[k: v1001002.VersionedLocatableAsset, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1001002.VersionedLocatableAsset, v: bigint][]>
    getPairsPaged(pageSize: number, key: v1001002.VersionedLocatableAsset): AsyncIterable<[k: v1001002.VersionedLocatableAsset, v: bigint][]>
}

/**
 *  Maps an asset to its fixed point representation in the native balance.
 * 
 *  E.g. `native_amount = asset_amount * ConversionRateToNative::<T>::get(asset_kind)`
 */
export interface AssetRateConversionRateToNativeStorageV1002000 {
    get(key: v1002000.VersionedLocatableAsset): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v1002000.VersionedLocatableAsset[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<v1002000.VersionedLocatableAsset[]>
    getKeys(key: v1002000.VersionedLocatableAsset): Promise<v1002000.VersionedLocatableAsset[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1002000.VersionedLocatableAsset[]>
    getKeysPaged(pageSize: number, key: v1002000.VersionedLocatableAsset): AsyncIterable<v1002000.VersionedLocatableAsset[]>
    getPairs(): Promise<[k: v1002000.VersionedLocatableAsset, v: bigint][]>
    getPairs(key: v1002000.VersionedLocatableAsset): Promise<[k: v1002000.VersionedLocatableAsset, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1002000.VersionedLocatableAsset, v: bigint][]>
    getPairsPaged(pageSize: number, key: v1002000.VersionedLocatableAsset): AsyncIterable<[k: v1002000.VersionedLocatableAsset, v: bigint][]>
}

export class AuctionsAuctionCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'AuctionCounter'
    }

    /**
     *  Number of auctions started so far.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of auctions started so far.
     */
    get asV1001002(): AuctionsAuctionCounterStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Number of auctions started so far.
 */
export interface AuctionsAuctionCounterStorageV1001002 {
    get(): Promise<number>
}

export class AuctionsAuctionInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'AuctionInfo'
    }

    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  Information relating to the current auction, if there is one.
     * 
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    get asV1001002(): AuctionsAuctionInfoStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Information relating to the current auction, if there is one.
 * 
 *  The first item in the tuple is the lease period index that the first of the four
 *  contiguous lease periods on auction is for. The second is the block number when the
 *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
 */
export interface AuctionsAuctionInfoStorageV1001002 {
    get(): Promise<([number, number] | undefined)>
}

export class AuctionsReservedAmountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'ReservedAmounts'
    }

    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'fda6a5cc800624ef757b3d079b088c0eebe85aa8e842b133f55d4d490b10f527'
    }

    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    get asV1001002(): AuctionsReservedAmountsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Amounts currently reserved in the accounts of the bidders currently winning
 *  (sub-)ranges.
 */
export interface AuctionsReservedAmountsStorageV1001002 {
    get(key: [Uint8Array, number]): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [Uint8Array, number][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: bigint][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: bigint][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: bigint][]>
}

export class AuctionsWinningStorage extends StorageBase {
    protected getPrefix() {
        return 'Auctions'
    }

    protected getName() {
        return 'Winning'
    }

    /**
     *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Sample Size. The
     *  first sample of the ending period is 0; the last is `Sample Size - 1`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '50afa484f0cd0b49800ca936e6d5aef816fcfd7b469149f3f61b1d41d4e2bd86'
    }

    /**
     *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Sample Size. The
     *  first sample of the ending period is 0; the last is `Sample Size - 1`.
     */
    get asV1001002(): AuctionsWinningStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
 *  the current auction. The map's key is the 0-based index into the Sample Size. The
 *  first sample of the ending period is 0; the last is `Sample Size - 1`.
 */
export interface AuctionsWinningStorageV1001002 {
    get(key: number): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)>
    getAll(): Promise<([Uint8Array, number, bigint] | undefined)[][]>
    getMany(keys: number[]): Promise<(([Uint8Array, number, bigint] | undefined)[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: ([Uint8Array, number, bigint] | undefined)[]][]>
}

export class AuthorityDiscoveryKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'AuthorityDiscovery'
    }

    protected getName() {
        return 'Keys'
    }

    /**
     *  Keys of the current authority set.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Keys of the current authority set.
     */
    get asV1002000(): AuthorityDiscoveryKeysStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Keys of the current authority set.
 */
export interface AuthorityDiscoveryKeysStorageV1002000 {
    get(): Promise<Uint8Array[]>
}

export class AuthorityDiscoveryNextKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'AuthorityDiscovery'
    }

    protected getName() {
        return 'NextKeys'
    }

    /**
     *  Keys of the next authority set.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Keys of the next authority set.
     */
    get asV1002000(): AuthorityDiscoveryNextKeysStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Keys of the next authority set.
 */
export interface AuthorityDiscoveryNextKeysStorageV1002000 {
    get(): Promise<Uint8Array[]>
}

export class AuthorshipAuthorStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Author'
    }

    /**
     *  Author of current block.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Author of current block.
     */
    get asV1001002(): AuthorshipAuthorStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorshipAuthorStorageV1001002 {
    get(): Promise<(Uint8Array | undefined)>
}

export class BabeAuthorVrfRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'AuthorVrfRandomness'
    }

    /**
     *  This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     * 
     *  It is set in `on_finalize`, before it will contain the value from the last block.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '10a2769b0f42175702ad26b83248cff46d4c3e32ecee58ea6ff2417630585d13'
    }

    /**
     *  This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     * 
     *  It is set in `on_finalize`, before it will contain the value from the last block.
     */
    get asV1001002(): BabeAuthorVrfRandomnessStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  This field should always be populated during block processing unless
 *  secondary plain slots are enabled (which don't contain a VRF output).
 * 
 *  It is set in `on_finalize`, before it will contain the value from the last block.
 */
export interface BabeAuthorVrfRandomnessStorageV1001002 {
    get(): Promise<(Uint8Array | undefined)>
}

export class BabeAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  Current epoch authorities.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  Current epoch authorities.
     */
    get asV1001002(): BabeAuthoritiesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Current epoch authorities.
 */
export interface BabeAuthoritiesStorageV1001002 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class BabeCurrentSlotStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'CurrentSlot'
    }

    /**
     *  Current slot number.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current slot number.
     */
    get asV1001002(): BabeCurrentSlotStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Current slot number.
 */
export interface BabeCurrentSlotStorageV1001002 {
    get(): Promise<bigint>
}

export class BabeEpochConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochConfig'
    }

    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in
     *  genesis.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
    }

    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in
     *  genesis.
     */
    get asV1001002(): BabeEpochConfigStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The configuration for the current epoch. Should never be `None` as it is initialized in
 *  genesis.
 */
export interface BabeEpochConfigStorageV1001002 {
    get(): Promise<(v1001002.BabeEpochConfiguration | undefined)>
}

export class BabeEpochIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochIndex'
    }

    /**
     *  Current epoch index.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current epoch index.
     */
    get asV1001002(): BabeEpochIndexStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Current epoch index.
 */
export interface BabeEpochIndexStorageV1001002 {
    get(): Promise<bigint>
}

export class BabeEpochStartStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'EpochStart'
    }

    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '21d7691711cd2bd6f3fc4d179c912487bf24c02c8e4e5fd183103936340b5cc5'
    }

    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    get asV1001002(): BabeEpochStartStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The block numbers when the last and current epoch have started, respectively `N-1` and
 *  `N`.
 *  NOTE: We track this is in order to annotate the block number when a given pool of
 *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
 *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
 */
export interface BabeEpochStartStorageV1001002 {
    get(): Promise<[number, number]>
}

export class BabeGenesisSlotStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'GenesisSlot'
    }

    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    get asV1001002(): BabeGenesisSlotStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The slot at which the first epoch actually started. This is 0
 *  until the first block of the chain.
 */
export interface BabeGenesisSlotStorageV1001002 {
    get(): Promise<bigint>
}

export class BabeInitializedStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Initialized'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd640aa265bbc697c1d06e978513ab478b54cefe16a2b8b11b22c93e5a17fb0de'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get asV1001002(): BabeInitializedStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '3c786fdc776fca67b84da6916aedd38d9bac00952487b44bde38dd803c15479c'
    }

    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    get asV1002000(): BabeInitializedStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface BabeInitializedStorageV1001002 {
    get(): Promise<((v1001002.PreDigest | undefined) | undefined)>
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface BabeInitializedStorageV1002000 {
    get(): Promise<((v1002000.PreDigest | undefined) | undefined)>
}

export class BabeLatenessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Lateness'
    }

    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    get asV1001002(): BabeLatenessStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  How late the current block is compared to its parent.
 * 
 *  This entry is populated as part of block execution and is cleaned up
 *  on block finalization. Querying this storage entry outside of block
 *  execution context should always yield zero.
 */
export interface BabeLatenessStorageV1001002 {
    get(): Promise<number>
}

export class BabeNextAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextAuthorities'
    }

    /**
     *  Next epoch authorities.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  Next epoch authorities.
     */
    get asV1001002(): BabeNextAuthoritiesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Next epoch authorities.
 */
export interface BabeNextAuthoritiesStorageV1001002 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class BabeNextEpochConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextEpochConfig'
    }

    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '02679d53f6edd683908cd84a1275afad3bb8d1f4b9cb9af0b08cd3d89027b3ef'
    }

    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    get asV1001002(): BabeNextEpochConfigStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The configuration for the next epoch, `None` if the config will not change
 *  (you can fallback to `EpochConfig` instead in that case).
 */
export interface BabeNextEpochConfigStorageV1001002 {
    get(): Promise<(v1001002.BabeEpochConfiguration | undefined)>
}

export class BabeNextRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'NextRandomness'
    }

    /**
     *  Next epoch randomness.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Next epoch randomness.
     */
    get asV1001002(): BabeNextRandomnessStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Next epoch randomness.
 */
export interface BabeNextRandomnessStorageV1001002 {
    get(): Promise<Uint8Array>
}

export class BabePendingEpochConfigChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'PendingEpochConfigChange'
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f5cc4c82ad97d6c0a6152a4f85104de3d2cb7e03288f50c7291e3d6fd9a88b9c'
    }

    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    get asV1001002(): BabePendingEpochConfigChangeStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface BabePendingEpochConfigChangeStorageV1001002 {
    get(): Promise<(v1001002.NextConfigDescriptor | undefined)>
}

export class BabeRandomnessStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'Randomness'
    }

    /**
     *  The epoch randomness for the *current* epoch.
     * 
     *  # Security
     * 
     *  This MUST NOT be used for gambling, as it can be influenced by a
     *  malicious validator in the short term. It MAY be used in many
     *  cryptographic protocols, however, so long as one remembers that this
     *  (like everything else on-chain) it is public. For example, it can be
     *  used where a number is needed that cannot have been chosen by an
     *  adversary, for purposes such as public-coin zero-knowledge proofs.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The epoch randomness for the *current* epoch.
     * 
     *  # Security
     * 
     *  This MUST NOT be used for gambling, as it can be influenced by a
     *  malicious validator in the short term. It MAY be used in many
     *  cryptographic protocols, however, so long as one remembers that this
     *  (like everything else on-chain) it is public. For example, it can be
     *  used where a number is needed that cannot have been chosen by an
     *  adversary, for purposes such as public-coin zero-knowledge proofs.
     */
    get asV1001002(): BabeRandomnessStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The epoch randomness for the *current* epoch.
 * 
 *  # Security
 * 
 *  This MUST NOT be used for gambling, as it can be influenced by a
 *  malicious validator in the short term. It MAY be used in many
 *  cryptographic protocols, however, so long as one remembers that this
 *  (like everything else on-chain) it is public. For example, it can be
 *  used where a number is needed that cannot have been chosen by an
 *  adversary, for purposes such as public-coin zero-knowledge proofs.
 */
export interface BabeRandomnessStorageV1001002 {
    get(): Promise<Uint8Array>
}

export class BabeSegmentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'SegmentIndex'
    }

    /**
     *  Randomness under construction.
     * 
     *  We make a trade-off between storage accesses and list length.
     *  We store the under-construction randomness in segments of up to
     *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
     * 
     *  Once a segment reaches this length, we begin the next one.
     *  We reset all segments and return to `0` at the beginning of every
     *  epoch.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Randomness under construction.
     * 
     *  We make a trade-off between storage accesses and list length.
     *  We store the under-construction randomness in segments of up to
     *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
     * 
     *  Once a segment reaches this length, we begin the next one.
     *  We reset all segments and return to `0` at the beginning of every
     *  epoch.
     */
    get asV1001002(): BabeSegmentIndexStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Randomness under construction.
 * 
 *  We make a trade-off between storage accesses and list length.
 *  We store the under-construction randomness in segments of up to
 *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
 * 
 *  Once a segment reaches this length, we begin the next one.
 *  We reset all segments and return to `0` at the beginning of every
 *  epoch.
 */
export interface BabeSegmentIndexStorageV1001002 {
    get(): Promise<number>
}

export class BabeSkippedEpochsStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'SkippedEpochs'
    }

    /**
     *  A list of the last 100 skipped epochs and the corresponding session index
     *  when the epoch was skipped.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof
     *  must contains a key-ownership proof for a given session, therefore we need a
     *  way to tie together sessions and epoch indices, i.e. we need to validate that
     *  a validator was the owner of a given key on a given session, and what the
     *  active epoch index was during that session.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '3df30e4db0015157d5d69bc8676ac0eac9290eba6d0cca73267e7c398c14a688'
    }

    /**
     *  A list of the last 100 skipped epochs and the corresponding session index
     *  when the epoch was skipped.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof
     *  must contains a key-ownership proof for a given session, therefore we need a
     *  way to tie together sessions and epoch indices, i.e. we need to validate that
     *  a validator was the owner of a given key on a given session, and what the
     *  active epoch index was during that session.
     */
    get asV1001002(): BabeSkippedEpochsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  A list of the last 100 skipped epochs and the corresponding session index
 *  when the epoch was skipped.
 * 
 *  This is only used for validating equivocation proofs. An equivocation proof
 *  must contains a key-ownership proof for a given session, therefore we need a
 *  way to tie together sessions and epoch indices, i.e. we need to validate that
 *  a validator was the owner of a given key on a given session, and what the
 *  active epoch index was during that session.
 */
export interface BabeSkippedEpochsStorageV1001002 {
    get(): Promise<[bigint, number][]>
}

export class BabeUnderConstructionStorage extends StorageBase {
    protected getPrefix() {
        return 'Babe'
    }

    protected getName() {
        return 'UnderConstruction'
    }

    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f619540cfd39ec62194ccd8c2d0c1c6ffcb39cfc17df25d0e83357e4b6c7d6d5'
    }

    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    get asV1001002(): BabeUnderConstructionStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
 */
export interface BabeUnderConstructionStorageV1001002 {
    get(key: number): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<Uint8Array[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '12d9e780c790f66e9c340b94cabd98da447e1087819d4acb4b1fe22bbb2783fb'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV1001002(): BalancesAccountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV1001002 {
    get(key: Uint8Array): Promise<v1001002.AccountData>
    getAll(): Promise<v1001002.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v1001002.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.AccountData][]>
}

export class BalancesFreezesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Freezes'
    }

    /**
     *  Freeze locks on account balances.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '10a170851d297e936604560e4e7a2f438a05fe56cd9723821e6983c94325c30f'
    }

    /**
     *  Freeze locks on account balances.
     */
    get asV1001002(): BalancesFreezesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Freeze locks on account balances.
 */
export interface BalancesFreezesStorageV1001002 {
    get(key: Uint8Array): Promise<v1001002.Type_531[]>
    getAll(): Promise<v1001002.Type_531[][]>
    getMany(keys: Uint8Array[]): Promise<v1001002.Type_531[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.Type_531[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.Type_531[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.Type_531[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.Type_531[]][]>
}

export class BalancesHoldsStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Holds'
    }

    /**
     *  Holds on account balances.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '1b1439d4155ee0e5ede0601e906ff4608388bfe1123d7afcfaf666d10a526692'
    }

    /**
     *  Holds on account balances.
     */
    get asV1001002(): BalancesHoldsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Holds on account balances.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'b48a6d401ea2413ddcff89e31e12d34881ab069e7d6b89c58cb6fd7960c0822c'
    }

    /**
     *  Holds on account balances.
     */
    get asV1002000(): BalancesHoldsStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Holds on account balances.
 */
export interface BalancesHoldsStorageV1001002 {
    get(key: Uint8Array): Promise<v1001002.IdAmount[]>
    getAll(): Promise<v1001002.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<v1001002.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.IdAmount[]][]>
}

/**
 *  Holds on account balances.
 */
export interface BalancesHoldsStorageV1002000 {
    get(key: Uint8Array): Promise<v1002000.IdAmount[]>
    getAll(): Promise<v1002000.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<v1002000.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1002000.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1002000.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1002000.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1002000.IdAmount[]][]>
}

export class BalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV1001002(): BalancesInactiveIssuanceStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV1001002 {
    get(): Promise<bigint>
}

export class BalancesLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV1001002(): BalancesLocksStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageV1001002 {
    get(key: Uint8Array): Promise<v1001002.BalanceLock[]>
    getAll(): Promise<v1001002.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<v1001002.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.BalanceLock[]][]>
}

export class BalancesReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV1001002(): BalancesReservesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageV1001002 {
    get(key: Uint8Array): Promise<v1001002.ReserveData[]>
    getAll(): Promise<v1001002.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v1001002.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.ReserveData[]][]>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV1001002(): BalancesTotalIssuanceStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV1001002 {
    get(): Promise<bigint>
}

export class BeefyAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  The current authorities set
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'eab735b1e1296faa3cc2be4de5b01fad6ef981b0ad80685308f906b559c6400b'
    }

    /**
     *  The current authorities set
     */
    get asV1001002(): BeefyAuthoritiesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The current authorities set
 */
export interface BeefyAuthoritiesStorageV1001002 {
    get(): Promise<Uint8Array[]>
}

export class BeefyGenesisBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'GenesisBlock'
    }

    /**
     *  Block number where BEEFY consensus is enabled/started.
     *  By changing this (through privileged `set_new_genesis()`), BEEFY consensus is effectively
     *  restarted from the newly set block number.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '19526a9e9cd1a1912441bd5e7765970e1b7352c8a5ea7e7769fa36f8d2329f24'
    }

    /**
     *  Block number where BEEFY consensus is enabled/started.
     *  By changing this (through privileged `set_new_genesis()`), BEEFY consensus is effectively
     *  restarted from the newly set block number.
     */
    get asV1001002(): BeefyGenesisBlockStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Block number where BEEFY consensus is enabled/started.
 *  By changing this (through privileged `set_new_genesis()`), BEEFY consensus is effectively
 *  restarted from the newly set block number.
 */
export interface BeefyGenesisBlockStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class BeefyNextAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'NextAuthorities'
    }

    /**
     *  Authorities set scheduled to be used with the next session
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'eab735b1e1296faa3cc2be4de5b01fad6ef981b0ad80685308f906b559c6400b'
    }

    /**
     *  Authorities set scheduled to be used with the next session
     */
    get asV1001002(): BeefyNextAuthoritiesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Authorities set scheduled to be used with the next session
 */
export interface BeefyNextAuthoritiesStorageV1001002 {
    get(): Promise<Uint8Array[]>
}

export class BeefySetIdSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'SetIdSession'
    }

    /**
     *  A mapping from BEEFY set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and BEEFY set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     * 
     *  TWOX-NOTE: `ValidatorSetId` is not under user control.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
    }

    /**
     *  A mapping from BEEFY set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and BEEFY set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     * 
     *  TWOX-NOTE: `ValidatorSetId` is not under user control.
     */
    get asV1001002(): BeefySetIdSessionStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  A mapping from BEEFY set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  This is only used for validating equivocation proofs. An equivocation proof must
 *  contains a key-ownership proof for a given session, therefore we need a way to tie
 *  together sessions and BEEFY set ids, i.e. we need to validate that a validator
 *  was the owner of a given key on a given session, and what the active set ID was
 *  during that session.
 * 
 *  TWOX-NOTE: `ValidatorSetId` is not under user control.
 */
export interface BeefySetIdSessionStorageV1001002 {
    get(key: bigint): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: number][]>
    getPairs(key: bigint): Promise<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: number][]>
}

export class BeefyValidatorSetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Beefy'
    }

    protected getName() {
        return 'ValidatorSetId'
    }

    /**
     *  The current validator set id
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The current validator set id
     */
    get asV1001002(): BeefyValidatorSetIdStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The current validator set id
 */
export interface BeefyValidatorSetIdStorageV1001002 {
    get(): Promise<bigint>
}

export class BeefyMmrLeafBeefyAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyMmrLeaf'
    }

    protected getName() {
        return 'BeefyAuthorities'
    }

    /**
     *  Details of current BEEFY authority set.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'e8e28d12081bf9bfa33811e94c3ee633d8295e22aea85c0fa7c00ce6911f2b17'
    }

    /**
     *  Details of current BEEFY authority set.
     */
    get asV1001002(): BeefyMmrLeafBeefyAuthoritiesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Details of current BEEFY authority set.
 */
export interface BeefyMmrLeafBeefyAuthoritiesStorageV1001002 {
    get(): Promise<v1001002.BeefyAuthoritySet>
}

export class BeefyMmrLeafBeefyNextAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'BeefyMmrLeaf'
    }

    protected getName() {
        return 'BeefyNextAuthorities'
    }

    /**
     *  Details of next BEEFY authority set.
     * 
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'e8e28d12081bf9bfa33811e94c3ee633d8295e22aea85c0fa7c00ce6911f2b17'
    }

    /**
     *  Details of next BEEFY authority set.
     * 
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    get asV1001002(): BeefyMmrLeafBeefyNextAuthoritiesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Details of next BEEFY authority set.
 * 
 *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
 */
export interface BeefyMmrLeafBeefyNextAuthoritiesStorageV1001002 {
    get(): Promise<v1001002.BeefyAuthoritySet>
}

export class BountiesBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'Bounties'
    }

    /**
     *  Bounties that have been made.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asV1001002(): BountiesBountiesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageV1001002 {
    get(key: number): Promise<(v1001002.Bounty | undefined)>
    getAll(): Promise<v1001002.Bounty[]>
    getMany(keys: number[]): Promise<(v1001002.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.Bounty][]>
}

export class BountiesBountyApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyApprovals'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get asV1001002(): BountiesBountyApprovalsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Bounty indices that have been approved but not yet funded.
 */
export interface BountiesBountyApprovalsStorageV1001002 {
    get(): Promise<number[]>
}

export class BountiesBountyCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyCount'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get asV1001002(): BountiesBountyCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Number of bounty proposals that have been made.
 */
export interface BountiesBountyCountStorageV1001002 {
    get(): Promise<number>
}

export class BountiesBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyDescriptions'
    }

    /**
     *  The description of each bounty.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV1001002(): BountiesBountyDescriptionsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageV1001002 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ChildBountiesChildBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildBounties'
    }

    /**
     *  Child bounties that have been added.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '27265a54e9a270a9e783aa4baa7a1318433a77722a99de466a3afe5e9d56ba7d'
    }

    /**
     *  Child bounties that have been added.
     */
    get asV1001002(): ChildBountiesChildBountiesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Child bounties that have been added.
 */
export interface ChildBountiesChildBountiesStorageV1001002 {
    get(key1: number, key2: number): Promise<(v1001002.ChildBounty | undefined)>
    getAll(): Promise<v1001002.ChildBounty[]>
    getMany(keys: [number, number][]): Promise<(v1001002.ChildBounty | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v1001002.ChildBounty][]>
    getPairs(key1: number): Promise<[k: [number, number], v: v1001002.ChildBounty][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: v1001002.ChildBounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v1001002.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: v1001002.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: v1001002.ChildBounty][]>
}

export class ChildBountiesChildBountyCountStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildBountyCount'
    }

    /**
     *  Number of total child bounties.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of total child bounties.
     */
    get asV1001002(): ChildBountiesChildBountyCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Number of total child bounties.
 */
export interface ChildBountiesChildBountyCountStorageV1001002 {
    get(): Promise<number>
}

export class ChildBountiesChildBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildBountyDescriptions'
    }

    /**
     *  The description of each child-bounty.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each child-bounty.
     */
    get asV1001002(): ChildBountiesChildBountyDescriptionsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The description of each child-bounty.
 */
export interface ChildBountiesChildBountyDescriptionsStorageV1001002 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ChildBountiesChildrenCuratorFeesStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildrenCuratorFees'
    }

    /**
     *  The cumulative child-bounty curator fee for each parent bounty.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The cumulative child-bounty curator fee for each parent bounty.
     */
    get asV1001002(): ChildBountiesChildrenCuratorFeesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The cumulative child-bounty curator fee for each parent bounty.
 */
export interface ChildBountiesChildrenCuratorFeesStorageV1001002 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class ChildBountiesParentChildBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ParentChildBounties'
    }

    /**
     *  Number of child bounties per parent bounty.
     *  Map of parent bounty index to number of child bounties.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
    }

    /**
     *  Number of child bounties per parent bounty.
     *  Map of parent bounty index to number of child bounties.
     */
    get asV1001002(): ChildBountiesParentChildBountiesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Number of child bounties per parent bounty.
 *  Map of parent bounty index to number of child bounties.
 */
export interface ChildBountiesParentChildBountiesStorageV1001002 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class ClaimsClaimsStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Claims'
    }

    get isV1001002(): boolean {
        return this.getTypeHash() === 'a4e45b744228821d2d599c2e7bd1993b9bd523df83f8ee660f73e52be555e75c'
    }

    get asV1001002(): ClaimsClaimsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

export interface ClaimsClaimsStorageV1001002 {
    get(key: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class ClaimsPreclaimsStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Preclaims'
    }

    /**
     *  Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'aedc9d9adf78c2e711b858d1696263a8b674eb7b149cc3ba7ab036d78ef5720d'
    }

    /**
     *  Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
     */
    get asV1001002(): ClaimsPreclaimsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
 */
export interface ClaimsPreclaimsStorageV1001002 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class ClaimsSigningStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Signing'
    }

    /**
     *  The statement kind that must be signed, if any.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '6f2974b0bc6719581bb9f20af8ac8795a47255266687127e2ee37f8df92bfb51'
    }

    /**
     *  The statement kind that must be signed, if any.
     */
    get asV1001002(): ClaimsSigningStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The statement kind that must be signed, if any.
 */
export interface ClaimsSigningStorageV1001002 {
    get(key: Uint8Array): Promise<(v1001002.StatementKind | undefined)>
    getAll(): Promise<v1001002.StatementKind[]>
    getMany(keys: Uint8Array[]): Promise<(v1001002.StatementKind | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.StatementKind][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.StatementKind][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.StatementKind][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.StatementKind][]>
}

export class ClaimsTotalStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Total'
    }

    get isV1001002(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV1001002(): ClaimsTotalStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

export interface ClaimsTotalStorageV1001002 {
    get(): Promise<bigint>
}

export class ClaimsVestingStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Vesting'
    }

    /**
     *  Vesting schedule for a claim.
     *  First balance is the total amount that should be held for vesting.
     *  Second balance is how much should be unlocked per block.
     *  The block number is when the vesting should start.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'fb6e9345088f9784f1d027b11eaa907f04187e59dea733acc7ff1be7dd341d6f'
    }

    /**
     *  Vesting schedule for a claim.
     *  First balance is the total amount that should be held for vesting.
     *  Second balance is how much should be unlocked per block.
     *  The block number is when the vesting should start.
     */
    get asV1001002(): ClaimsVestingStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Vesting schedule for a claim.
 *  First balance is the total amount that should be held for vesting.
 *  Second balance is how much should be unlocked per block.
 *  The block number is when the vesting should start.
 */
export interface ClaimsVestingStorageV1001002 {
    get(key: Uint8Array): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, bigint, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, bigint, number]][]>
}

export class ConfigurationActiveConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'Configuration'
    }

    protected getName() {
        return 'ActiveConfig'
    }

    /**
     *  The active configuration for the current session.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '15b3eec6de925e6c14479e5026d35c23778f90834473967c03ce3692a9c79069'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV1001002(): ConfigurationActiveConfigStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '8433c8f9a834f4b4e5b307434ad7e5cb110f0dd2bb3e8fc91626744d31f9575d'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV1002000(): ConfigurationActiveConfigStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }

    /**
     *  The active configuration for the current session.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === '034e237d418d67fc7ceeeb491c7a6b1fadf0426acb0cfd1e6b869021d04645be'
    }

    /**
     *  The active configuration for the current session.
     */
    get asV1003000(): ConfigurationActiveConfigStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV1001002 {
    get(): Promise<v1001002.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV1002000 {
    get(): Promise<v1002000.HostConfiguration>
}

/**
 *  The active configuration for the current session.
 */
export interface ConfigurationActiveConfigStorageV1003000 {
    get(): Promise<v1003000.HostConfiguration>
}

export class ConfigurationBypassConsistencyCheckStorage extends StorageBase {
    protected getPrefix() {
        return 'Configuration'
    }

    protected getName() {
        return 'BypassConsistencyCheck'
    }

    /**
     *  If this is set, then the configuration setters will bypass the consistency checks. This
     *  is meant to be used only as the last resort.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  If this is set, then the configuration setters will bypass the consistency checks. This
     *  is meant to be used only as the last resort.
     */
    get asV1001002(): ConfigurationBypassConsistencyCheckStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  If this is set, then the configuration setters will bypass the consistency checks. This
 *  is meant to be used only as the last resort.
 */
export interface ConfigurationBypassConsistencyCheckStorageV1001002 {
    get(): Promise<boolean>
}

export class ConfigurationPendingConfigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Configuration'
    }

    protected getName() {
        return 'PendingConfigs'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8e90b416d9139bbc7f6f7f955e01d28a9cbb29ed220b01a8b7211794f1620ee5'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV1001002(): ConfigurationPendingConfigsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'a0eab67221b4547301634312b7dbb8829a6e72b6fd5ba31c85b2d65dab5067bf'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV1002000(): ConfigurationPendingConfigsStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === '496ce0324e442a1e7a480d94130849cc93d54f069ae79a67d5e467a14cdaef04'
    }

    /**
     *  Pending configuration changes.
     * 
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     * 
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    get asV1003000(): ConfigurationPendingConfigsStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV1001002 {
    get(): Promise<[number, v1001002.HostConfiguration][]>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV1002000 {
    get(): Promise<[number, v1002000.HostConfiguration][]>
}

/**
 *  Pending configuration changes.
 * 
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 * 
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface ConfigurationPendingConfigsStorageV1003000 {
    get(): Promise<[number, v1003000.HostConfiguration][]>
}

export class ConvictionVotingClassLocksForStorage extends StorageBase {
    protected getPrefix() {
        return 'ConvictionVoting'
    }

    protected getName() {
        return 'ClassLocksFor'
    }

    /**
     *  The voting classes which have a non-zero lock requirement and the lock amounts which they
     *  require. The actual amount locked on behalf of this pallet should always be the maximum of
     *  this list.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '82641f40f081979db4386ae71b3895881f193f9a8e6fe1a5537661ac52af877c'
    }

    /**
     *  The voting classes which have a non-zero lock requirement and the lock amounts which they
     *  require. The actual amount locked on behalf of this pallet should always be the maximum of
     *  this list.
     */
    get asV1001002(): ConvictionVotingClassLocksForStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The voting classes which have a non-zero lock requirement and the lock amounts which they
 *  require. The actual amount locked on behalf of this pallet should always be the maximum of
 *  this list.
 */
export interface ConvictionVotingClassLocksForStorageV1001002 {
    get(key: Uint8Array): Promise<[number, bigint][]>
    getAll(): Promise<[number, bigint][][]>
    getMany(keys: Uint8Array[]): Promise<[number, bigint][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, bigint][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, bigint][]][]>
}

export class ConvictionVotingVotingForStorage extends StorageBase {
    protected getPrefix() {
        return 'ConvictionVoting'
    }

    protected getName() {
        return 'VotingFor'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'df291b3d7624eee0e92994a913b5e2134fd7795d7b03d5af2a82d38f2d2e4fd7'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV1001002(): ConvictionVotingVotingForStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV1001002 {
    get(key1: Uint8Array, key2: number): Promise<v1001002.Voting>
    getAll(): Promise<v1001002.Voting[]>
    getMany(keys: [Uint8Array, number][]): Promise<v1001002.Voting[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v1001002.Voting][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v1001002.Voting][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v1001002.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v1001002.Voting][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v1001002.Voting][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v1001002.Voting][]>
}

export class CoretimeAssignmentProviderCoreDescriptorsStorage extends StorageBase {
    protected getPrefix() {
        return 'CoretimeAssignmentProvider'
    }

    protected getName() {
        return 'CoreDescriptors'
    }

    /**
     *  Assignments which are currently active.
     * 
     *  They will be picked from `PendingAssignments` once we reach the scheduled block number in
     *  `PendingAssignments`.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === '784255ce897f29d1247d3dbfca78d62ec4b3f90674dc471f1a7d924924057ce3'
    }

    /**
     *  Assignments which are currently active.
     * 
     *  They will be picked from `PendingAssignments` once we reach the scheduled block number in
     *  `PendingAssignments`.
     */
    get asV1003000(): CoretimeAssignmentProviderCoreDescriptorsStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  Assignments which are currently active.
 * 
 *  They will be picked from `PendingAssignments` once we reach the scheduled block number in
 *  `PendingAssignments`.
 */
export interface CoretimeAssignmentProviderCoreDescriptorsStorageV1003000 {
    get(key: number): Promise<v1003000.CoreDescriptor>
    getAll(): Promise<v1003000.CoreDescriptor[]>
    getMany(keys: number[]): Promise<v1003000.CoreDescriptor[]>
}

export class CoretimeAssignmentProviderCoreSchedulesStorage extends StorageBase {
    protected getPrefix() {
        return 'CoretimeAssignmentProvider'
    }

    protected getName() {
        return 'CoreSchedules'
    }

    /**
     *  Scheduled assignment sets.
     * 
     *  Assignments as of the given block number. They will go into state once the block number is
     *  reached (and replace whatever was in there before).
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === '8a2b2385fd3dce82622eb08cde53b3b3fe267db9d0a533f86b579e722af4d486'
    }

    /**
     *  Scheduled assignment sets.
     * 
     *  Assignments as of the given block number. They will go into state once the block number is
     *  reached (and replace whatever was in there before).
     */
    get asV1003000(): CoretimeAssignmentProviderCoreSchedulesStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  Scheduled assignment sets.
 * 
 *  Assignments as of the given block number. They will go into state once the block number is
 *  reached (and replace whatever was in there before).
 */
export interface CoretimeAssignmentProviderCoreSchedulesStorageV1003000 {
    get(key: [number, number]): Promise<(v1003000.Schedule | undefined)>
    getAll(): Promise<v1003000.Schedule[]>
    getMany(keys: [number, number][]): Promise<(v1003000.Schedule | undefined)[]>
}

export class CrowdloanEndingsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'EndingsCount'
    }

    /**
     *  The number of auctions that have entered into their ending period so far.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of auctions that have entered into their ending period so far.
     */
    get asV1001002(): CrowdloanEndingsCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The number of auctions that have entered into their ending period so far.
 */
export interface CrowdloanEndingsCountStorageV1001002 {
    get(): Promise<number>
}

export class CrowdloanFundsStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'Funds'
    }

    /**
     *  Info on all of the funds.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'e837aa8c7af80bff126d455e0237189b2b62b5bf6586a1f2e67a22edfaf5a596'
    }

    /**
     *  Info on all of the funds.
     */
    get asV1001002(): CrowdloanFundsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Info on all of the funds.
 */
export interface CrowdloanFundsStorageV1001002 {
    get(key: number): Promise<(v1001002.FundInfo | undefined)>
    getAll(): Promise<v1001002.FundInfo[]>
    getMany(keys: number[]): Promise<(v1001002.FundInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.FundInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.FundInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.FundInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.FundInfo][]>
}

export class CrowdloanNewRaiseStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'NewRaise'
    }

    /**
     *  The funds that have had additional contributions during the last block. This is used
     *  in order to determine which funds should submit new or updated bids.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  The funds that have had additional contributions during the last block. This is used
     *  in order to determine which funds should submit new or updated bids.
     */
    get asV1001002(): CrowdloanNewRaiseStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The funds that have had additional contributions during the last block. This is used
 *  in order to determine which funds should submit new or updated bids.
 */
export interface CrowdloanNewRaiseStorageV1001002 {
    get(): Promise<number[]>
}

export class CrowdloanNextFundIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Crowdloan'
    }

    protected getName() {
        return 'NextFundIndex'
    }

    /**
     *  Tracker for the next available fund index
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Tracker for the next available fund index
     */
    get asV1001002(): CrowdloanNextFundIndexStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Tracker for the next available fund index
 */
export interface CrowdloanNextFundIndexStorageV1001002 {
    get(): Promise<number>
}

export class DmpDeliveryFeeFactorStorage extends StorageBase {
    protected getPrefix() {
        return 'Dmp'
    }

    protected getName() {
        return 'DeliveryFeeFactor'
    }

    /**
     *  The factor to multiply the base delivery fee by.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The factor to multiply the base delivery fee by.
     */
    get asV1001002(): DmpDeliveryFeeFactorStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The factor to multiply the base delivery fee by.
 */
export interface DmpDeliveryFeeFactorStorageV1001002 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class DmpDownwardMessageQueueHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'Dmp'
    }

    protected getName() {
        return 'DownwardMessageQueueHeads'
    }

    /**
     *  A mapping that stores the downward message queue MQC head for each para.
     * 
     *  Each link in this chain has a form:
     *  `(prev_head, B, H(M))`, where
     *  - `prev_head`: is the previous head hash or zero if none.
     *  - `B`: is the relay-chain block number in which a message was appended.
     *  - `H(M)`: is the hash of the message being appended.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  A mapping that stores the downward message queue MQC head for each para.
     * 
     *  Each link in this chain has a form:
     *  `(prev_head, B, H(M))`, where
     *  - `prev_head`: is the previous head hash or zero if none.
     *  - `B`: is the relay-chain block number in which a message was appended.
     *  - `H(M)`: is the hash of the message being appended.
     */
    get asV1001002(): DmpDownwardMessageQueueHeadsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  A mapping that stores the downward message queue MQC head for each para.
 * 
 *  Each link in this chain has a form:
 *  `(prev_head, B, H(M))`, where
 *  - `prev_head`: is the previous head hash or zero if none.
 *  - `B`: is the relay-chain block number in which a message was appended.
 *  - `H(M)`: is the hash of the message being appended.
 */
export interface DmpDownwardMessageQueueHeadsStorageV1001002 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class DmpDownwardMessageQueuesStorage extends StorageBase {
    protected getPrefix() {
        return 'Dmp'
    }

    protected getName() {
        return 'DownwardMessageQueues'
    }

    /**
     *  The downward messages addressed for a certain para.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'e425c5091a0f36e0ae5ace2a5590775033870437355c96c2667307bf868e3248'
    }

    /**
     *  The downward messages addressed for a certain para.
     */
    get asV1001002(): DmpDownwardMessageQueuesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The downward messages addressed for a certain para.
 */
export interface DmpDownwardMessageQueuesStorageV1001002 {
    get(key: number): Promise<v1001002.InboundDownwardMessage[]>
    getAll(): Promise<v1001002.InboundDownwardMessage[][]>
    getMany(keys: number[]): Promise<v1001002.InboundDownwardMessage[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.InboundDownwardMessage[]][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.InboundDownwardMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.InboundDownwardMessage[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.InboundDownwardMessage[]][]>
}

export class ElectionProviderMultiPhaseCurrentPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'CurrentPhase'
    }

    /**
     *  Current phase.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd43c46e1fdaabf223f7ddc55f3636b227c163ebca9bccdb6f6aca606816cba64'
    }

    /**
     *  Current phase.
     */
    get asV1001002(): ElectionProviderMultiPhaseCurrentPhaseStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Current phase.
 */
export interface ElectionProviderMultiPhaseCurrentPhaseStorageV1001002 {
    get(): Promise<v1001002.Phase>
}

export class ElectionProviderMultiPhaseDesiredTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'DesiredTargets'
    }

    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Desired number of targets to elect for this round.
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get asV1001002(): ElectionProviderMultiPhaseDesiredTargetsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Desired number of targets to elect for this round.
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface ElectionProviderMultiPhaseDesiredTargetsStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class ElectionProviderMultiPhaseMinimumUntrustedScoreStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'MinimumUntrustedScore'
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '54808e3ff7550c21d1fb18cb6c67f1e6942e127345058749baa91d8c1651bd60'
    }

    /**
     *  The minimum score that each 'untrusted' solution must attain in order to be considered
     *  feasible.
     * 
     *  Can be set via `set_minimum_untrusted_score`.
     */
    get asV1001002(): ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The minimum score that each 'untrusted' solution must attain in order to be considered
 *  feasible.
 * 
 *  Can be set via `set_minimum_untrusted_score`.
 */
export interface ElectionProviderMultiPhaseMinimumUntrustedScoreStorageV1001002 {
    get(): Promise<(v1001002.ElectionScore | undefined)>
}

export class ElectionProviderMultiPhaseQueuedSolutionStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'QueuedSolution'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     * 
     *  Always sorted by score.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'cf8250c7935545f78c3fca062506caaa5d94dab6e6950381bca2b336b9f8876e'
    }

    /**
     *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
     * 
     *  Always sorted by score.
     */
    get asV1001002(): ElectionProviderMultiPhaseQueuedSolutionStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Current best solution, signed or unsigned, queued to be returned upon `elect`.
 * 
 *  Always sorted by score.
 */
export interface ElectionProviderMultiPhaseQueuedSolutionStorageV1001002 {
    get(): Promise<(v1001002.ReadySolution | undefined)>
}

export class ElectionProviderMultiPhaseRoundStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'Round'
    }

    /**
     *  Internal counter for the number of rounds.
     * 
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     * 
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Internal counter for the number of rounds.
     * 
     *  This is useful for de-duplication of transactions submitted to the pool, and general
     *  diagnostics of the pallet.
     * 
     *  This is merely incremented once per every time that an upstream `elect` is called.
     */
    get asV1001002(): ElectionProviderMultiPhaseRoundStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Internal counter for the number of rounds.
 * 
 *  This is useful for de-duplication of transactions submitted to the pool, and general
 *  diagnostics of the pallet.
 * 
 *  This is merely incremented once per every time that an upstream `elect` is called.
 */
export interface ElectionProviderMultiPhaseRoundStorageV1001002 {
    get(): Promise<number>
}

export class ElectionProviderMultiPhaseSignedSubmissionIndicesStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionIndices'
    }

    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'aecbdca3369396b8f7ae7da45a210e0b48c62258a15e0f7c1a7cb29c941f666c'
    }

    /**
     *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
     *  value in `SignedSubmissions`.
     * 
     *  We never need to process more than a single signed submission at a time. Signed submissions
     *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
     *  them one at a time instead of reading and decoding all of them at once.
     */
    get asV1001002(): ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
 *  value in `SignedSubmissions`.
 * 
 *  We never need to process more than a single signed submission at a time. Signed submissions
 *  can be quite large, so we're willing to pay the cost of multiple database accesses to access
 *  them one at a time instead of reading and decoding all of them at once.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionIndicesStorageV1001002 {
    get(): Promise<[v1001002.ElectionScore, number, number][]>
}

export class ElectionProviderMultiPhaseSignedSubmissionNextIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionNextIndex'
    }

    /**
     *  The next index to be assigned to an incoming signed submission.
     * 
     *  Every accepted submission is assigned a unique index; that index is bound to that particular
     *  submission for the duration of the election. On election finalization, the next index is
     *  reset to 0.
     * 
     *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
     *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
     *  because iteration is slow. Instead, we store the value here.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next index to be assigned to an incoming signed submission.
     * 
     *  Every accepted submission is assigned a unique index; that index is bound to that particular
     *  submission for the duration of the election. On election finalization, the next index is
     *  reset to 0.
     * 
     *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
     *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
     *  because iteration is slow. Instead, we store the value here.
     */
    get asV1001002(): ElectionProviderMultiPhaseSignedSubmissionNextIndexStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The next index to be assigned to an incoming signed submission.
 * 
 *  Every accepted submission is assigned a unique index; that index is bound to that particular
 *  submission for the duration of the election. On election finalization, the next index is
 *  reset to 0.
 * 
 *  We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
 *  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
 *  because iteration is slow. Instead, we store the value here.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionNextIndexStorageV1001002 {
    get(): Promise<number>
}

export class ElectionProviderMultiPhaseSignedSubmissionsMapStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SignedSubmissionsMap'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '0bdd7939a257877febf5ab7215f0cc9cfa33db8610c6c8a3d48cb0f3cb8c7219'
    }

    /**
     *  Unchecked, signed solutions.
     * 
     *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
     *  allowing us to keep only a single one in memory at a time.
     * 
     *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
     *  affect; we shouldn't need a cryptographically secure hasher.
     */
    get asV1001002(): ElectionProviderMultiPhaseSignedSubmissionsMapStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Unchecked, signed solutions.
 * 
 *  Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
 *  allowing us to keep only a single one in memory at a time.
 * 
 *  Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
 *  affect; we shouldn't need a cryptographically secure hasher.
 */
export interface ElectionProviderMultiPhaseSignedSubmissionsMapStorageV1001002 {
    get(key: number): Promise<(v1001002.SignedSubmission | undefined)>
    getAll(): Promise<v1001002.SignedSubmission[]>
    getMany(keys: number[]): Promise<(v1001002.SignedSubmission | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.SignedSubmission][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.SignedSubmission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.SignedSubmission][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.SignedSubmission][]>
}

export class ElectionProviderMultiPhaseSnapshotStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'Snapshot'
    }

    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '0a57d7483519dd2d24b03dc8b9cb8e5dd9fde6a07e5c2d586f430184184c3b75'
    }

    /**
     *  Snapshot data of the round.
     * 
     *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
     */
    get asV1001002(): ElectionProviderMultiPhaseSnapshotStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Snapshot data of the round.
 * 
 *  This is created at the beginning of the signed phase and cleared upon calling `elect`.
 */
export interface ElectionProviderMultiPhaseSnapshotStorageV1001002 {
    get(): Promise<(v1001002.RoundSnapshot | undefined)>
}

export class ElectionProviderMultiPhaseSnapshotMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'ElectionProviderMultiPhase'
    }

    protected getName() {
        return 'SnapshotMetadata'
    }

    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '4bc67c3d694c467e93d2d551db48f7b2d0497a44b4acaecfdc842a49ce699da7'
    }

    /**
     *  The metadata of the [`RoundSnapshot`]
     * 
     *  Only exists when [`Snapshot`] is present.
     */
    get asV1001002(): ElectionProviderMultiPhaseSnapshotMetadataStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The metadata of the [`RoundSnapshot`]
 * 
 *  Only exists when [`Snapshot`] is present.
 */
export interface ElectionProviderMultiPhaseSnapshotMetadataStorageV1001002 {
    get(): Promise<(v1001002.SolutionOrSnapshotSize | undefined)>
}

export class FastUnstakeCounterForQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'FastUnstake'
    }

    protected getName() {
        return 'CounterForQueue'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV1001002(): FastUnstakeCounterForQueueStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface FastUnstakeCounterForQueueStorageV1001002 {
    get(): Promise<number>
}

export class FastUnstakeErasToCheckPerBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'FastUnstake'
    }

    protected getName() {
        return 'ErasToCheckPerBlock'
    }

    /**
     *  Number of eras to check per block.
     * 
     *  If set to 0, this pallet does absolutely nothing. Cannot be set to more than
     *  [`Config::MaxErasToCheckPerBlock`].
     * 
     *  Based on the amount of weight available at [`Pallet::on_idle`], up to this many eras are
     *  checked. The checking is represented by updating [`UnstakeRequest::checked`], which is
     *  stored in [`Head`].
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of eras to check per block.
     * 
     *  If set to 0, this pallet does absolutely nothing. Cannot be set to more than
     *  [`Config::MaxErasToCheckPerBlock`].
     * 
     *  Based on the amount of weight available at [`Pallet::on_idle`], up to this many eras are
     *  checked. The checking is represented by updating [`UnstakeRequest::checked`], which is
     *  stored in [`Head`].
     */
    get asV1001002(): FastUnstakeErasToCheckPerBlockStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Number of eras to check per block.
 * 
 *  If set to 0, this pallet does absolutely nothing. Cannot be set to more than
 *  [`Config::MaxErasToCheckPerBlock`].
 * 
 *  Based on the amount of weight available at [`Pallet::on_idle`], up to this many eras are
 *  checked. The checking is represented by updating [`UnstakeRequest::checked`], which is
 *  stored in [`Head`].
 */
export interface FastUnstakeErasToCheckPerBlockStorageV1001002 {
    get(): Promise<number>
}

export class FastUnstakeHeadStorage extends StorageBase {
    protected getPrefix() {
        return 'FastUnstake'
    }

    protected getName() {
        return 'Head'
    }

    /**
     *  The current "head of the queue" being unstaked.
     * 
     *  The head in itself can be a batch of up to [`Config::BatchSize`] stakers.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '53adfbb7f77e458b9628e98623c2b4f4eb2804878ca690d531d2e10861e2f759'
    }

    /**
     *  The current "head of the queue" being unstaked.
     * 
     *  The head in itself can be a batch of up to [`Config::BatchSize`] stakers.
     */
    get asV1001002(): FastUnstakeHeadStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The current "head of the queue" being unstaked.
 * 
 *  The head in itself can be a batch of up to [`Config::BatchSize`] stakers.
 */
export interface FastUnstakeHeadStorageV1001002 {
    get(): Promise<(v1001002.UnstakeRequest | undefined)>
}

export class FastUnstakeQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'FastUnstake'
    }

    protected getName() {
        return 'Queue'
    }

    /**
     *  The map of all accounts wishing to be unstaked.
     * 
     *  Keeps track of `AccountId` wishing to unstake and it's corresponding deposit.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '009da6de235ea9f0b5ac0b37d404d4fe998946da2f8f3e9c0899035c6d182a52'
    }

    /**
     *  The map of all accounts wishing to be unstaked.
     * 
     *  Keeps track of `AccountId` wishing to unstake and it's corresponding deposit.
     */
    get asV1001002(): FastUnstakeQueueStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The map of all accounts wishing to be unstaked.
 * 
 *  Keeps track of `AccountId` wishing to unstake and it's corresponding deposit.
 */
export interface FastUnstakeQueueStorageV1001002 {
    get(key: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class GrandpaAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  The current list of authorities.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '686332bf745d297ec7d530d6cce5c17119931f5d3c45fd9a96fcad278a9bccb7'
    }

    /**
     *  The current list of authorities.
     */
    get asV1002000(): GrandpaAuthoritiesStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  The current list of authorities.
 */
export interface GrandpaAuthoritiesStorageV1002000 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class GrandpaCurrentSetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'CurrentSetId'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get asV1001002(): GrandpaCurrentSetIdStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface GrandpaCurrentSetIdStorageV1001002 {
    get(): Promise<bigint>
}

export class GrandpaNextForcedStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'NextForced'
    }

    /**
     *  next block number where we can force a change.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  next block number where we can force a change.
     */
    get asV1001002(): GrandpaNextForcedStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  next block number where we can force a change.
 */
export interface GrandpaNextForcedStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class GrandpaPendingChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'PendingChange'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd8fc2937fb26b147a79b5d1c609ef3bb0386ef95a7bac7b1d42b218773058c3b'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get asV1001002(): GrandpaPendingChangeStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface GrandpaPendingChangeStorageV1001002 {
    get(): Promise<(v1001002.StoredPendingChange | undefined)>
}

export class GrandpaSetIdSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'SetIdSession'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get asV1001002(): GrandpaSetIdSessionStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  This is only used for validating equivocation proofs. An equivocation proof must
 *  contains a key-ownership proof for a given session, therefore we need a way to tie
 *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
 *  was the owner of a given key on a given session, and what the active set ID was
 *  during that session.
 * 
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface GrandpaSetIdSessionStorageV1001002 {
    get(key: bigint): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: number][]>
    getPairs(key: bigint): Promise<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: number][]>
}

export class GrandpaStalledStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'Stalled'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get asV1001002(): GrandpaStalledStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  `true` if we are currently stalled.
 */
export interface GrandpaStalledStorageV1001002 {
    get(): Promise<([number, number] | undefined)>
}

export class GrandpaStateStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'State'
    }

    /**
     *  State of the current authority set.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '7e7a7e0912740b55ac7227f3f2a3612d23a3fefb1cd7f6da52f12f322350a0ce'
    }

    /**
     *  State of the current authority set.
     */
    get asV1001002(): GrandpaStateStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  State of the current authority set.
 */
export interface GrandpaStateStorageV1001002 {
    get(): Promise<v1001002.StoredState>
}

export class HistoricalHistoricalSessionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Historical'
    }

    protected getName() {
        return 'HistoricalSessions'
    }

    /**
     *  Mapping from historical session indices to session-data root hash and validator count.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'afe4969e66062d457c91b0a05017143dec18b2df2255af7a75529647963464d0'
    }

    /**
     *  Mapping from historical session indices to session-data root hash and validator count.
     */
    get asV1002000(): HistoricalHistoricalSessionsStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Mapping from historical session indices to session-data root hash and validator count.
 */
export interface HistoricalHistoricalSessionsStorageV1002000 {
    get(key: number): Promise<([Uint8Array, number] | undefined)>
    getAll(): Promise<[Uint8Array, number][]>
    getMany(keys: number[]): Promise<([Uint8Array, number] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array, number]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array, number]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array, number]][]>
}

export class HistoricalStoredRangeStorage extends StorageBase {
    protected getPrefix() {
        return 'Historical'
    }

    protected getName() {
        return 'StoredRange'
    }

    /**
     *  The range of historical sessions we store. [first, last)
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  The range of historical sessions we store. [first, last)
     */
    get asV1002000(): HistoricalStoredRangeStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  The range of historical sessions we store. [first, last)
 */
export interface HistoricalStoredRangeStorageV1002000 {
    get(): Promise<([number, number] | undefined)>
}

export class HrmpHrmpAcceptedChannelRequestCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpAcceptedChannelRequestCount'
    }

    /**
     *  This mapping tracks how many open channel requests were accepted by a given recipient para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
     *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
    }

    /**
     *  This mapping tracks how many open channel requests were accepted by a given recipient para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
     *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
     */
    get asV1001002(): HrmpHrmpAcceptedChannelRequestCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  This mapping tracks how many open channel requests were accepted by a given recipient para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
 *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
 */
export interface HrmpHrmpAcceptedChannelRequestCountStorageV1001002 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class HrmpHrmpChannelContentsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpChannelContents'
    }

    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '6cd143ae2730de334efd938bdf6af5805612dab0823423596dcf6bbbeddccfb3'
    }

    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    get asV1001002(): HrmpHrmpChannelContentsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Storage for the messages for each channel.
 *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
 */
export interface HrmpHrmpChannelContentsStorageV1001002 {
    get(key: v1001002.HrmpChannelId): Promise<v1001002.InboundHrmpMessage[]>
    getAll(): Promise<v1001002.InboundHrmpMessage[][]>
    getMany(keys: v1001002.HrmpChannelId[]): Promise<v1001002.InboundHrmpMessage[][]>
    getKeys(): Promise<v1001002.HrmpChannelId[]>
    getKeys(key: v1001002.HrmpChannelId): Promise<v1001002.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1001002.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v1001002.HrmpChannelId): AsyncIterable<v1001002.HrmpChannelId[]>
    getPairs(): Promise<[k: v1001002.HrmpChannelId, v: v1001002.InboundHrmpMessage[]][]>
    getPairs(key: v1001002.HrmpChannelId): Promise<[k: v1001002.HrmpChannelId, v: v1001002.InboundHrmpMessage[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1001002.HrmpChannelId, v: v1001002.InboundHrmpMessage[]][]>
    getPairsPaged(pageSize: number, key: v1001002.HrmpChannelId): AsyncIterable<[k: v1001002.HrmpChannelId, v: v1001002.InboundHrmpMessage[]][]>
}

export class HrmpHrmpChannelDigestsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpChannelDigests'
    }

    /**
     *  Maintains a mapping that can be used to answer the question: What paras sent a message at
     *  the given block number for a given receiver. Invariants:
     *  - The inner `Vec<ParaId>` is never empty.
     *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
     *  - The outer vector is sorted ascending by block number and cannot store two items with the
     *    same block number.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8b00bb4a27873ea090234c4f7aeea8dbf9ae2628a4945d4910f497ed81c5e21f'
    }

    /**
     *  Maintains a mapping that can be used to answer the question: What paras sent a message at
     *  the given block number for a given receiver. Invariants:
     *  - The inner `Vec<ParaId>` is never empty.
     *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
     *  - The outer vector is sorted ascending by block number and cannot store two items with the
     *    same block number.
     */
    get asV1001002(): HrmpHrmpChannelDigestsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Maintains a mapping that can be used to answer the question: What paras sent a message at
 *  the given block number for a given receiver. Invariants:
 *  - The inner `Vec<ParaId>` is never empty.
 *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
 *  - The outer vector is sorted ascending by block number and cannot store two items with the
 *    same block number.
 */
export interface HrmpHrmpChannelDigestsStorageV1001002 {
    get(key: number): Promise<[number, number[]][]>
    getAll(): Promise<[number, number[]][][]>
    getMany(keys: number[]): Promise<[number, number[]][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, number[]][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, number[]][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, number[]][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, number[]][]][]>
}

export class HrmpHrmpChannelsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpChannels'
    }

    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd5f877f4add6df244ed0d4f20e980d9cbb8f6ecb91c8f56abca84b72441b6447'
    }

    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    get asV1001002(): HrmpHrmpChannelsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  HRMP channel data associated with each para.
 *  Invariant:
 *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
 */
export interface HrmpHrmpChannelsStorageV1001002 {
    get(key: v1001002.HrmpChannelId): Promise<(v1001002.HrmpChannel | undefined)>
    getAll(): Promise<v1001002.HrmpChannel[]>
    getMany(keys: v1001002.HrmpChannelId[]): Promise<(v1001002.HrmpChannel | undefined)[]>
    getKeys(): Promise<v1001002.HrmpChannelId[]>
    getKeys(key: v1001002.HrmpChannelId): Promise<v1001002.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1001002.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v1001002.HrmpChannelId): AsyncIterable<v1001002.HrmpChannelId[]>
    getPairs(): Promise<[k: v1001002.HrmpChannelId, v: v1001002.HrmpChannel][]>
    getPairs(key: v1001002.HrmpChannelId): Promise<[k: v1001002.HrmpChannelId, v: v1001002.HrmpChannel][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1001002.HrmpChannelId, v: v1001002.HrmpChannel][]>
    getPairsPaged(pageSize: number, key: v1001002.HrmpChannelId): AsyncIterable<[k: v1001002.HrmpChannelId, v: v1001002.HrmpChannel][]>
}

export class HrmpHrmpCloseChannelRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpCloseChannelRequests'
    }

    /**
     *  A set of pending HRMP close channel requests that are going to be closed during the session
     *  change. Used for checking if a given channel is registered for closure.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '7755b93c00c932e936c6bfaff914a35cc38f873e39a57ea414c8be676db098d8'
    }

    /**
     *  A set of pending HRMP close channel requests that are going to be closed during the session
     *  change. Used for checking if a given channel is registered for closure.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get asV1001002(): HrmpHrmpCloseChannelRequestsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  A set of pending HRMP close channel requests that are going to be closed during the session
 *  change. Used for checking if a given channel is registered for closure.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpHrmpCloseChannelRequestsStorageV1001002 {
    get(key: v1001002.HrmpChannelId): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: v1001002.HrmpChannelId[]): Promise<(null | undefined)[]>
    getKeys(): Promise<v1001002.HrmpChannelId[]>
    getKeys(key: v1001002.HrmpChannelId): Promise<v1001002.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1001002.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v1001002.HrmpChannelId): AsyncIterable<v1001002.HrmpChannelId[]>
    getPairs(): Promise<[k: v1001002.HrmpChannelId, v: null][]>
    getPairs(key: v1001002.HrmpChannelId): Promise<[k: v1001002.HrmpChannelId, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1001002.HrmpChannelId, v: null][]>
    getPairsPaged(pageSize: number, key: v1001002.HrmpChannelId): AsyncIterable<[k: v1001002.HrmpChannelId, v: null][]>
}

export class HrmpHrmpCloseChannelRequestsListStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpCloseChannelRequestsList'
    }

    get isV1001002(): boolean {
        return this.getTypeHash() === '9025c13f17e5df7d9188b5eb2c97a89f4ef8e04b9492613cba216a0d8d672b8f'
    }

    get asV1001002(): HrmpHrmpCloseChannelRequestsListStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

export interface HrmpHrmpCloseChannelRequestsListStorageV1001002 {
    get(): Promise<v1001002.HrmpChannelId[]>
}

export class HrmpHrmpEgressChannelsIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpEgressChannelsIndex'
    }

    get isV1001002(): boolean {
        return this.getTypeHash() === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
    }

    get asV1001002(): HrmpHrmpEgressChannelsIndexStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

export interface HrmpHrmpEgressChannelsIndexStorageV1001002 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class HrmpHrmpIngressChannelsIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpIngressChannelsIndex'
    }

    /**
     *  Ingress/egress indexes allow to find all the senders and receivers given the opposite side.
     *  I.e.
     * 
     *  (a) ingress index allows to find all the senders for a given recipient.
     *  (b) egress index allows to find all the recipients for a given sender.
     * 
     *  Invariants:
     *  - for each ingress index entry for `P` each item `I` in the index should present in
     *    `HrmpChannels` as `(I, P)`.
     *  - for each egress index entry for `P` each item `E` in the index should present in
     *    `HrmpChannels` as `(P, E)`.
     *  - there should be no other dangling channels in `HrmpChannels`.
     *  - the vectors are sorted.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
    }

    /**
     *  Ingress/egress indexes allow to find all the senders and receivers given the opposite side.
     *  I.e.
     * 
     *  (a) ingress index allows to find all the senders for a given recipient.
     *  (b) egress index allows to find all the recipients for a given sender.
     * 
     *  Invariants:
     *  - for each ingress index entry for `P` each item `I` in the index should present in
     *    `HrmpChannels` as `(I, P)`.
     *  - for each egress index entry for `P` each item `E` in the index should present in
     *    `HrmpChannels` as `(P, E)`.
     *  - there should be no other dangling channels in `HrmpChannels`.
     *  - the vectors are sorted.
     */
    get asV1001002(): HrmpHrmpIngressChannelsIndexStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Ingress/egress indexes allow to find all the senders and receivers given the opposite side.
 *  I.e.
 * 
 *  (a) ingress index allows to find all the senders for a given recipient.
 *  (b) egress index allows to find all the recipients for a given sender.
 * 
 *  Invariants:
 *  - for each ingress index entry for `P` each item `I` in the index should present in
 *    `HrmpChannels` as `(I, P)`.
 *  - for each egress index entry for `P` each item `E` in the index should present in
 *    `HrmpChannels` as `(P, E)`.
 *  - there should be no other dangling channels in `HrmpChannels`.
 *  - the vectors are sorted.
 */
export interface HrmpHrmpIngressChannelsIndexStorageV1001002 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class HrmpHrmpOpenChannelRequestCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpOpenChannelRequestCount'
    }

    /**
     *  This mapping tracks how many open channel requests are initiated by a given sender para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has
     *  `(X, _)` as the number of `HrmpOpenChannelRequestCount` for `X`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
    }

    /**
     *  This mapping tracks how many open channel requests are initiated by a given sender para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has
     *  `(X, _)` as the number of `HrmpOpenChannelRequestCount` for `X`.
     */
    get asV1001002(): HrmpHrmpOpenChannelRequestCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  This mapping tracks how many open channel requests are initiated by a given sender para.
 *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has
 *  `(X, _)` as the number of `HrmpOpenChannelRequestCount` for `X`.
 */
export interface HrmpHrmpOpenChannelRequestCountStorageV1001002 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class HrmpHrmpOpenChannelRequestsStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpOpenChannelRequests'
    }

    /**
     *  The set of pending HRMP open channel requests.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '14e894f64f4951bc0cda7e287037e971a9cfbd68c302fa59695038b358ef76b9'
    }

    /**
     *  The set of pending HRMP open channel requests.
     * 
     *  The set is accompanied by a list for iteration.
     * 
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    get asV1001002(): HrmpHrmpOpenChannelRequestsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The set of pending HRMP open channel requests.
 * 
 *  The set is accompanied by a list for iteration.
 * 
 *  Invariant:
 *  - There are no channels that exists in list but not in the set and vice versa.
 */
export interface HrmpHrmpOpenChannelRequestsStorageV1001002 {
    get(key: v1001002.HrmpChannelId): Promise<(v1001002.HrmpOpenChannelRequest | undefined)>
    getAll(): Promise<v1001002.HrmpOpenChannelRequest[]>
    getMany(keys: v1001002.HrmpChannelId[]): Promise<(v1001002.HrmpOpenChannelRequest | undefined)[]>
    getKeys(): Promise<v1001002.HrmpChannelId[]>
    getKeys(key: v1001002.HrmpChannelId): Promise<v1001002.HrmpChannelId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1001002.HrmpChannelId[]>
    getKeysPaged(pageSize: number, key: v1001002.HrmpChannelId): AsyncIterable<v1001002.HrmpChannelId[]>
    getPairs(): Promise<[k: v1001002.HrmpChannelId, v: v1001002.HrmpOpenChannelRequest][]>
    getPairs(key: v1001002.HrmpChannelId): Promise<[k: v1001002.HrmpChannelId, v: v1001002.HrmpOpenChannelRequest][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1001002.HrmpChannelId, v: v1001002.HrmpOpenChannelRequest][]>
    getPairsPaged(pageSize: number, key: v1001002.HrmpChannelId): AsyncIterable<[k: v1001002.HrmpChannelId, v: v1001002.HrmpOpenChannelRequest][]>
}

export class HrmpHrmpOpenChannelRequestsListStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpOpenChannelRequestsList'
    }

    get isV1001002(): boolean {
        return this.getTypeHash() === '9025c13f17e5df7d9188b5eb2c97a89f4ef8e04b9492613cba216a0d8d672b8f'
    }

    get asV1001002(): HrmpHrmpOpenChannelRequestsListStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

export interface HrmpHrmpOpenChannelRequestsListStorageV1001002 {
    get(): Promise<v1001002.HrmpChannelId[]>
}

export class HrmpHrmpWatermarksStorage extends StorageBase {
    protected getPrefix() {
        return 'Hrmp'
    }

    protected getName() {
        return 'HrmpWatermarks'
    }

    /**
     *  The HRMP watermark associated with each para.
     *  Invariant:
     *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a
     *    session.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The HRMP watermark associated with each para.
     *  Invariant:
     *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a
     *    session.
     */
    get asV1001002(): HrmpHrmpWatermarksStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The HRMP watermark associated with each para.
 *  Invariant:
 *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a
 *    session.
 */
export interface HrmpHrmpWatermarksStorageV1001002 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class IdentityAccountOfUsernameStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'AccountOfUsername'
    }

    /**
     *  Reverse lookup from `username` to the `AccountId` that has registered it. The value should
     *  be a key in the `IdentityOf` map, but it may not if the user has cleared their identity.
     * 
     *  Multiple usernames may map to the same `AccountId`, but `IdentityOf` will only map to one
     *  primary username.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '976c90b9f454941bc77c5b334d295eca49a11f76bd8a43cbec4fe717d42a3c08'
    }

    /**
     *  Reverse lookup from `username` to the `AccountId` that has registered it. The value should
     *  be a key in the `IdentityOf` map, but it may not if the user has cleared their identity.
     * 
     *  Multiple usernames may map to the same `AccountId`, but `IdentityOf` will only map to one
     *  primary username.
     */
    get asV1002000(): IdentityAccountOfUsernameStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Reverse lookup from `username` to the `AccountId` that has registered it. The value should
 *  be a key in the `IdentityOf` map, but it may not if the user has cleared their identity.
 * 
 *  Multiple usernames may map to the same `AccountId`, but `IdentityOf` will only map to one
 *  primary username.
 */
export interface IdentityAccountOfUsernameStorageV1002000 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class IdentityIdentityOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'IdentityOf'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'eee9529c5197f7a5f8200e155d78bab0a612de49bd6c8941e539265edf54c3aa'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV1001002(): IdentityIdentityOfStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Information that is pertinent to identify the entity behind an account. First item is the
     *  registration, second is the account's primary username.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'd9cb02e3dce5eeebc8b5ada353d5a79cc7416dc99b0ca998a609bd850858a9d0'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account. First item is the
     *  registration, second is the account's primary username.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV1002000(): IdentityIdentityOfStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityIdentityOfStorageV1001002 {
    get(key: Uint8Array): Promise<(v1001002.Registration | undefined)>
    getAll(): Promise<v1001002.Registration[]>
    getMany(keys: Uint8Array[]): Promise<(v1001002.Registration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.Registration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.Registration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.Registration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.Registration][]>
}

/**
 *  Information that is pertinent to identify the entity behind an account. First item is the
 *  registration, second is the account's primary username.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityIdentityOfStorageV1002000 {
    get(key: Uint8Array): Promise<([v1002000.Registration, (Uint8Array | undefined)] | undefined)>
    getAll(): Promise<[v1002000.Registration, (Uint8Array | undefined)][]>
    getMany(keys: Uint8Array[]): Promise<([v1002000.Registration, (Uint8Array | undefined)] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v1002000.Registration, (Uint8Array | undefined)]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v1002000.Registration, (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v1002000.Registration, (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v1002000.Registration, (Uint8Array | undefined)]][]>
}

export class IdentityPendingUsernamesStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'PendingUsernames'
    }

    /**
     *  Usernames that an authority has granted, but that the account controller has not confirmed
     *  that they want it. Used primarily in cases where the `AccountId` cannot provide a signature
     *  because they are a pure proxy, multisig, etc. In order to confirm it, they should call
     *  [`Call::accept_username`].
     * 
     *  First tuple item is the account and second is the acceptance deadline.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '5347043fb73f5db977c143db5ec5480a9ad7e5ec96260f6836bd0fd81ad925e5'
    }

    /**
     *  Usernames that an authority has granted, but that the account controller has not confirmed
     *  that they want it. Used primarily in cases where the `AccountId` cannot provide a signature
     *  because they are a pure proxy, multisig, etc. In order to confirm it, they should call
     *  [`Call::accept_username`].
     * 
     *  First tuple item is the account and second is the acceptance deadline.
     */
    get asV1002000(): IdentityPendingUsernamesStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Usernames that an authority has granted, but that the account controller has not confirmed
 *  that they want it. Used primarily in cases where the `AccountId` cannot provide a signature
 *  because they are a pure proxy, multisig, etc. In order to confirm it, they should call
 *  [`Call::accept_username`].
 * 
 *  First tuple item is the account and second is the acceptance deadline.
 */
export interface IdentityPendingUsernamesStorageV1002000 {
    get(key: Uint8Array): Promise<([Uint8Array, number] | undefined)>
    getAll(): Promise<[Uint8Array, number][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, number]][]>
}

export class IdentityRegistrarsStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'Registrars'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get asV1001002(): IdentityRegistrarsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface IdentityRegistrarsStorageV1001002 {
    get(): Promise<(v1001002.RegistrarInfo | undefined)[]>
}

export class IdentitySubsOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SubsOf'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV1001002(): IdentitySubsOfStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentitySubsOfStorageV1001002 {
    get(key: Uint8Array): Promise<[bigint, Uint8Array[]]>
    getAll(): Promise<[bigint, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, Uint8Array[]][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
}

export class IdentitySuperOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SuperOf'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '3e2404306f316847b5946856f8222df193ecb9ace5e509cd9f8808145fd9b792'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get asV1001002(): IdentitySuperOfStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface IdentitySuperOfStorageV1001002 {
    get(key: Uint8Array): Promise<([Uint8Array, v1001002.Data] | undefined)>
    getAll(): Promise<[Uint8Array, v1001002.Data][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, v1001002.Data] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, v1001002.Data]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, v1001002.Data]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v1001002.Data]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v1001002.Data]][]>
}

export class IdentityUsernameAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'UsernameAuthorities'
    }

    /**
     *  A map of the accounts who are authorized to grant usernames.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '86e7982a2e386dc2ef2eb6c2ba27106f69a5da86556be4e7581057630b87f4e8'
    }

    /**
     *  A map of the accounts who are authorized to grant usernames.
     */
    get asV1002000(): IdentityUsernameAuthoritiesStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  A map of the accounts who are authorized to grant usernames.
 */
export interface IdentityUsernameAuthoritiesStorageV1002000 {
    get(key: Uint8Array): Promise<(v1002000.AuthorityProperties | undefined)>
    getAll(): Promise<v1002000.AuthorityProperties[]>
    getMany(keys: Uint8Array[]): Promise<(v1002000.AuthorityProperties | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1002000.AuthorityProperties][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1002000.AuthorityProperties][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1002000.AuthorityProperties][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1002000.AuthorityProperties][]>
}

export class ImOnlineAuthoredBlocksStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'AuthoredBlocks'
    }

    /**
     *  For each session index, we keep a mapping of `ValidatorId<T>` to the
     *  number of blocks authored by the given authority.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'cc6a8dbe383d37ce9fa22935e3a1838a5aa7615fa4449b4318806f402f116ec9'
    }

    /**
     *  For each session index, we keep a mapping of `ValidatorId<T>` to the
     *  number of blocks authored by the given authority.
     */
    get asV1001002(): ImOnlineAuthoredBlocksStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  For each session index, we keep a mapping of `ValidatorId<T>` to the
 *  number of blocks authored by the given authority.
 */
export interface ImOnlineAuthoredBlocksStorageV1001002 {
    get(key1: number, key2: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<number[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class ImOnlineHeartbeatAfterStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'HeartbeatAfter'
    }

    /**
     *  The block number after which it's ok to send heartbeats in the current
     *  session.
     * 
     *  At the beginning of each session we set this to a value that should fall
     *  roughly in the middle of the session duration. The idea is to first wait for
     *  the validators to produce a block in the current session, so that the
     *  heartbeat later on will not be necessary.
     * 
     *  This value will only be used as a fallback if we fail to get a proper session
     *  progress estimate from `NextSessionRotation`, as those estimates should be
     *  more accurate then the value we calculate for `HeartbeatAfter`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The block number after which it's ok to send heartbeats in the current
     *  session.
     * 
     *  At the beginning of each session we set this to a value that should fall
     *  roughly in the middle of the session duration. The idea is to first wait for
     *  the validators to produce a block in the current session, so that the
     *  heartbeat later on will not be necessary.
     * 
     *  This value will only be used as a fallback if we fail to get a proper session
     *  progress estimate from `NextSessionRotation`, as those estimates should be
     *  more accurate then the value we calculate for `HeartbeatAfter`.
     */
    get asV1001002(): ImOnlineHeartbeatAfterStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The block number after which it's ok to send heartbeats in the current
 *  session.
 * 
 *  At the beginning of each session we set this to a value that should fall
 *  roughly in the middle of the session duration. The idea is to first wait for
 *  the validators to produce a block in the current session, so that the
 *  heartbeat later on will not be necessary.
 * 
 *  This value will only be used as a fallback if we fail to get a proper session
 *  progress estimate from `NextSessionRotation`, as those estimates should be
 *  more accurate then the value we calculate for `HeartbeatAfter`.
 */
export interface ImOnlineHeartbeatAfterStorageV1001002 {
    get(): Promise<number>
}

export class ImOnlineKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'Keys'
    }

    /**
     *  The current set of keys that may issue a heartbeat.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of keys that may issue a heartbeat.
     */
    get asV1001002(): ImOnlineKeysStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The current set of keys that may issue a heartbeat.
 */
export interface ImOnlineKeysStorageV1001002 {
    get(): Promise<Uint8Array[]>
}

export class ImOnlineReceivedHeartbeatsStorage extends StorageBase {
    protected getPrefix() {
        return 'ImOnline'
    }

    protected getName() {
        return 'ReceivedHeartbeats'
    }

    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'b4938ce2b1a4622175a25ec0ced5440eed9240186372eaf8f9936eb90d0d565e'
    }

    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex`.
     */
    get asV1001002(): ImOnlineReceivedHeartbeatsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex`.
 */
export interface ImOnlineReceivedHeartbeatsStorageV1001002 {
    get(key1: number, key2: number): Promise<(boolean | undefined)>
    getAll(): Promise<boolean[]>
    getMany(keys: [number, number][]): Promise<(boolean | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: boolean][]>
    getPairs(key1: number): Promise<[k: [number, number], v: boolean][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: boolean][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: boolean][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: boolean][]>
}

export class IndicesAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Indices'
    }

    protected getName() {
        return 'Accounts'
    }

    /**
     *  The lookup from index to account.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'c6d4b452610ac51f7c9427bf2d9910242bb414a02409a484caf47fa24e50516e'
    }

    /**
     *  The lookup from index to account.
     */
    get asV1001002(): IndicesAccountsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The lookup from index to account.
 */
export interface IndicesAccountsStorageV1001002 {
    get(key: number): Promise<([Uint8Array, bigint, boolean] | undefined)>
    getAll(): Promise<[Uint8Array, bigint, boolean][]>
    getMany(keys: number[]): Promise<([Uint8Array, bigint, boolean] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array, bigint, boolean]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array, bigint, boolean]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array, bigint, boolean]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array, bigint, boolean]][]>
}

export class InitializerBufferedSessionChangesStorage extends StorageBase {
    protected getPrefix() {
        return 'Initializer'
    }

    protected getName() {
        return 'BufferedSessionChanges'
    }

    /**
     *  Buffered session changes along with the block number at which they should be applied.
     * 
     *  Typically this will be empty or one element long. Apart from that this item never hits
     *  the storage.
     * 
     *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
     *  upgrade boundaries or if governance intervenes.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8ca8921e3e82455d025ef60ac4a362641034332241c6a69a4183e6e8f6e58800'
    }

    /**
     *  Buffered session changes along with the block number at which they should be applied.
     * 
     *  Typically this will be empty or one element long. Apart from that this item never hits
     *  the storage.
     * 
     *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
     *  upgrade boundaries or if governance intervenes.
     */
    get asV1001002(): InitializerBufferedSessionChangesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Buffered session changes along with the block number at which they should be applied.
 * 
 *  Typically this will be empty or one element long. Apart from that this item never hits
 *  the storage.
 * 
 *  However this is a `Vec` regardless to handle various edge cases that may occur at runtime
 *  upgrade boundaries or if governance intervenes.
 */
export interface InitializerBufferedSessionChangesStorageV1001002 {
    get(): Promise<v1001002.BufferedSessionChange[]>
}

export class InitializerHasInitializedStorage extends StorageBase {
    protected getPrefix() {
        return 'Initializer'
    }

    protected getName() {
        return 'HasInitialized'
    }

    /**
     *  Whether the parachains modules have been initialized within this block.
     * 
     *  Semantically a `bool`, but this guarantees it should never hit the trie,
     *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
     * 
     *  As a `bool`, `set(false)` and `remove()` both lead to the next `get()` being false, but one
     *  of them writes to the trie and one does not. This confusion makes `Option<()>` more suitable
     *  for the semantics of this variable.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '6ff2f39608fbf22c19e5525281db3aa2912456d1fc877d48f7b750ebbcdd9331'
    }

    /**
     *  Whether the parachains modules have been initialized within this block.
     * 
     *  Semantically a `bool`, but this guarantees it should never hit the trie,
     *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
     * 
     *  As a `bool`, `set(false)` and `remove()` both lead to the next `get()` being false, but one
     *  of them writes to the trie and one does not. This confusion makes `Option<()>` more suitable
     *  for the semantics of this variable.
     */
    get asV1001002(): InitializerHasInitializedStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Whether the parachains modules have been initialized within this block.
 * 
 *  Semantically a `bool`, but this guarantees it should never hit the trie,
 *  as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
 * 
 *  As a `bool`, `set(false)` and `remove()` both lead to the next `get()` being false, but one
 *  of them writes to the trie and one does not. This confusion makes `Option<()>` more suitable
 *  for the semantics of this variable.
 */
export interface InitializerHasInitializedStorageV1001002 {
    get(): Promise<(null | undefined)>
}

export class MessageQueueBookStateForStorage extends StorageBase {
    protected getPrefix() {
        return 'MessageQueue'
    }

    protected getName() {
        return 'BookStateFor'
    }

    /**
     *  The index of the first and last (non-empty) pages.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '93fe23159341636a8044518de6373ca2f3d3b1c3055b6d2ce00b9962e365158d'
    }

    /**
     *  The index of the first and last (non-empty) pages.
     */
    get asV1001002(): MessageQueueBookStateForStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The index of the first and last (non-empty) pages.
 */
export interface MessageQueueBookStateForStorageV1001002 {
    get(key: v1001002.AggregateMessageOrigin): Promise<v1001002.BookState>
    getAll(): Promise<v1001002.BookState[]>
    getMany(keys: v1001002.AggregateMessageOrigin[]): Promise<v1001002.BookState[]>
    getKeys(): Promise<v1001002.AggregateMessageOrigin[]>
    getKeys(key: v1001002.AggregateMessageOrigin): Promise<v1001002.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1001002.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number, key: v1001002.AggregateMessageOrigin): AsyncIterable<v1001002.AggregateMessageOrigin[]>
    getPairs(): Promise<[k: v1001002.AggregateMessageOrigin, v: v1001002.BookState][]>
    getPairs(key: v1001002.AggregateMessageOrigin): Promise<[k: v1001002.AggregateMessageOrigin, v: v1001002.BookState][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1001002.AggregateMessageOrigin, v: v1001002.BookState][]>
    getPairsPaged(pageSize: number, key: v1001002.AggregateMessageOrigin): AsyncIterable<[k: v1001002.AggregateMessageOrigin, v: v1001002.BookState][]>
}

export class MessageQueuePagesStorage extends StorageBase {
    protected getPrefix() {
        return 'MessageQueue'
    }

    protected getName() {
        return 'Pages'
    }

    /**
     *  The map of page indices to pages.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '90748ccdff779a7f9bace80620324853a2532f6f04d7a1fa795ab57a3c0fc734'
    }

    /**
     *  The map of page indices to pages.
     */
    get asV1001002(): MessageQueuePagesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The map of page indices to pages.
 */
export interface MessageQueuePagesStorageV1001002 {
    get(key1: v1001002.AggregateMessageOrigin, key2: number): Promise<(v1001002.Page | undefined)>
    getAll(): Promise<v1001002.Page[]>
    getMany(keys: [v1001002.AggregateMessageOrigin, number][]): Promise<(v1001002.Page | undefined)[]>
    getKeys(): Promise<[v1001002.AggregateMessageOrigin, number][]>
    getKeys(key1: v1001002.AggregateMessageOrigin): Promise<[v1001002.AggregateMessageOrigin, number][]>
    getKeys(key1: v1001002.AggregateMessageOrigin, key2: number): Promise<[v1001002.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v1001002.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, key1: v1001002.AggregateMessageOrigin): AsyncIterable<[v1001002.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, key1: v1001002.AggregateMessageOrigin, key2: number): AsyncIterable<[v1001002.AggregateMessageOrigin, number][]>
    getPairs(): Promise<[k: [v1001002.AggregateMessageOrigin, number], v: v1001002.Page][]>
    getPairs(key1: v1001002.AggregateMessageOrigin): Promise<[k: [v1001002.AggregateMessageOrigin, number], v: v1001002.Page][]>
    getPairs(key1: v1001002.AggregateMessageOrigin, key2: number): Promise<[k: [v1001002.AggregateMessageOrigin, number], v: v1001002.Page][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v1001002.AggregateMessageOrigin, number], v: v1001002.Page][]>
    getPairsPaged(pageSize: number, key1: v1001002.AggregateMessageOrigin): AsyncIterable<[k: [v1001002.AggregateMessageOrigin, number], v: v1001002.Page][]>
    getPairsPaged(pageSize: number, key1: v1001002.AggregateMessageOrigin, key2: number): AsyncIterable<[k: [v1001002.AggregateMessageOrigin, number], v: v1001002.Page][]>
}

export class MessageQueueServiceHeadStorage extends StorageBase {
    protected getPrefix() {
        return 'MessageQueue'
    }

    protected getName() {
        return 'ServiceHead'
    }

    /**
     *  The origin at which we should begin servicing.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd502ee4c5986385a23f736bd2e5ae2da53f75570a11c375a5cced66c634c3760'
    }

    /**
     *  The origin at which we should begin servicing.
     */
    get asV1001002(): MessageQueueServiceHeadStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The origin at which we should begin servicing.
 */
export interface MessageQueueServiceHeadStorageV1001002 {
    get(): Promise<(v1001002.AggregateMessageOrigin | undefined)>
}

export class MmrNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'Mmr'
    }

    protected getName() {
        return 'Nodes'
    }

    /**
     *  Hashes of the nodes in the MMR.
     * 
     *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
     *  are pruned and only stored in the Offchain DB.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'ffc087e1323413e73a9729e444bf115bb89bc74cab9f4347c9dc890a14ae8d68'
    }

    /**
     *  Hashes of the nodes in the MMR.
     * 
     *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
     *  are pruned and only stored in the Offchain DB.
     */
    get asV1001002(): MmrNodesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Hashes of the nodes in the MMR.
 * 
 *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
 *  are pruned and only stored in the Offchain DB.
 */
export interface MmrNodesStorageV1001002 {
    get(key: bigint): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: bigint[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: Uint8Array][]>
    getPairs(key: bigint): Promise<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: Uint8Array][]>
}

export class MmrNumberOfLeavesStorage extends StorageBase {
    protected getPrefix() {
        return 'Mmr'
    }

    protected getName() {
        return 'NumberOfLeaves'
    }

    /**
     *  Current size of the MMR (number of leaves).
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current size of the MMR (number of leaves).
     */
    get asV1001002(): MmrNumberOfLeavesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Current size of the MMR (number of leaves).
 */
export interface MmrNumberOfLeavesStorageV1001002 {
    get(): Promise<bigint>
}

export class MmrRootHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Mmr'
    }

    protected getName() {
        return 'RootHash'
    }

    /**
     *  Latest MMR Root hash.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Latest MMR Root hash.
     */
    get asV1001002(): MmrRootHashStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Latest MMR Root hash.
 */
export interface MmrRootHashStorageV1001002 {
    get(): Promise<Uint8Array>
}

export class MultisigMultisigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Multisigs'
    }

    /**
     *  The set of open multisig operations.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asV1001002(): MultisigMultisigsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigMultisigsStorageV1001002 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v1001002.Multisig | undefined)>
    getAll(): Promise<v1001002.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v1001002.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v1001002.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v1001002.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v1001002.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1001002.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1001002.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1001002.Multisig][]>
}

export class NominationPoolsBondedPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'BondedPools'
    }

    /**
     *  Storage for bonded pools.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8ee9b811b3610458137a5c6015bd84146600ec4f9ae92d1d2b13d735618d24d0'
    }

    /**
     *  Storage for bonded pools.
     */
    get asV1001002(): NominationPoolsBondedPoolsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Storage for bonded pools.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'dea77f6440abec526e2a3bdfdfc8f1828f84ed8fa5545c4fb0ede2f1873253be'
    }

    /**
     *  Storage for bonded pools.
     */
    get asV1002000(): NominationPoolsBondedPoolsStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Storage for bonded pools.
 */
export interface NominationPoolsBondedPoolsStorageV1001002 {
    get(key: number): Promise<(v1001002.BondedPoolInner | undefined)>
    getAll(): Promise<v1001002.BondedPoolInner[]>
    getMany(keys: number[]): Promise<(v1001002.BondedPoolInner | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.BondedPoolInner][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.BondedPoolInner][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.BondedPoolInner][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.BondedPoolInner][]>
}

/**
 *  Storage for bonded pools.
 */
export interface NominationPoolsBondedPoolsStorageV1002000 {
    get(key: number): Promise<(v1002000.BondedPoolInner | undefined)>
    getAll(): Promise<v1002000.BondedPoolInner[]>
    getMany(keys: number[]): Promise<(v1002000.BondedPoolInner | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1002000.BondedPoolInner][]>
    getPairs(key: number): Promise<[k: number, v: v1002000.BondedPoolInner][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1002000.BondedPoolInner][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1002000.BondedPoolInner][]>
}

export class NominationPoolsClaimPermissionsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'ClaimPermissions'
    }

    /**
     *  Map from a pool member account to their opted claim permission.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'cecafce59b7786f4d0cda8d68dbbdb9539b8f3a7a65637f5481233f5b064abdd'
    }

    /**
     *  Map from a pool member account to their opted claim permission.
     */
    get asV1001002(): NominationPoolsClaimPermissionsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Map from a pool member account to their opted claim permission.
 */
export interface NominationPoolsClaimPermissionsStorageV1001002 {
    get(key: Uint8Array): Promise<v1001002.ClaimPermission>
    getAll(): Promise<v1001002.ClaimPermission[]>
    getMany(keys: Uint8Array[]): Promise<v1001002.ClaimPermission[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.ClaimPermission][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.ClaimPermission][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.ClaimPermission][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.ClaimPermission][]>
}

export class NominationPoolsCounterForBondedPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForBondedPools'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV1001002(): NominationPoolsCounterForBondedPoolsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForBondedPoolsStorageV1001002 {
    get(): Promise<number>
}

export class NominationPoolsCounterForMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForMetadata'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV1001002(): NominationPoolsCounterForMetadataStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForMetadataStorageV1001002 {
    get(): Promise<number>
}

export class NominationPoolsCounterForPoolMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForPoolMembers'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV1001002(): NominationPoolsCounterForPoolMembersStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForPoolMembersStorageV1001002 {
    get(): Promise<number>
}

export class NominationPoolsCounterForReversePoolIdLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForReversePoolIdLookup'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV1001002(): NominationPoolsCounterForReversePoolIdLookupStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForReversePoolIdLookupStorageV1001002 {
    get(): Promise<number>
}

export class NominationPoolsCounterForRewardPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForRewardPools'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV1001002(): NominationPoolsCounterForRewardPoolsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForRewardPoolsStorageV1001002 {
    get(): Promise<number>
}

export class NominationPoolsCounterForSubPoolsStorageStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'CounterForSubPoolsStorage'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV1001002(): NominationPoolsCounterForSubPoolsStorageStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface NominationPoolsCounterForSubPoolsStorageStorageV1001002 {
    get(): Promise<number>
}

export class NominationPoolsGlobalMaxCommissionStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'GlobalMaxCommission'
    }

    /**
     *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
     *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
     *  `GlobalMaxCommission` is lower than some current pool commissions.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
     *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
     *  `GlobalMaxCommission` is lower than some current pool commissions.
     */
    get asV1001002(): NominationPoolsGlobalMaxCommissionStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
 *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
 *  `GlobalMaxCommission` is lower than some current pool commissions.
 */
export interface NominationPoolsGlobalMaxCommissionStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class NominationPoolsLastPoolIdStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'LastPoolId'
    }

    /**
     *  Ever increasing number of all pools created so far.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Ever increasing number of all pools created so far.
     */
    get asV1001002(): NominationPoolsLastPoolIdStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Ever increasing number of all pools created so far.
 */
export interface NominationPoolsLastPoolIdStorageV1001002 {
    get(): Promise<number>
}

export class NominationPoolsMaxPoolMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MaxPoolMembers'
    }

    /**
     *  Maximum number of members that can exist in the system. If `None`, then the count
     *  members are not bound on a system wide basis.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Maximum number of members that can exist in the system. If `None`, then the count
     *  members are not bound on a system wide basis.
     */
    get asV1001002(): NominationPoolsMaxPoolMembersStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Maximum number of members that can exist in the system. If `None`, then the count
 *  members are not bound on a system wide basis.
 */
export interface NominationPoolsMaxPoolMembersStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class NominationPoolsMaxPoolMembersPerPoolStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MaxPoolMembersPerPool'
    }

    /**
     *  Maximum number of members that may belong to pool. If `None`, then the count of
     *  members is not bound on a per pool basis.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Maximum number of members that may belong to pool. If `None`, then the count of
     *  members is not bound on a per pool basis.
     */
    get asV1001002(): NominationPoolsMaxPoolMembersPerPoolStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Maximum number of members that may belong to pool. If `None`, then the count of
 *  members is not bound on a per pool basis.
 */
export interface NominationPoolsMaxPoolMembersPerPoolStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class NominationPoolsMaxPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MaxPools'
    }

    /**
     *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
     *  pools can exist.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
     *  pools can exist.
     */
    get asV1001002(): NominationPoolsMaxPoolsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
 *  pools can exist.
 */
export interface NominationPoolsMaxPoolsStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class NominationPoolsMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'Metadata'
    }

    /**
     *  Metadata for the pool.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Metadata for the pool.
     */
    get asV1001002(): NominationPoolsMetadataStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Metadata for the pool.
 */
export interface NominationPoolsMetadataStorageV1001002 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class NominationPoolsMinCreateBondStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MinCreateBond'
    }

    /**
     *  Minimum bond required to create a pool.
     * 
     *  This is the amount that the depositor must put as their initial stake in the pool, as an
     *  indication of "skin in the game".
     * 
     *  This is the value that will always exist in the staking ledger of the pool bonded account
     *  while all other accounts leave.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Minimum bond required to create a pool.
     * 
     *  This is the amount that the depositor must put as their initial stake in the pool, as an
     *  indication of "skin in the game".
     * 
     *  This is the value that will always exist in the staking ledger of the pool bonded account
     *  while all other accounts leave.
     */
    get asV1001002(): NominationPoolsMinCreateBondStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Minimum bond required to create a pool.
 * 
 *  This is the amount that the depositor must put as their initial stake in the pool, as an
 *  indication of "skin in the game".
 * 
 *  This is the value that will always exist in the staking ledger of the pool bonded account
 *  while all other accounts leave.
 */
export interface NominationPoolsMinCreateBondStorageV1001002 {
    get(): Promise<bigint>
}

export class NominationPoolsMinJoinBondStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'MinJoinBond'
    }

    /**
     *  Minimum amount to bond to join a pool.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Minimum amount to bond to join a pool.
     */
    get asV1001002(): NominationPoolsMinJoinBondStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Minimum amount to bond to join a pool.
 */
export interface NominationPoolsMinJoinBondStorageV1001002 {
    get(): Promise<bigint>
}

export class NominationPoolsPoolMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'PoolMembers'
    }

    /**
     *  Active members.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '4b73cf52c7b7da8a11c75fe9dae69e02b83c4fe7a62b5a2e5b996edd8168c745'
    }

    /**
     *  Active members.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV1001002(): NominationPoolsPoolMembersStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Active members.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface NominationPoolsPoolMembersStorageV1001002 {
    get(key: Uint8Array): Promise<(v1001002.PoolMember | undefined)>
    getAll(): Promise<v1001002.PoolMember[]>
    getMany(keys: Uint8Array[]): Promise<(v1001002.PoolMember | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.PoolMember][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.PoolMember][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.PoolMember][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.PoolMember][]>
}

export class NominationPoolsReversePoolIdLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'ReversePoolIdLookup'
    }

    /**
     *  A reverse lookup from the pool's account id to its id.
     * 
     *  This is only used for slashing. In all other instances, the pool id is used, and the
     *  accounts are deterministically derived from it.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  A reverse lookup from the pool's account id to its id.
     * 
     *  This is only used for slashing. In all other instances, the pool id is used, and the
     *  accounts are deterministically derived from it.
     */
    get asV1001002(): NominationPoolsReversePoolIdLookupStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  A reverse lookup from the pool's account id to its id.
 * 
 *  This is only used for slashing. In all other instances, the pool id is used, and the
 *  accounts are deterministically derived from it.
 */
export interface NominationPoolsReversePoolIdLookupStorageV1001002 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class NominationPoolsRewardPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'RewardPools'
    }

    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout is
     *  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'baa87c11370b546112f8970d07f6ff23bef0938379d1f9d3229bd55c32959de5'
    }

    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout is
     *  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    get asV1001002(): NominationPoolsRewardPoolsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Reward pools. This is where there rewards for each pool accumulate. When a members payout is
 *  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
 */
export interface NominationPoolsRewardPoolsStorageV1001002 {
    get(key: number): Promise<(v1001002.RewardPool | undefined)>
    getAll(): Promise<v1001002.RewardPool[]>
    getMany(keys: number[]): Promise<(v1001002.RewardPool | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.RewardPool][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.RewardPool][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.RewardPool][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.RewardPool][]>
}

export class NominationPoolsSubPoolsStorageStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'SubPoolsStorage'
    }

    /**
     *  Groups of unbonding pools. Each group of unbonding pools belongs to a
     *  bonded pool, hence the name sub-pools. Keyed by the bonded pools account.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'dc5bb02a122fb418c88fbe5c06d8e91818c8d4fffe761fe0299ea8709df81bb3'
    }

    /**
     *  Groups of unbonding pools. Each group of unbonding pools belongs to a
     *  bonded pool, hence the name sub-pools. Keyed by the bonded pools account.
     */
    get asV1001002(): NominationPoolsSubPoolsStorageStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Groups of unbonding pools. Each group of unbonding pools belongs to a
 *  bonded pool, hence the name sub-pools. Keyed by the bonded pools account.
 */
export interface NominationPoolsSubPoolsStorageStorageV1001002 {
    get(key: number): Promise<(v1001002.SubPools | undefined)>
    getAll(): Promise<v1001002.SubPools[]>
    getMany(keys: number[]): Promise<(v1001002.SubPools | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.SubPools][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.SubPools][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.SubPools][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.SubPools][]>
}

export class NominationPoolsTotalValueLockedStorage extends StorageBase {
    protected getPrefix() {
        return 'NominationPools'
    }

    protected getName() {
        return 'TotalValueLocked'
    }

    /**
     *  The sum of funds across all pools.
     * 
     *  This might be lower but never higher than the sum of `total_balance` of all [`PoolMembers`]
     *  because calling `pool_withdraw_unbonded` might decrease the total stake of the pool's
     *  `bonded_account` without adjusting the pallet-internal `UnbondingPool`'s.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The sum of funds across all pools.
     * 
     *  This might be lower but never higher than the sum of `total_balance` of all [`PoolMembers`]
     *  because calling `pool_withdraw_unbonded` might decrease the total stake of the pool's
     *  `bonded_account` without adjusting the pallet-internal `UnbondingPool`'s.
     */
    get asV1001002(): NominationPoolsTotalValueLockedStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The sum of funds across all pools.
 * 
 *  This might be lower but never higher than the sum of `total_balance` of all [`PoolMembers`]
 *  because calling `pool_withdraw_unbonded` might decrease the total stake of the pool's
 *  `bonded_account` without adjusting the pallet-internal `UnbondingPool`'s.
 */
export interface NominationPoolsTotalValueLockedStorageV1001002 {
    get(): Promise<bigint>
}

export class OffencesConcurrentReportsIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'ConcurrentReportsIndex'
    }

    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd5c59a6db2baab9f1dcc1a37b0131a737935fd2082fcf39b6abc3f1d6e3ae008'
    }

    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    get asV1001002(): OffencesConcurrentReportsIndexStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  A vector of reports of the same kind that happened at the same time slot.
 */
export interface OffencesConcurrentReportsIndexStorageV1001002 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<Uint8Array[]>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<Uint8Array[][]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array[]][]>
}

export class OffencesReportsStorage extends StorageBase {
    protected getPrefix() {
        return 'Offences'
    }

    protected getName() {
        return 'Reports'
    }

    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'e52641726adeb87007a96ce7684aad2f8233624d39e0ad7727f22f889bc9279f'
    }

    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    get asV1001002(): OffencesReportsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The primary structure that holds all offence records keyed by report identifiers.
 */
export interface OffencesReportsStorageV1001002 {
    get(key: Uint8Array): Promise<(v1001002.OffenceDetails | undefined)>
    getAll(): Promise<v1001002.OffenceDetails[]>
    getMany(keys: Uint8Array[]): Promise<(v1001002.OffenceDetails | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.OffenceDetails][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.OffenceDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.OffenceDetails][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.OffenceDetails][]>
}

export class OnDemandAffinityEntriesStorage extends StorageBase {
    protected getPrefix() {
        return 'OnDemand'
    }

    protected getName() {
        return 'AffinityEntries'
    }

    /**
     *  Queue entries that are currently bound to a particular core due to core affinity.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === '4202e1f0d9f946cdfd02fb7a3be23c29f6b3eec6856064665a044f5e80eba8f2'
    }

    /**
     *  Queue entries that are currently bound to a particular core due to core affinity.
     */
    get asV1003000(): OnDemandAffinityEntriesStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  Queue entries that are currently bound to a particular core due to core affinity.
 */
export interface OnDemandAffinityEntriesStorageV1003000 {
    get(key: number): Promise<v1003000.EnqueuedOrder[]>
    getAll(): Promise<v1003000.EnqueuedOrder[][]>
    getMany(keys: number[]): Promise<v1003000.EnqueuedOrder[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1003000.EnqueuedOrder[]][]>
    getPairs(key: number): Promise<[k: number, v: v1003000.EnqueuedOrder[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1003000.EnqueuedOrder[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1003000.EnqueuedOrder[]][]>
}

export class OnDemandFreeEntriesStorage extends StorageBase {
    protected getPrefix() {
        return 'OnDemand'
    }

    protected getName() {
        return 'FreeEntries'
    }

    /**
     *  Priority queue for all orders which don't yet (or not any more) have any core affinity.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === 'd6f5201baa748fa140f3ada2bd684a1aa4ec4f6f90e68ba21560e342201aee12'
    }

    /**
     *  Priority queue for all orders which don't yet (or not any more) have any core affinity.
     */
    get asV1003000(): OnDemandFreeEntriesStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  Priority queue for all orders which don't yet (or not any more) have any core affinity.
 */
export interface OnDemandFreeEntriesStorageV1003000 {
    get(): Promise<v1003000.EnqueuedOrder[]>
}

export class OnDemandParaIdAffinityStorage extends StorageBase {
    protected getPrefix() {
        return 'OnDemand'
    }

    protected getName() {
        return 'ParaIdAffinity'
    }

    /**
     *  Maps a `ParaId` to `CoreIndex` and keeps track of how many assignments the scheduler has in
     *  it's lookahead. Keeping track of this affinity prevents parallel execution of the same
     *  `ParaId` on two or more `CoreIndex`es.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === 'fa778764c06d91046f0c592dfacd6130a421080bb104433375e7d5bffc900a39'
    }

    /**
     *  Maps a `ParaId` to `CoreIndex` and keeps track of how many assignments the scheduler has in
     *  it's lookahead. Keeping track of this affinity prevents parallel execution of the same
     *  `ParaId` on two or more `CoreIndex`es.
     */
    get asV1003000(): OnDemandParaIdAffinityStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  Maps a `ParaId` to `CoreIndex` and keeps track of how many assignments the scheduler has in
 *  it's lookahead. Keeping track of this affinity prevents parallel execution of the same
 *  `ParaId` on two or more `CoreIndex`es.
 */
export interface OnDemandParaIdAffinityStorageV1003000 {
    get(key: number): Promise<(v1003000.CoreAffinityCount | undefined)>
    getAll(): Promise<v1003000.CoreAffinityCount[]>
    getMany(keys: number[]): Promise<(v1003000.CoreAffinityCount | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1003000.CoreAffinityCount][]>
    getPairs(key: number): Promise<[k: number, v: v1003000.CoreAffinityCount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1003000.CoreAffinityCount][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1003000.CoreAffinityCount][]>
}

export class OnDemandQueueStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'OnDemand'
    }

    protected getName() {
        return 'QueueStatus'
    }

    /**
     *  Overall status of queue (both free + affinity entries)
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === 'a6807cfaf05820580cac49ff7f9d7ebd43216b3a5210c9de1647274b4e247269'
    }

    /**
     *  Overall status of queue (both free + affinity entries)
     */
    get asV1003000(): OnDemandQueueStatusStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  Overall status of queue (both free + affinity entries)
 */
export interface OnDemandQueueStatusStorageV1003000 {
    get(): Promise<v1003000.QueueStatusType>
}

export class OnDemandRevenueStorage extends StorageBase {
    protected getPrefix() {
        return 'OnDemand'
    }

    protected getName() {
        return 'Revenue'
    }

    /**
     *  Keeps track of accumulated revenue from on demand order sales.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === 'ba06ab84d5ef154d036f4d65808c92eca2b50836d5fc1e3d051feb917279e33b'
    }

    /**
     *  Keeps track of accumulated revenue from on demand order sales.
     */
    get asV1003000(): OnDemandRevenueStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  Keeps track of accumulated revenue from on demand order sales.
 */
export interface OnDemandRevenueStorageV1003000 {
    get(): Promise<bigint[]>
}

export class ParaInclusionAvailabilityBitfieldsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInclusion'
    }

    protected getName() {
        return 'AvailabilityBitfields'
    }

    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'bf97f32483242f327da32063a836c1f797b9f0b05ea5417192cc00309d339c23'
    }

    /**
     *  The latest bitfield for each validator, referred to by their index in the validator set.
     */
    get asV1001002(): ParaInclusionAvailabilityBitfieldsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The latest bitfield for each validator, referred to by their index in the validator set.
 */
export interface ParaInclusionAvailabilityBitfieldsStorageV1001002 {
    get(key: number): Promise<(v1001002.AvailabilityBitfieldRecord | undefined)>
    getAll(): Promise<v1001002.AvailabilityBitfieldRecord[]>
    getMany(keys: number[]): Promise<(v1001002.AvailabilityBitfieldRecord | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.AvailabilityBitfieldRecord][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.AvailabilityBitfieldRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.AvailabilityBitfieldRecord][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.AvailabilityBitfieldRecord][]>
}

export class ParaInclusionPendingAvailabilityStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInclusion'
    }

    protected getName() {
        return 'PendingAvailability'
    }

    /**
     *  Candidates pending availability by `ParaId`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd1ce28ee05b8364d55d8ee99dab4ba7567356381f70d142c1dda5b6de4abf79b'
    }

    /**
     *  Candidates pending availability by `ParaId`.
     */
    get asV1001002(): ParaInclusionPendingAvailabilityStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Candidates pending availability by `ParaId`.
 */
export interface ParaInclusionPendingAvailabilityStorageV1001002 {
    get(key: number): Promise<(v1001002.CandidatePendingAvailability | undefined)>
    getAll(): Promise<v1001002.CandidatePendingAvailability[]>
    getMany(keys: number[]): Promise<(v1001002.CandidatePendingAvailability | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.CandidatePendingAvailability][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.CandidatePendingAvailability][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.CandidatePendingAvailability][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.CandidatePendingAvailability][]>
}

export class ParaInclusionPendingAvailabilityCommitmentsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInclusion'
    }

    protected getName() {
        return 'PendingAvailabilityCommitments'
    }

    /**
     *  The commitments of candidates pending availability, by `ParaId`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '4e6f7845cb653fd4982455ab1aefc6bf2c68b8591ae7b58226dd2c5b0621f0cf'
    }

    /**
     *  The commitments of candidates pending availability, by `ParaId`.
     */
    get asV1001002(): ParaInclusionPendingAvailabilityCommitmentsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The commitments of candidates pending availability, by `ParaId`.
 */
export interface ParaInclusionPendingAvailabilityCommitmentsStorageV1001002 {
    get(key: number): Promise<(v1001002.V6CandidateCommitments | undefined)>
    getAll(): Promise<v1001002.V6CandidateCommitments[]>
    getMany(keys: number[]): Promise<(v1001002.V6CandidateCommitments | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.V6CandidateCommitments][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.V6CandidateCommitments][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.V6CandidateCommitments][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.V6CandidateCommitments][]>
}

export class ParaInclusionV1Storage extends StorageBase {
    protected getPrefix() {
        return 'ParaInclusion'
    }

    protected getName() {
        return 'V1'
    }

    /**
     *  Candidates pending availability by `ParaId`. They form a chain starting from the latest
     *  included head of the para.
     *  Use a different prefix post-migration to v1, since the v0 `PendingAvailability` storage
     *  would otherwise have the exact same prefix which could cause undefined behaviour when doing
     *  the migration.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === '4324cacddacf624a79c856bc389bddecd4da94b1d18aeb913c070b9e54e1eff6'
    }

    /**
     *  Candidates pending availability by `ParaId`. They form a chain starting from the latest
     *  included head of the para.
     *  Use a different prefix post-migration to v1, since the v0 `PendingAvailability` storage
     *  would otherwise have the exact same prefix which could cause undefined behaviour when doing
     *  the migration.
     */
    get asV1003000(): ParaInclusionV1StorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  Candidates pending availability by `ParaId`. They form a chain starting from the latest
 *  included head of the para.
 *  Use a different prefix post-migration to v1, since the v0 `PendingAvailability` storage
 *  would otherwise have the exact same prefix which could cause undefined behaviour when doing
 *  the migration.
 */
export interface ParaInclusionV1StorageV1003000 {
    get(key: number): Promise<(v1003000.CandidatePendingAvailability[] | undefined)>
    getAll(): Promise<v1003000.CandidatePendingAvailability[][]>
    getMany(keys: number[]): Promise<(v1003000.CandidatePendingAvailability[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1003000.CandidatePendingAvailability[]][]>
    getPairs(key: number): Promise<[k: number, v: v1003000.CandidatePendingAvailability[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1003000.CandidatePendingAvailability[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1003000.CandidatePendingAvailability[]][]>
}

export class ParaInherentIncludedStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInherent'
    }

    protected getName() {
        return 'Included'
    }

    /**
     *  Whether the paras inherent was included within this block.
     * 
     *  The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant
     *  due to the guarantees of FRAME's storage APIs.
     * 
     *  If this is `None` at the end of the block, we panic and render the block invalid.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '6ff2f39608fbf22c19e5525281db3aa2912456d1fc877d48f7b750ebbcdd9331'
    }

    /**
     *  Whether the paras inherent was included within this block.
     * 
     *  The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant
     *  due to the guarantees of FRAME's storage APIs.
     * 
     *  If this is `None` at the end of the block, we panic and render the block invalid.
     */
    get asV1001002(): ParaInherentIncludedStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Whether the paras inherent was included within this block.
 * 
 *  The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant
 *  due to the guarantees of FRAME's storage APIs.
 * 
 *  If this is `None` at the end of the block, we panic and render the block invalid.
 */
export interface ParaInherentIncludedStorageV1001002 {
    get(): Promise<(null | undefined)>
}

export class ParaInherentOnChainVotesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaInherent'
    }

    protected getName() {
        return 'OnChainVotes'
    }

    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '90024dc5cb8ad039cc5c064f6dae6d9b18bbb24fd2d8b5dda8f60b533147590b'
    }

    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    get asV1001002(): ParaInherentOnChainVotesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'f7a0f85ea8db1f3d272254cdcf7ec5f843ee541e305e1c43b910357ff68c02b8'
    }

    /**
     *  Scraped on chain data for extracting resolved disputes as well as backing votes.
     */
    get asV1002000(): ParaInherentOnChainVotesStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Scraped on chain data for extracting resolved disputes as well as backing votes.
 */
export interface ParaInherentOnChainVotesStorageV1001002 {
    get(): Promise<(v1001002.V6ScrapedOnChainVotes | undefined)>
}

/**
 *  Scraped on chain data for extracting resolved disputes as well as backing votes.
 */
export interface ParaInherentOnChainVotesStorageV1002000 {
    get(): Promise<(v1002000.V6ScrapedOnChainVotes | undefined)>
}

export class ParaSchedulerAvailabilityCoresStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'AvailabilityCores'
    }

    /**
     *  One entry for each availability core. Entries are `None` if the core is not currently
     *  occupied. Can be temporarily `Some` if scheduled but not occupied.
     *  The i'th parachain belongs to the i'th core, with the remaining cores all being
     *  parathread-multiplexers.
     * 
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f3396f2a0d78a0ee6eafec6d9bcdc137cac9bec93f9e6b7b9809a2de1ffacefd'
    }

    /**
     *  One entry for each availability core. Entries are `None` if the core is not currently
     *  occupied. Can be temporarily `Some` if scheduled but not occupied.
     *  The i'th parachain belongs to the i'th core, with the remaining cores all being
     *  parathread-multiplexers.
     * 
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    get asV1001002(): ParaSchedulerAvailabilityCoresStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  One entry for each availability core. Entries are `None` if the core is not currently
     *  occupied. Can be temporarily `Some` if scheduled but not occupied.
     *  The i'th parachain belongs to the i'th core, with the remaining cores all being
     *  parathread-multiplexers.
     * 
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '76f51dc7c2d97dd639abd3866db071956ff79f893cfad82bbfc5f274a0007a91'
    }

    /**
     *  One entry for each availability core. Entries are `None` if the core is not currently
     *  occupied. Can be temporarily `Some` if scheduled but not occupied.
     *  The i'th parachain belongs to the i'th core, with the remaining cores all being
     *  parathread-multiplexers.
     * 
     *  Bounded by the maximum of either of these two values:
     *    * The number of parachains and parathread multiplexers
     *    * The number of validators divided by `configuration.max_validators_per_core`.
     */
    get asV1002000(): ParaSchedulerAvailabilityCoresStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  One entry for each availability core. Entries are `None` if the core is not currently
 *  occupied. Can be temporarily `Some` if scheduled but not occupied.
 *  The i'th parachain belongs to the i'th core, with the remaining cores all being
 *  parathread-multiplexers.
 * 
 *  Bounded by the maximum of either of these two values:
 *    * The number of parachains and parathread multiplexers
 *    * The number of validators divided by `configuration.max_validators_per_core`.
 */
export interface ParaSchedulerAvailabilityCoresStorageV1001002 {
    get(): Promise<v1001002.CoreOccupied[]>
}

/**
 *  One entry for each availability core. Entries are `None` if the core is not currently
 *  occupied. Can be temporarily `Some` if scheduled but not occupied.
 *  The i'th parachain belongs to the i'th core, with the remaining cores all being
 *  parathread-multiplexers.
 * 
 *  Bounded by the maximum of either of these two values:
 *    * The number of parachains and parathread multiplexers
 *    * The number of validators divided by `configuration.max_validators_per_core`.
 */
export interface ParaSchedulerAvailabilityCoresStorageV1002000 {
    get(): Promise<v1002000.CoreOccupied[]>
}

export class ParaSchedulerClaimQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'ClaimQueue'
    }

    /**
     *  One entry for each availability core. The `VecDeque` represents the assignments to be
     *  scheduled on that core. `None` is used to signal to not schedule the next para of the core
     *  as there is one currently being scheduled. Not using `None` here would overwrite the
     *  `CoreState` in the runtime API. The value contained here will not be valid after the end of
     *  a block. Runtime APIs should be used to determine scheduled cores/ for the upcoming block.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '13854c1e5341c8a6fc2424b3c769f886b02c96632e3bb915738e5343195246dc'
    }

    /**
     *  One entry for each availability core. The `VecDeque` represents the assignments to be
     *  scheduled on that core. `None` is used to signal to not schedule the next para of the core
     *  as there is one currently being scheduled. Not using `None` here would overwrite the
     *  `CoreState` in the runtime API. The value contained here will not be valid after the end of
     *  a block. Runtime APIs should be used to determine scheduled cores/ for the upcoming block.
     */
    get asV1001002(): ParaSchedulerClaimQueueStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  One entry for each availability core. The `VecDeque` represents the assignments to be
     *  scheduled on that core. `None` is used to signal to not schedule the next para of the core
     *  as there is one currently being scheduled. Not using `None` here would overwrite the
     *  `CoreState` in the runtime API. The value contained here will not be valid after the end of
     *  a block. Runtime APIs should be used to determine scheduled cores/ for the upcoming block.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'bdae4b61a451e615bb19dcfb5d2247c4fe9b9a4092e7a8c763595483cb8b5c31'
    }

    /**
     *  One entry for each availability core. The `VecDeque` represents the assignments to be
     *  scheduled on that core. `None` is used to signal to not schedule the next para of the core
     *  as there is one currently being scheduled. Not using `None` here would overwrite the
     *  `CoreState` in the runtime API. The value contained here will not be valid after the end of
     *  a block. Runtime APIs should be used to determine scheduled cores/ for the upcoming block.
     */
    get asV1002000(): ParaSchedulerClaimQueueStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  One entry for each availability core. The `VecDeque` represents the assignments to be
 *  scheduled on that core. `None` is used to signal to not schedule the next para of the core
 *  as there is one currently being scheduled. Not using `None` here would overwrite the
 *  `CoreState` in the runtime API. The value contained here will not be valid after the end of
 *  a block. Runtime APIs should be used to determine scheduled cores/ for the upcoming block.
 */
export interface ParaSchedulerClaimQueueStorageV1001002 {
    get(): Promise<[number, (v1001002.ParasEntry | undefined)[]][]>
}

/**
 *  One entry for each availability core. The `VecDeque` represents the assignments to be
 *  scheduled on that core. `None` is used to signal to not schedule the next para of the core
 *  as there is one currently being scheduled. Not using `None` here would overwrite the
 *  `CoreState` in the runtime API. The value contained here will not be valid after the end of
 *  a block. Runtime APIs should be used to determine scheduled cores/ for the upcoming block.
 */
export interface ParaSchedulerClaimQueueStorageV1002000 {
    get(): Promise<[number, v1002000.ParasEntry[]][]>
}

export class ParaSchedulerSessionStartBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'SessionStartBlock'
    }

    /**
     *  The block number where the session start occurred. Used to track how many group rotations
     *  have occurred.
     * 
     *  Note that in the context of parachains modules the session change is signaled during
     *  the block and enacted at the end of the block (at the finalization stage, to be exact).
     *  Thus for all intents and purposes the effect of the session change is observed at the
     *  block following the session change, block number of which we save in this storage value.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The block number where the session start occurred. Used to track how many group rotations
     *  have occurred.
     * 
     *  Note that in the context of parachains modules the session change is signaled during
     *  the block and enacted at the end of the block (at the finalization stage, to be exact).
     *  Thus for all intents and purposes the effect of the session change is observed at the
     *  block following the session change, block number of which we save in this storage value.
     */
    get asV1001002(): ParaSchedulerSessionStartBlockStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The block number where the session start occurred. Used to track how many group rotations
 *  have occurred.
 * 
 *  Note that in the context of parachains modules the session change is signaled during
 *  the block and enacted at the end of the block (at the finalization stage, to be exact).
 *  Thus for all intents and purposes the effect of the session change is observed at the
 *  block following the session change, block number of which we save in this storage value.
 */
export interface ParaSchedulerSessionStartBlockStorageV1001002 {
    get(): Promise<number>
}

export class ParaSchedulerValidatorGroupsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaScheduler'
    }

    protected getName() {
        return 'ValidatorGroups'
    }

    /**
     *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
     *  broader set of Polkadot validators, but instead just the subset used for parachains during
     *  this session.
     * 
     *  Bound: The number of cores is the sum of the numbers of parachains and parathread
     *  multiplexers. Reasonably, 100-1000. The dominant factor is the number of validators: safe
     *  upper bound at 10k.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '6812c4f54daaeff8842c0895b0d89bea407fdfe1c921e760ce2f412477ce233d'
    }

    /**
     *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
     *  broader set of Polkadot validators, but instead just the subset used for parachains during
     *  this session.
     * 
     *  Bound: The number of cores is the sum of the numbers of parachains and parathread
     *  multiplexers. Reasonably, 100-1000. The dominant factor is the number of validators: safe
     *  upper bound at 10k.
     */
    get asV1001002(): ParaSchedulerValidatorGroupsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
 *  broader set of Polkadot validators, but instead just the subset used for parachains during
 *  this session.
 * 
 *  Bound: The number of cores is the sum of the numbers of parachains and parathread
 *  multiplexers. Reasonably, 100-1000. The dominant factor is the number of validators: safe
 *  upper bound at 10k.
 */
export interface ParaSchedulerValidatorGroupsStorageV1001002 {
    get(): Promise<number[][]>
}

export class ParaSessionInfoAccountKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'AccountKeys'
    }

    /**
     *  The validator account keys of the validators actively participating in parachain consensus.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '9ec34a723b63dfc1d78a2d356bbdb08e5be19ef85e221f93b46f03e24229ffd0'
    }

    /**
     *  The validator account keys of the validators actively participating in parachain consensus.
     */
    get asV1001002(): ParaSessionInfoAccountKeysStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The validator account keys of the validators actively participating in parachain consensus.
 */
export interface ParaSessionInfoAccountKeysStorageV1001002 {
    get(key: number): Promise<(Uint8Array[] | undefined)>
    getAll(): Promise<Uint8Array[][]>
    getMany(keys: number[]): Promise<(Uint8Array[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array[]][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array[]][]>
}

export class ParaSessionInfoAssignmentKeysUnsafeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'AssignmentKeysUnsafe'
    }

    /**
     *  Assignment keys for the current session.
     *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
     *  When in doubt, use `Sessions` API instead.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Assignment keys for the current session.
     *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
     *  When in doubt, use `Sessions` API instead.
     */
    get asV1001002(): ParaSessionInfoAssignmentKeysUnsafeStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Assignment keys for the current session.
 *  Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
 *  When in doubt, use `Sessions` API instead.
 */
export interface ParaSessionInfoAssignmentKeysUnsafeStorageV1001002 {
    get(): Promise<Uint8Array[]>
}

export class ParaSessionInfoEarliestStoredSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'EarliestStoredSession'
    }

    /**
     *  The earliest session for which previous session info is stored.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The earliest session for which previous session info is stored.
     */
    get asV1001002(): ParaSessionInfoEarliestStoredSessionStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The earliest session for which previous session info is stored.
 */
export interface ParaSessionInfoEarliestStoredSessionStorageV1001002 {
    get(): Promise<number>
}

export class ParaSessionInfoSessionExecutorParamsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'SessionExecutorParams'
    }

    /**
     *  Executor parameter set for a given session index
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'adef626da99b30a4e9862c45fef3ada49ed979bf86b1897fe7492b09dfa62a31'
    }

    /**
     *  Executor parameter set for a given session index
     */
    get asV1001002(): ParaSessionInfoSessionExecutorParamsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Executor parameter set for a given session index
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'fd2cc16ef363dffa1ba9862335454be0cbdb5a5ebd5b026fd81eeec263e6d07c'
    }

    /**
     *  Executor parameter set for a given session index
     */
    get asV1002000(): ParaSessionInfoSessionExecutorParamsStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Executor parameter set for a given session index
 */
export interface ParaSessionInfoSessionExecutorParamsStorageV1001002 {
    get(key: number): Promise<(v1001002.V6ExecutorParam[] | undefined)>
    getAll(): Promise<v1001002.V6ExecutorParam[][]>
    getMany(keys: number[]): Promise<(v1001002.V6ExecutorParam[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.V6ExecutorParam[]][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.V6ExecutorParam[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.V6ExecutorParam[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.V6ExecutorParam[]][]>
}

/**
 *  Executor parameter set for a given session index
 */
export interface ParaSessionInfoSessionExecutorParamsStorageV1002000 {
    get(key: number): Promise<(v1002000.V6ExecutorParam[] | undefined)>
    getAll(): Promise<v1002000.V6ExecutorParam[][]>
    getMany(keys: number[]): Promise<(v1002000.V6ExecutorParam[] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1002000.V6ExecutorParam[]][]>
    getPairs(key: number): Promise<[k: number, v: v1002000.V6ExecutorParam[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1002000.V6ExecutorParam[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1002000.V6ExecutorParam[]][]>
}

export class ParaSessionInfoSessionsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParaSessionInfo'
    }

    protected getName() {
        return 'Sessions'
    }

    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '2df170f53bbb8953f8c99d9d7899c64705f4a7bf2a4a355720ab5a1d2f0698f5'
    }

    /**
     *  Session information in a rolling window.
     *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
     *  Does not have any entries before the session index in the first session change notification.
     */
    get asV1001002(): ParaSessionInfoSessionsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Session information in a rolling window.
 *  Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
 *  Does not have any entries before the session index in the first session change notification.
 */
export interface ParaSessionInfoSessionsStorageV1001002 {
    get(key: number): Promise<(v1001002.V6SessionInfo | undefined)>
    getAll(): Promise<v1001002.V6SessionInfo[]>
    getMany(keys: number[]): Promise<(v1001002.V6SessionInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.V6SessionInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.V6SessionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.V6SessionInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.V6SessionInfo][]>
}

export class ParametersParametersStorage extends StorageBase {
    protected getPrefix() {
        return 'Parameters'
    }

    protected getName() {
        return 'Parameters'
    }

    /**
     *  Stored parameters.
     */
    get isV1003003(): boolean {
        return this.getTypeHash() === '4bb377ccb587c33da44c5f42a2030a04178ac9d10a3c13a2d37fa76da4d570d5'
    }

    /**
     *  Stored parameters.
     */
    get asV1003003(): ParametersParametersStorageV1003003 {
        assert(this.isV1003003)
        return this as any
    }
}

/**
 *  Stored parameters.
 */
export interface ParametersParametersStorageV1003003 {
    get(key: v1003003.RuntimeParametersKey): Promise<(v1003003.RuntimeParametersValue | undefined)>
    getAll(): Promise<v1003003.RuntimeParametersValue[]>
    getMany(keys: v1003003.RuntimeParametersKey[]): Promise<(v1003003.RuntimeParametersValue | undefined)[]>
    getKeys(): Promise<v1003003.RuntimeParametersKey[]>
    getKeys(key: v1003003.RuntimeParametersKey): Promise<v1003003.RuntimeParametersKey[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1003003.RuntimeParametersKey[]>
    getKeysPaged(pageSize: number, key: v1003003.RuntimeParametersKey): AsyncIterable<v1003003.RuntimeParametersKey[]>
    getPairs(): Promise<[k: v1003003.RuntimeParametersKey, v: v1003003.RuntimeParametersValue][]>
    getPairs(key: v1003003.RuntimeParametersKey): Promise<[k: v1003003.RuntimeParametersKey, v: v1003003.RuntimeParametersValue][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1003003.RuntimeParametersKey, v: v1003003.RuntimeParametersValue][]>
    getPairsPaged(pageSize: number, key: v1003003.RuntimeParametersKey): AsyncIterable<[k: v1003003.RuntimeParametersKey, v: v1003003.RuntimeParametersValue][]>
}

export class ParasActionsQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'ActionsQueue'
    }

    /**
     *  The actions to perform during the start of a specific session index.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '658d2a0e4c0496c7ec6509ec9f9225367a2fe5423046f7a05bea5631d2686d47'
    }

    /**
     *  The actions to perform during the start of a specific session index.
     */
    get asV1001002(): ParasActionsQueueStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The actions to perform during the start of a specific session index.
 */
export interface ParasActionsQueueStorageV1001002 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class ParasCodeByHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'CodeByHash'
    }

    /**
     *  Validation code stored by its hash.
     * 
     *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
     *  [`PastCodeHash`].
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Validation code stored by its hash.
     * 
     *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
     *  [`PastCodeHash`].
     */
    get asV1001002(): ParasCodeByHashStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Validation code stored by its hash.
 * 
 *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
 *  [`PastCodeHash`].
 */
export interface ParasCodeByHashStorageV1001002 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class ParasCodeByHashRefsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'CodeByHashRefs'
    }

    /**
     *  The number of reference on the validation code in [`CodeByHash`] storage.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The number of reference on the validation code in [`CodeByHash`] storage.
     */
    get asV1001002(): ParasCodeByHashRefsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The number of reference on the validation code in [`CodeByHash`] storage.
 */
export interface ParasCodeByHashRefsStorageV1001002 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class ParasCurrentCodeHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'CurrentCodeHash'
    }

    /**
     *  The validation code hash of every live para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  The validation code hash of every live para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get asV1001002(): ParasCurrentCodeHashStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The validation code hash of every live para.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface ParasCurrentCodeHashStorageV1001002 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParasFutureCodeHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'FutureCodeHash'
    }

    /**
     *  The actual future code hash of a para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  The actual future code hash of a para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get asV1001002(): ParasFutureCodeHashStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The actual future code hash of a para.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface ParasFutureCodeHashStorageV1001002 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParasFutureCodeUpgradesStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'FutureCodeUpgrades'
    }

    /**
     *  The block number at which the planned code change is expected for a para.
     *  The change will be applied after the first parablock for this ID included which executes
     *  in the context of a relay chain block with a number >= `expected_at`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The block number at which the planned code change is expected for a para.
     *  The change will be applied after the first parablock for this ID included which executes
     *  in the context of a relay chain block with a number >= `expected_at`.
     */
    get asV1001002(): ParasFutureCodeUpgradesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The block number at which the planned code change is expected for a para.
 *  The change will be applied after the first parablock for this ID included which executes
 *  in the context of a relay chain block with a number >= `expected_at`.
 */
export interface ParasFutureCodeUpgradesStorageV1001002 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class ParasFutureCodeUpgradesAtStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'FutureCodeUpgradesAt'
    }

    /**
     *  The list of upcoming future code upgrades.
     * 
     *  Each item is a pair of the parachain and the expected block at which the upgrade should be
     *  applied. The upgrade will be applied at the given relay chain block. In contrast to
     *  [`FutureCodeUpgrades`] this code upgrade will be applied regardless the parachain making any
     *  progress or not.
     * 
     *  Ordered ascending by block number.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  The list of upcoming future code upgrades.
     * 
     *  Each item is a pair of the parachain and the expected block at which the upgrade should be
     *  applied. The upgrade will be applied at the given relay chain block. In contrast to
     *  [`FutureCodeUpgrades`] this code upgrade will be applied regardless the parachain making any
     *  progress or not.
     * 
     *  Ordered ascending by block number.
     */
    get asV1003000(): ParasFutureCodeUpgradesAtStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  The list of upcoming future code upgrades.
 * 
 *  Each item is a pair of the parachain and the expected block at which the upgrade should be
 *  applied. The upgrade will be applied at the given relay chain block. In contrast to
 *  [`FutureCodeUpgrades`] this code upgrade will be applied regardless the parachain making any
 *  progress or not.
 * 
 *  Ordered ascending by block number.
 */
export interface ParasFutureCodeUpgradesAtStorageV1003000 {
    get(): Promise<[number, number][]>
}

export class ParasHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'Heads'
    }

    /**
     *  The head-data of every registered para.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The head-data of every registered para.
     */
    get asV1001002(): ParasHeadsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The head-data of every registered para.
 */
export interface ParasHeadsStorageV1001002 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ParasMostRecentContextStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'MostRecentContext'
    }

    /**
     *  The context (relay-chain block number) of the most recent parachain head.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The context (relay-chain block number) of the most recent parachain head.
     */
    get asV1001002(): ParasMostRecentContextStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The context (relay-chain block number) of the most recent parachain head.
 */
export interface ParasMostRecentContextStorageV1001002 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class ParasParaLifecyclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'ParaLifecycles'
    }

    /**
     *  The current lifecycle of a all known Para IDs.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '473075bfac0a21c841bb0ec54a9d1b0a1103a28ca5c11fc19789ead6f56d4516'
    }

    /**
     *  The current lifecycle of a all known Para IDs.
     */
    get asV1001002(): ParasParaLifecyclesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The current lifecycle of a all known Para IDs.
 */
export interface ParasParaLifecyclesStorageV1001002 {
    get(key: number): Promise<(v1001002.ParaLifecycle | undefined)>
    getAll(): Promise<v1001002.ParaLifecycle[]>
    getMany(keys: number[]): Promise<(v1001002.ParaLifecycle | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.ParaLifecycle][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.ParaLifecycle][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.ParaLifecycle][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.ParaLifecycle][]>
}

export class ParasParachainsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'Parachains'
    }

    /**
     *  All lease holding parachains. Ordered ascending by `ParaId`. On demand parachains are not
     *  included.
     * 
     *  Consider using the [`ParachainsCache`] type of modifying.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  All lease holding parachains. Ordered ascending by `ParaId`. On demand parachains are not
     *  included.
     * 
     *  Consider using the [`ParachainsCache`] type of modifying.
     */
    get asV1001002(): ParasParachainsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  All lease holding parachains. Ordered ascending by `ParaId`. On demand parachains are not
 *  included.
 * 
 *  Consider using the [`ParachainsCache`] type of modifying.
 */
export interface ParasParachainsStorageV1001002 {
    get(): Promise<number[]>
}

export class ParasPastCodeHashStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PastCodeHash'
    }

    /**
     *  Actual past code hash, indicated by the para id as well as the block number at which it
     *  became outdated.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '0d2411ae362670c0960f353ffe86371ae2c0b12979565bcbd9e6dd986619632d'
    }

    /**
     *  Actual past code hash, indicated by the para id as well as the block number at which it
     *  became outdated.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    get asV1001002(): ParasPastCodeHashStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Actual past code hash, indicated by the para id as well as the block number at which it
 *  became outdated.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface ParasPastCodeHashStorageV1001002 {
    get(key: [number, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key: [number, number]): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key: [number, number]): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key: [number, number]): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [number, number]): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class ParasPastCodeMetaStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PastCodeMeta'
    }

    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to keep it available for approval checkers.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a069a7aca8874185413a0d1fd88ae2c96bd7ecd883dd17c9e349867c0b602302'
    }

    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to keep it available for approval checkers.
     */
    get asV1001002(): ParasPastCodeMetaStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Past code of parachains. The parachains themselves may not be registered anymore,
 *  but we also keep their code on-chain for the same amount of time as outdated code
 *  to keep it available for approval checkers.
 */
export interface ParasPastCodeMetaStorageV1001002 {
    get(key: number): Promise<v1001002.ParaPastCodeMeta>
    getAll(): Promise<v1001002.ParaPastCodeMeta[]>
    getMany(keys: number[]): Promise<v1001002.ParaPastCodeMeta[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.ParaPastCodeMeta][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.ParaPastCodeMeta][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.ParaPastCodeMeta][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.ParaPastCodeMeta][]>
}

export class ParasPastCodePruningStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PastCodePruning'
    }

    /**
     *  Which paras have past code that needs pruning and the relay-chain block at which the code
     *  was replaced. Note that this is the actual height of the included block, not the expected
     *  height at which the code upgrade would be applied, although they may be equal.
     *  This is to ensure the entire acceptance period is covered, not an offset acceptance period
     *  starting from the time at which the parachain perceives a code upgrade as having occurred.
     *  Multiple entries for a single para are permitted. Ordered ascending by block number.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  Which paras have past code that needs pruning and the relay-chain block at which the code
     *  was replaced. Note that this is the actual height of the included block, not the expected
     *  height at which the code upgrade would be applied, although they may be equal.
     *  This is to ensure the entire acceptance period is covered, not an offset acceptance period
     *  starting from the time at which the parachain perceives a code upgrade as having occurred.
     *  Multiple entries for a single para are permitted. Ordered ascending by block number.
     */
    get asV1001002(): ParasPastCodePruningStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Which paras have past code that needs pruning and the relay-chain block at which the code
 *  was replaced. Note that this is the actual height of the included block, not the expected
 *  height at which the code upgrade would be applied, although they may be equal.
 *  This is to ensure the entire acceptance period is covered, not an offset acceptance period
 *  starting from the time at which the parachain perceives a code upgrade as having occurred.
 *  Multiple entries for a single para are permitted. Ordered ascending by block number.
 */
export interface ParasPastCodePruningStorageV1001002 {
    get(): Promise<[number, number][]>
}

export class ParasPvfActiveVoteListStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PvfActiveVoteList'
    }

    /**
     *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
     */
    get asV1001002(): ParasPvfActiveVoteListStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
 */
export interface ParasPvfActiveVoteListStorageV1001002 {
    get(): Promise<Uint8Array[]>
}

export class ParasPvfActiveVoteMapStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'PvfActiveVoteMap'
    }

    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'e88cfce5f4bdc91e660ae0141e79ca4df0ac1d9ab0beee2aec8516ed6415b782'
    }

    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    get asV1001002(): ParasPvfActiveVoteMapStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === '0c2d9c873611dd8a3ce310576ecba0b37f96d24237e2ef2ef358a44b56aa6b30'
    }

    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    get asV1003000(): ParasPvfActiveVoteMapStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  All currently active PVF pre-checking votes.
 * 
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface ParasPvfActiveVoteMapStorageV1001002 {
    get(key: Uint8Array): Promise<(v1001002.PvfCheckActiveVoteState | undefined)>
    getAll(): Promise<v1001002.PvfCheckActiveVoteState[]>
    getMany(keys: Uint8Array[]): Promise<(v1001002.PvfCheckActiveVoteState | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.PvfCheckActiveVoteState][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.PvfCheckActiveVoteState][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.PvfCheckActiveVoteState][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.PvfCheckActiveVoteState][]>
}

/**
 *  All currently active PVF pre-checking votes.
 * 
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface ParasPvfActiveVoteMapStorageV1003000 {
    get(key: Uint8Array): Promise<(v1003000.PvfCheckActiveVoteState | undefined)>
    getAll(): Promise<v1003000.PvfCheckActiveVoteState[]>
    getMany(keys: Uint8Array[]): Promise<(v1003000.PvfCheckActiveVoteState | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1003000.PvfCheckActiveVoteState][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1003000.PvfCheckActiveVoteState][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1003000.PvfCheckActiveVoteState][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1003000.PvfCheckActiveVoteState][]>
}

export class ParasUpcomingParasGenesisStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpcomingParasGenesis'
    }

    /**
     *  Upcoming paras instantiation arguments.
     * 
     *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
     *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd289d3b26c8320e9e0c7aba2fd8c14649921cc8f60b7a8425448a47acb39146f'
    }

    /**
     *  Upcoming paras instantiation arguments.
     * 
     *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
     *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
     */
    get asV1001002(): ParasUpcomingParasGenesisStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Upcoming paras instantiation arguments.
 * 
 *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
 *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
 */
export interface ParasUpcomingParasGenesisStorageV1001002 {
    get(key: number): Promise<(v1001002.ParaGenesisArgs | undefined)>
    getAll(): Promise<v1001002.ParaGenesisArgs[]>
    getMany(keys: number[]): Promise<(v1001002.ParaGenesisArgs | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.ParaGenesisArgs][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.ParaGenesisArgs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.ParaGenesisArgs][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.ParaGenesisArgs][]>
}

export class ParasUpcomingUpgradesStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpcomingUpgrades'
    }

    /**
     *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
     *  upgrade and at which relay-chain block it is expected at.
     * 
     *  Ordered ascending by block number.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
     *  upgrade and at which relay-chain block it is expected at.
     * 
     *  Ordered ascending by block number.
     */
    get asV1001002(): ParasUpcomingUpgradesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
 *  upgrade and at which relay-chain block it is expected at.
 * 
 *  Ordered ascending by block number.
 */
export interface ParasUpcomingUpgradesStorageV1001002 {
    get(): Promise<[number, number][]>
}

export class ParasUpgradeCooldownsStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpgradeCooldowns'
    }

    /**
     *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
     * 
     *  Ordered ascending by block number.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
     * 
     *  Ordered ascending by block number.
     */
    get asV1001002(): ParasUpgradeCooldownsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
 * 
 *  Ordered ascending by block number.
 */
export interface ParasUpgradeCooldownsStorageV1001002 {
    get(): Promise<[number, number][]>
}

export class ParasUpgradeGoAheadSignalStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpgradeGoAheadSignal'
    }

    /**
     *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade
     *  procedure.
     * 
     *  This value is absent when there are no upgrades scheduled or during the time the relay chain
     *  performs the checks. It is set at the first relay-chain block when the corresponding
     *  parachain can switch its upgrade function. As soon as the parachain's block is included, the
     *  value gets reset to `None`.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '786a03d0aa558686ca05fde11178abf8294fdf543e7653a81ffbb6a04bbe926d'
    }

    /**
     *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade
     *  procedure.
     * 
     *  This value is absent when there are no upgrades scheduled or during the time the relay chain
     *  performs the checks. It is set at the first relay-chain block when the corresponding
     *  parachain can switch its upgrade function. As soon as the parachain's block is included, the
     *  value gets reset to `None`.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get asV1001002(): ParasUpgradeGoAheadSignalStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade
 *  procedure.
 * 
 *  This value is absent when there are no upgrades scheduled or during the time the relay chain
 *  performs the checks. It is set at the first relay-chain block when the corresponding
 *  parachain can switch its upgrade function. As soon as the parachain's block is included, the
 *  value gets reset to `None`.
 * 
 *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
 *  the format will require migration of parachains.
 */
export interface ParasUpgradeGoAheadSignalStorageV1001002 {
    get(key: number): Promise<(v1001002.V6UpgradeGoAhead | undefined)>
    getAll(): Promise<v1001002.V6UpgradeGoAhead[]>
    getMany(keys: number[]): Promise<(v1001002.V6UpgradeGoAhead | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.V6UpgradeGoAhead][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.V6UpgradeGoAhead][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.V6UpgradeGoAhead][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.V6UpgradeGoAhead][]>
}

export class ParasUpgradeRestrictionSignalStorage extends StorageBase {
    protected getPrefix() {
        return 'Paras'
    }

    protected getName() {
        return 'UpgradeRestrictionSignal'
    }

    /**
     *  This is used by the relay-chain to communicate that there are restrictions for performing
     *  an upgrade for this parachain.
     * 
     *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
     *  potential use case is when we want to perform some maintenance (such as storage migration)
     *  we could restrict upgrades to make the process simpler.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '62e7d5f232f72916126ae45cffcab9e9fdfc355aeb79076a51f4aebd84afeb61'
    }

    /**
     *  This is used by the relay-chain to communicate that there are restrictions for performing
     *  an upgrade for this parachain.
     * 
     *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
     *  potential use case is when we want to perform some maintenance (such as storage migration)
     *  we could restrict upgrades to make the process simpler.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    get asV1001002(): ParasUpgradeRestrictionSignalStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  This is used by the relay-chain to communicate that there are restrictions for performing
 *  an upgrade for this parachain.
 * 
 *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
 *  potential use case is when we want to perform some maintenance (such as storage migration)
 *  we could restrict upgrades to make the process simpler.
 * 
 *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
 *  the format will require migration of parachains.
 */
export interface ParasUpgradeRestrictionSignalStorageV1001002 {
    get(key: number): Promise<(v1001002.V6UpgradeRestriction | undefined)>
    getAll(): Promise<v1001002.V6UpgradeRestriction[]>
    getMany(keys: number[]): Promise<(v1001002.V6UpgradeRestriction | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.V6UpgradeRestriction][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.V6UpgradeRestriction][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.V6UpgradeRestriction][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.V6UpgradeRestriction][]>
}

export class ParasDisputesBackersOnDisputesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'BackersOnDisputes'
    }

    /**
     *  Backing votes stored for each dispute.
     *  This storage is used for slashing.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '0927addfecff9f8363e42d134edf2ce1156c2efdf83e698127f2c98bf17267de'
    }

    /**
     *  Backing votes stored for each dispute.
     *  This storage is used for slashing.
     */
    get asV1001002(): ParasDisputesBackersOnDisputesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Backing votes stored for each dispute.
 *  This storage is used for slashing.
 */
export interface ParasDisputesBackersOnDisputesStorageV1001002 {
    get(key1: number, key2: Uint8Array): Promise<(number[] | undefined)>
    getAll(): Promise<number[][]>
    getMany(keys: [number, Uint8Array][]): Promise<(number[] | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number[]][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number[]][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number[]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number[]][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number[]][]>
}

export class ParasDisputesDisputesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'Disputes'
    }

    /**
     *  All ongoing or concluded disputes for the last several sessions.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '33f09b62f3e474c60f6ef89b56ae30d73cc40bae8a2b340cfd6d7548cf01234e'
    }

    /**
     *  All ongoing or concluded disputes for the last several sessions.
     */
    get asV1001002(): ParasDisputesDisputesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  All ongoing or concluded disputes for the last several sessions.
 */
export interface ParasDisputesDisputesStorageV1001002 {
    get(key1: number, key2: Uint8Array): Promise<(v1001002.V6DisputeState | undefined)>
    getAll(): Promise<v1001002.V6DisputeState[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v1001002.V6DisputeState | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v1001002.V6DisputeState][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v1001002.V6DisputeState][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v1001002.V6DisputeState][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v1001002.V6DisputeState][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v1001002.V6DisputeState][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v1001002.V6DisputeState][]>
}

export class ParasDisputesFrozenStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'Frozen'
    }

    /**
     *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
     *  the chain will not accept any new parachain blocks for backing or inclusion,
     *  and its value indicates the last valid block number in the chain.
     *  It can only be set back to `None` by governance intervention.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '19526a9e9cd1a1912441bd5e7765970e1b7352c8a5ea7e7769fa36f8d2329f24'
    }

    /**
     *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
     *  the chain will not accept any new parachain blocks for backing or inclusion,
     *  and its value indicates the last valid block number in the chain.
     *  It can only be set back to `None` by governance intervention.
     */
    get asV1001002(): ParasDisputesFrozenStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Whether the chain is frozen. Starts as `None`. When this is `Some`,
 *  the chain will not accept any new parachain blocks for backing or inclusion,
 *  and its value indicates the last valid block number in the chain.
 *  It can only be set back to `None` by governance intervention.
 */
export interface ParasDisputesFrozenStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class ParasDisputesIncludedStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'Included'
    }

    /**
     *  All included blocks on the chain, as well as the block number in this chain that
     *  should be reverted back to if the candidate is disputed and determined to be invalid.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '6c6235f5b0f971e080667bebe750cb6adb3a9877df221e67b3dc7a4419cdc5c1'
    }

    /**
     *  All included blocks on the chain, as well as the block number in this chain that
     *  should be reverted back to if the candidate is disputed and determined to be invalid.
     */
    get asV1001002(): ParasDisputesIncludedStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  All included blocks on the chain, as well as the block number in this chain that
 *  should be reverted back to if the candidate is disputed and determined to be invalid.
 */
export interface ParasDisputesIncludedStorageV1001002 {
    get(key1: number, key2: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class ParasDisputesLastPrunedSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasDisputes'
    }

    protected getName() {
        return 'LastPrunedSession'
    }

    /**
     *  The last pruned session, if any. All data stored by this module
     *  references sessions.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The last pruned session, if any. All data stored by this module
     *  references sessions.
     */
    get asV1001002(): ParasDisputesLastPrunedSessionStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The last pruned session, if any. All data stored by this module
 *  references sessions.
 */
export interface ParasDisputesLastPrunedSessionStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class ParasSharedActiveValidatorIndicesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasShared'
    }

    protected getName() {
        return 'ActiveValidatorIndices'
    }

    /**
     *  All the validators actively participating in parachain consensus.
     *  Indices are into the broader validator set.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  All the validators actively participating in parachain consensus.
     *  Indices are into the broader validator set.
     */
    get asV1001002(): ParasSharedActiveValidatorIndicesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  All the validators actively participating in parachain consensus.
 *  Indices are into the broader validator set.
 */
export interface ParasSharedActiveValidatorIndicesStorageV1001002 {
    get(): Promise<number[]>
}

export class ParasSharedActiveValidatorKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasShared'
    }

    protected getName() {
        return 'ActiveValidatorKeys'
    }

    /**
     *  The parachain attestation keys of the validators actively participating in parachain
     *  consensus. This should be the same length as `ActiveValidatorIndices`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The parachain attestation keys of the validators actively participating in parachain
     *  consensus. This should be the same length as `ActiveValidatorIndices`.
     */
    get asV1001002(): ParasSharedActiveValidatorKeysStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The parachain attestation keys of the validators actively participating in parachain
 *  consensus. This should be the same length as `ActiveValidatorIndices`.
 */
export interface ParasSharedActiveValidatorKeysStorageV1001002 {
    get(): Promise<Uint8Array[]>
}

export class ParasSharedAllowedRelayParentsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasShared'
    }

    protected getName() {
        return 'AllowedRelayParents'
    }

    /**
     *  All allowed relay-parents.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '6e4228b38e518cf2f3fa713f38d42593ad3c17531ad83445eaac072f50552c64'
    }

    /**
     *  All allowed relay-parents.
     */
    get asV1001002(): ParasSharedAllowedRelayParentsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  All allowed relay-parents.
 */
export interface ParasSharedAllowedRelayParentsStorageV1001002 {
    get(): Promise<v1001002.AllowedRelayParentsTracker>
}

export class ParasSharedCurrentSessionIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasShared'
    }

    protected getName() {
        return 'CurrentSessionIndex'
    }

    /**
     *  The current session index.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current session index.
     */
    get asV1001002(): ParasSharedCurrentSessionIndexStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The current session index.
 */
export interface ParasSharedCurrentSessionIndexStorageV1001002 {
    get(): Promise<number>
}

export class ParasSlashingUnappliedSlashesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasSlashing'
    }

    protected getName() {
        return 'UnappliedSlashes'
    }

    /**
     *  Validators pending dispute slashes.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '74c2dadfcd08c5fc0cd7baaf8297441d73fb8e8fb487d1da56cc9fd4b6202edc'
    }

    /**
     *  Validators pending dispute slashes.
     */
    get asV1001002(): ParasSlashingUnappliedSlashesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Validators pending dispute slashes.
 */
export interface ParasSlashingUnappliedSlashesStorageV1001002 {
    get(key1: number, key2: Uint8Array): Promise<(v1001002.V6PendingSlashes | undefined)>
    getAll(): Promise<v1001002.V6PendingSlashes[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v1001002.V6PendingSlashes | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v1001002.V6PendingSlashes][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v1001002.V6PendingSlashes][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v1001002.V6PendingSlashes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v1001002.V6PendingSlashes][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v1001002.V6PendingSlashes][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v1001002.V6PendingSlashes][]>
}

export class ParasSlashingValidatorSetCountsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParasSlashing'
    }

    protected getName() {
        return 'ValidatorSetCounts'
    }

    /**
     *  `ValidatorSetCount` per session.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  `ValidatorSetCount` per session.
     */
    get asV1001002(): ParasSlashingValidatorSetCountsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  `ValidatorSetCount` per session.
 */
export interface ParasSlashingValidatorSetCountsStorageV1001002 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    get isV1001002(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV1001002(): PreimagePreimageForStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

export interface PreimagePreimageForStorageV1001002 {
    get(key: [Uint8Array, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
}

export class PreimageRequestStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'RequestStatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '6a87e8113c01201fa0ee74181e0157bbf27414c84be015b1cf221c32fca76279'
    }

    /**
     *  The request status of a given hash.
     */
    get asV1001002(): PreimageRequestStatusForStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageRequestStatusForStorageV1001002 {
    get(key: Uint8Array): Promise<(v1001002.RequestStatus | undefined)>
    getAll(): Promise<v1001002.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1001002.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.RequestStatus][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV1001002(): PreimageStatusForStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV1001002 {
    get(key: Uint8Array): Promise<(v1001002.OldRequestStatus | undefined)>
    getAll(): Promise<v1001002.OldRequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1001002.OldRequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.OldRequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.OldRequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.OldRequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.OldRequestStatus][]>
}

export class ProxyAnnouncementsStorage extends StorageBase {
    protected getPrefix() {
        return 'Proxy'
    }

    protected getName() {
        return 'Announcements'
    }

    /**
     *  The announcements made by the proxy (key).
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'b93d53c53a308d910b0304bf5593bd71084bcf177629ea67da68b9026f4b417c'
    }

    /**
     *  The announcements made by the proxy (key).
     */
    get asV1001002(): ProxyAnnouncementsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The announcements made by the proxy (key).
 */
export interface ProxyAnnouncementsStorageV1001002 {
    get(key: Uint8Array): Promise<[v1001002.Announcement[], bigint]>
    getAll(): Promise<[v1001002.Announcement[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v1001002.Announcement[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v1001002.Announcement[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v1001002.Announcement[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v1001002.Announcement[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v1001002.Announcement[], bigint]][]>
}

export class ProxyProxiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Proxy'
    }

    protected getName() {
        return 'Proxies'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '7214be83d1954e5e864e6d3209c50dfc4f2c4733435a38ff4952d69a03e548f7'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV1001002(): ProxyProxiesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === 'c042d65a31a6c1bb643aae907230e621a285e27bc973abdaaecbf4d5a4c4c002'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV1003000(): ProxyProxiesStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV1001002 {
    get(key: Uint8Array): Promise<[v1001002.ProxyDefinition[], bigint]>
    getAll(): Promise<[v1001002.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v1001002.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v1001002.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v1001002.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v1001002.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v1001002.ProxyDefinition[], bigint]][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV1003000 {
    get(key: Uint8Array): Promise<[v1003000.ProxyDefinition[], bigint]>
    getAll(): Promise<[v1003000.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v1003000.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v1003000.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v1003000.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v1003000.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v1003000.ProxyDefinition[], bigint]][]>
}

export class ReferendaDecidingCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'DecidingCount'
    }

    /**
     *  The number of referenda being decided currently.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '1b8a61a1a77f8c4a893b856d3455f1f9ced6f6e4bfe87bb8b1390b14318a4333'
    }

    /**
     *  The number of referenda being decided currently.
     */
    get asV1001002(): ReferendaDecidingCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The number of referenda being decided currently.
 */
export interface ReferendaDecidingCountStorageV1001002 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class ReferendaMetadataOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'MetadataOf'
    }

    /**
     *  The metadata is a general information concerning the referendum.
     *  The `Hash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '00f526a103b6eaa28996183d1ec5ad27702e9d35d108bfdcc6c774fc48c5704a'
    }

    /**
     *  The metadata is a general information concerning the referendum.
     *  The `Hash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get asV1001002(): ReferendaMetadataOfStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The metadata is a general information concerning the referendum.
 *  The `Hash` refers to the preimage of the `Preimages` provider which can be a JSON
 *  dump or IPFS hash of a JSON file.
 * 
 *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
 *  large preimages.
 */
export interface ReferendaMetadataOfStorageV1001002 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ReferendaReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asV1001002(): ReferendaReferendumCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface ReferendaReferendumCountStorageV1001002 {
    get(): Promise<number>
}

export class ReferendaReferendumInfoForStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'ReferendumInfoFor'
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'cefb7fa0b1ab1a206e9ca42f0e307dfbd1b1e045e2bf1c0561fe86f8455e48a1'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV1001002(): ReferendaReferendumInfoForStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'df5f4445cd54f0b35ee214d784bdce20aaf89b8e5e9496369bd1e3ded57cd721'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV1002000(): ReferendaReferendumInfoForStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV1001002 {
    get(key: number): Promise<(v1001002.ReferendumInfo | undefined)>
    getAll(): Promise<v1001002.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v1001002.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV1002000 {
    get(key: number): Promise<(v1002000.ReferendumInfo | undefined)>
    getAll(): Promise<v1002000.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v1002000.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1002000.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1002000.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1002000.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1002000.ReferendumInfo][]>
}

export class ReferendaTrackQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'TrackQueue'
    }

    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd59fac77bd4348bf0179a7e6c5ac239a8b8781c07a1524886ec03b3194de72e3'
    }

    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    get asV1001002(): ReferendaTrackQueueStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
 *  conviction-weighted approvals.
 * 
 *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
 */
export interface ReferendaTrackQueueStorageV1001002 {
    get(key: number): Promise<[number, bigint][]>
    getAll(): Promise<[number, bigint][][]>
    getMany(keys: number[]): Promise<[number, bigint][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, bigint][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, bigint][]][]>
}

export class RegistrarNextFreeParaIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'NextFreeParaId'
    }

    /**
     *  The next free `ParaId`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free `ParaId`.
     */
    get asV1001002(): RegistrarNextFreeParaIdStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The next free `ParaId`.
 */
export interface RegistrarNextFreeParaIdStorageV1001002 {
    get(): Promise<number>
}

export class RegistrarParasStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'Paras'
    }

    /**
     *  Amount held on deposit for each para and the original depositor.
     * 
     *  The given account ID is responsible for registering the code and initial head data, but may
     *  only do so if it isn't yet registered. (After that, it's up to governance to do so.)
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '041b09954f4d8ea07449b4090637aa96da99a567067ba37db6e59658557dbcfa'
    }

    /**
     *  Amount held on deposit for each para and the original depositor.
     * 
     *  The given account ID is responsible for registering the code and initial head data, but may
     *  only do so if it isn't yet registered. (After that, it's up to governance to do so.)
     */
    get asV1001002(): RegistrarParasStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Amount held on deposit for each para and the original depositor.
 * 
 *  The given account ID is responsible for registering the code and initial head data, but may
 *  only do so if it isn't yet registered. (After that, it's up to governance to do so.)
 */
export interface RegistrarParasStorageV1001002 {
    get(key: number): Promise<(v1001002.ParaInfo | undefined)>
    getAll(): Promise<v1001002.ParaInfo[]>
    getMany(keys: number[]): Promise<(v1001002.ParaInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.ParaInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.ParaInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.ParaInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.ParaInfo][]>
}

export class RegistrarPendingSwapStorage extends StorageBase {
    protected getPrefix() {
        return 'Registrar'
    }

    protected getName() {
        return 'PendingSwap'
    }

    /**
     *  Pending swap operations.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  Pending swap operations.
     */
    get asV1001002(): RegistrarPendingSwapStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Pending swap operations.
 */
export interface RegistrarPendingSwapStorageV1001002 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SchedulerAgendaStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Agenda'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'eef70e71e3f3baa94c345ce51fe0f4bb96dcd40211156022f13767156c5f1d92'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV1001002(): SchedulerAgendaStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'b83e98111984a915620f7a06429d272e52ad7e5db5188b213f28ec87d4765d8b'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV1002000(): SchedulerAgendaStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV1001002 {
    get(key: number): Promise<(v1001002.Scheduled | undefined)[]>
    getAll(): Promise<(v1001002.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v1001002.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v1001002.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v1001002.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v1001002.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v1001002.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV1002000 {
    get(key: number): Promise<(v1002000.Scheduled | undefined)[]>
    getAll(): Promise<(v1002000.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v1002000.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v1002000.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v1002000.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v1002000.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v1002000.Scheduled | undefined)[]][]>
}

export class SchedulerIncompleteSinceStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'IncompleteSince'
    }

    get isV1001002(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    get asV1001002(): SchedulerIncompleteSinceStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

export interface SchedulerIncompleteSinceStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class SchedulerLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Lookup'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get asV1001002(): SchedulerLookupStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface SchedulerLookupStorageV1001002 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

export class SchedulerRetriesStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Retries'
    }

    /**
     *  Retry configurations for items to be executed, indexed by task address.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === '82ca922b0e7f4863ae09896c506f0ff9920d8cd0f180901b65138006d46cf479'
    }

    /**
     *  Retry configurations for items to be executed, indexed by task address.
     */
    get asV1003000(): SchedulerRetriesStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  Retry configurations for items to be executed, indexed by task address.
 */
export interface SchedulerRetriesStorageV1003000 {
    get(key: [number, number]): Promise<(v1003000.RetryConfig | undefined)>
    getAll(): Promise<v1003000.RetryConfig[]>
    getMany(keys: [number, number][]): Promise<(v1003000.RetryConfig | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key: [number, number]): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key: [number, number]): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v1003000.RetryConfig][]>
    getPairs(key: [number, number]): Promise<[k: [number, number], v: v1003000.RetryConfig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v1003000.RetryConfig][]>
    getPairsPaged(pageSize: number, key: [number, number]): AsyncIterable<[k: [number, number], v: v1003000.RetryConfig][]>
}

export class SessionCurrentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'CurrentIndex'
    }

    /**
     *  Current index of the session.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current index of the session.
     */
    get asV1001002(): SessionCurrentIndexStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Current index of the session.
 */
export interface SessionCurrentIndexStorageV1001002 {
    get(): Promise<number>
}

export class SessionDisabledValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'DisabledValidators'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get asV1001002(): SessionDisabledValidatorsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Indices of disabled validators.
 * 
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface SessionDisabledValidatorsStorageV1001002 {
    get(): Promise<number[]>
}

export class SessionKeyOwnerStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'KeyOwner'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asV1001002(): SessionKeyOwnerStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageV1001002 {
    get(key: [Uint8Array, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key: [Uint8Array, Uint8Array]): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairs(key: [Uint8Array, Uint8Array]): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
}

export class SessionNextKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'NextKeys'
    }

    /**
     *  The next session keys for a validator.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '83d4e88dbe0c24edbd84b74455d402ce11c3715007722a0644e8024ec7dcfef7'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV1001002(): SessionNextKeysStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  The next session keys for a validator.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'c25a045c39f426bb172c3f06871d62a85db966a7e98e44a0f91444c3b7c56fdb'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV1002000(): SessionNextKeysStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV1001002 {
    get(key: Uint8Array): Promise<(v1001002.SessionKeys | undefined)>
    getAll(): Promise<v1001002.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(v1001002.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.SessionKeys][]>
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV1002000 {
    get(key: Uint8Array): Promise<(v1002000.SessionKeys | undefined)>
    getAll(): Promise<v1002000.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(v1002000.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1002000.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1002000.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1002000.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1002000.SessionKeys][]>
}

export class SessionQueuedChangedStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedChanged'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get asV1001002(): SessionQueuedChangedStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface SessionQueuedChangedStorageV1001002 {
    get(): Promise<boolean>
}

export class SessionQueuedKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedKeys'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'cd19e3c624d1805892af1b697c806bb8426b8f8cff3b341fe1e4590e97993421'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV1001002(): SessionQueuedKeysStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '39c9ab53abe575aff923d0dae8d475e1e20b65839408d02fb02228dd44a6a572'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV1002000(): SessionQueuedKeysStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV1001002 {
    get(): Promise<[Uint8Array, v1001002.SessionKeys][]>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV1002000 {
    get(): Promise<[Uint8Array, v1002000.SessionKeys][]>
}

export class SessionValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The current set of validators.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asV1001002(): SessionValidatorsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageV1001002 {
    get(): Promise<Uint8Array[]>
}

export class SlotsLeasesStorage extends StorageBase {
    protected getPrefix() {
        return 'Slots'
    }

    protected getName() {
        return 'Leases'
    }

    /**
     *  Amounts held on deposit for each (possibly future) leased parachain.
     * 
     *  The actual amount locked on its behalf by any account at any time is the maximum of the
     *  second values of the items in this list whose first value is the account.
     * 
     *  The first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     * 
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this pallet is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     * 
     *  It is illegal for a `None` value to trail in the list.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '045289c99cd38832bbd83d1da1c2329eef49e8a0cf672722d68751b969c19980'
    }

    /**
     *  Amounts held on deposit for each (possibly future) leased parachain.
     * 
     *  The actual amount locked on its behalf by any account at any time is the maximum of the
     *  second values of the items in this list whose first value is the account.
     * 
     *  The first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     * 
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this pallet is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     * 
     *  It is illegal for a `None` value to trail in the list.
     */
    get asV1001002(): SlotsLeasesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Amounts held on deposit for each (possibly future) leased parachain.
 * 
 *  The actual amount locked on its behalf by any account at any time is the maximum of the
 *  second values of the items in this list whose first value is the account.
 * 
 *  The first item in the list is the amount locked for the current Lease Period. Following
 *  items are for the subsequent lease periods.
 * 
 *  The default value (an empty list) implies that the parachain no longer exists (or never
 *  existed) as far as this pallet is concerned.
 * 
 *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
 *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
 *  deposit for the non-existent chain currently, but is held at some point in the future.
 * 
 *  It is illegal for a `None` value to trail in the list.
 */
export interface SlotsLeasesStorageV1001002 {
    get(key: number): Promise<([Uint8Array, bigint] | undefined)[]>
    getAll(): Promise<([Uint8Array, bigint] | undefined)[][]>
    getMany(keys: number[]): Promise<([Uint8Array, bigint] | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: ([Uint8Array, bigint] | undefined)[]][]>
}

export class StakingActiveEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ActiveEra'
    }

    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era being currently rewarded. Validator set of this era must be
     *  equal to [`SessionInterface::validators`].
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '2bb946dd9c19de9f4332897005d1255528c610172f7418fae165b5dafd3cfbfe'
    }

    /**
     *  The active era information, it holds index and start.
     * 
     *  The active era is the era being currently rewarded. Validator set of this era must be
     *  equal to [`SessionInterface::validators`].
     */
    get asV1001002(): StakingActiveEraStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The active era information, it holds index and start.
 * 
 *  The active era is the era being currently rewarded. Validator set of this era must be
 *  equal to [`SessionInterface::validators`].
 */
export interface StakingActiveEraStorageV1001002 {
    get(): Promise<(v1001002.ActiveEraInfo | undefined)>
}

export class StakingBondedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Bonded'
    }

    /**
     *  Map from all locked "stash" accounts to the controller account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'de3ac6d702494f77c04d74bab1d59ac44113746a3722fe8b7306730fb0fc740c'
    }

    /**
     *  Map from all locked "stash" accounts to the controller account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV1001002(): StakingBondedStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Map from all locked "stash" accounts to the controller account.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingBondedStorageV1001002 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class StakingBondedErasStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'BondedEras'
    }

    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'b780f37018db8d8815c6dfde98846c55b5b1d988a7cd0aa1531c92701eab1e95'
    }

    /**
     *  A mapping from still-bonded eras to the first session index of that era.
     * 
     *  Must contains information for eras for the range:
     *  `[active_era - bounding_duration; active_era]`
     */
    get asV1001002(): StakingBondedErasStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  A mapping from still-bonded eras to the first session index of that era.
 * 
 *  Must contains information for eras for the range:
 *  `[active_era - bounding_duration; active_era]`
 */
export interface StakingBondedErasStorageV1001002 {
    get(): Promise<[number, number][]>
}

export class StakingCanceledSlashPayoutStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CanceledSlashPayout'
    }

    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount of currency given to reporters of a slash event which was
     *  canceled by extraordinary circumstances (e.g. governance).
     */
    get asV1001002(): StakingCanceledSlashPayoutStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The amount of currency given to reporters of a slash event which was
 *  canceled by extraordinary circumstances (e.g. governance).
 */
export interface StakingCanceledSlashPayoutStorageV1001002 {
    get(): Promise<bigint>
}

export class StakingChillThresholdStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ChillThreshold'
    }

    /**
     *  The threshold for when users can start calling `chill_other` for other validators /
     *  nominators. The threshold is compared to the actual number of validators / nominators
     *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a05bf6dd806233a6b9a22cb1cd50bcf79bcb6a1f3014c295988bec299abc5cd3'
    }

    /**
     *  The threshold for when users can start calling `chill_other` for other validators /
     *  nominators. The threshold is compared to the actual number of validators / nominators
     *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
     */
    get asV1001002(): StakingChillThresholdStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The threshold for when users can start calling `chill_other` for other validators /
 *  nominators. The threshold is compared to the actual number of validators / nominators
 *  (`CountFor*`) in the system compared to the configured max (`Max*Count`).
 */
export interface StakingChillThresholdStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class StakingClaimedRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ClaimedRewards'
    }

    /**
     *  History of claimed paged rewards by era and validator.
     * 
     *  This is keyed by era and validator stash which maps to the set of page indexes which have
     *  been claimed.
     * 
     *  It is removed after [`Config::HistoryDepth`] eras.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '6a45d8e17ad3cf1d48e927171db9480ad0a210ff923ae5d8b11b3b721b524527'
    }

    /**
     *  History of claimed paged rewards by era and validator.
     * 
     *  This is keyed by era and validator stash which maps to the set of page indexes which have
     *  been claimed.
     * 
     *  It is removed after [`Config::HistoryDepth`] eras.
     */
    get asV1002000(): StakingClaimedRewardsStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  History of claimed paged rewards by era and validator.
 * 
 *  This is keyed by era and validator stash which maps to the set of page indexes which have
 *  been claimed.
 * 
 *  It is removed after [`Config::HistoryDepth`] eras.
 */
export interface StakingClaimedRewardsStorageV1002000 {
    get(key1: number, key2: Uint8Array): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: [number, Uint8Array][]): Promise<number[][]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number[]][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number[]][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number[]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number[]][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number[]][]>
}

export class StakingCounterForNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CounterForNominators'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV1001002(): StakingCounterForNominatorsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface StakingCounterForNominatorsStorageV1001002 {
    get(): Promise<number>
}

export class StakingCounterForValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CounterForValidators'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV1001002(): StakingCounterForValidatorsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface StakingCounterForValidatorsStorageV1001002 {
    get(): Promise<number>
}

export class StakingCounterForVirtualStakersStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CounterForVirtualStakers'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV1003000(): StakingCounterForVirtualStakersStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface StakingCounterForVirtualStakersStorageV1003000 {
    get(): Promise<number>
}

export class StakingCurrentEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentEra'
    }

    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The current era index.
     * 
     *  This is the latest planned era, depending on how the Session pallet queues the validator
     *  set, it might be active or not.
     */
    get asV1001002(): StakingCurrentEraStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The current era index.
 * 
 *  This is the latest planned era, depending on how the Session pallet queues the validator
 *  set, it might be active or not.
 */
export interface StakingCurrentEraStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class StakingCurrentPlannedSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'CurrentPlannedSession'
    }

    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The last planned session scheduled by the session pallet.
     * 
     *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
     */
    get asV1001002(): StakingCurrentPlannedSessionStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The last planned session scheduled by the session pallet.
 * 
 *  This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
 */
export interface StakingCurrentPlannedSessionStorageV1001002 {
    get(): Promise<number>
}

export class StakingDisabledValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'DisabledValidators'
    }

    /**
     *  Indices of validators that have offended in the active era. The offenders are disabled for a
     *  whole era. For this reason they are kept here - only staking pallet knows about eras. The
     *  implementor of [`DisablingStrategy`] defines if a validator should be disabled which
     *  implicitly means that the implementor also controls the max number of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator has previously
     *  offended using binary search.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of validators that have offended in the active era. The offenders are disabled for a
     *  whole era. For this reason they are kept here - only staking pallet knows about eras. The
     *  implementor of [`DisablingStrategy`] defines if a validator should be disabled which
     *  implicitly means that the implementor also controls the max number of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator has previously
     *  offended using binary search.
     */
    get asV1003000(): StakingDisabledValidatorsStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  Indices of validators that have offended in the active era. The offenders are disabled for a
 *  whole era. For this reason they are kept here - only staking pallet knows about eras. The
 *  implementor of [`DisablingStrategy`] defines if a validator should be disabled which
 *  implicitly means that the implementor also controls the max number of disabled validators.
 * 
 *  The vec is always kept sorted so that we can find whether a given validator has previously
 *  offended using binary search.
 */
export interface StakingDisabledValidatorsStorageV1003000 {
    get(): Promise<number[]>
}

export class StakingErasRewardPointsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasRewardPoints'
    }

    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '48c202c7b8424da56b623834c54ceaf74129dbd88a59c39931cc7ba131501b50'
    }

    /**
     *  Rewards for the last `HISTORY_DEPTH` eras.
     *  If reward hasn't been set or has been removed then 0 reward is returned.
     */
    get asV1001002(): StakingErasRewardPointsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Rewards for the last `HISTORY_DEPTH` eras.
 *  If reward hasn't been set or has been removed then 0 reward is returned.
 */
export interface StakingErasRewardPointsStorageV1001002 {
    get(key: number): Promise<v1001002.EraRewardPoints>
    getAll(): Promise<v1001002.EraRewardPoints[]>
    getMany(keys: number[]): Promise<v1001002.EraRewardPoints[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.EraRewardPoints][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.EraRewardPoints][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.EraRewardPoints][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.EraRewardPoints][]>
}

export class StakingErasStakersStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStakers'
    }

    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f3f726cc814cef290657008054cd10667b250a01d2842ff3bbbcca24c98abf5b'
    }

    /**
     *  Exposure of validator at era.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get asV1001002(): StakingErasStakersStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Exposure of validator at era.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface StakingErasStakersStorageV1001002 {
    get(key1: number, key2: Uint8Array): Promise<v1001002.Exposure>
    getAll(): Promise<v1001002.Exposure[]>
    getMany(keys: [number, Uint8Array][]): Promise<v1001002.Exposure[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v1001002.Exposure][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v1001002.Exposure][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v1001002.Exposure][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v1001002.Exposure][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v1001002.Exposure][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v1001002.Exposure][]>
}

export class StakingErasStakersClippedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStakersClipped'
    }

    /**
     *  Clipped Exposure of validator at era.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  (Note: the field `total` and `own` of the exposure remains unchanged).
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f3f726cc814cef290657008054cd10667b250a01d2842ff3bbbcca24c98abf5b'
    }

    /**
     *  Clipped Exposure of validator at era.
     * 
     *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
     *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
     *  (Note: the field `total` and `own` of the exposure remains unchanged).
     *  This is used to limit the i/o cost for the nominator payout.
     * 
     *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     *  If stakers hasn't been set or has been removed then empty exposure is returned.
     */
    get asV1001002(): StakingErasStakersClippedStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Clipped Exposure of validator at era.
 * 
 *  This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
 *  `T::MaxNominatorRewardedPerValidator` biggest stakers.
 *  (Note: the field `total` and `own` of the exposure remains unchanged).
 *  This is used to limit the i/o cost for the nominator payout.
 * 
 *  This is keyed fist by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 *  If stakers hasn't been set or has been removed then empty exposure is returned.
 */
export interface StakingErasStakersClippedStorageV1001002 {
    get(key1: number, key2: Uint8Array): Promise<v1001002.Exposure>
    getAll(): Promise<v1001002.Exposure[]>
    getMany(keys: [number, Uint8Array][]): Promise<v1001002.Exposure[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v1001002.Exposure][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v1001002.Exposure][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v1001002.Exposure][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v1001002.Exposure][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v1001002.Exposure][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v1001002.Exposure][]>
}

export class StakingErasStakersOverviewStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStakersOverview'
    }

    /**
     *  Summary of validator exposure at a given era.
     * 
     *  This contains the total stake in support of the validator and their own stake. In addition,
     *  it can also be used to get the number of nominators backing this validator and the number of
     *  exposure pages they are divided into. The page count is useful to determine the number of
     *  pages of rewards that needs to be claimed.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     *  Should only be accessed through `EraInfo`.
     * 
     *  Is it removed after [`Config::HistoryDepth`] eras.
     *  If stakers hasn't been set or has been removed then empty overview is returned.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'de475bf39a5b67666c327d4eb7b6d89e82d43989a899c9a46b4c1aeaf0952952'
    }

    /**
     *  Summary of validator exposure at a given era.
     * 
     *  This contains the total stake in support of the validator and their own stake. In addition,
     *  it can also be used to get the number of nominators backing this validator and the number of
     *  exposure pages they are divided into. The page count is useful to determine the number of
     *  pages of rewards that needs to be claimed.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     *  Should only be accessed through `EraInfo`.
     * 
     *  Is it removed after [`Config::HistoryDepth`] eras.
     *  If stakers hasn't been set or has been removed then empty overview is returned.
     */
    get asV1002000(): StakingErasStakersOverviewStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Summary of validator exposure at a given era.
 * 
 *  This contains the total stake in support of the validator and their own stake. In addition,
 *  it can also be used to get the number of nominators backing this validator and the number of
 *  exposure pages they are divided into. The page count is useful to determine the number of
 *  pages of rewards that needs to be claimed.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 *  Should only be accessed through `EraInfo`.
 * 
 *  Is it removed after [`Config::HistoryDepth`] eras.
 *  If stakers hasn't been set or has been removed then empty overview is returned.
 */
export interface StakingErasStakersOverviewStorageV1002000 {
    get(key1: number, key2: Uint8Array): Promise<(v1002000.PagedExposureMetadata | undefined)>
    getAll(): Promise<v1002000.PagedExposureMetadata[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v1002000.PagedExposureMetadata | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v1002000.PagedExposureMetadata][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v1002000.PagedExposureMetadata][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v1002000.PagedExposureMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v1002000.PagedExposureMetadata][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v1002000.PagedExposureMetadata][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v1002000.PagedExposureMetadata][]>
}

export class StakingErasStakersPagedStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStakersPaged'
    }

    /**
     *  Paginated exposure of a validator at given era.
     * 
     *  This is keyed first by the era index to allow bulk deletion, then stash account and finally
     *  the page. Should only be accessed through `EraInfo`.
     * 
     *  This is cleared after [`Config::HistoryDepth`] eras.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'a92d3a4372554d30ea9dfb702db7987eece3db0b94777552f5c7cfc8ab08a4b9'
    }

    /**
     *  Paginated exposure of a validator at given era.
     * 
     *  This is keyed first by the era index to allow bulk deletion, then stash account and finally
     *  the page. Should only be accessed through `EraInfo`.
     * 
     *  This is cleared after [`Config::HistoryDepth`] eras.
     */
    get asV1002000(): StakingErasStakersPagedStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Paginated exposure of a validator at given era.
 * 
 *  This is keyed first by the era index to allow bulk deletion, then stash account and finally
 *  the page. Should only be accessed through `EraInfo`.
 * 
 *  This is cleared after [`Config::HistoryDepth`] eras.
 */
export interface StakingErasStakersPagedStorageV1002000 {
    get(key1: number, key2: Uint8Array, key3: number): Promise<(v1002000.ExposurePage | undefined)>
    getAll(): Promise<v1002000.ExposurePage[]>
    getMany(keys: [number, Uint8Array, number][]): Promise<(v1002000.ExposurePage | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, number][]>
    getKeys(key1: number): Promise<[number, Uint8Array, number][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, number][]>
    getKeys(key1: number, key2: Uint8Array, key3: number): Promise<[number, Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: number): AsyncIterable<[number, Uint8Array, number][]>
    getPairs(): Promise<[k: [number, Uint8Array, number], v: v1002000.ExposurePage][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, number], v: v1002000.ExposurePage][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, number], v: v1002000.ExposurePage][]>
    getPairs(key1: number, key2: Uint8Array, key3: number): Promise<[k: [number, Uint8Array, number], v: v1002000.ExposurePage][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, number], v: v1002000.ExposurePage][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, number], v: v1002000.ExposurePage][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, number], v: v1002000.ExposurePage][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: number): AsyncIterable<[k: [number, Uint8Array, number], v: v1002000.ExposurePage][]>
}

export class StakingErasStartSessionIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasStartSessionIndex'
    }

    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     * 
     *  Note: This tracks the starting session (i.e. session index when era start being active)
     *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8abbf6045d679e1267b0be7870d035c80cf57bb79cd0d9a111d1521cf79efdde'
    }

    /**
     *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
     * 
     *  Note: This tracks the starting session (i.e. session index when era start being active)
     *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
     */
    get asV1001002(): StakingErasStartSessionIndexStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The session index at which the era start for the last `HISTORY_DEPTH` eras.
 * 
 *  Note: This tracks the starting session (i.e. session index when era start being active)
 *  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
 */
export interface StakingErasStartSessionIndexStorageV1001002 {
    get(key: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<(number | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class StakingErasTotalStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasTotalStake'
    }

    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The total amount staked for the last `HISTORY_DEPTH` eras.
     *  If total hasn't been set or has been removed then 0 stake is returned.
     */
    get asV1001002(): StakingErasTotalStakeStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The total amount staked for the last `HISTORY_DEPTH` eras.
 *  If total hasn't been set or has been removed then 0 stake is returned.
 */
export interface StakingErasTotalStakeStorageV1001002 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class StakingErasValidatorPrefsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasValidatorPrefs'
    }

    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '2f145e368b1c1a9540437d8c25b9502d09b7e977e27a6bb99156b6bf2c6269d2'
    }

    /**
     *  Similar to `ErasStakers`, this holds the preferences of validators.
     * 
     *  This is keyed first by the era index to allow bulk deletion and then the stash account.
     * 
     *  Is it removed after `HISTORY_DEPTH` eras.
     */
    get asV1001002(): StakingErasValidatorPrefsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Similar to `ErasStakers`, this holds the preferences of validators.
 * 
 *  This is keyed first by the era index to allow bulk deletion and then the stash account.
 * 
 *  Is it removed after `HISTORY_DEPTH` eras.
 */
export interface StakingErasValidatorPrefsStorageV1001002 {
    get(key1: number, key2: Uint8Array): Promise<v1001002.ValidatorPrefs>
    getAll(): Promise<v1001002.ValidatorPrefs[]>
    getMany(keys: [number, Uint8Array][]): Promise<v1001002.ValidatorPrefs[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v1001002.ValidatorPrefs][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v1001002.ValidatorPrefs][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v1001002.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v1001002.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v1001002.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v1001002.ValidatorPrefs][]>
}

export class StakingErasValidatorRewardStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ErasValidatorReward'
    }

    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
    }

    /**
     *  The total validator era payout for the last `HISTORY_DEPTH` eras.
     * 
     *  Eras that haven't finished yet or has been removed doesn't have reward.
     */
    get asV1001002(): StakingErasValidatorRewardStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The total validator era payout for the last `HISTORY_DEPTH` eras.
 * 
 *  Eras that haven't finished yet or has been removed doesn't have reward.
 */
export interface StakingErasValidatorRewardStorageV1001002 {
    get(key: number): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class StakingForceEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ForceEra'
    }

    /**
     *  Mode of era forcing.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'b7c79f26737f4e7aed039b709a4e473b3e4912bf8a2efbe7cc8c5fc9f7531c81'
    }

    /**
     *  Mode of era forcing.
     */
    get asV1001002(): StakingForceEraStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Mode of era forcing.
 */
export interface StakingForceEraStorageV1001002 {
    get(): Promise<v1001002.Forcing>
}

export class StakingInvulnerablesStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Invulnerables'
    }

    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
     *  easy to initialize and the performance hit is minimal (we expect no more than four
     *  invulnerables) and restricted to testnets.
     */
    get asV1001002(): StakingInvulnerablesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
 *  easy to initialize and the performance hit is minimal (we expect no more than four
 *  invulnerables) and restricted to testnets.
 */
export interface StakingInvulnerablesStorageV1001002 {
    get(): Promise<Uint8Array[]>
}

export class StakingLedgerStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Ledger'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     * 
     *  Note: All the reads and mutations to this storage *MUST* be done through the methods exposed
     *  by [`StakingLedger`] to ensure data and lock consistency.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '838ac827cb2532f983c68467cfa97afcccf6147fb96e61e136394060880b64a4'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     * 
     *  Note: All the reads and mutations to this storage *MUST* be done through the methods exposed
     *  by [`StakingLedger`] to ensure data and lock consistency.
     */
    get asV1001002(): StakingLedgerStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     * 
     *  Note: All the reads and mutations to this storage *MUST* be done through the methods exposed
     *  by [`StakingLedger`] to ensure data and lock consistency.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '36b1ee728ca3fde1fa330952c848b86153af9239876572fe4125414a6d6b49c8'
    }

    /**
     *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
     * 
     *  Note: All the reads and mutations to this storage *MUST* be done through the methods exposed
     *  by [`StakingLedger`] to ensure data and lock consistency.
     */
    get asV1002000(): StakingLedgerStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 * 
 *  Note: All the reads and mutations to this storage *MUST* be done through the methods exposed
 *  by [`StakingLedger`] to ensure data and lock consistency.
 */
export interface StakingLedgerStorageV1001002 {
    get(key: Uint8Array): Promise<(v1001002.StakingLedger | undefined)>
    getAll(): Promise<v1001002.StakingLedger[]>
    getMany(keys: Uint8Array[]): Promise<(v1001002.StakingLedger | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.StakingLedger][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.StakingLedger][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.StakingLedger][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.StakingLedger][]>
}

/**
 *  Map from all (unlocked) "controller" accounts to the info regarding the staking.
 * 
 *  Note: All the reads and mutations to this storage *MUST* be done through the methods exposed
 *  by [`StakingLedger`] to ensure data and lock consistency.
 */
export interface StakingLedgerStorageV1002000 {
    get(key: Uint8Array): Promise<(v1002000.StakingLedger | undefined)>
    getAll(): Promise<v1002000.StakingLedger[]>
    getMany(keys: Uint8Array[]): Promise<(v1002000.StakingLedger | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1002000.StakingLedger][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1002000.StakingLedger][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1002000.StakingLedger][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1002000.StakingLedger][]>
}

export class StakingMaxNominatorsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MaxNominatorsCount'
    }

    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum nominator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get asV1001002(): StakingMaxNominatorsCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The maximum nominator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface StakingMaxNominatorsCountStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class StakingMaxStakedRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MaxStakedRewards'
    }

    /**
     *  Maximum staked rewards, i.e. the percentage of the era inflation that
     *  is used for stake rewards.
     *  See [Era payout](./index.html#era-payout).
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === 'a05bf6dd806233a6b9a22cb1cd50bcf79bcb6a1f3014c295988bec299abc5cd3'
    }

    /**
     *  Maximum staked rewards, i.e. the percentage of the era inflation that
     *  is used for stake rewards.
     *  See [Era payout](./index.html#era-payout).
     */
    get asV1003000(): StakingMaxStakedRewardsStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  Maximum staked rewards, i.e. the percentage of the era inflation that
 *  is used for stake rewards.
 *  See [Era payout](./index.html#era-payout).
 */
export interface StakingMaxStakedRewardsStorageV1003000 {
    get(): Promise<(number | undefined)>
}

export class StakingMaxValidatorsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MaxValidatorsCount'
    }

    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  The maximum validator count before we stop allowing new validators to join.
     * 
     *  When this value is not set, no limits are enforced.
     */
    get asV1001002(): StakingMaxValidatorsCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The maximum validator count before we stop allowing new validators to join.
 * 
 *  When this value is not set, no limits are enforced.
 */
export interface StakingMaxValidatorsCountStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class StakingMinCommissionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinCommission'
    }

    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The minimum amount of commission that validators can set.
     * 
     *  If set to `0`, no limit exists.
     */
    get asV1001002(): StakingMinCommissionStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The minimum amount of commission that validators can set.
 * 
 *  If set to `0`, no limit exists.
 */
export interface StakingMinCommissionStorageV1001002 {
    get(): Promise<number>
}

export class StakingMinNominatorBondStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinNominatorBond'
    }

    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active bond to become and maintain the role of a nominator.
     */
    get asV1001002(): StakingMinNominatorBondStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The minimum active bond to become and maintain the role of a nominator.
 */
export interface StakingMinNominatorBondStorageV1001002 {
    get(): Promise<bigint>
}

export class StakingMinValidatorBondStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinValidatorBond'
    }

    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active bond to become and maintain the role of a validator.
     */
    get asV1001002(): StakingMinValidatorBondStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The minimum active bond to become and maintain the role of a validator.
 */
export interface StakingMinValidatorBondStorageV1001002 {
    get(): Promise<bigint>
}

export class StakingMinimumActiveStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinimumActiveStake'
    }

    /**
     *  The minimum active nominator stake of the last successful election.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The minimum active nominator stake of the last successful election.
     */
    get asV1001002(): StakingMinimumActiveStakeStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The minimum active nominator stake of the last successful election.
 */
export interface StakingMinimumActiveStakeStorageV1001002 {
    get(): Promise<bigint>
}

export class StakingMinimumValidatorCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'MinimumValidatorCount'
    }

    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Minimum number of staking participants before emergency conditions are imposed.
     */
    get asV1001002(): StakingMinimumValidatorCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Minimum number of staking participants before emergency conditions are imposed.
 */
export interface StakingMinimumValidatorCountStorageV1001002 {
    get(): Promise<number>
}

export class StakingNominatorSlashInEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'NominatorSlashInEra'
    }

    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '019c211c1e4452f7fe517a6d5cafde0784f5991ddd51ac15e84213941f3208c2'
    }

    /**
     *  All slashing events on nominators, mapped by era to the highest slash value of the era.
     */
    get asV1001002(): StakingNominatorSlashInEraStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  All slashing events on nominators, mapped by era to the highest slash value of the era.
 */
export interface StakingNominatorSlashInEraStorageV1001002 {
    get(key1: number, key2: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, Uint8Array][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: bigint][]>
}

export class StakingNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Nominators'
    }

    /**
     *  The map from nominator stash key to their nomination preferences, namely the validators that
     *  they wish to support.
     * 
     *  Note that the keys of this storage map might become non-decodable in case the
     *  account's [`NominationsQuota::MaxNominations`] configuration is decreased.
     *  In this rare case, these nominators
     *  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
     *  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
     *  nominators will effectively not-exist, until they re-submit their preferences such that it
     *  is within the bounds of the newly set `Config::MaxNominations`.
     * 
     *  This implies that `::iter_keys().count()` and `::iter().count()` might return different
     *  values for this map. Moreover, the main `::count()` is aligned with the former, namely the
     *  number of keys that exist.
     * 
     *  Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
     *  [`Call::chill_other`] dispatchable by anyone.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a72d3e17e59f46bbd05fb0efd27052437fe2b1c41b0c89fe950edfb3b79e3c78'
    }

    /**
     *  The map from nominator stash key to their nomination preferences, namely the validators that
     *  they wish to support.
     * 
     *  Note that the keys of this storage map might become non-decodable in case the
     *  account's [`NominationsQuota::MaxNominations`] configuration is decreased.
     *  In this rare case, these nominators
     *  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
     *  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
     *  nominators will effectively not-exist, until they re-submit their preferences such that it
     *  is within the bounds of the newly set `Config::MaxNominations`.
     * 
     *  This implies that `::iter_keys().count()` and `::iter().count()` might return different
     *  values for this map. Moreover, the main `::count()` is aligned with the former, namely the
     *  number of keys that exist.
     * 
     *  Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
     *  [`Call::chill_other`] dispatchable by anyone.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV1001002(): StakingNominatorsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The map from nominator stash key to their nomination preferences, namely the validators that
 *  they wish to support.
 * 
 *  Note that the keys of this storage map might become non-decodable in case the
 *  account's [`NominationsQuota::MaxNominations`] configuration is decreased.
 *  In this rare case, these nominators
 *  are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
 *  indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
 *  nominators will effectively not-exist, until they re-submit their preferences such that it
 *  is within the bounds of the newly set `Config::MaxNominations`.
 * 
 *  This implies that `::iter_keys().count()` and `::iter().count()` might return different
 *  values for this map. Moreover, the main `::count()` is aligned with the former, namely the
 *  number of keys that exist.
 * 
 *  Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
 *  [`Call::chill_other`] dispatchable by anyone.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingNominatorsStorageV1001002 {
    get(key: Uint8Array): Promise<(v1001002.Nominations | undefined)>
    getAll(): Promise<v1001002.Nominations[]>
    getMany(keys: Uint8Array[]): Promise<(v1001002.Nominations | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.Nominations][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.Nominations][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.Nominations][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.Nominations][]>
}

export class StakingOffendingValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'OffendingValidators'
    }

    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     * 
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f462a122689229c7df85ebbfd1e391ea27650c460999212f2c78a9a5675dd9e6'
    }

    /**
     *  Indices of validators that have offended in the active era and whether they are currently
     *  disabled.
     * 
     *  This value should be a superset of disabled validators since not all offences lead to the
     *  validator being disabled (if there was no slash). This is needed to track the percentage of
     *  validators that have offended in the current era, ensuring a new era is forced if
     *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
     *  whether a given validator has previously offended using binary search. It gets cleared when
     *  the era ends.
     */
    get asV1001002(): StakingOffendingValidatorsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Indices of validators that have offended in the active era and whether they are currently
 *  disabled.
 * 
 *  This value should be a superset of disabled validators since not all offences lead to the
 *  validator being disabled (if there was no slash). This is needed to track the percentage of
 *  validators that have offended in the current era, ensuring a new era is forced if
 *  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
 *  whether a given validator has previously offended using binary search. It gets cleared when
 *  the era ends.
 */
export interface StakingOffendingValidatorsStorageV1001002 {
    get(): Promise<[number, boolean][]>
}

export class StakingPayeeStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Payee'
    }

    /**
     *  Where the reward payment should be made. Keyed by stash.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '997acadf80b79903fb4386b933d481dff61dad22612d657f19f39b937ea8d992'
    }

    /**
     *  Where the reward payment should be made. Keyed by stash.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV1001002(): StakingPayeeStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Where the reward payment should be made. Keyed by stash.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'a39965becae49af7e2a18eddb971e632d6ae237e6faf22ae70e224d4aca2035c'
    }

    /**
     *  Where the reward payment should be made. Keyed by stash.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV1002000(): StakingPayeeStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingPayeeStorageV1001002 {
    get(key: Uint8Array): Promise<v1001002.RewardDestination>
    getAll(): Promise<v1001002.RewardDestination[]>
    getMany(keys: Uint8Array[]): Promise<v1001002.RewardDestination[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.RewardDestination][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.RewardDestination][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.RewardDestination][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.RewardDestination][]>
}

/**
 *  Where the reward payment should be made. Keyed by stash.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingPayeeStorageV1002000 {
    get(key: Uint8Array): Promise<(v1002000.RewardDestination | undefined)>
    getAll(): Promise<v1002000.RewardDestination[]>
    getMany(keys: Uint8Array[]): Promise<(v1002000.RewardDestination | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1002000.RewardDestination][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1002000.RewardDestination][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1002000.RewardDestination][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1002000.RewardDestination][]>
}

export class StakingSlashRewardFractionStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SlashRewardFraction'
    }

    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The percentage of the slash that is distributed to reporters.
     * 
     *  The rest of the slashed value is handled by the `Slash`.
     */
    get asV1001002(): StakingSlashRewardFractionStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The percentage of the slash that is distributed to reporters.
 * 
 *  The rest of the slashed value is handled by the `Slash`.
 */
export interface StakingSlashRewardFractionStorageV1001002 {
    get(): Promise<number>
}

export class StakingSlashingSpansStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SlashingSpans'
    }

    /**
     *  Slashing spans for stash accounts.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'b2f49d14e3e4e56cf533a97be4eadb0e19c21d28a6b1b78aa85d7fda1f7e298b'
    }

    /**
     *  Slashing spans for stash accounts.
     */
    get asV1001002(): StakingSlashingSpansStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Slashing spans for stash accounts.
 */
export interface StakingSlashingSpansStorageV1001002 {
    get(key: Uint8Array): Promise<(v1001002.SlashingSpans | undefined)>
    getAll(): Promise<v1001002.SlashingSpans[]>
    getMany(keys: Uint8Array[]): Promise<(v1001002.SlashingSpans | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.SlashingSpans][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.SlashingSpans][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.SlashingSpans][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.SlashingSpans][]>
}

export class StakingSpanSlashStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'SpanSlash'
    }

    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '3c3a6ad88aa43453f825e9fdcd8fb3dbdc0bef20e2be50b06d357c7c3d8e3488'
    }

    /**
     *  Records information about the maximum slash of a stash within a slashing span,
     *  as well as how much reward has been paid out.
     */
    get asV1001002(): StakingSpanSlashStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Records information about the maximum slash of a stash within a slashing span,
 *  as well as how much reward has been paid out.
 */
export interface StakingSpanSlashStorageV1001002 {
    get(key: [Uint8Array, number]): Promise<v1001002.SpanRecord>
    getAll(): Promise<v1001002.SpanRecord[]>
    getMany(keys: [Uint8Array, number][]): Promise<v1001002.SpanRecord[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v1001002.SpanRecord][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: v1001002.SpanRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v1001002.SpanRecord][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: v1001002.SpanRecord][]>
}

export class StakingUnappliedSlashesStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'UnappliedSlashes'
    }

    /**
     *  All unapplied slashes that are queued for later.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8264329f163dd76100f9d2270735f3a3cb745c5af616ebd0e203d417e2039503'
    }

    /**
     *  All unapplied slashes that are queued for later.
     */
    get asV1001002(): StakingUnappliedSlashesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  All unapplied slashes that are queued for later.
 */
export interface StakingUnappliedSlashesStorageV1001002 {
    get(key: number): Promise<v1001002.UnappliedSlash[]>
    getAll(): Promise<v1001002.UnappliedSlash[][]>
    getMany(keys: number[]): Promise<v1001002.UnappliedSlash[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.UnappliedSlash[]][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.UnappliedSlash[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.UnappliedSlash[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.UnappliedSlash[]][]>
}

export class StakingValidatorCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ValidatorCount'
    }

    /**
     *  The ideal number of active validators.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The ideal number of active validators.
     */
    get asV1001002(): StakingValidatorCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The ideal number of active validators.
 */
export interface StakingValidatorCountStorageV1001002 {
    get(): Promise<number>
}

export class StakingValidatorSlashInEraStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'ValidatorSlashInEra'
    }

    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'facf161fd07f9163ac7ab48199356f8083a31ec97fe569c9c5e6fd30fe0ce3ae'
    }

    /**
     *  All slashing events on validators, mapped by era to the highest slash proportion
     *  and slash value of the era.
     */
    get asV1001002(): StakingValidatorSlashInEraStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  All slashing events on validators, mapped by era to the highest slash proportion
 *  and slash value of the era.
 */
export interface StakingValidatorSlashInEraStorageV1001002 {
    get(key1: number, key2: Uint8Array): Promise<([number, bigint] | undefined)>
    getAll(): Promise<[number, bigint][]>
    getMany(keys: [number, Uint8Array][]): Promise<([number, bigint] | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: [number, bigint]][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: [number, bigint]][]>
}

export class StakingValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'fa08b7a9cd071c2833987f5924d940cf66842072b85af5ecfc3afcf9fbb2ebd0'
    }

    /**
     *  The map from (wannabe) validator stash key to the preferences of that validator.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asV1001002(): StakingValidatorsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The map from (wannabe) validator stash key to the preferences of that validator.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface StakingValidatorsStorageV1001002 {
    get(key: Uint8Array): Promise<v1001002.ValidatorPrefs>
    getAll(): Promise<v1001002.ValidatorPrefs[]>
    getMany(keys: Uint8Array[]): Promise<v1001002.ValidatorPrefs[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.ValidatorPrefs][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.ValidatorPrefs][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.ValidatorPrefs][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.ValidatorPrefs][]>
}

export class StakingVirtualStakersStorage extends StorageBase {
    protected getPrefix() {
        return 'Staking'
    }

    protected getName() {
        return 'VirtualStakers'
    }

    /**
     *  Stakers whose funds are managed by other pallets.
     * 
     *  This pallet does not apply any locks on them, therefore they are only virtually bonded. They
     *  are expected to be keyless accounts and hence should not be allowed to mutate their ledger
     *  directly via this pallet. Instead, these accounts are managed by other pallets and accessed
     *  via low level apis. We keep track of them to do minimal integrity checks.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
    }

    /**
     *  Stakers whose funds are managed by other pallets.
     * 
     *  This pallet does not apply any locks on them, therefore they are only virtually bonded. They
     *  are expected to be keyless accounts and hence should not be allowed to mutate their ledger
     *  directly via this pallet. Instead, these accounts are managed by other pallets and accessed
     *  via low level apis. We keep track of them to do minimal integrity checks.
     */
    get asV1003000(): StakingVirtualStakersStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  Stakers whose funds are managed by other pallets.
 * 
 *  This pallet does not apply any locks on them, therefore they are only virtually bonded. They
 *  are expected to be keyless accounts and hence should not be allowed to mutate their ledger
 *  directly via this pallet. Instead, these accounts are managed by other pallets and accessed
 *  via low level apis. We keep track of them to do minimal integrity checks.
 */
export interface StakingVirtualStakersStorageV1003000 {
    get(key: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: Uint8Array[]): Promise<(null | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: null][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: null][]>
}

export class StateTrieMigrationAutoLimitsStorage extends StorageBase {
    protected getPrefix() {
        return 'StateTrieMigration'
    }

    protected getName() {
        return 'AutoLimits'
    }

    /**
     *  The limits that are imposed on automatic migrations.
     * 
     *  If set to None, then no automatic migration happens.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '3eaf472033cc14766167423d9fb44d1202eff611c3fc5885336f9eae94a2a7b7'
    }

    /**
     *  The limits that are imposed on automatic migrations.
     * 
     *  If set to None, then no automatic migration happens.
     */
    get asV1002000(): StateTrieMigrationAutoLimitsStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  The limits that are imposed on automatic migrations.
 * 
 *  If set to None, then no automatic migration happens.
 */
export interface StateTrieMigrationAutoLimitsStorageV1002000 {
    get(): Promise<(v1002000.MigrationLimits | undefined)>
}

export class StateTrieMigrationMigrationProcessStorage extends StorageBase {
    protected getPrefix() {
        return 'StateTrieMigration'
    }

    protected getName() {
        return 'MigrationProcess'
    }

    /**
     *  Migration progress.
     * 
     *  This stores the snapshot of the last migrated keys. It can be set into motion and move
     *  forward by any of the means provided by this pallet.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '1ce4b92753031b4db00767108ab5592b867c62019896dc3acc0f59a422d45e13'
    }

    /**
     *  Migration progress.
     * 
     *  This stores the snapshot of the last migrated keys. It can be set into motion and move
     *  forward by any of the means provided by this pallet.
     */
    get asV1002000(): StateTrieMigrationMigrationProcessStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Migration progress.
 * 
 *  This stores the snapshot of the last migrated keys. It can be set into motion and move
 *  forward by any of the means provided by this pallet.
 */
export interface StateTrieMigrationMigrationProcessStorageV1002000 {
    get(): Promise<v1002000.MigrationTask>
}

export class StateTrieMigrationSignedMigrationMaxLimitsStorage extends StorageBase {
    protected getPrefix() {
        return 'StateTrieMigration'
    }

    protected getName() {
        return 'SignedMigrationMaxLimits'
    }

    /**
     *  The maximum limits that the signed migration could use.
     * 
     *  If not set, no signed submission is allowed.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '78aa4791340649f5a0be1bc83a67d027e49c6aa0eaa5395fa8f9c2c64c781a61'
    }

    /**
     *  The maximum limits that the signed migration could use.
     * 
     *  If not set, no signed submission is allowed.
     */
    get asV1002000(): StateTrieMigrationSignedMigrationMaxLimitsStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  The maximum limits that the signed migration could use.
 * 
 *  If not set, no signed submission is allowed.
 */
export interface StateTrieMigrationSignedMigrationMaxLimitsStorageV1002000 {
    get(): Promise<(v1002000.MigrationLimits | undefined)>
}

export class SudoKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'Key'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV1001002(): SudoKeyStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV1001002 {
    get(): Promise<(Uint8Array | undefined)>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd6b7a816e0cf6dc8f60cb2bd55c5c5ae7ad928521a6e98aafbe6e954f5c54878'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV1001002(): SystemAccountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV1001002 {
    get(key: Uint8Array): Promise<v1001002.AccountInfo>
    getAll(): Promise<v1001002.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v1001002.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.AccountInfo][]>
}

export class SystemAllExtrinsicsLenStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AllExtrinsicsLen'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asV1001002(): SystemAllExtrinsicsLenStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class SystemAuthorizedUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AuthorizedUpgrade'
    }

    /**
     *  `Some` if a code upgrade has been authorized.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '901f6f87c9fafe3d3f61c36b45b24a63a90d51ae151f2b4a361d3c5611ffb723'
    }

    /**
     *  `Some` if a code upgrade has been authorized.
     */
    get asV1002000(): SystemAuthorizedUpgradeStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  `Some` if a code upgrade has been authorized.
 */
export interface SystemAuthorizedUpgradeStorageV1002000 {
    get(): Promise<(v1002000.CodeUpgradeAuthorization | undefined)>
}

export class SystemBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockHash'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asV1001002(): SystemBlockHashStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageV1001002 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemBlockWeightStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockWeight'
    }

    /**
     *  The current weight for the block.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '1b5ecb31f1f780ce8b20535384ce7b3159da495c9f1cbf13a2f253ccb02ae175'
    }

    /**
     *  The current weight for the block.
     */
    get asV1001002(): SystemBlockWeightStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV1001002 {
    get(): Promise<v1001002.PerDispatchClass>
}

export class SystemDigestStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Digest'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV1001002(): SystemDigestStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV1001002 {
    get(): Promise<v1001002.Digest>
}

export class SystemEventCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventCount'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asV1001002(): SystemEventCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageV1001002 {
    get(): Promise<number>
}

export class SystemEventTopicsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventTopics'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get asV1001002(): SystemEventTopicsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface SystemEventTopicsStorageV1001002 {
    get(key: Uint8Array): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: Uint8Array[]): Promise<[number, number][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
}

export class SystemEventsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Events'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '150d0e9e1cedc08a0ef608ba709a0e4ecaf2101c8bd785cd8ec939a41a1a2b46'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV1001002(): SystemEventsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV1001003(): boolean {
        return this.getTypeHash() === '247f70fd43280ced5b85187e24013a67fce44c5ea8b68910735978853ebee417'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV1001003(): SystemEventsStorageV1001003 {
        assert(this.isV1001003)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '7e40d222c641fb8041bcc89f939a3024c183081f69d094bd1945312e96823d10'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV1002000(): SystemEventsStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV1002006(): boolean {
        return this.getTypeHash() === '92defbf5d3a6e60e27659ad2759cc1f02eb1f25d151f0bc9668cd5ea3f3c5ea1'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV1002006(): SystemEventsStorageV1002006 {
        assert(this.isV1002006)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === '8685b1a56833ceee25bbc06a8ba1306b797e66551cd28c6280a091629ca047b5'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV1003000(): SystemEventsStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV1003003(): boolean {
        return this.getTypeHash() === '487745c27fed6dad147161a8ecc40c6cb927786e4a67cb8a47ea5e0af87aa522'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV1003003(): SystemEventsStorageV1003003 {
        assert(this.isV1003003)
        return this as any
    }
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV1001002 {
    get(): Promise<v1001002.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV1001003 {
    get(): Promise<v1001003.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV1002000 {
    get(): Promise<v1002000.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV1002006 {
    get(): Promise<v1002006.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV1003000 {
    get(): Promise<v1003000.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV1003003 {
    get(): Promise<v1003003.EventRecord[]>
}

export class SystemExecutionPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExecutionPhase'
    }

    /**
     *  The execution phase of the block.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asV1001002(): SystemExecutionPhaseStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageV1001002 {
    get(): Promise<(v1001002.Type_471 | undefined)>
}

export class SystemExtrinsicCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicCount'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asV1001002(): SystemExtrinsicCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class SystemExtrinsicDataStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicData'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asV1001002(): SystemExtrinsicDataStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageV1001002 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemInherentsAppliedStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'InherentsApplied'
    }

    /**
     *  Whether all inherents have been applied.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether all inherents have been applied.
     */
    get asV1003000(): SystemInherentsAppliedStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  Whether all inherents have been applied.
 */
export interface SystemInherentsAppliedStorageV1003000 {
    get(): Promise<boolean>
}

export class SystemLastRuntimeUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'LastRuntimeUpgrade'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asV1001002(): SystemLastRuntimeUpgradeStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageV1001002 {
    get(): Promise<(v1001002.LastRuntimeUpgradeInfo | undefined)>
}

export class SystemNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Number'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asV1001002(): SystemNumberStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageV1001002 {
    get(): Promise<number>
}

export class SystemParentHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ParentHash'
    }

    /**
     *  Hash of the previous block.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asV1001002(): SystemParentHashStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageV1001002 {
    get(): Promise<Uint8Array>
}

export class SystemUpgradedToTripleRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToTripleRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asV1001002(): SystemUpgradedToTripleRefCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageV1001002 {
    get(): Promise<boolean>
}

export class SystemUpgradedToU32RefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToU32RefCount'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asV1001002(): SystemUpgradedToU32RefCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageV1001002 {
    get(): Promise<boolean>
}

export class TimestampDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'DidUpdate'
    }

    /**
     *  Whether the timestamp has been updated in this block.
     * 
     *  This value is updated to `true` upon successful submission of a timestamp by a node.
     *  It is then checked at the end of each block execution in the `on_finalize` hook.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether the timestamp has been updated in this block.
     * 
     *  This value is updated to `true` upon successful submission of a timestamp by a node.
     *  It is then checked at the end of each block execution in the `on_finalize` hook.
     */
    get asV1001002(): TimestampDidUpdateStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Whether the timestamp has been updated in this block.
 * 
 *  This value is updated to `true` upon successful submission of a timestamp by a node.
 *  It is then checked at the end of each block execution in the `on_finalize` hook.
 */
export interface TimestampDidUpdateStorageV1001002 {
    get(): Promise<boolean>
}

export class TimestampNowStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'Now'
    }

    /**
     *  The current time for the current block.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The current time for the current block.
     */
    get asV1001002(): TimestampNowStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The current time for the current block.
 */
export interface TimestampNowStorageV1001002 {
    get(): Promise<bigint>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isV1001002(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV1001002(): TransactionPaymentNextFeeMultiplierStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageV1001002 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isV1001002(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asV1001002(): TransactionPaymentStorageVersionStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageV1001002 {
    get(): Promise<v1001002.Releases>
}

export class TreasuryApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get asV1001002(): TreasuryApprovalsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface TreasuryApprovalsStorageV1001002 {
    get(): Promise<number[]>
}

export class TreasuryDeactivatedStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Deactivated'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get asV1001002(): TreasuryDeactivatedStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface TreasuryDeactivatedStorageV1001002 {
    get(): Promise<bigint>
}

export class TreasuryProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Number of proposals that have been made.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of proposals that have been made.
     */
    get asV1001002(): TreasuryProposalCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Number of proposals that have been made.
 */
export interface TreasuryProposalCountStorageV1001002 {
    get(): Promise<number>
}

export class TreasuryProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Proposals that have been made.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV1001002(): TreasuryProposalsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV1001002 {
    get(key: number): Promise<(v1001002.Proposal | undefined)>
    getAll(): Promise<v1001002.Proposal[]>
    getMany(keys: number[]): Promise<(v1001002.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.Proposal][]>
}

export class TreasurySpendCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'SpendCount'
    }

    /**
     *  The count of spends that have been made.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The count of spends that have been made.
     */
    get asV1001002(): TreasurySpendCountStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The count of spends that have been made.
 */
export interface TreasurySpendCountStorageV1001002 {
    get(): Promise<number>
}

export class TreasurySpendsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Spends'
    }

    /**
     *  Spends that have been approved and being processed.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '9e593b36c5f672933755bf09ad06f5d1cf24fae64e380dabfde4d7cdf576e62a'
    }

    /**
     *  Spends that have been approved and being processed.
     */
    get asV1001002(): TreasurySpendsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Spends that have been approved and being processed.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '738ab57b7bc3a59f4c5703a5446d0c17d7590555371eba73b9476bbaf055653f'
    }

    /**
     *  Spends that have been approved and being processed.
     */
    get asV1002000(): TreasurySpendsStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Spends that have been approved and being processed.
 */
export interface TreasurySpendsStorageV1001002 {
    get(key: number): Promise<(v1001002.SpendStatus | undefined)>
    getAll(): Promise<v1001002.SpendStatus[]>
    getMany(keys: number[]): Promise<(v1001002.SpendStatus | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1001002.SpendStatus][]>
    getPairs(key: number): Promise<[k: number, v: v1001002.SpendStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1001002.SpendStatus][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1001002.SpendStatus][]>
}

/**
 *  Spends that have been approved and being processed.
 */
export interface TreasurySpendsStorageV1002000 {
    get(key: number): Promise<(v1002000.SpendStatus | undefined)>
    getAll(): Promise<v1002000.SpendStatus[]>
    getMany(keys: number[]): Promise<(v1002000.SpendStatus | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1002000.SpendStatus][]>
    getPairs(key: number): Promise<[k: number, v: v1002000.SpendStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1002000.SpendStatus][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1002000.SpendStatus][]>
}

export class VestingStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Vesting'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with latest version, as determined by the genesis build.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '5370c514276f3735e13df7db1f1bbacaba918c365a3ed949597f7ce091eeb77e'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with latest version, as determined by the genesis build.
     */
    get asV1001002(): VestingStorageVersionStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with latest version, as determined by the genesis build.
 */
export interface VestingStorageVersionStorageV1001002 {
    get(): Promise<v1001002.Type_616>
}

export class VestingVestingStorage extends StorageBase {
    protected getPrefix() {
        return 'Vesting'
    }

    protected getName() {
        return 'Vesting'
    }

    /**
     *  Information regarding the vesting of a given account.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '22ac0db91087ba9b3f5dee769d5e3398f8c8c045cabf7f6585992df66dba74db'
    }

    /**
     *  Information regarding the vesting of a given account.
     */
    get asV1001002(): VestingVestingStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Information regarding the vesting of a given account.
 */
export interface VestingVestingStorageV1001002 {
    get(key: Uint8Array): Promise<(v1001002.VestingInfo[] | undefined)>
    getAll(): Promise<v1001002.VestingInfo[][]>
    getMany(keys: Uint8Array[]): Promise<(v1001002.VestingInfo[] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.VestingInfo[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.VestingInfo[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.VestingInfo[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.VestingInfo[]][]>
}

export class VoterListCounterForListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'VoterList'
    }

    protected getName() {
        return 'CounterForListNodes'
    }

    /**
     * Counter for the related counted storage map
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV1001002(): VoterListCounterForListNodesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface VoterListCounterForListNodesStorageV1001002 {
    get(): Promise<number>
}

export class VoterListListBagsStorage extends StorageBase {
    protected getPrefix() {
        return 'VoterList'
    }

    protected getName() {
        return 'ListBags'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '5e403bdbad581142351437d955e87280596a0c5b07d7b18a98a2f9d2fb3469cf'
    }

    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    get asV1001002(): VoterListListBagsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface VoterListListBagsStorageV1001002 {
    get(key: bigint): Promise<(v1001002.Bag | undefined)>
    getAll(): Promise<v1001002.Bag[]>
    getMany(keys: bigint[]): Promise<(v1001002.Bag | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v1001002.Bag][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v1001002.Bag][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v1001002.Bag][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v1001002.Bag][]>
}

export class VoterListListNodesStorage extends StorageBase {
    protected getPrefix() {
        return 'VoterList'
    }

    protected getName() {
        return 'ListNodes'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'd750de9f70dc579f36482219336f529b62912998b5a4be0a48c69cf3c6158042'
    }

    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    get asV1001002(): VoterListListNodesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface VoterListListNodesStorageV1001002 {
    get(key: Uint8Array): Promise<(v1001002.Node | undefined)>
    getAll(): Promise<v1001002.Node[]>
    getMany(keys: Uint8Array[]): Promise<(v1001002.Node | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001002.Node][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001002.Node][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001002.Node][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001002.Node][]>
}

export class WhitelistWhitelistedCallStorage extends StorageBase {
    protected getPrefix() {
        return 'Whitelist'
    }

    protected getName() {
        return 'WhitelistedCall'
    }

    get isV1001002(): boolean {
        return this.getTypeHash() === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
    }

    get asV1001002(): WhitelistWhitelistedCallStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

export interface WhitelistWhitelistedCallStorageV1001002 {
    get(key: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: Uint8Array[]): Promise<(null | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: null][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: null][]>
}

export class XcmPalletAssetTrapsStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'AssetTraps'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get asV1001002(): XcmPalletAssetTrapsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface XcmPalletAssetTrapsStorageV1001002 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class XcmPalletCurrentMigrationStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'CurrentMigration'
    }

    /**
     *  The current migration's stage, if any.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
    }

    /**
     *  The current migration's stage, if any.
     */
    get asV1001002(): XcmPalletCurrentMigrationStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The current migration's stage, if any.
 */
export interface XcmPalletCurrentMigrationStorageV1001002 {
    get(): Promise<(v1001002.VersionMigrationStage | undefined)>
}

export class XcmPalletLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'LockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '83620d989e5dd77ea5cdf77e62586d64ad0b7ace0ba3b24d7f207643583d77cc'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get asV1001002(): XcmPalletLockedFungiblesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '71b0ed86984b45ebf14868e77e4d654a566781761600bb9ba9d4877c02637785'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get asV1002000(): XcmPalletLockedFungiblesStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface XcmPalletLockedFungiblesStorageV1001002 {
    get(key: Uint8Array): Promise<([bigint, v1001002.VersionedMultiLocation][] | undefined)>
    getAll(): Promise<[bigint, v1001002.VersionedMultiLocation][][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, v1001002.VersionedMultiLocation][] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, v1001002.VersionedMultiLocation][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, v1001002.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, v1001002.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, v1001002.VersionedMultiLocation][]][]>
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface XcmPalletLockedFungiblesStorageV1002000 {
    get(key: Uint8Array): Promise<([bigint, v1002000.VersionedLocation][] | undefined)>
    getAll(): Promise<[bigint, v1002000.VersionedLocation][][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, v1002000.VersionedLocation][] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, v1002000.VersionedLocation][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, v1002000.VersionedLocation][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, v1002000.VersionedLocation][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, v1002000.VersionedLocation][]][]>
}

export class XcmPalletQueriesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'Queries'
    }

    /**
     *  The ongoing queries.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'c33614a63099009a42799d8206979c61fd1a7b5d142259a57bdcbc726105e8f1'
    }

    /**
     *  The ongoing queries.
     */
    get asV1001002(): XcmPalletQueriesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  The ongoing queries.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '3f8d8ff88ae3e4e502acdca081adde4bd6acfc4d9b7d8682203b77060490f653'
    }

    /**
     *  The ongoing queries.
     */
    get asV1002000(): XcmPalletQueriesStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  The ongoing queries.
 */
export interface XcmPalletQueriesStorageV1001002 {
    get(key: bigint): Promise<(v1001002.QueryStatus | undefined)>
    getAll(): Promise<v1001002.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v1001002.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v1001002.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v1001002.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v1001002.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v1001002.QueryStatus][]>
}

/**
 *  The ongoing queries.
 */
export interface XcmPalletQueriesStorageV1002000 {
    get(key: bigint): Promise<(v1002000.QueryStatus | undefined)>
    getAll(): Promise<v1002000.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v1002000.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v1002000.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v1002000.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v1002000.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v1002000.QueryStatus][]>
}

export class XcmPalletQueryCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'QueryCounter'
    }

    /**
     *  The latest available query index.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The latest available query index.
     */
    get asV1001002(): XcmPalletQueryCounterStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  The latest available query index.
 */
export interface XcmPalletQueryCounterStorageV1001002 {
    get(): Promise<bigint>
}

export class XcmPalletRecordedXcmStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'RecordedXcm'
    }

    /**
     *  If [`ShouldRecordXcm`] is set to true, then the last XCM program executed locally
     *  will be stored here.
     *  Runtime APIs can fetch the XCM that was executed by accessing this value.
     * 
     *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
     *  implementation in the XCM executor configuration.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === '8043b6a22ad1ef6bcf3c81406428f164936c87aa13da6e0093255ea8ff8da85f'
    }

    /**
     *  If [`ShouldRecordXcm`] is set to true, then the last XCM program executed locally
     *  will be stored here.
     *  Runtime APIs can fetch the XCM that was executed by accessing this value.
     * 
     *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
     *  implementation in the XCM executor configuration.
     */
    get asV1003000(): XcmPalletRecordedXcmStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  If [`ShouldRecordXcm`] is set to true, then the last XCM program executed locally
 *  will be stored here.
 *  Runtime APIs can fetch the XCM that was executed by accessing this value.
 * 
 *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
 *  implementation in the XCM executor configuration.
 */
export interface XcmPalletRecordedXcmStorageV1003000 {
    get(): Promise<(v1003000.V4Instruction[] | undefined)>
}

export class XcmPalletRemoteLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'RemoteLockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '1149837e63a49b75805a12d31afe81a1d8d4392ee13be03404f08d002d1c9928'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asV1001002(): XcmPalletRemoteLockedFungiblesStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '2448c3d6b7f26a622ecb08e1f7c9ac15ff330b7d2b19fdcd69df9e5e5f2e2c67'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asV1002000(): XcmPalletRemoteLockedFungiblesStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface XcmPalletRemoteLockedFungiblesStorageV1001002 {
    get(key1: number, key2: Uint8Array, key3: v1001002.VersionedAssetId): Promise<(v1001002.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<v1001002.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, v1001002.VersionedAssetId][]): Promise<(v1001002.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, v1001002.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, v1001002.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, v1001002.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: v1001002.VersionedAssetId): Promise<[number, Uint8Array, v1001002.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, v1001002.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, v1001002.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, v1001002.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v1001002.VersionedAssetId): AsyncIterable<[number, Uint8Array, v1001002.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, v1001002.VersionedAssetId], v: v1001002.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, v1001002.VersionedAssetId], v: v1001002.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, v1001002.VersionedAssetId], v: v1001002.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: v1001002.VersionedAssetId): Promise<[k: [number, Uint8Array, v1001002.VersionedAssetId], v: v1001002.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, v1001002.VersionedAssetId], v: v1001002.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, v1001002.VersionedAssetId], v: v1001002.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, v1001002.VersionedAssetId], v: v1001002.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v1001002.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, v1001002.VersionedAssetId], v: v1001002.RemoteLockedFungibleRecord][]>
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface XcmPalletRemoteLockedFungiblesStorageV1002000 {
    get(key1: number, key2: Uint8Array, key3: v1002000.VersionedAssetId): Promise<(v1002000.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<v1002000.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, v1002000.VersionedAssetId][]): Promise<(v1002000.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, v1002000.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, v1002000.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, v1002000.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: v1002000.VersionedAssetId): Promise<[number, Uint8Array, v1002000.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, v1002000.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, v1002000.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, v1002000.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v1002000.VersionedAssetId): AsyncIterable<[number, Uint8Array, v1002000.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, v1002000.VersionedAssetId], v: v1002000.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, v1002000.VersionedAssetId], v: v1002000.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, v1002000.VersionedAssetId], v: v1002000.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: v1002000.VersionedAssetId): Promise<[k: [number, Uint8Array, v1002000.VersionedAssetId], v: v1002000.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, v1002000.VersionedAssetId], v: v1002000.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, v1002000.VersionedAssetId], v: v1002000.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, v1002000.VersionedAssetId], v: v1002000.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v1002000.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, v1002000.VersionedAssetId], v: v1002000.RemoteLockedFungibleRecord][]>
}

export class XcmPalletSafeXcmVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'SafeXcmVersion'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get asV1001002(): XcmPalletSafeXcmVersionStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface XcmPalletSafeXcmVersionStorageV1001002 {
    get(): Promise<(number | undefined)>
}

export class XcmPalletShouldRecordXcmStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'ShouldRecordXcm'
    }

    /**
     *  Whether or not incoming XCMs (both executed locally and received) should be recorded.
     *  Only one XCM program will be recorded at a time.
     *  This is meant to be used in runtime APIs, and it's advised it stays false
     *  for all other use cases, so as to not degrade regular performance.
     * 
     *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
     *  implementation in the XCM executor configuration.
     */
    get isV1003000(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether or not incoming XCMs (both executed locally and received) should be recorded.
     *  Only one XCM program will be recorded at a time.
     *  This is meant to be used in runtime APIs, and it's advised it stays false
     *  for all other use cases, so as to not degrade regular performance.
     * 
     *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
     *  implementation in the XCM executor configuration.
     */
    get asV1003000(): XcmPalletShouldRecordXcmStorageV1003000 {
        assert(this.isV1003000)
        return this as any
    }
}

/**
 *  Whether or not incoming XCMs (both executed locally and received) should be recorded.
 *  Only one XCM program will be recorded at a time.
 *  This is meant to be used in runtime APIs, and it's advised it stays false
 *  for all other use cases, so as to not degrade regular performance.
 * 
 *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
 *  implementation in the XCM executor configuration.
 */
export interface XcmPalletShouldRecordXcmStorageV1003000 {
    get(): Promise<boolean>
}

export class XcmPalletSupportedVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'SupportedVersion'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '0e2aec9a2da85831b6c7f06cf2ebb00fa3489433254df2ecc1d89a9f142d7859'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV1001002(): XcmPalletSupportedVersionStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '29ac381185ef69779277aff8a16482fc1e91fcfa2a31b3f5ae31731d152c7186'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV1002000(): XcmPalletSupportedVersionStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface XcmPalletSupportedVersionStorageV1001002 {
    get(key1: number, key2: v1001002.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v1001002.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v1001002.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v1001002.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v1001002.VersionedMultiLocation): Promise<[number, v1001002.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v1001002.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v1001002.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v1001002.VersionedMultiLocation): AsyncIterable<[number, v1001002.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v1001002.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v1001002.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v1001002.VersionedMultiLocation): Promise<[k: [number, v1001002.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v1001002.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v1001002.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v1001002.VersionedMultiLocation): AsyncIterable<[k: [number, v1001002.VersionedMultiLocation], v: number][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface XcmPalletSupportedVersionStorageV1002000 {
    get(key1: number, key2: v1002000.VersionedLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v1002000.VersionedLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v1002000.VersionedLocation][]>
    getKeys(key1: number): Promise<[number, v1002000.VersionedLocation][]>
    getKeys(key1: number, key2: v1002000.VersionedLocation): Promise<[number, v1002000.VersionedLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v1002000.VersionedLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v1002000.VersionedLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v1002000.VersionedLocation): AsyncIterable<[number, v1002000.VersionedLocation][]>
    getPairs(): Promise<[k: [number, v1002000.VersionedLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v1002000.VersionedLocation], v: number][]>
    getPairs(key1: number, key2: v1002000.VersionedLocation): Promise<[k: [number, v1002000.VersionedLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v1002000.VersionedLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v1002000.VersionedLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v1002000.VersionedLocation): AsyncIterable<[k: [number, v1002000.VersionedLocation], v: number][]>
}

export class XcmPalletVersionDiscoveryQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'VersionDiscoveryQueue'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '1861bd13354557dc519a64b8d53a95cd897ff993484c969af972f15ebe14ed22'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV1001002(): XcmPalletVersionDiscoveryQueueStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '6f490ac0f20a07d606c15d0ec32b3adbd0938d39e9f975a2ca9b3b772415707d'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV1002000(): XcmPalletVersionDiscoveryQueueStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface XcmPalletVersionDiscoveryQueueStorageV1001002 {
    get(): Promise<[v1001002.VersionedMultiLocation, number][]>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface XcmPalletVersionDiscoveryQueueStorageV1002000 {
    get(): Promise<[v1002000.VersionedLocation, number][]>
}

export class XcmPalletVersionNotifiersStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'VersionNotifiers'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '2e570d6a39a9644e69bdccf883c25d1723f752493a252d530fc3667560486716'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV1001002(): XcmPalletVersionNotifiersStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === 'bb9b77bb9b3bbd42e781aeea4fd267dbb0c42e3c9a6e5e512ad2976e4ce32dc0'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV1002000(): XcmPalletVersionNotifiersStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface XcmPalletVersionNotifiersStorageV1001002 {
    get(key1: number, key2: v1001002.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v1001002.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v1001002.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v1001002.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v1001002.VersionedMultiLocation): Promise<[number, v1001002.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v1001002.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v1001002.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v1001002.VersionedMultiLocation): AsyncIterable<[number, v1001002.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v1001002.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v1001002.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v1001002.VersionedMultiLocation): Promise<[k: [number, v1001002.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v1001002.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v1001002.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v1001002.VersionedMultiLocation): AsyncIterable<[k: [number, v1001002.VersionedMultiLocation], v: bigint][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface XcmPalletVersionNotifiersStorageV1002000 {
    get(key1: number, key2: v1002000.VersionedLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v1002000.VersionedLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v1002000.VersionedLocation][]>
    getKeys(key1: number): Promise<[number, v1002000.VersionedLocation][]>
    getKeys(key1: number, key2: v1002000.VersionedLocation): Promise<[number, v1002000.VersionedLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v1002000.VersionedLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v1002000.VersionedLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v1002000.VersionedLocation): AsyncIterable<[number, v1002000.VersionedLocation][]>
    getPairs(): Promise<[k: [number, v1002000.VersionedLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v1002000.VersionedLocation], v: bigint][]>
    getPairs(key1: number, key2: v1002000.VersionedLocation): Promise<[k: [number, v1002000.VersionedLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v1002000.VersionedLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v1002000.VersionedLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v1002000.VersionedLocation): AsyncIterable<[k: [number, v1002000.VersionedLocation], v: bigint][]>
}

export class XcmPalletVersionNotifyTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'VersionNotifyTargets'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '080bdd3fd57ea1cba05e6b46642e4860965e8f150a64cc9d5bafc6eebd6207fb'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV1001002(): XcmPalletVersionNotifyTargetsStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV1002000(): boolean {
        return this.getTypeHash() === '3c9fbfa43eb0f43fdfe6c78fa7580fb83b56c68ade6394f9aa8df867e0caddb3'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV1002000(): XcmPalletVersionNotifyTargetsStorageV1002000 {
        assert(this.isV1002000)
        return this as any
    }
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface XcmPalletVersionNotifyTargetsStorageV1001002 {
    get(key1: number, key2: v1001002.VersionedMultiLocation): Promise<([bigint, v1001002.Weight, number] | undefined)>
    getAll(): Promise<[bigint, v1001002.Weight, number][]>
    getMany(keys: [number, v1001002.VersionedMultiLocation][]): Promise<([bigint, v1001002.Weight, number] | undefined)[]>
    getKeys(): Promise<[number, v1001002.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v1001002.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v1001002.VersionedMultiLocation): Promise<[number, v1001002.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v1001002.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v1001002.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v1001002.VersionedMultiLocation): AsyncIterable<[number, v1001002.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v1001002.VersionedMultiLocation], v: [bigint, v1001002.Weight, number]][]>
    getPairs(key1: number): Promise<[k: [number, v1001002.VersionedMultiLocation], v: [bigint, v1001002.Weight, number]][]>
    getPairs(key1: number, key2: v1001002.VersionedMultiLocation): Promise<[k: [number, v1001002.VersionedMultiLocation], v: [bigint, v1001002.Weight, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v1001002.VersionedMultiLocation], v: [bigint, v1001002.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v1001002.VersionedMultiLocation], v: [bigint, v1001002.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v1001002.VersionedMultiLocation): AsyncIterable<[k: [number, v1001002.VersionedMultiLocation], v: [bigint, v1001002.Weight, number]][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface XcmPalletVersionNotifyTargetsStorageV1002000 {
    get(key1: number, key2: v1002000.VersionedLocation): Promise<([bigint, v1002000.Weight, number] | undefined)>
    getAll(): Promise<[bigint, v1002000.Weight, number][]>
    getMany(keys: [number, v1002000.VersionedLocation][]): Promise<([bigint, v1002000.Weight, number] | undefined)[]>
    getKeys(): Promise<[number, v1002000.VersionedLocation][]>
    getKeys(key1: number): Promise<[number, v1002000.VersionedLocation][]>
    getKeys(key1: number, key2: v1002000.VersionedLocation): Promise<[number, v1002000.VersionedLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v1002000.VersionedLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v1002000.VersionedLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v1002000.VersionedLocation): AsyncIterable<[number, v1002000.VersionedLocation][]>
    getPairs(): Promise<[k: [number, v1002000.VersionedLocation], v: [bigint, v1002000.Weight, number]][]>
    getPairs(key1: number): Promise<[k: [number, v1002000.VersionedLocation], v: [bigint, v1002000.Weight, number]][]>
    getPairs(key1: number, key2: v1002000.VersionedLocation): Promise<[k: [number, v1002000.VersionedLocation], v: [bigint, v1002000.Weight, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v1002000.VersionedLocation], v: [bigint, v1002000.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v1002000.VersionedLocation], v: [bigint, v1002000.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v1002000.VersionedLocation): AsyncIterable<[k: [number, v1002000.VersionedLocation], v: [bigint, v1002000.Weight, number]][]>
}

export class XcmPalletXcmExecutionSuspendedStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmPallet'
    }

    protected getName() {
        return 'XcmExecutionSuspended'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get isV1001002(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get asV1001002(): XcmPalletXcmExecutionSuspendedStorageV1001002 {
        assert(this.isV1001002)
        return this as any
    }
}

/**
 *  Global suspension state of the XCM executor.
 */
export interface XcmPalletXcmExecutionSuspendedStorageV1001002 {
    get(): Promise<boolean>
}
