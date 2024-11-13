import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v1001002 from './v1001002'
import * as v1002000 from './v1002000'
import * as v1003000 from './v1003000'
import * as v1003003 from './v1003003'

export class AssetRateAssetRateCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetRate.AssetRateCreated')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1001002(): boolean {
        return this._chain.getEventHash('AssetRate.AssetRateCreated') === 'dc2879fe8fdc758670d5111e15ab0330e153355407866684bea46db819c91ad7'
    }

    get asV1001002(): {assetKind: v1001002.VersionedLocatableAsset, rate: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    get isV1002000(): boolean {
        return this._chain.getEventHash('AssetRate.AssetRateCreated') === 'b2a2ab639d6245798ea066fcf9371e894b74051aa8e60dd676b8fe05f8897f65'
    }

    get asV1002000(): {assetKind: v1002000.VersionedLocatableAsset, rate: bigint} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetRateAssetRateRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetRate.AssetRateRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1001002(): boolean {
        return this._chain.getEventHash('AssetRate.AssetRateRemoved') === '0d1baf25e245231c5d8fb219a5a51629ccb543120e492a30d16a2d3c6c729334'
    }

    get asV1001002(): {assetKind: v1001002.VersionedLocatableAsset} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    get isV1002000(): boolean {
        return this._chain.getEventHash('AssetRate.AssetRateRemoved') === '514a48979bb927c7c9fe9309ec52ae4da47ae48e288c2f38041ae22ce853137b'
    }

    get asV1002000(): {assetKind: v1002000.VersionedLocatableAsset} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class AssetRateAssetRateUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'AssetRate.AssetRateUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1001002(): boolean {
        return this._chain.getEventHash('AssetRate.AssetRateUpdated') === '35c3c7acb3be83e6e328af7a44f8cbd585f9d0eeed09f959559d54a809a1d10c'
    }

    get asV1001002(): {assetKind: v1001002.VersionedLocatableAsset, old: bigint, new: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    get isV1002000(): boolean {
        return this._chain.getEventHash('AssetRate.AssetRateUpdated') === 'a79239927bfef923aa6fe578fc3a5da39f330daede7a238aa8aa71606e3c1fc8'
    }

    get asV1002000(): {assetKind: v1002000.VersionedLocatableAsset, old: bigint, new: bigint} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsAuctionClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.AuctionClosed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An auction ended. All funds become unreserved.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Auctions.AuctionClosed') === 'b43a4f04c143465b1befbba20a53ad22053012b22824f10dc981cf180e36e10d'
    }

    /**
     * An auction ended. All funds become unreserved.
     */
    get asV1001002(): {auctionIndex: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsAuctionStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.AuctionStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An auction started. Provides its index and the block number where it will begin to
     * close and the first lease period of the quadruplet that is auctioned.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Auctions.AuctionStarted') === '8b2d1722dc0088981b41be544b21195e4f399c63086aae153946e56fab444698'
    }

    /**
     * An auction started. Provides its index and the block number where it will begin to
     * close and the first lease period of the quadruplet that is auctioned.
     */
    get asV1001002(): {auctionIndex: number, leasePeriod: number, ending: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsBidAcceptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.BidAccepted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new bid has been accepted as the current winner.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Auctions.BidAccepted') === 'd351ff1617e3b6a9ea0a145957d1071c8f96f30490cd8f8cb5287a3bc9c81fa6'
    }

    /**
     * A new bid has been accepted as the current winner.
     */
    get asV1001002(): {bidder: Uint8Array, paraId: number, amount: bigint, firstSlot: number, lastSlot: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsReserveConfiscatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.ReserveConfiscated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone attempted to lease the same slot twice for a parachain. The amount is held in
     * reserve but no parachain slot has been leased.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Auctions.ReserveConfiscated') === '2ceaebb4a3710db29f1123153ea5f645630fdb49f4e00078ea741df82c007592'
    }

    /**
     * Someone attempted to lease the same slot twice for a parachain. The amount is held in
     * reserve but no parachain slot has been leased.
     */
    get asV1001002(): {paraId: number, leaser: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Funds were reserved for a winning bid. First balance is the extra amount reserved.
     * Second is the total.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Auctions.Reserved') === 'be3d717bc6827d9da650f48f75e515ba62d3161c7eb0137129ab2057c11e2367'
    }

    /**
     * Funds were reserved for a winning bid. First balance is the extra amount reserved.
     * Second is the total.
     */
    get asV1001002(): {bidder: Uint8Array, extraReserved: bigint, totalAmount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsUnreservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.Unreserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Auctions.Unreserved') === '1fbdeb84319a91e9d51edbf87a246fb5d72d27c6481f5903412fb369e7274cbe'
    }

    /**
     * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
     */
    get asV1001002(): {bidder: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class AuctionsWinningOffsetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Auctions.WinningOffset')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The winning offset was chosen for an auction. This will map into the `Winning` storage
     * map.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Auctions.WinningOffset') === 'e9bebdc1a926c4f6ea932110731c67970957cf98defb8800d5f773934139ecde'
    }

    /**
     * The winning offset was chosen for an auction. This will map into the `Winning` storage
     * map.
     */
    get asV1001002(): {auctionIndex: number, blockNumber: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesBalanceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.BalanceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A balance was set by root.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '8c52e43e845654720e1db5c5bd166f80eb777baf474e93ce4d20fd385601a8fb'
    }

    /**
     * A balance was set by root.
     */
    get asV1001002(): {who: Uint8Array, free: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesBurnedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Burned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was burned from an account.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Burned') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was burned from an account.
     */
    get asV1001002(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesDepositEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Deposit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asV1001002(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesDustLostEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.DustLost')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get asV1001002(): {account: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesEndowedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Endowed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was created with some free balance.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
    }

    /**
     * An account was created with some free balance.
     */
    get asV1001002(): {account: Uint8Array, freeBalance: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesFrozenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Frozen')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was frozen.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Frozen') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was frozen.
     */
    get asV1001002(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesIssuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Issued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Issued') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    get asV1001002(): {amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesLockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Locked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was locked.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Locked') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was locked.
     */
    get asV1001002(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesMintedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Minted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was minted into an account.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Minted') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was minted into an account.
     */
    get asV1001002(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesRescindedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Rescinded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Rescinded') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    get asV1001002(): {amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesReserveRepatriatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.ReserveRepatriated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get asV1001002(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v1001002.BalanceStatus} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV1001002(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesRestoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Restored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was restored into an account.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Restored') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was restored into an account.
     */
    get asV1001002(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get asV1001002(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesSuspendedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Suspended')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Suspended') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    get asV1001002(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesThawedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Thawed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was thawed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Thawed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was thawed.
     */
    get asV1001002(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesTotalIssuanceForcedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.TotalIssuanceForced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The `TotalIssuance` was forcefully changed.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('Balances.TotalIssuanceForced') === 'f9e13247f29786fd6eb0fa83ca8d59aef91a25e6becc3d99e138f9f419b9462b'
    }

    /**
     * The `TotalIssuance` was forcefully changed.
     */
    get asV1002000(): {old: bigint, new: bigint} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transfer succeeded.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
    }

    /**
     * Transfer succeeded.
     */
    get asV1001002(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesUnlockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Unlocked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was unlocked.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Unlocked') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was unlocked.
     */
    get asV1001002(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesUnreservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Unreserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV1001002(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesUpgradedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Upgraded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was upgraded.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Upgraded') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * An account was upgraded.
     */
    get asV1001002(): {who: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesWithdrawEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Withdraw')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get asV1001002(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyApproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty is approved.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Bounties.BountyApproved') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty is approved.
     */
    get asV1001002(): {index: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyAwardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyAwarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty is awarded to a beneficiary.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Bounties.BountyAwarded') === '5314a4c20f133eee477b8b4ce9998238defda69cb2db9344567309c8e6badd90'
    }

    /**
     * A bounty is awarded to a beneficiary.
     */
    get asV1001002(): {index: number, beneficiary: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyBecameActiveEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyBecameActive')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty proposal is funded and became active.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Bounties.BountyBecameActive') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty proposal is funded and became active.
     */
    get asV1001002(): {index: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyCanceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty is cancelled.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Bounties.BountyCanceled') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty is cancelled.
     */
    get asV1001002(): {index: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty is claimed by beneficiary.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Bounties.BountyClaimed') === 'fb4b26ccfabe9f649bfadde9c0bbee0816e9cf32c7384f2f21c03a852ec23f77'
    }

    /**
     * A bounty is claimed by beneficiary.
     */
    get asV1001002(): {index: number, payout: bigint, beneficiary: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyExtendedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyExtended')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty expiry is extended.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Bounties.BountyExtended') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A bounty expiry is extended.
     */
    get asV1001002(): {index: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyProposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New bounty proposal.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Bounties.BountyProposed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * New bounty proposal.
     */
    get asV1001002(): {index: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesBountyRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.BountyRejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Bounties.BountyRejected') === 'dc987b921ffaf859792cab48c45dff837e0f100cb2deeb83c24a11b61e50082e'
    }

    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    get asV1001002(): {index: number, bond: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesCuratorAcceptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.CuratorAccepted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty curator is accepted.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Bounties.CuratorAccepted') === 'b6bed4e85cf1f959ac84aa806807124fca71fd7ffb381081311fc6f9c88bb694'
    }

    /**
     * A bounty curator is accepted.
     */
    get asV1001002(): {bountyId: number, curator: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesCuratorProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.CuratorProposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty curator is proposed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Bounties.CuratorProposed') === 'b6bed4e85cf1f959ac84aa806807124fca71fd7ffb381081311fc6f9c88bb694'
    }

    /**
     * A bounty curator is proposed.
     */
    get asV1001002(): {bountyId: number, curator: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class BountiesCuratorUnassignedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Bounties.CuratorUnassigned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A bounty curator is unassigned.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Bounties.CuratorUnassigned') === '0ce670c7823ed5f5367cdf1eca3f3bfa8c091f2aa0cbaf0eba1679394ee42d24'
    }

    /**
     * A bounty curator is unassigned.
     */
    get asV1001002(): {bountyId: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChildBountiesAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChildBounties.Added')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A child-bounty is added.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ChildBounties.Added') === '9fb3a6aad6bc40cae151ada4822c8213e0d9958e4af9bf7189d4ce52bd045bd3'
    }

    /**
     * A child-bounty is added.
     */
    get asV1001002(): {index: number, childIndex: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChildBountiesAwardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChildBounties.Awarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A child-bounty is awarded to a beneficiary.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ChildBounties.Awarded') === '0a085a42ecce2b9e3c0b81694d10406a346b17c1ef5e244816a4e7d7438840da'
    }

    /**
     * A child-bounty is awarded to a beneficiary.
     */
    get asV1001002(): {index: number, childIndex: number, beneficiary: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChildBountiesCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChildBounties.Canceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A child-bounty is cancelled.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ChildBounties.Canceled') === '9fb3a6aad6bc40cae151ada4822c8213e0d9958e4af9bf7189d4ce52bd045bd3'
    }

    /**
     * A child-bounty is cancelled.
     */
    get asV1001002(): {index: number, childIndex: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ChildBountiesClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ChildBounties.Claimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A child-bounty is claimed by beneficiary.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ChildBounties.Claimed') === 'dfad8943decb48ed737eb4081add3d6fcb6f4dea668600b36619e88a793cd08e'
    }

    /**
     * A child-bounty is claimed by beneficiary.
     */
    get asV1001002(): {index: number, childIndex: number, payout: bigint, beneficiary: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ClaimsClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Claims.Claimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Someone claimed some DOTs.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Claims.Claimed') === 'b531097805a7255730ef1f4b9fb31dcd004dfcff933248b0a47610d6c2c62501'
    }

    /**
     * Someone claimed some DOTs.
     */
    get asV1001002(): {who: Uint8Array, ethereumAddress: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ConvictionVotingDelegatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ConvictionVoting.Delegated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has delegated their vote to another account. \[who, target\]
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ConvictionVoting.Delegated') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     * An account has delegated their vote to another account. \[who, target\]
     */
    get asV1001002(): [Uint8Array, Uint8Array] {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ConvictionVotingUndelegatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ConvictionVoting.Undelegated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An \[account\] has cancelled a previous delegation operation.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ConvictionVoting.Undelegated') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     * An \[account\] has cancelled a previous delegation operation.
     */
    get asV1001002(): Uint8Array {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class CoretimeCoreAssignedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Coretime.CoreAssigned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A core has received a new assignment from the broker chain.
     */
    get isV1003000(): boolean {
        return this._chain.getEventHash('Coretime.CoreAssigned') === '9efdd4905ddb3554f439f7126c49aed8b5c2026738b7a71cddf489ef03bf3731'
    }

    /**
     * A core has received a new assignment from the broker chain.
     */
    get asV1003000(): {core: number} {
        assert(this.isV1003000)
        return this._chain.decodeEvent(this.event)
    }
}

export class CoretimeRevenueInfoRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Coretime.RevenueInfoRequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The broker chain has asked for revenue information for a specific block.
     */
    get isV1003000(): boolean {
        return this._chain.getEventHash('Coretime.RevenueInfoRequested') === '9be35e7de5ea0123010dc6d955ee698a79910d328a220172ab82a67dd10dc4b5'
    }

    /**
     * The broker chain has asked for revenue information for a specific block.
     */
    get asV1003000(): {when: number} {
        assert(this.isV1003000)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanAddedToNewRaiseEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.AddedToNewRaise')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A parachain has been moved to `NewRaise`
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Crowdloan.AddedToNewRaise') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * A parachain has been moved to `NewRaise`
     */
    get asV1001002(): {paraId: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanAllRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.AllRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * All loans in a fund have been refunded.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Crowdloan.AllRefunded') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * All loans in a fund have been refunded.
     */
    get asV1001002(): {paraId: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanContributedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.Contributed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Contributed to a crowd sale.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Crowdloan.Contributed') === 'a09bba4441a47a7b463e5f26020197386183019a6130ce697a434ee31cc39482'
    }

    /**
     * Contributed to a crowd sale.
     */
    get asV1001002(): {who: Uint8Array, fundIndex: number, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.Created')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Create a new crowdloaning campaign.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Crowdloan.Created') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * Create a new crowdloaning campaign.
     */
    get asV1001002(): {paraId: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanDissolvedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.Dissolved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Fund is dissolved.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Crowdloan.Dissolved') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * Fund is dissolved.
     */
    get asV1001002(): {paraId: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanEditedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.Edited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The configuration to a crowdloan has been edited.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Crowdloan.Edited') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * The configuration to a crowdloan has been edited.
     */
    get asV1001002(): {paraId: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanHandleBidResultEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.HandleBidResult')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Crowdloan.HandleBidResult') === '1cdfe7a7877c18a19ae8f1677c8750993efff4b3aebaac58261a2bbaab73dc24'
    }

    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    get asV1001002(): {paraId: number, result: v1001002.Type_33} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanMemoUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.MemoUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A memo has been updated.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Crowdloan.MemoUpdated') === '2a9892b8f4e1d06ab30af22f0706a459528fcb9a6f3f85b25bd4d895be00bef7'
    }

    /**
     * A memo has been updated.
     */
    get asV1001002(): {who: Uint8Array, paraId: number, memo: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanPartiallyRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.PartiallyRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The loans in a fund have been partially dissolved, i.e. there are some left
     * over child keys that still need to be killed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Crowdloan.PartiallyRefunded') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    /**
     * The loans in a fund have been partially dissolved, i.e. there are some left
     * over child keys that still need to be killed.
     */
    get asV1001002(): {paraId: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class CrowdloanWithdrewEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Crowdloan.Withdrew')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Withdrew full balance of a contributor.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Crowdloan.Withdrew') === 'a09bba4441a47a7b463e5f26020197386183019a6130ce697a434ee31cc39482'
    }

    /**
     * Withdrew full balance of a contributor.
     */
    get asV1001002(): {who: Uint8Array, fundIndex: number, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseElectionFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.ElectionFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An election failed.
     * 
     * Not much can be said about which computes failed in the process.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.ElectionFailed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * An election failed.
     * 
     * Not much can be said about which computes failed in the process.
     */
    get asV1001002(): null {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseElectionFinalizedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.ElectionFinalized')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The election has been finalized, with the given computation and score.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.ElectionFinalized') === 'ed50f7c0b841dc5aadb056d9e4cf2c665a79bd8ac019de47ef20e466590483fa'
    }

    /**
     * The election has been finalized, with the given computation and score.
     */
    get asV1001002(): {compute: v1001002.ElectionCompute, score: v1001002.ElectionScore} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhasePhaseTransitionedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.PhaseTransitioned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * There was a phase transition in a given round.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.PhaseTransitioned') === 'c7ca79c013a2eb6682b0eae5badc17841b3fa2ec00221d968b3e1fb4ce1f7d8f'
    }

    /**
     * There was a phase transition in a given round.
     */
    get asV1001002(): {from: v1001002.Phase, to: v1001002.Phase, round: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.Rewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has been rewarded for their signed submission being finalized.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Rewarded') === '40dc3f4441ce8afa08ec542ce4412dbb8092d4ee5e0753ec1d7ffd7233b442d4'
    }

    /**
     * An account has been rewarded for their signed submission being finalized.
     */
    get asV1001002(): {account: Uint8Array, value: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has been slashed for submitting an invalid signed submission.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.Slashed') === '40dc3f4441ce8afa08ec542ce4412dbb8092d4ee5e0753ec1d7ffd7233b442d4'
    }

    /**
     * An account has been slashed for submitting an invalid signed submission.
     */
    get asV1001002(): {account: Uint8Array, value: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ElectionProviderMultiPhaseSolutionStoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ElectionProviderMultiPhase.SolutionStored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A solution was stored with the given compute.
     * 
     * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
     * the stored solution was submited in the signed phase by a miner with the `AccountId`.
     * Otherwise, the solution was stored either during the unsigned phase or by
     * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
     * room for this one.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ElectionProviderMultiPhase.SolutionStored') === '66fb962d8c6d753e5c5954ef51f605c0221a1597d71cb5cf595e74ae264b9d57'
    }

    /**
     * A solution was stored with the given compute.
     * 
     * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
     * the stored solution was submited in the signed phase by a miner with the `AccountId`.
     * Otherwise, the solution was stored either during the unsigned phase or by
     * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
     * room for this one.
     */
    get asV1001002(): {compute: v1001002.ElectionCompute, origin: (Uint8Array | undefined), prevEjected: boolean} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class FastUnstakeBatchCheckedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FastUnstake.BatchChecked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A batch was partially checked for the given eras, but the process did not finish.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('FastUnstake.BatchChecked') === 'be126c7a28eca5d68611d9820a352f99c5348e432aca1534bacf96564ff5bc59'
    }

    /**
     * A batch was partially checked for the given eras, but the process did not finish.
     */
    get asV1001002(): {eras: number[]} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class FastUnstakeBatchFinishedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FastUnstake.BatchFinished')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A batch of a given size was terminated.
     * 
     * This is always follows by a number of `Unstaked` or `Slashed` events, marking the end
     * of the batch. A new batch will be created upon next block.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('FastUnstake.BatchFinished') === '6b2494e665e8a59def82afdb4742abd48e4510b4d849a05639376d31dedd68c2'
    }

    /**
     * A batch of a given size was terminated.
     * 
     * This is always follows by a number of `Unstaked` or `Slashed` events, marking the end
     * of the batch. A new batch will be created upon next block.
     */
    get asV1001002(): {size: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class FastUnstakeInternalErrorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FastUnstake.InternalError')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An internal error happened. Operations will be paused now.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('FastUnstake.InternalError') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * An internal error happened. Operations will be paused now.
     */
    get asV1001002(): null {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class FastUnstakeSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FastUnstake.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A staker was slashed for requesting fast-unstake whilst being exposed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('FastUnstake.Slashed') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * A staker was slashed for requesting fast-unstake whilst being exposed.
     */
    get asV1001002(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class FastUnstakeUnstakedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'FastUnstake.Unstaked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A staker was unstaked.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('FastUnstake.Unstaked') === '3c98517eb7b29d00444a9f0efa8dcf516c850ab64704050ba3a266e7af21a14c'
    }

    /**
     * A staker was unstaked.
     */
    get asV1001002(): {stash: Uint8Array, result: v1001002.Type_33} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaNewAuthoritiesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.NewAuthorities')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New authority set has been applied.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Grandpa.NewAuthorities') === 'e25505d283e6b21359efad4ea3b01da035cbbe2b268fd3cbfb12ca0b5577a9de'
    }

    /**
     * New authority set has been applied.
     */
    get asV1001002(): {authoritySet: [Uint8Array, bigint][]} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaPausedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.Paused')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Current authority set has been paused.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Grandpa.Paused') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Current authority set has been paused.
     */
    get asV1001002(): null {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaResumedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.Resumed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Current authority set has been resumed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Grandpa.Resumed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Current authority set has been resumed.
     */
    get asV1001002(): null {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpChannelClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.ChannelClosed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * HRMP channel closed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Hrmp.ChannelClosed') === 'd7a18fb63023184c36e9a84f51283d53917a412fb9e3b256e26f06dd898c2eed'
    }

    /**
     * HRMP channel closed.
     */
    get asV1001002(): {byParachain: number, channelId: v1001002.HrmpChannelId} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpHrmpChannelForceOpenedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.HrmpChannelForceOpened')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An HRMP channel was opened via Root origin.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Hrmp.HrmpChannelForceOpened') === 'f402043bffae3fae642308da58b5d572368b726bad038cc14e7b7e843b8f401e'
    }

    /**
     * An HRMP channel was opened via Root origin.
     */
    get asV1001002(): {sender: number, recipient: number, proposedMaxCapacity: number, proposedMaxMessageSize: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpHrmpSystemChannelOpenedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.HrmpSystemChannelOpened')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An HRMP channel was opened between two system chains.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Hrmp.HrmpSystemChannelOpened') === 'f402043bffae3fae642308da58b5d572368b726bad038cc14e7b7e843b8f401e'
    }

    /**
     * An HRMP channel was opened between two system chains.
     */
    get asV1001002(): {sender: number, recipient: number, proposedMaxCapacity: number, proposedMaxMessageSize: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpOpenChannelAcceptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.OpenChannelAccepted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Open HRMP channel accepted.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Hrmp.OpenChannelAccepted') === '76ea4ea2912278783f0f738af842ab3f70b4d40830132e51dbcd2aed25017b31'
    }

    /**
     * Open HRMP channel accepted.
     */
    get asV1001002(): {sender: number, recipient: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpOpenChannelCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.OpenChannelCanceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Hrmp.OpenChannelCanceled') === 'd7a18fb63023184c36e9a84f51283d53917a412fb9e3b256e26f06dd898c2eed'
    }

    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     */
    get asV1001002(): {byParachain: number, channelId: v1001002.HrmpChannelId} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpOpenChannelDepositsUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.OpenChannelDepositsUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An HRMP channel's deposits were updated.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Hrmp.OpenChannelDepositsUpdated') === '76ea4ea2912278783f0f738af842ab3f70b4d40830132e51dbcd2aed25017b31'
    }

    /**
     * An HRMP channel's deposits were updated.
     */
    get asV1001002(): {sender: number, recipient: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class HrmpOpenChannelRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Hrmp.OpenChannelRequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Open HRMP channel requested.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Hrmp.OpenChannelRequested') === 'f402043bffae3fae642308da58b5d572368b726bad038cc14e7b7e843b8f401e'
    }

    /**
     * Open HRMP channel requested.
     */
    get asV1001002(): {sender: number, recipient: number, proposedMaxCapacity: number, proposedMaxMessageSize: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityAuthorityAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.AuthorityAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A username authority was added.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('Identity.AuthorityAdded') === '0ae422ecb2d278b96c6077d6655bda684bb3f0846ce1ed6f4fbf65a3d8dbcd4a'
    }

    /**
     * A username authority was added.
     */
    get asV1002000(): {authority: Uint8Array} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityAuthorityRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.AuthorityRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A username authority was removed.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('Identity.AuthorityRemoved') === '0ae422ecb2d278b96c6077d6655bda684bb3f0846ce1ed6f4fbf65a3d8dbcd4a'
    }

    /**
     * A username authority was removed.
     */
    get asV1002000(): {authority: Uint8Array} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityDanglingUsernameRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.DanglingUsernameRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A dangling username (as in, a username corresponding to an account that has removed its
     * identity) has been removed.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('Identity.DanglingUsernameRemoved') === 'c665dcc8f6b7b98ddaeecf110c8e9f754052296d7ee591b6ecacd37d6b39d16a'
    }

    /**
     * A dangling username (as in, a username corresponding to an account that has removed its
     * identity) has been removed.
     */
    get asV1002000(): {who: Uint8Array, username: Uint8Array} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityIdentityClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.IdentityCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Identity.IdentityCleared') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was cleared, and the given balance returned.
     */
    get asV1001002(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityIdentityKilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.IdentityKilled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Identity.IdentityKilled') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
    }

    /**
     * A name was removed and the given balance slashed.
     */
    get asV1001002(): {who: Uint8Array, deposit: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityIdentitySetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.IdentitySet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Identity.IdentitySet') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * A name was set or reset (which will remove all judgements).
     */
    get asV1001002(): {who: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityJudgementGivenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.JudgementGiven')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A judgement was given by a registrar.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Identity.JudgementGiven') === '0771fa05d0977d28db0dee420efa5c006fa01a48edbd0b5b50cba5ea1d98b1b8'
    }

    /**
     * A judgement was given by a registrar.
     */
    get asV1001002(): {target: Uint8Array, registrarIndex: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityJudgementRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.JudgementRequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A judgement was asked from a registrar.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Identity.JudgementRequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement was asked from a registrar.
     */
    get asV1001002(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityJudgementUnrequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.JudgementUnrequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A judgement request was retracted.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Identity.JudgementUnrequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
    }

    /**
     * A judgement request was retracted.
     */
    get asV1001002(): {who: Uint8Array, registrarIndex: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityPreapprovalExpiredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.PreapprovalExpired')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A queued username passed its expiration without being claimed and was removed.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('Identity.PreapprovalExpired') === '665bc948a365a563dd8bdd3fb3eca259442328d31bafa3d714af45fff39118d7'
    }

    /**
     * A queued username passed its expiration without being claimed and was removed.
     */
    get asV1002000(): {whose: Uint8Array} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityPrimaryUsernameSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.PrimaryUsernameSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A username was set as a primary and can be looked up from `who`.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('Identity.PrimaryUsernameSet') === 'c665dcc8f6b7b98ddaeecf110c8e9f754052296d7ee591b6ecacd37d6b39d16a'
    }

    /**
     * A username was set as a primary and can be looked up from `who`.
     */
    get asV1002000(): {who: Uint8Array, username: Uint8Array} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityRegistrarAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.RegistrarAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A registrar was added.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Identity.RegistrarAdded') === 'c7c8fe6ce04ac3d49accb0e86098814baf3baab267afb645140023a3c5c84c24'
    }

    /**
     * A registrar was added.
     */
    get asV1001002(): {registrarIndex: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentitySubIdentityAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.SubIdentityAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityAdded') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was added to an identity and the deposit paid.
     */
    get asV1001002(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentitySubIdentityRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.SubIdentityRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRemoved') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was removed from an identity and the deposit freed.
     */
    get asV1001002(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentitySubIdentityRevokedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.SubIdentityRevoked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Identity.SubIdentityRevoked') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
    }

    /**
     * A sub-identity was cleared, and the given deposit repatriated from the
     * main identity account to the sub-identity account.
     */
    get asV1001002(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityUsernameQueuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.UsernameQueued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A username was queued, but `who` must accept it prior to `expiration`.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('Identity.UsernameQueued') === '2329620706b1458bdccd1dcdf25e641413ecd44563e92f052622981cd9fe667d'
    }

    /**
     * A username was queued, but `who` must accept it prior to `expiration`.
     */
    get asV1002000(): {who: Uint8Array, username: Uint8Array, expiration: number} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityUsernameSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Identity.UsernameSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A username was set for `who`.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('Identity.UsernameSet') === 'c665dcc8f6b7b98ddaeecf110c8e9f754052296d7ee591b6ecacd37d6b39d16a'
    }

    /**
     * A username was set for `who`.
     */
    get asV1002000(): {who: Uint8Array, username: Uint8Array} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityMigratorDepositUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'IdentityMigrator.DepositUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The deposits held for `who` were updated. `identity` is the new deposit held for
     * identity info, and `subs` is the new deposit held for the sub-accounts.
     */
    get isV1002006(): boolean {
        return this._chain.getEventHash('IdentityMigrator.DepositUpdated') === '9f9569b16e96ae9e2a645d90742fba4da56c69e27ca057c394f65de20a57acab'
    }

    /**
     * The deposits held for `who` were updated. `identity` is the new deposit held for
     * identity info, and `subs` is the new deposit held for the sub-accounts.
     */
    get asV1002006(): {who: Uint8Array, identity: bigint, subs: bigint} {
        assert(this.isV1002006)
        return this._chain.decodeEvent(this.event)
    }
}

export class IdentityMigratorIdentityReapedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'IdentityMigrator.IdentityReaped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The identity and all sub accounts were reaped for `who`.
     */
    get isV1002006(): boolean {
        return this._chain.getEventHash('IdentityMigrator.IdentityReaped') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
    }

    /**
     * The identity and all sub accounts were reaped for `who`.
     */
    get asV1002006(): {who: Uint8Array} {
        assert(this.isV1002006)
        return this._chain.decodeEvent(this.event)
    }
}

export class ImOnlineAllGoodEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ImOnline.AllGood')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * At the end of the session, no offence was committed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ImOnline.AllGood') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * At the end of the session, no offence was committed.
     */
    get asV1001002(): null {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ImOnlineHeartbeatReceivedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ImOnline.HeartbeatReceived')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ImOnline.HeartbeatReceived') === 'f4f7db0d4947a3f194721945718633fbe38c2b20120d6b5be31252e30b822645'
    }

    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    get asV1001002(): {authorityId: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ImOnlineSomeOfflineEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ImOnline.SomeOffline')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ImOnline.SomeOffline') === '380731177debd1bc7de2f37d39c5ffd9fc74a19f43f20c4319233aa9b5d971aa'
    }

    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    get asV1001002(): {offline: [Uint8Array, v1001002.Exposure][]} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class IndicesIndexAssignedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Indices.IndexAssigned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A account index was assigned.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Indices.IndexAssigned') === '9b3d917cee3d7e2adf0a9df20e0bca9e5f81d6fb7f3c50084c4851608cd1a8f2'
    }

    /**
     * A account index was assigned.
     */
    get asV1001002(): {who: Uint8Array, index: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class IndicesIndexFreedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Indices.IndexFreed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A account index has been freed up (unassigned).
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Indices.IndexFreed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A account index has been freed up (unassigned).
     */
    get asV1001002(): {index: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class IndicesIndexFrozenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Indices.IndexFrozen')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A account index has been frozen to its current account ID.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Indices.IndexFrozen') === 'a4b2a09a4b129b731502d8f49526603d4f98cc90af6286baad9f0cab57c26843'
    }

    /**
     * A account index has been frozen to its current account ID.
     */
    get asV1001002(): {index: number, who: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class MessageQueueOverweightEnqueuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MessageQueue.OverweightEnqueued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Message placed in overweight queue.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('MessageQueue.OverweightEnqueued') === 'ba94ae70005cb082ee9eb242fc3fbcb41284f21251162aec12ed7e9591017d24'
    }

    /**
     * Message placed in overweight queue.
     */
    get asV1001002(): {id: Uint8Array, origin: v1001002.AggregateMessageOrigin, pageIndex: number, messageIndex: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class MessageQueuePageReapedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MessageQueue.PageReaped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * This page was reaped.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('MessageQueue.PageReaped') === 'e6fa86eb323ce5bdb3e0f4715d1808fbb4dae58750e914eb9b0dced5c3b3e19f'
    }

    /**
     * This page was reaped.
     */
    get asV1001002(): {origin: v1001002.AggregateMessageOrigin, index: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class MessageQueueProcessedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MessageQueue.Processed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Message is processed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('MessageQueue.Processed') === 'e117e2555ab52ecf9e61470fcfba005cc80c81e25322cf7c928e515feebce69a'
    }

    /**
     * Message is processed.
     */
    get asV1001002(): {id: Uint8Array, origin: v1001002.AggregateMessageOrigin, weightUsed: v1001002.Weight, success: boolean} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class MessageQueueProcessingFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'MessageQueue.ProcessingFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('MessageQueue.ProcessingFailed') === '2b7e384aa6ce4e8185203f585ae377a751b8011b57bdff49bcc77d0ca3e62d17'
    }

    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    get asV1001002(): {id: Uint8Array, origin: v1001002.AggregateMessageOrigin, error: v1001002.ProcessMessageError} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    get isV1003000(): boolean {
        return this._chain.getEventHash('MessageQueue.ProcessingFailed') === '5f61e9a88f359f9e66966c946746c1d513e9f6f80a4089c09a9ad44e6228118c'
    }

    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    get asV1003000(): {id: Uint8Array, origin: v1003000.AggregateMessageOrigin, error: v1003000.ProcessMessageError} {
        assert(this.isV1003000)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigMultisigApprovalEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.MultisigApproval')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Multisig.MultisigApproval') === 'bc800106752cebb28b84cdca738856289d0ade8d1818c303bd3f2000695fbb28'
    }

    /**
     * A multisig operation has been approved by someone.
     */
    get asV1001002(): {approving: Uint8Array, timepoint: v1001002.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigMultisigCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.MultisigCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been cancelled.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Multisig.MultisigCancelled') === 'b24b244f000fd9e834b0f8c6d23aa3931d80d5b1c70f0f9a0e28826f22125b21'
    }

    /**
     * A multisig operation has been cancelled.
     */
    get asV1001002(): {cancelling: Uint8Array, timepoint: v1001002.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigMultisigExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.MultisigExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A multisig operation has been executed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Multisig.MultisigExecuted') === '9e0a225fbf5acad3beeb4abfce677050bfccaf660eedf13e97c1c4ecb39cfe13'
    }

    /**
     * A multisig operation has been executed.
     */
    get asV1001002(): {approving: Uint8Array, timepoint: v1001002.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: v1001002.Type_33} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class MultisigNewMultisigEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Multisig.NewMultisig')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new multisig operation has begun.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Multisig.NewMultisig') === '137bdeb26018c08567fabc1c357d536046e92cc9fdf480339be5bc9e7e56d3be'
    }

    /**
     * A new multisig operation has begun.
     */
    get asV1001002(): {approving: Uint8Array, multisig: Uint8Array, callHash: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsBondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Bonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A member has became bonded in a pool.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.Bonded') === '346ce619103fbbd79b2dd7272ee712b9245db5dd69c1a8986cf02609a0807acb'
    }

    /**
     * A member has became bonded in a pool.
     */
    get asV1001002(): {member: Uint8Array, poolId: number, bonded: bigint, joined: boolean} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Created')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool has been created.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.Created') === 'd13a4a2e75b059cdf6021a8db830c10b03e25bab152f841299c6ec584141b177'
    }

    /**
     * A pool has been created.
     */
    get asV1001002(): {depositor: Uint8Array, poolId: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Destroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool has been destroyed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.Destroyed') === 'a662258b1bdb045a915972ea29e9ec0b46cdd5598b0da37b0e70ac766e3735a0'
    }

    /**
     * A pool has been destroyed.
     */
    get asV1001002(): {poolId: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsMemberRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.MemberRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A member has been removed from a pool.
     * 
     * The removal can be voluntary (withdrawn all unbonded funds) or involuntary (kicked).
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.MemberRemoved') === 'f1031007cce5071eaef0950174054819d39b33bd0ae7e341b316675fa8f8e85d'
    }

    /**
     * A member has been removed from a pool.
     * 
     * The removal can be voluntary (withdrawn all unbonded funds) or involuntary (kicked).
     */
    get asV1001002(): {poolId: number, member: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsMinBalanceDeficitAdjustedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.MinBalanceDeficitAdjusted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Topped up deficit in frozen ED of the reward pool.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.MinBalanceDeficitAdjusted') === 'e97a940401503c89156c5be028d3653893ac6e357b451b4035127aa329ed53e0'
    }

    /**
     * Topped up deficit in frozen ED of the reward pool.
     */
    get asV1001002(): {poolId: number, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsMinBalanceExcessAdjustedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.MinBalanceExcessAdjusted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Claimed excess frozen ED of af the reward pool.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.MinBalanceExcessAdjusted') === 'e97a940401503c89156c5be028d3653893ac6e357b451b4035127aa329ed53e0'
    }

    /**
     * Claimed excess frozen ED of af the reward pool.
     */
    get asV1001002(): {poolId: number, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPaidOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PaidOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A payout has been made to a member.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.PaidOut') === 'cfe21eb17104900a7cf176b7e8828f742dc518d5af2853e13dbd86e25b42d272'
    }

    /**
     * A payout has been made to a member.
     */
    get asV1001002(): {member: Uint8Array, poolId: number, payout: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolCommissionChangeRateUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolCommissionChangeRateUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool's commission `change_rate` has been changed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.PoolCommissionChangeRateUpdated') === 'bdbe2b8a0dbf004376752ab0b97d12bc46105ff7df04a1d804df35ca9fbc04c1'
    }

    /**
     * A pool's commission `change_rate` has been changed.
     */
    get asV1001002(): {poolId: number, changeRate: v1001002.CommissionChangeRate} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolCommissionClaimPermissionUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolCommissionClaimPermissionUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Pool commission claim permission has been updated.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('NominationPools.PoolCommissionClaimPermissionUpdated') === '5673f6f09801823cb89916bf0f047659a293829455ad1a0947744368f1b0ed79'
    }

    /**
     * Pool commission claim permission has been updated.
     */
    get asV1002000(): {poolId: number, permission: (v1002000.CommissionClaimPermission | undefined)} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolCommissionClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolCommissionClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Pool commission has been claimed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.PoolCommissionClaimed') === '39008f90774550cc01fac86050fbaa7fcba22fdf43a4a3f0033b863d36c99eba'
    }

    /**
     * Pool commission has been claimed.
     */
    get asV1001002(): {poolId: number, commission: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolCommissionUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolCommissionUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool's commission setting has been changed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.PoolCommissionUpdated') === '5f02db5203a66e286087b8a8254fd206258aebe8f4ba5f6f143da9c12da0f87b'
    }

    /**
     * A pool's commission setting has been changed.
     */
    get asV1001002(): {poolId: number, current: ([number, Uint8Array] | undefined)} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolMaxCommissionUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolMaxCommissionUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pool's maximum commission setting has been changed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.PoolMaxCommissionUpdated') === '6eb4d2709f88d8a2ee11fbbeaecd1987716bd1b2323a23339e00d70cb343b35b'
    }

    /**
     * A pool's maximum commission setting has been changed.
     */
    get asV1001002(): {poolId: number, maxCommission: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsPoolSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.PoolSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The active balance of pool `pool_id` has been slashed to `balance`.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.PoolSlashed') === '849ff35d9ca5ab6bfa8f0aff533bc59a22437fe70500718dd3337d480ba4b067'
    }

    /**
     * The active balance of pool `pool_id` has been slashed to `balance`.
     */
    get asV1001002(): {poolId: number, balance: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsRolesUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.RolesUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The roles of a pool have been updated to the given new roles. Note that the depositor
     * can never change.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.RolesUpdated') === 'b433c79229efa5c06baf826b58391661cb8ce02e51f7d52f27f8b07613fd23cf'
    }

    /**
     * The roles of a pool have been updated to the given new roles. Note that the depositor
     * can never change.
     */
    get asV1001002(): {root: (Uint8Array | undefined), bouncer: (Uint8Array | undefined), nominator: (Uint8Array | undefined)} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsStateChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.StateChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The state of a pool has changed
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.StateChanged') === 'ad04ef0d578c9399e7bdcc3a160bd0163a158a106de59b5d0ae918d0c38bec89'
    }

    /**
     * The state of a pool has changed
     */
    get asV1001002(): {poolId: number, newState: v1001002.PoolState} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsUnbondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Unbonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A member has unbonded from their pool.
     * 
     * - `balance` is the corresponding balance of the number of points that has been
     *   requested to be unbonded (the argument of the `unbond` transaction) from the bonded
     *   pool.
     * - `points` is the number of points that are issued as a result of `balance` being
     * dissolved into the corresponding unbonding pool.
     * - `era` is the era in which the balance will be unbonded.
     * In the absence of slashing, these values will match. In the presence of slashing, the
     * number of points that are issued in the unbonding pool will be less than the amount
     * requested to be unbonded.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.Unbonded') === '0832f5131732a2ab621b8912cbcce5335afa6afcde060b027446854e582a5992'
    }

    /**
     * A member has unbonded from their pool.
     * 
     * - `balance` is the corresponding balance of the number of points that has been
     *   requested to be unbonded (the argument of the `unbond` transaction) from the bonded
     *   pool.
     * - `points` is the number of points that are issued as a result of `balance` being
     * dissolved into the corresponding unbonding pool.
     * - `era` is the era in which the balance will be unbonded.
     * In the absence of slashing, these values will match. In the presence of slashing, the
     * number of points that are issued in the unbonding pool will be less than the amount
     * requested to be unbonded.
     */
    get asV1001002(): {member: Uint8Array, poolId: number, balance: bigint, points: bigint, era: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsUnbondingPoolSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.UnbondingPoolSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.UnbondingPoolSlashed') === '3409c75291f32ce014317f489b868f68c390f1473bfcb6f79b1e3e0546ee4a1c'
    }

    /**
     * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
     */
    get asV1001002(): {poolId: number, era: number, balance: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class NominationPoolsWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'NominationPools.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A member has withdrawn from their pool.
     * 
     * The given number of `points` have been dissolved in return of `balance`.
     * 
     * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
     * will be 1.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('NominationPools.Withdrawn') === 'a1ac2fad866830ba6aeeeeeae4a647a06425cd3c74143fccbac820b3f50b2346'
    }

    /**
     * A member has withdrawn from their pool.
     * 
     * The given number of `points` have been dissolved in return of `balance`.
     * 
     * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
     * will be 1.
     */
    get asV1001002(): {member: Uint8Array, poolId: number, balance: bigint, points: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class OffencesOffenceEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Offences.Offence')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Offences.Offence') === '5c9081474f836b1480d3d7cc7a09403e5d7f913d809fe792509e057c77a1ff4f'
    }

    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    get asV1001002(): {kind: Uint8Array, timeslot: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class OnDemandOnDemandOrderPlacedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OnDemand.OnDemandOrderPlaced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An order was placed at some spot price amount by orderer ordered_by
     */
    get isV1003000(): boolean {
        return this._chain.getEventHash('OnDemand.OnDemandOrderPlaced') === '616aac403938e34332d2385eda632239e640a7873c5e111a843bb784c0a2766d'
    }

    /**
     * An order was placed at some spot price amount by orderer ordered_by
     */
    get asV1003000(): {paraId: number, spotPrice: bigint, orderedBy: Uint8Array} {
        assert(this.isV1003000)
        return this._chain.decodeEvent(this.event)
    }
}

export class OnDemandSpotPriceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'OnDemand.SpotPriceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The value of the spot price has likely changed
     */
    get isV1003000(): boolean {
        return this._chain.getEventHash('OnDemand.SpotPriceSet') === 'e5b19246e361d9e4a1b39e8100a3e65c21a449c337a909c3183077d77bf06cd1'
    }

    /**
     * The value of the spot price has likely changed
     */
    get asV1003000(): {spotPrice: bigint} {
        assert(this.isV1003000)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParaInclusionCandidateBackedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParaInclusion.CandidateBacked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A candidate was backed. `[candidate, head_data]`
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ParaInclusion.CandidateBacked') === '246220cb1c83273013fc4c63084c87dd5cda26e1a2516b1736b272d8df91aaab'
    }

    /**
     * A candidate was backed. `[candidate, head_data]`
     */
    get asV1001002(): [v1001002.V6CandidateReceipt, Uint8Array, number, number] {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParaInclusionCandidateIncludedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParaInclusion.CandidateIncluded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A candidate was included. `[candidate, head_data]`
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ParaInclusion.CandidateIncluded') === '246220cb1c83273013fc4c63084c87dd5cda26e1a2516b1736b272d8df91aaab'
    }

    /**
     * A candidate was included. `[candidate, head_data]`
     */
    get asV1001002(): [v1001002.V6CandidateReceipt, Uint8Array, number, number] {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParaInclusionCandidateTimedOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParaInclusion.CandidateTimedOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A candidate timed out. `[candidate, head_data]`
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ParaInclusion.CandidateTimedOut') === 'e31c9b259107de7f78b46f1dcc13bdca23f4df12af9328f82e97f36b3f53190c'
    }

    /**
     * A candidate timed out. `[candidate, head_data]`
     */
    get asV1001002(): [v1001002.V6CandidateReceipt, Uint8Array, number] {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParaInclusionUpwardMessagesReceivedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParaInclusion.UpwardMessagesReceived')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some upward messages have been received and will be processed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ParaInclusion.UpwardMessagesReceived') === '2d8129b06f30a169fcb6d6880a497e0cac22650c5ccd121d7821784ed8ec6797'
    }

    /**
     * Some upward messages have been received and will be processed.
     */
    get asV1001002(): {from: number, count: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParametersUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Parameters.Updated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A Parameter was set.
     * 
     * Is also emitted when the value was not changed.
     */
    get isV1003003(): boolean {
        return this._chain.getEventHash('Parameters.Updated') === '69c9ab7c7584bca9ccfd617a101bf316a663a08c172aab68b502b0132e2cae02'
    }

    /**
     * A Parameter was set.
     * 
     * Is also emitted when the value was not changed.
     */
    get asV1003003(): {key: v1003003.RuntimeParametersKey, oldValue: (v1003003.RuntimeParametersValue | undefined), newValue: (v1003003.RuntimeParametersValue | undefined)} {
        assert(this.isV1003003)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasActionQueuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.ActionQueued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A para has been queued to execute pending actions. `para_id`
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Paras.ActionQueued') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
    }

    /**
     * A para has been queued to execute pending actions. `para_id`
     */
    get asV1001002(): [number, number] {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasCodeUpgradeScheduledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.CodeUpgradeScheduled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A code upgrade has been scheduled for a Para. `para_id`
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Paras.CodeUpgradeScheduled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A code upgrade has been scheduled for a Para. `para_id`
     */
    get asV1001002(): number {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasCurrentCodeUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.CurrentCodeUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Current code has been updated for a Para. `para_id`
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Paras.CurrentCodeUpdated') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Current code has been updated for a Para. `para_id`
     */
    get asV1001002(): number {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasCurrentHeadUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.CurrentHeadUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Current head has been updated for a Para. `para_id`
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Paras.CurrentHeadUpdated') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * Current head has been updated for a Para. `para_id`
     */
    get asV1001002(): number {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasNewHeadNotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.NewHeadNoted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new head has been noted for a Para. `para_id`
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Paras.NewHeadNoted') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A new head has been noted for a Para. `para_id`
     */
    get asV1001002(): number {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasPvfCheckAcceptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.PvfCheckAccepted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given validation code was accepted by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Paras.PvfCheckAccepted') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * The given validation code was accepted by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    get asV1001002(): [Uint8Array, number] {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasPvfCheckRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.PvfCheckRejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given validation code was rejected by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Paras.PvfCheckRejected') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * The given validation code was rejected by the PVF pre-checking vote.
     * `code_hash` `para_id`
     */
    get asV1001002(): [Uint8Array, number] {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasPvfCheckStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Paras.PvfCheckStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given para either initiated or subscribed to a PVF check for the given validation
     * code. `code_hash` `para_id`
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Paras.PvfCheckStarted') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
    }

    /**
     * The given para either initiated or subscribed to a PVF check for the given validation
     * code. `code_hash` `para_id`
     */
    get asV1001002(): [Uint8Array, number] {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasDisputesDisputeConcludedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParasDisputes.DisputeConcluded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A dispute has concluded for or against a candidate.
     * `\[para id, candidate hash, dispute result\]`
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ParasDisputes.DisputeConcluded') === 'e9351b7dc680e0a0341045157e5a30763bc3902fa66e2f60498d20f0e07d2335'
    }

    /**
     * A dispute has concluded for or against a candidate.
     * `\[para id, candidate hash, dispute result\]`
     */
    get asV1001002(): [Uint8Array, v1001002.DisputeResult] {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasDisputesDisputeInitiatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParasDisputes.DisputeInitiated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A dispute has been initiated. \[candidate hash, dispute location\]
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ParasDisputes.DisputeInitiated') === 'a503e05d4e469adce22821bd6d920c96ec2980312e6f00da193a79ddb620706b'
    }

    /**
     * A dispute has been initiated. \[candidate hash, dispute location\]
     */
    get asV1001002(): [Uint8Array, v1001002.DisputeLocation] {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ParasDisputesRevertEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ParasDisputes.Revert')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A dispute has concluded with supermajority against a candidate.
     * Block authors should no longer build on top of this head and should
     * instead revert the block at the given height. This should be the
     * number of the child of the last known valid block in the chain.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('ParasDisputes.Revert') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * A dispute has concluded with supermajority against a candidate.
     * Block authors should no longer build on top of this head and should
     * instead revert the block at the given height. This should be the
     * number of the child of the last known valid block in the chain.
     */
    get asV1001002(): number {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class PreimageClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Preimage.Cleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A preimage has ben cleared.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has ben cleared.
     */
    get asV1001002(): {hash: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class PreimageNotedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Preimage.Noted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A preimage has been noted.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been noted.
     */
    get asV1001002(): {hash: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class PreimageRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Preimage.Requested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A preimage has been requested.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * A preimage has been requested.
     */
    get asV1001002(): {hash: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ProxyAnnouncedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.Announced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An announcement was placed to make a call in the future.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Proxy.Announced') === '5c2546e4632bb75e839f990a33f7feb63fb5598747a25d3d09f23108c106abc4'
    }

    /**
     * An announcement was placed to make a call in the future.
     */
    get asV1001002(): {real: Uint8Array, proxy: Uint8Array, callHash: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ProxyProxyAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.ProxyAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proxy was added.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === '01096c7f75054e1987dbef5e5bc81bd5e1a21f201311c3265e9957e211424aa5'
    }

    /**
     * A proxy was added.
     */
    get asV1001002(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v1001002.ProxyType, delay: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was added.
     */
    get isV1003000(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === '3f030b28bfe7ce88bd3e6ca38ceb8a23f756400deecc782988a002bd45114146'
    }

    /**
     * A proxy was added.
     */
    get asV1003000(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v1003000.ProxyType, delay: number} {
        assert(this.isV1003000)
        return this._chain.decodeEvent(this.event)
    }
}

export class ProxyProxyExecutedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.ProxyExecuted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Proxy.ProxyExecuted') === 'ee56f7174dc1a4631da3e5b48f323193771be6a702fb2ff1ff40459869d34a0e'
    }

    /**
     * A proxy was executed correctly, with the given.
     */
    get asV1001002(): {result: v1001002.Type_33} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ProxyProxyRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.ProxyRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proxy was removed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Proxy.ProxyRemoved') === '01096c7f75054e1987dbef5e5bc81bd5e1a21f201311c3265e9957e211424aa5'
    }

    /**
     * A proxy was removed.
     */
    get asV1001002(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v1001002.ProxyType, delay: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was removed.
     */
    get isV1003000(): boolean {
        return this._chain.getEventHash('Proxy.ProxyRemoved') === '3f030b28bfe7ce88bd3e6ca38ceb8a23f756400deecc782988a002bd45114146'
    }

    /**
     * A proxy was removed.
     */
    get asV1003000(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v1003000.ProxyType, delay: number} {
        assert(this.isV1003000)
        return this._chain.decodeEvent(this.event)
    }
}

export class ProxyPureCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.PureCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Proxy.PureCreated') === '078538eebe4aeba94ccbedaf6514910161cb5f3d514e52f7e3a40c250cbf2b30'
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV1001002(): {pure: Uint8Array, who: Uint8Array, proxyType: v1001002.ProxyType, disambiguationIndex: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV1003000(): boolean {
        return this._chain.getEventHash('Proxy.PureCreated') === '3f5fd92e374155882ecd2cf2e2cbec470dff142c3ac63ca298285bb9d2bc483e'
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV1003000(): {pure: Uint8Array, who: Uint8Array, proxyType: v1003000.ProxyType, disambiguationIndex: number} {
        assert(this.isV1003000)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Approved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.Approved') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A referendum has been approved and its proposal has been scheduled.
     */
    get asV1001002(): {index: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Cancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been cancelled.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.Cancelled') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has been cancelled.
     */
    get asV1001002(): {index: number, tally: v1001002.Tally} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaConfirmAbortedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.ConfirmAborted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.ConfirmAborted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV1001002(): {index: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaConfirmStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.ConfirmStarted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.ConfirmStarted') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    get asV1001002(): {index: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaConfirmedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Confirmed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.Confirmed') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has ended its confirmation phase and is ready for approval.
     */
    get asV1001002(): {index: number, tally: v1001002.Tally} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDecisionDepositPlacedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DecisionDepositPlaced')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The decision deposit has been placed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.DecisionDepositPlaced') === '8d812a67c45bf964e1e2d13abd2a5d17e96af87348faff52d6eca5de04291ae9'
    }

    /**
     * The decision deposit has been placed.
     */
    get asV1001002(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDecisionDepositRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DecisionDepositRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The decision deposit has been refunded.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.DecisionDepositRefunded') === '8d812a67c45bf964e1e2d13abd2a5d17e96af87348faff52d6eca5de04291ae9'
    }

    /**
     * The decision deposit has been refunded.
     */
    get asV1001002(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDecisionStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DecisionStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has moved into the deciding phase.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.DecisionStarted') === '93e86498f68feebf124dad7a87010c14ba0e2cc07333331054e866079ff834a5'
    }

    /**
     * A referendum has moved into the deciding phase.
     */
    get asV1001002(): {index: number, track: number, proposal: v1001002.Bounded, tally: v1001002.Tally} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaDepositSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.DepositSlashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A deposit has been slashaed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.DepositSlashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * A deposit has been slashaed.
     */
    get asV1001002(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaKilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Killed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been killed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.Killed') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has been killed.
     */
    get asV1001002(): {index: number, tally: v1001002.Tally} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.MetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a referendum has been cleared.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.MetadataCleared') === 'bcccfeca753f71fa9a69022a68c8a101a4dcc752e055426850d08a4ccc07337d'
    }

    /**
     * Metadata for a referendum has been cleared.
     */
    get asV1001002(): {index: number, hash: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.MetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata for a referendum has been set.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.MetadataSet') === 'bcccfeca753f71fa9a69022a68c8a101a4dcc752e055426850d08a4ccc07337d'
    }

    /**
     * Metadata for a referendum has been set.
     */
    get asV1001002(): {index: number, hash: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Rejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.Rejected') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A proposal has been rejected by referendum.
     */
    get asV1001002(): {index: number, tally: v1001002.Tally} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaSubmissionDepositRefundedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.SubmissionDepositRefunded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The submission deposit has been refunded.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.SubmissionDepositRefunded') === '8d812a67c45bf964e1e2d13abd2a5d17e96af87348faff52d6eca5de04291ae9'
    }

    /**
     * The submission deposit has been refunded.
     */
    get asV1001002(): {index: number, who: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaSubmittedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.Submitted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been submitted.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.Submitted') === 'dd1db40cab9e2e0c54e203f9c60347029a08160d5930b550604e5378d4c502df'
    }

    /**
     * A referendum has been submitted.
     */
    get asV1001002(): {index: number, track: number, proposal: v1001002.Bounded} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class ReferendaTimedOutEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Referenda.TimedOut')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A referendum has been timed out without being decided.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Referenda.TimedOut') === '70d6a902ac9b2bb5bbfe0c144d90f4f6173d5a1789c49a1fde94843431be6f82'
    }

    /**
     * A referendum has been timed out without being decided.
     */
    get asV1001002(): {index: number, tally: v1001002.Tally} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class RegistrarDeregisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Registrar.Deregistered')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1001002(): boolean {
        return this._chain.getEventHash('Registrar.Deregistered') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
    }

    get asV1001002(): {paraId: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class RegistrarRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Registrar.Registered')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1001002(): boolean {
        return this._chain.getEventHash('Registrar.Registered') === 'fcb0da366ca6f6d7d745530f213e6cdf1948df720c94e736ad2764b51f57b9a6'
    }

    get asV1001002(): {paraId: number, manager: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class RegistrarReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Registrar.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1001002(): boolean {
        return this._chain.getEventHash('Registrar.Reserved') === '1f9b6376eaab9f7fcc13bea9f2b6a56229f262c6bc5ab4562b814aa57033fda6'
    }

    get asV1001002(): {paraId: number, who: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class RegistrarSwappedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Registrar.Swapped')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1001002(): boolean {
        return this._chain.getEventHash('Registrar.Swapped') === '5a82c2177dd46ce4c9b665831e8205218e15960888b871d6c72aaa9faf6654ed'
    }

    get asV1001002(): {paraId: number, otherId: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerCallUnavailableEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.CallUnavailable')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Scheduler.CallUnavailable') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The call for the provided hash was not found so the task has been aborted.
     */
    get asV1001002(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerCanceledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.Canceled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Canceled some task.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Scheduler.Canceled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Canceled some task.
     */
    get asV1001002(): {when: number, index: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.Dispatched')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Dispatched some task.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Scheduler.Dispatched') === '6eb5580f3023aa9d8b919b2e4d4c348b6d18e7b61b4d3362b70f19480d1767fc'
    }

    /**
     * Dispatched some task.
     */
    get asV1001002(): {task: [number, number], id: (Uint8Array | undefined), result: v1001002.Type_33} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerPeriodicFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.PeriodicFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Scheduler.PeriodicFailed') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The given task was unable to be renewed since the agenda is full at that block.
     */
    get asV1001002(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerPermanentlyOverweightEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.PermanentlyOverweight')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given task can never be executed since it is overweight.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Scheduler.PermanentlyOverweight') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The given task can never be executed since it is overweight.
     */
    get asV1001002(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerRetryCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.RetryCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Cancel a retry configuration for some task.
     */
    get isV1003000(): boolean {
        return this._chain.getEventHash('Scheduler.RetryCancelled') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * Cancel a retry configuration for some task.
     */
    get asV1003000(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV1003000)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerRetryFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.RetryFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The given task was unable to be retried since the agenda is full at that block or there
     * was not enough weight to reschedule it.
     */
    get isV1003000(): boolean {
        return this._chain.getEventHash('Scheduler.RetryFailed') === '3f8a02e4aab86c69eee850370e5a22ba709a5a92af04e5636b8cbc2a1920b477'
    }

    /**
     * The given task was unable to be retried since the agenda is full at that block or there
     * was not enough weight to reschedule it.
     */
    get asV1003000(): {task: [number, number], id: (Uint8Array | undefined)} {
        assert(this.isV1003000)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerRetrySetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.RetrySet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Set a retry configuration for some task.
     */
    get isV1003000(): boolean {
        return this._chain.getEventHash('Scheduler.RetrySet') === 'ea8aa0ed09111198d24aab62e7705fc5054118cd7b2c302ff3b68962c5229357'
    }

    /**
     * Set a retry configuration for some task.
     */
    get asV1003000(): {task: [number, number], id: (Uint8Array | undefined), period: number, retries: number} {
        assert(this.isV1003000)
        return this._chain.decodeEvent(this.event)
    }
}

export class SchedulerScheduledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Scheduler.Scheduled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Scheduled some task.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Scheduler.Scheduled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Scheduled some task.
     */
    get asV1001002(): {when: number, index: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SessionNewSessionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Session.NewSession')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Session.NewSession') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
    }

    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    get asV1001002(): {sessionIndex: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SlotsLeasedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Slots.Leased')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A para has won the right to a continuous set of lease periods as a parachain.
     * First balance is any extra amount reserved on top of the para's existing deposit.
     * Second balance is the total amount reserved.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Slots.Leased') === '4625013b2a7d8273578186b9cca9ba9a58005a93e899f0b8db1e8fa1f40b076b'
    }

    /**
     * A para has won the right to a continuous set of lease periods as a parachain.
     * First balance is any extra amount reserved on top of the para's existing deposit.
     * Second balance is the total amount reserved.
     */
    get asV1001002(): {paraId: number, leaser: Uint8Array, periodBegin: number, periodCount: number, extraReserved: bigint, totalAmount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SlotsNewLeasePeriodEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Slots.NewLeasePeriod')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new `[lease_period]` is beginning.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Slots.NewLeasePeriod') === 'd34ea8d9d8021775bd82bca4dbb3fb342419708199cd6e80ac5b9091f79a4000'
    }

    /**
     * A new `[lease_period]` is beginning.
     */
    get asV1001002(): {leasePeriod: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingBondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Bonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.Bonded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has bonded this amount. \[stash, amount\]
     * 
     * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
     * it will not be emitted for staking rewards when they are added to stake.
     */
    get asV1001002(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingChilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Chilled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.Chilled') === '7f6c53511d7cf7d5d6d53c9bd68762f88e130eef3cdaff66e227fd21c493b12c'
    }

    /**
     * An account has stopped participating as either a validator or nominator.
     */
    get asV1001002(): {stash: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingControllerBatchDeprecatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.ControllerBatchDeprecated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Report of a controller batch deprecation.
     */
    get isV1001003(): boolean {
        return this._chain.getEventHash('Staking.ControllerBatchDeprecated') === '515d3bde36ccdd3ae54297ed1aa2b8ba95f4d6cd9b37e2436ba07113b6efe510'
    }

    /**
     * Report of a controller batch deprecation.
     */
    get asV1001003(): {failures: number} {
        assert(this.isV1001003)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingEraPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.EraPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.EraPaid') === '940fb56de13a3a5bb887ff8bc3518465d73e48a2e4418a6edb32a9d338f0b44a'
    }

    /**
     * The era payout has been set; the first balance is the validator-payout; the second is
     * the remainder from the maximum amount of reward.
     */
    get asV1001002(): {eraIndex: number, validatorPayout: bigint, remainder: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingForceEraEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.ForceEra')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new force era mode was set.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.ForceEra') === 'd01e60727d072e84480126126bc575ed2a927476ff6a196deed5f14861885e98'
    }

    /**
     * A new force era mode was set.
     */
    get asV1001002(): {mode: v1001002.Forcing} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingKickedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Kicked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A nominator has been kicked from a validator.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.Kicked') === 'd7d337878d792eb4a5ab3986a889ac0dcae3a639d0158fd9509bad8b5f25f81a'
    }

    /**
     * A nominator has been kicked from a validator.
     */
    get asV1001002(): {nominator: Uint8Array, stash: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingOldSlashingReportDiscardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.OldSlashingReportDiscarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.OldSlashingReportDiscarded') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
    }

    /**
     * An old slashing report from a prior era was discarded because it could
     * not be processed.
     */
    get asV1001002(): {sessionIndex: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingPayoutStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.PayoutStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The stakers' rewards are getting paid.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.PayoutStarted') === 'd95599bb0ef0f714befa738223f11c2fc8127ccc863fcf601c59c2c90393c3cf'
    }

    /**
     * The stakers' rewards are getting paid.
     */
    get asV1001002(): {eraIndex: number, validatorStash: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingRewardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Rewarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The nominator has been rewarded by this amount to this destination.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.Rewarded') === 'aa169b460298a3833e89c51c9a8b87e01c995327696f303fd797a6fd1468d9a6'
    }

    /**
     * The nominator has been rewarded by this amount to this destination.
     */
    get asV1001002(): {stash: Uint8Array, dest: v1001002.RewardDestination, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSlashReportedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.SlashReported')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.SlashReported') === 'e39cf2a18a4e10b8687c317e88d62091108b3531886ba13edd6e5b2b3fcd9ddc'
    }

    /**
     * A slash for the given validator, for the given percentage of their stake, at the given
     * era as been reported.
     */
    get asV1001002(): {validator: Uint8Array, fraction: number, slashEra: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A staker (validator or nominator) has been slashed by the given amount.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.Slashed') === '8043a273ae232adf290e1fbbd88711bdf078eb5beb2a947de455999b434e7896'
    }

    /**
     * A staker (validator or nominator) has been slashed by the given amount.
     */
    get asV1001002(): {staker: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSnapshotTargetsSizeExceededEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.SnapshotTargetsSizeExceeded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Targets size limit reached.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.SnapshotTargetsSizeExceeded') === '6b2494e665e8a59def82afdb4742abd48e4510b4d849a05639376d31dedd68c2'
    }

    /**
     * Targets size limit reached.
     */
    get asV1001002(): {size: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingSnapshotVotersSizeExceededEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.SnapshotVotersSizeExceeded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Voters size limit reached.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.SnapshotVotersSizeExceeded') === '6b2494e665e8a59def82afdb4742abd48e4510b4d849a05639376d31dedd68c2'
    }

    /**
     * Voters size limit reached.
     */
    get asV1001002(): {size: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingStakersElectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.StakersElected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new set of stakers was elected.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.StakersElected') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A new set of stakers was elected.
     */
    get asV1001002(): null {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingStakingElectionFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.StakingElectionFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The election failed. No new era is planned.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.StakingElectionFailed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The election failed. No new era is planned.
     */
    get asV1001002(): null {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingUnbondedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Unbonded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has unbonded this amount.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.Unbonded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has unbonded this amount.
     */
    get asV1001002(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingValidatorPrefsSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.ValidatorPrefsSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A validator has set their preferences.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.ValidatorPrefsSet') === 'ddd49ae78e2f486962719114045bf4dd54c48ed4387a2f0ad91dc62c7bfc3212'
    }

    /**
     * A validator has set their preferences.
     */
    get asV1001002(): {stash: Uint8Array, prefs: v1001002.ValidatorPrefs} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StakingWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Staking.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Staking.Withdrawn') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
    }

    /**
     * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
     * from the unlocking queue.
     */
    get asV1001002(): {stash: Uint8Array, amount: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class StateTrieMigrationAutoMigrationFinishedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StateTrieMigration.AutoMigrationFinished')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The auto migration task finished.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('StateTrieMigration.AutoMigrationFinished') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The auto migration task finished.
     */
    get asV1002000(): null {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class StateTrieMigrationHaltedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StateTrieMigration.Halted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Migration got halted due to an error or miss-configuration.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('StateTrieMigration.Halted') === '9db6512bfa608ca7e065f2513e72fb1a79e936473c3e8f94c8b57b11a0e5bfce'
    }

    /**
     * Migration got halted due to an error or miss-configuration.
     */
    get asV1002000(): {error: v1002000.Error} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class StateTrieMigrationMigratedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StateTrieMigration.Migrated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Given number of `(top, child)` keys were migrated respectively, with the given
     * `compute`.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('StateTrieMigration.Migrated') === 'e95f6cbf274d326db45ce7cda6cf064a2899b4bf668282f21e3dfb104bbd89fc'
    }

    /**
     * Given number of `(top, child)` keys were migrated respectively, with the given
     * `compute`.
     */
    get asV1002000(): {top: number, child: number, compute: v1002000.MigrationCompute} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class StateTrieMigrationSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'StateTrieMigration.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some account got slashed by the given amount.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('StateTrieMigration.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some account got slashed by the given amount.
     */
    get asV1002000(): {who: Uint8Array, amount: bigint} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoKeyChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.KeyChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The sudo key has been updated.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === 'b94a7a753f8f0b026120555f1f1c70878235307461e256807cb791dad15244c2'
    }

    /**
     * The sudo key has been updated.
     */
    get asV1001002(): {oldSudoer: (Uint8Array | undefined)} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The sudo key has been updated.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === 'a771bed496e6bee0a887b6ede5584a937b2b84b2386b8e90c5a43687a8485573'
    }

    /**
     * The sudo key has been updated.
     */
    get asV1002000(): {old: (Uint8Array | undefined), new: Uint8Array} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoKeyRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.KeyRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The key was permanently removed.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('Sudo.KeyRemoved') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * The key was permanently removed.
     */
    get asV1002000(): null {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoSudidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.Sudid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A sudo call just took place.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '3ecb430e21c76eb720064ac2294a31cf70178245416aa72891f2973dfab55b73'
    }

    /**
     * A sudo call just took place.
     */
    get asV1001002(): {sudoResult: v1001002.Type_33} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoSudoAsDoneEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.SudoAsDone')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A [sudo_as](Pallet::sudo_as) call just took place.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '3ecb430e21c76eb720064ac2294a31cf70178245416aa72891f2973dfab55b73'
    }

    /**
     * A [sudo_as](Pallet::sudo_as) call just took place.
     */
    get asV1001002(): {sudoResult: v1001002.Type_33} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemCodeUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.CodeUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * `:code` was updated.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * `:code` was updated.
     */
    get asV1001002(): null {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemExtrinsicFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.ExtrinsicFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An extrinsic failed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '89ca818f689e3f6e085d8137a961f36cc94819777211c5c11cca985a448944b8'
    }

    /**
     * An extrinsic failed.
     */
    get asV1001002(): {dispatchError: v1001002.DispatchError, dispatchInfo: v1001002.DispatchInfo} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemExtrinsicSuccessEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.ExtrinsicSuccess')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '6b78214e1591ecc2de1662ebf5ca93838612414a62415cde1cdd2962f8235a92'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV1001002(): {dispatchInfo: v1001002.DispatchInfo} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemKilledAccountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.KilledAccount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An account was reaped.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account was reaped.
     */
    get asV1001002(): {account: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemNewAccountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.NewAccount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new account was created.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * A new account was created.
     */
    get asV1001002(): {account: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemRemarkedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.Remarked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * On on-chain remark happened.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
    }

    /**
     * On on-chain remark happened.
     */
    get asV1001002(): {sender: Uint8Array, hash: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemUpgradeAuthorizedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.UpgradeAuthorized')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An upgrade was authorized.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('System.UpgradeAuthorized') === '5c55d10848d503323d2e442c7afe37bb9673cbd625584442853911cb797f840c'
    }

    /**
     * An upgrade was authorized.
     */
    get asV1002000(): {codeHash: Uint8Array, checkVersion: boolean} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class TransactionPaymentTransactionFeePaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TransactionPayment.TransactionFeePaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('TransactionPayment.TransactionFeePaid') === 'f2e962e9996631445edecd62b0646df79871442a2d1a1a6e1f550a0b3a56b226'
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get asV1001002(): {who: Uint8Array, actualFee: bigint, tip: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryAssetSpendApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.AssetSpendApproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new asset spend proposal has been approved.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Treasury.AssetSpendApproved') === 'c219d4aff532cafc7691d19f9929b86ce2c5ac6a5c5bef633427311056b30630'
    }

    /**
     * A new asset spend proposal has been approved.
     */
    get asV1001002(): {index: number, assetKind: v1001002.VersionedLocatableAsset, amount: bigint, beneficiary: v1001002.VersionedMultiLocation, validFrom: number, expireAt: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new asset spend proposal has been approved.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('Treasury.AssetSpendApproved') === '1d1cb8102849f98999ab38c16eccb53d738ebcaa955ed59bbcef59b1cebc8701'
    }

    /**
     * A new asset spend proposal has been approved.
     */
    get asV1002000(): {index: number, assetKind: v1002000.VersionedLocatableAsset, amount: bigint, beneficiary: v1002000.VersionedLocation, validFrom: number, expireAt: number} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryAssetSpendVoidedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.AssetSpendVoided')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An approved spend was voided.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Treasury.AssetSpendVoided') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * An approved spend was voided.
     */
    get asV1001002(): {index: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryAwardedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Awarded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some funds have been allocated.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Treasury.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
    }

    /**
     * Some funds have been allocated.
     */
    get asV1001002(): {proposalIndex: number, award: bigint, account: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryBurntEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Burnt')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some of our funds have been burnt.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Treasury.Burnt') === '9d1d11cb2e24085666bf949195a4030bd6e80ff41274d0386073977e7cd59a87'
    }

    /**
     * Some of our funds have been burnt.
     */
    get asV1001002(): {burntFunds: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryDepositEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Deposit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some funds have been deposited.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Treasury.Deposit') === 'd74027ad27459f17d7446fef449271d1b0dc12b852c175623e871d009a661493'
    }

    /**
     * Some funds have been deposited.
     */
    get asV1001002(): {value: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Paid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A payment happened.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Treasury.Paid') === '973ae217fde5763751cfd1f303982b5a8bf92eab5121ba7457bde28a9494be7c'
    }

    /**
     * A payment happened.
     */
    get asV1001002(): {index: number, paymentId: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryPaymentFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.PaymentFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A payment failed and can be retried.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Treasury.PaymentFailed') === '973ae217fde5763751cfd1f303982b5a8bf92eab5121ba7457bde28a9494be7c'
    }

    /**
     * A payment failed and can be retried.
     */
    get asV1001002(): {index: number, paymentId: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryProposedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Proposed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New proposal.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
    }

    /**
     * New proposal.
     */
    get asV1001002(): {proposalIndex: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryRejectedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Rejected')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
    }

    /**
     * A proposal was rejected; funds were slashed.
     */
    get asV1001002(): {proposalIndex: number, slashed: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryRolloverEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Rollover')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Treasury.Rollover') === 'c9e720e2b3ada12c617b4dcb70771c3afafb9e294bf362df01a9e129683a92dd'
    }

    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    get asV1001002(): {rolloverBalance: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasurySpendApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.SpendApproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new spend proposal has been approved.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Treasury.SpendApproved') === 'fce90c02bffde89fb0e8723868aa8e94bfe9c1c48c5af8c34efd8ff5173184f9'
    }

    /**
     * A new spend proposal has been approved.
     */
    get asV1001002(): {proposalIndex: number, amount: bigint, beneficiary: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasurySpendProcessedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.SpendProcessed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A spend was processed and removed from the storage. It might have been successfully
     * paid or it may have expired.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Treasury.SpendProcessed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * A spend was processed and removed from the storage. It might have been successfully
     * paid or it may have expired.
     */
    get asV1001002(): {index: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasurySpendingEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.Spending')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Treasury.Spending') === 'b9f599ccbbe2e4fd1004f47546e1a3100bc78745b24ac47ac03ed16ca6266290'
    }

    /**
     * We have ended a spend period and will now allocate funds.
     */
    get asV1001002(): {budgetRemaining: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class TreasuryUpdatedInactiveEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Treasury.UpdatedInactive')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The inactive funds of the pallet have been updated.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Treasury.UpdatedInactive') === 'd25083f089d99f72f11dfcdd8481dbdc5c0c6d9c3369646530e2e08cd9f6bbba'
    }

    /**
     * The inactive funds of the pallet have been updated.
     */
    get asV1001002(): {reactivated: bigint, deactivated: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityBatchCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.BatchCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of dispatches completed fully with no error.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed fully with no error.
     */
    get asV1001002(): null {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityBatchCompletedWithErrorsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.BatchCompletedWithErrors')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Utility.BatchCompletedWithErrors') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get asV1001002(): null {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityBatchInterruptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.BatchInterrupted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '031f8c01ddd9491965bf6e6671d70381e70d55e6028aab52a937d1c3afeecb9f'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV1001002(): {index: number, error: v1001002.DispatchError} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityDispatchedAsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.DispatchedAs')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A call was dispatched.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'ee56f7174dc1a4631da3e5b48f323193771be6a702fb2ff1ff40459869d34a0e'
    }

    /**
     * A call was dispatched.
     */
    get asV1001002(): {result: v1001002.Type_33} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityItemCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.ItemCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    get asV1001002(): null {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityItemFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.ItemFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '4564a5412ce55535234d019dbd1d2999c5a9d6f452a565385d0c43e85d0dbf0b'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV1001002(): {error: v1001002.DispatchError} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class VestingVestingCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Vesting.VestingCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An \[account\] has become fully vested.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Vesting.VestingCompleted') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An \[account\] has become fully vested.
     */
    get asV1001002(): {account: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class VestingVestingUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Vesting.VestingUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The amount vested has been updated. This could indicate a change in funds available.
     * The balance given is the amount which is left unvested (and thus locked).
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('Vesting.VestingUpdated') === '827ca6c1a4e85ce850afac4c8d4d055acd3be5c19141889b40808e42b2c769e3'
    }

    /**
     * The amount vested has been updated. This could indicate a change in funds available.
     * The balance given is the amount which is left unvested (and thus locked).
     */
    get asV1001002(): {account: Uint8Array, unvested: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class VoterListRebaggedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'VoterList.Rebagged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Moved an account from one bag to another.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('VoterList.Rebagged') === '7c6f9f7c01916b66130aa25ffe6ba9b00599c0af74b1238a9876c164819dde4e'
    }

    /**
     * Moved an account from one bag to another.
     */
    get asV1001002(): {who: Uint8Array, from: bigint, to: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class VoterListScoreUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'VoterList.ScoreUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Updated the score of some account to the given amount.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('VoterList.ScoreUpdated') === '3444db3e9dd4128c42e890eb1f98441148f3d7cea3a43f5b223ba3e6cdc2c8b6'
    }

    /**
     * Updated the score of some account to the given amount.
     */
    get asV1001002(): {who: Uint8Array, newScore: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class WhitelistCallWhitelistedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Whitelist.CallWhitelisted')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1001002(): boolean {
        return this._chain.getEventHash('Whitelist.CallWhitelisted') === 'b44e90452a13e65d907b0cefbea166547546a12683e4c0df57032f38a10e78b3'
    }

    get asV1001002(): {callHash: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class WhitelistWhitelistedCallDispatchedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Whitelist.WhitelistedCallDispatched')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1001002(): boolean {
        return this._chain.getEventHash('Whitelist.WhitelistedCallDispatched') === '872efdfca137d9329d409f26057af1369b9a71eb023c2bc2c0a793d4d9dfca2e'
    }

    get asV1001002(): {callHash: Uint8Array, result: Result<v1001002.PostDispatchInfo, v1001002.DispatchErrorWithPostInfo>} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class WhitelistWhitelistedCallRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Whitelist.WhitelistedCallRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    get isV1001002(): boolean {
        return this._chain.getEventHash('Whitelist.WhitelistedCallRemoved') === 'b44e90452a13e65d907b0cefbea166547546a12683e4c0df57032f38a10e78b3'
    }

    get asV1001002(): {callHash: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletAssetsClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.AssetsClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets have been claimed from an asset trap
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.AssetsClaimed') === 'd00ea00073f2771dbd949ebc6ee42f5f3310603eab60e504d4562c1c65fd8a66'
    }

    /**
     * Some assets have been claimed from an asset trap
     */
    get asV1001002(): {hash: Uint8Array, origin: v1001002.V3MultiLocation, assets: v1001002.VersionedMultiAssets} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets have been claimed from an asset trap
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.AssetsClaimed') === 'eeece5e2ed3bdcc98e977aba0ef754b262b3a3cbe3e1a88fe9a8a647d03e41bf'
    }

    /**
     * Some assets have been claimed from an asset trap
     */
    get asV1002000(): {hash: Uint8Array, origin: v1002000.V4Location, assets: v1002000.VersionedAssets} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletAssetsTrappedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.AssetsTrapped')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some assets have been placed in an asset trap.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.AssetsTrapped') === 'd00ea00073f2771dbd949ebc6ee42f5f3310603eab60e504d4562c1c65fd8a66'
    }

    /**
     * Some assets have been placed in an asset trap.
     */
    get asV1001002(): {hash: Uint8Array, origin: v1001002.V3MultiLocation, assets: v1001002.VersionedMultiAssets} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some assets have been placed in an asset trap.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.AssetsTrapped') === 'eeece5e2ed3bdcc98e977aba0ef754b262b3a3cbe3e1a88fe9a8a647d03e41bf'
    }

    /**
     * Some assets have been placed in an asset trap.
     */
    get asV1002000(): {hash: Uint8Array, origin: v1002000.V4Location, assets: v1002000.VersionedAssets} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletAttemptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.Attempted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Execution of an XCM message was attempted.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.Attempted') === '2422ddc668f3b01819427c84d6396493ee941332f71e202147480df98ef5a892'
    }

    /**
     * Execution of an XCM message was attempted.
     */
    get asV1001002(): {outcome: v1001002.V3Outcome} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Execution of an XCM message was attempted.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.Attempted') === 'dee8f9d4813504b7c6b45d7797d04a6b2741991e571c9fb12102c35558af6e6e'
    }

    /**
     * Execution of an XCM message was attempted.
     */
    get asV1002000(): {outcome: v1002000.V4Outcome} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletFeesPaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.FeesPaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.FeesPaid') === 'ec234f3e15c9f2e59bc1a5758ab00b5eafe775b43e2250bc6610d7270394b3fc'
    }

    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    get asV1001002(): {paying: v1001002.V3MultiLocation, fees: v1001002.V3MultiAsset[]} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.FeesPaid') === '95fbe4989a9d3afe83eb045da0ba2f92ab37553b08658002c44037aa7d47df7e'
    }

    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    get asV1002000(): {paying: v1002000.V4Location, fees: v1002000.V4Asset[]} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletInvalidQuerierEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.InvalidQuerier')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidQuerier') === 'ba9e747bdc70472315571317b534c044d7863ad9a9c0a617fc7f3919adbb86f5'
    }

    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    get asV1001002(): {origin: v1001002.V3MultiLocation, queryId: bigint, expectedQuerier: v1001002.V3MultiLocation, maybeActualQuerier: (v1001002.V3MultiLocation | undefined)} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidQuerier') === 'da90ba44a9f337afd40000e05ed5026ad6c97a314977407751d412b46d5b1468'
    }

    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    get asV1002000(): {origin: v1002000.V4Location, queryId: bigint, expectedQuerier: v1002000.V4Location, maybeActualQuerier: (v1002000.V4Location | undefined)} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletInvalidQuerierVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.InvalidQuerierVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidQuerierVersion') === '63887bfe21639ef69d853381ad1891090e59ad256a542da55cbccec4f21ca0d6'
    }

    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    get asV1001002(): {origin: v1001002.V3MultiLocation, queryId: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidQuerierVersion') === '7f75be820403f1b2e0304e616afe0ae4f8eb900b312092b7559fbbc68ac3c504'
    }

    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    get asV1002000(): {origin: v1002000.V4Location, queryId: bigint} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletInvalidResponderEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.InvalidResponder')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidResponder') === 'b48adaaf18722ed367aa74c5b722dc32361abcc6314221eeeac63699129aa138'
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    get asV1001002(): {origin: v1001002.V3MultiLocation, queryId: bigint, expectedLocation: (v1001002.V3MultiLocation | undefined)} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidResponder') === '6c6deaabe453b79eb1b71492081591b93a9da3d165f65012f270b190440c5941'
    }

    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    get asV1002000(): {origin: v1002000.V4Location, queryId: bigint, expectedLocation: (v1002000.V4Location | undefined)} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletInvalidResponderVersionEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.InvalidResponderVersion')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidResponderVersion') === '63887bfe21639ef69d853381ad1891090e59ad256a542da55cbccec4f21ca0d6'
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    get asV1001002(): {origin: v1001002.V3MultiLocation, queryId: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.InvalidResponderVersion') === '7f75be820403f1b2e0304e616afe0ae4f8eb900b312092b7559fbbc68ac3c504'
    }

    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    get asV1002000(): {origin: v1002000.V4Location, queryId: bigint} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifiedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.Notified')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.Notified') === 'b00126ed722ee8cd6f32c2c19b826e10724bb5df92afaa4e65b8fb03dc30ec5b'
    }

    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    get asV1001002(): {queryId: bigint, palletIndex: number, callIndex: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifyDecodeFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.NotifyDecodeFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyDecodeFailed') === 'b00126ed722ee8cd6f32c2c19b826e10724bb5df92afaa4e65b8fb03dc30ec5b'
    }

    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    get asV1001002(): {queryId: bigint, palletIndex: number, callIndex: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifyDispatchErrorEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.NotifyDispatchError')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyDispatchError') === 'b00126ed722ee8cd6f32c2c19b826e10724bb5df92afaa4e65b8fb03dc30ec5b'
    }

    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    get asV1001002(): {queryId: bigint, palletIndex: number, callIndex: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifyOverweightEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.NotifyOverweight')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and query is removed. The registered notification
     * could not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyOverweight') === 'e4fa835bcb3be2b76654c2ff5a50d92f182f262d583882f3df4011d77306af19'
    }

    /**
     * Query response has been received and query is removed. The registered notification
     * could not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    get asV1001002(): {queryId: bigint, palletIndex: number, callIndex: number, actualWeight: v1001002.Weight, maxBudgetedWeight: v1001002.Weight} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifyTargetMigrationFailEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.NotifyTargetMigrationFail')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyTargetMigrationFail') === 'c4a59eca6ea5772ac1898a87fcc18a8cc29cf303fd03bdfee7b760a8c594e931'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    get asV1001002(): {location: v1001002.VersionedMultiLocation, queryId: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyTargetMigrationFail') === '88b0397acccf027382e8c2b24a44b720ca66fc2d0c3a715712c4a4e4396d4126'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    get asV1002000(): {location: v1002000.VersionedLocation, queryId: bigint} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletNotifyTargetSendFailEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.NotifyTargetSendFail')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyTargetSendFail') === 'edc2d038c8c8204434d1519585109c7a45487752cfa11496a2ec47aae356c556'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    get asV1001002(): {location: v1001002.V3MultiLocation, queryId: bigint, error: v1001002.V3Error} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.NotifyTargetSendFail') === 'a371a55d047fcfc59f63e08b936cc6bacc1d70949474e057636a73105cf019d3'
    }

    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    get asV1002000(): {location: v1002000.V4Location, queryId: bigint, error: v1002000.V3Error} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletResponseReadyEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.ResponseReady')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.ResponseReady') === 'bef8f7543dfaf827f16faeecf1ae77b01b3a27a17ca90af1a821e1cb820998fa'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    get asV1001002(): {queryId: bigint, response: v1001002.V3Response} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.ResponseReady') === 'cc3aa7403a8b03b1e1dde010e8731e13a4c4f1a923fd7c1da364eef4af4d37b8'
    }

    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    get asV1002000(): {queryId: bigint, response: v1002000.V4Response} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletResponseTakenEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.ResponseTaken')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Received query response has been read and removed.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.ResponseTaken') === '204a390919b90a6aec91ba9059e3c9f8225c5a3b3ab8f97386879582bc302866'
    }

    /**
     * Received query response has been read and removed.
     */
    get asV1001002(): {queryId: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletSentEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.Sent')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A XCM message was sent.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.Sent') === '3d6c8fc6ff3b646a529f145a6f4b4ed06b59ba8e539eba47d55596e67e9b8a2a'
    }

    /**
     * A XCM message was sent.
     */
    get asV1001002(): {origin: v1001002.V3MultiLocation, destination: v1001002.V3MultiLocation, message: v1001002.V3Instruction[], messageId: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A XCM message was sent.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.Sent') === 'cfaadfa45d4d919fcb00a780ecff80e2b64f3a102d84017db5c1cdd8fe8a9a99'
    }

    /**
     * A XCM message was sent.
     */
    get asV1002000(): {origin: v1002000.V4Location, destination: v1002000.V4Location, message: v1002000.V4Instruction[], messageId: Uint8Array} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletSupportedVersionChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.SupportedVersionChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.SupportedVersionChanged') === '33e59692e1de10110f93243ea23af786f87880b56e0ff4d528e142455c6b1bd9'
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    get asV1001002(): {location: v1001002.V3MultiLocation, version: number} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.SupportedVersionChanged') === '695694a4f60b15fae5e2eb846b67f3b2a17a8cd440c4109dc55f0d02872760bd'
    }

    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    get asV1002000(): {location: v1002000.V4Location, version: number} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletUnexpectedResponseEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.UnexpectedResponse')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.UnexpectedResponse') === '63887bfe21639ef69d853381ad1891090e59ad256a542da55cbccec4f21ca0d6'
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    get asV1001002(): {origin: v1001002.V3MultiLocation, queryId: bigint} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.UnexpectedResponse') === '7f75be820403f1b2e0304e616afe0ae4f8eb900b312092b7559fbbc68ac3c504'
    }

    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    get asV1002000(): {origin: v1002000.V4Location, queryId: bigint} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletVersionChangeNotifiedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.VersionChangeNotified')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionChangeNotified') === 'a1bb23627cb55142abf0fb5e3eac2b509eb673050d10fc224a86ebe6199560f1'
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    get asV1001002(): {destination: v1001002.V3MultiLocation, result: number, cost: v1001002.V3MultiAsset[], messageId: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionChangeNotified') === 'b43efb772292ea7ae163f1c081a57bb199b00b784f065c7d3f5a866c99c74c5d'
    }

    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    get asV1002000(): {destination: v1002000.V4Location, result: number, cost: v1002000.V4Asset[], messageId: Uint8Array} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletVersionMigrationFinishedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.VersionMigrationFinished')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A XCM version migration finished.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionMigrationFinished') === '0572102a05349d65fa618f5b034c73c2013a17444f8a38a27dd8e93f00d5e548'
    }

    /**
     * A XCM version migration finished.
     */
    get asV1002000(): {version: number} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletVersionNotifyRequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.VersionNotifyRequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionNotifyRequested') === 'a668a90f8752a9ee52d546887e2c4048efb092178a59d4bc13cbce46cb16351c'
    }

    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    get asV1001002(): {destination: v1001002.V3MultiLocation, cost: v1001002.V3MultiAsset[], messageId: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionNotifyRequested') === '240d8b7eea986402b8b23f9b9a1260f22dcba2b40edccb1e9d353bbc10d987b1'
    }

    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    get asV1002000(): {destination: v1002000.V4Location, cost: v1002000.V4Asset[], messageId: Uint8Array} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletVersionNotifyStartedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.VersionNotifyStarted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionNotifyStarted') === 'a668a90f8752a9ee52d546887e2c4048efb092178a59d4bc13cbce46cb16351c'
    }

    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    get asV1001002(): {destination: v1001002.V3MultiLocation, cost: v1001002.V3MultiAsset[], messageId: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionNotifyStarted') === '240d8b7eea986402b8b23f9b9a1260f22dcba2b40edccb1e9d353bbc10d987b1'
    }

    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    get asV1002000(): {destination: v1002000.V4Location, cost: v1002000.V4Asset[], messageId: Uint8Array} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}

export class XcmPalletVersionNotifyUnrequestedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'XcmPallet.VersionNotifyUnrequested')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    get isV1001002(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionNotifyUnrequested') === 'a668a90f8752a9ee52d546887e2c4048efb092178a59d4bc13cbce46cb16351c'
    }

    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    get asV1001002(): {destination: v1001002.V3MultiLocation, cost: v1001002.V3MultiAsset[], messageId: Uint8Array} {
        assert(this.isV1001002)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    get isV1002000(): boolean {
        return this._chain.getEventHash('XcmPallet.VersionNotifyUnrequested') === '240d8b7eea986402b8b23f9b9a1260f22dcba2b40edccb1e9d353bbc10d987b1'
    }

    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    get asV1002000(): {destination: v1002000.V4Location, cost: v1002000.V4Asset[], messageId: Uint8Array} {
        assert(this.isV1002000)
        return this._chain.decodeEvent(this.event)
    }
}
