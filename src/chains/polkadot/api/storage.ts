import { Block, Chain, ChainContext } from '../types/support'
import {
  BalancesTotalIssuanceStorage,
  SystemAccountStorage,
  StakingActiveEraStorage,
  StakingCurrentEraStorage,
  SessionValidatorsStorage,
  StakingErasStakersStorage,
  StakingValidatorCountStorage,
  BalancesAccountStorage,
  NominationPoolsBondedPoolsStorage,
  StakingCounterForValidatorsStorage,
  StakingCounterForNominatorsStorage,
  AuctionsAuctionCounterStorage,
  SlotsLeasesStorage,
  IdentitySuperOfStorage
} from '../types/storage'
import { FunctionNotExist, UnknownVersionError } from '../../../utils/errors'
import { decodeAccount, encodeAccount } from '../../../utils/common'
import { getChain } from '../../index'
import {
  EraStaker,
  ErasStakersArgs,
  NominationPoolsData,
  AccountBalancesPair,
  AccountBalanceShort
} from '../../../utils/types'
import { getKeysCountAll, handleHoldersTotals } from '../../utils'
import { StorageGetter } from '../../interfaces/chainApi'

export async function getLeasesTotalAmount(ctx: ChainContext, block: Block) {
  const storage = new SlotsLeasesStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV9110) {
    const slots = await storage.asV9110.getAll()
    let sum = 0n
    for (const slot of slots) {
      const amount = slot.at(0)?.at(1)
      if (amount) {
        sum += amount as bigint
      }
    }
    return sum
  }
  throw new UnknownVersionError(storage.constructor.name)
}

export async function getIdentitySupers(
  ctx: ChainContext,
  block: Block,
  keys: Uint8Array[]
) {
  const storage = new IdentitySuperOfStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV5) {
    const supersData = await storage.asV5.getMany(keys)
    return supersData.map((superData) => {
      if (superData === undefined) return superData
      else return superData[0]
    })
  }

  throw new UnknownVersionError(storage.constructor.name)
}

export async function getTotalIssuance(ctx: ChainContext, block: Block) {
  const storage = new BalancesTotalIssuanceStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV0) {
    return await storage.asV0.get()
  }

  throw new UnknownVersionError(storage.constructor.name)
}
export async function getActiveEra(ctx: ChainContext, block: Block) {
  const storage = new StakingActiveEraStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV0) {
    return await storage.asV0.get()
  }

  throw new UnknownVersionError(storage.constructor.name)
}
export async function getCurrentEra(ctx: ChainContext, block: Block) {
  const storage = new StakingCurrentEraStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV0) {
    return await storage.asV0.get()
  }

  throw new UnknownVersionError(storage.constructor.name)
}

export async function getValidators(ctx: ChainContext, block: Block) {
  const storage = new SessionValidatorsStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV0) {
    return await storage.asV0.get()
  }

  throw new UnknownVersionError(storage.constructor.name)
}

export async function getValidatorsCount(ctx: ChainContext, block: Block) {
  const list = await getValidators(ctx, block)
  if (!list) return undefined
  return list.length
}

export async function getIdealValidatorsCount(ctx: ChainContext, block: Block) {
  const storage = new StakingValidatorCountStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV0) {
    return await storage.asV0.get()
  }

  throw new UnknownVersionError(storage.constructor.name)
}

export async function getNominationPoolsData(ctx: ChainContext, block: Block) {
  const storage = new NominationPoolsBondedPoolsStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV9280) {
    return await storage.asV9280.getAll()
  }
  if (storage.isV9420) {
    return await storage.asV9420.getAll()
  }
  if(storage.isV1002000){
    return await storage.asV1002000.getAll()
  }

  else {
    throw new UnknownVersionError(storage.constructor.name)
  }
}

export async function getCounterForValidatorsNumber(
  ctx: ChainContext,
  block: Block
) {
  const storage = new StakingCounterForValidatorsStorage(ctx, block)
  if (!storage.isExists) return undefined
  if (storage.isV9050) {
    return await storage.asV9050.get()
  } else {
    throw new UnknownVersionError(storage.constructor.name)
  }
}

export async function getCounterForNominatorsNumber(
  ctx: ChainContext,
  block: Block
) {
  const storage = new StakingCounterForNominatorsStorage(ctx, block)
  if (!storage.isExists) return undefined
  if (storage.isV9050) {
    return await storage.asV9050.get()
  } else {
    throw new UnknownVersionError(storage.constructor.name)
  }
}

export async function getAuctionCounterNumber(ctx: ChainContext, block: Block) {
  const storage = new AuctionsAuctionCounterStorage(ctx, block)
  if (!storage.isExists) return undefined
  if (storage.isV9110) {
    return await storage.asV9110.get()
  } else {
    throw new UnknownVersionError(storage.constructor.name)
  }
}

// export async function getTotalHoldersCount(ctx: ChainContext, block: Block) {
//   const storage = new SystemAccountStorage(ctx, block);
//   if (!storage.isExists) return undefined;
//
//   if (storage.isV0) {
//     return await getKeysCountAll(storage.asV0.getKeysPaged(1000));
//   } else if (storage.isV25) {
//     return await getKeysCountAll(storage.asV25.getKeysPaged(1000));
//   } else if (storage.isV28) {
//     return await getKeysCountAll(storage.asV28.getKeysPaged(1000));
//   } else if (storage.isV30) {
//     return await getKeysCountAll(storage.asV30.getKeysPaged(1000));
//   } else {
//     throw new UnknownVersionError(storage.constructor.name);
//   }
// }

export async function getHoldersTotals(ctx: ChainContext, block: Block) {
  const storageSysAccount = new SystemAccountStorage(ctx, block)

  if (!storageSysAccount.isExists) return undefined

  const accountsList: AccountBalancesPair[] = []
  if (storageSysAccount.isV0) {
    for await (const keysPack of storageSysAccount.asV0.getPairsPaged(1000))
      keysPack.forEach((pair) =>
        accountsList.push([
          pair[0],
          {
            free: pair[1].data.free,
            reserved: pair[1].data.reserved,
            miscFrozen: pair[1].data.miscFrozen,
            feeFrozen: pair[1].data.feeFrozen
          }
        ])
      )

    return handleHoldersTotals(accountsList)
  } else if (storageSysAccount.asV25) {
    for await (const keysPack of storageSysAccount.asV25.getPairsPaged(1000))
      keysPack.forEach((pair) =>
        accountsList.push([
          pair[0],
          {
            free: pair[1].data.free,
            reserved: pair[1].data.reserved,
            miscFrozen: pair[1].data.miscFrozen,
            feeFrozen: pair[1].data.feeFrozen
          }
        ])
      )

    return handleHoldersTotals(accountsList)
  } else if (storageSysAccount.isV28) {
    for await (const keysPack of storageSysAccount.asV28.getPairsPaged(1000))
      keysPack.forEach((pair) =>
        accountsList.push([
          pair[0],
          {
            free: pair[1].data.free,
            reserved: pair[1].data.reserved,
            miscFrozen: pair[1].data.miscFrozen,
            feeFrozen: pair[1].data.feeFrozen
          }
        ])
      )

    return handleHoldersTotals(accountsList)
  } else if (storageSysAccount.isV30) {
    for await (const keysPack of storageSysAccount.asV30.getPairsPaged(1000))
      keysPack.forEach((pair) =>
        accountsList.push([
          pair[0],
          {
            free: pair[1].data.free,
            reserved: pair[1].data.reserved,
            miscFrozen: pair[1].data.miscFrozen,
            feeFrozen: pair[1].data.feeFrozen
          }
        ])
      )

    return handleHoldersTotals(accountsList)
  }
  throw new UnknownVersionError(storageSysAccount.constructor.name)
}

export async function getEraStakersData(
  ctx: ChainContext,
  block: Block,
  era: number
) {
  const storage = new StakingErasStakersStorage(ctx, block)
  if (!storage.isExists) return undefined

  if (storage.isV0) {
    const pairs = await storage.asV0.getPairs(era)
    const eraStakers: EraStaker[] = pairs.map((pair) => {
      const [[era, validator], stats] = pair
      const eraStaker: EraStaker = {
        id: validator,
        ...stats
      }
      return eraStaker
    })
    return eraStakers
  } else {
    throw new UnknownVersionError(storage.constructor.name)
  }
}

export async function getSystemAccountBalancesByKeys(
  ctx: ChainContext,
  block: Block,
  keys: Uint8Array[]
): Promise<AccountBalanceShort[] | undefined> {
  const storageSysAccount = new SystemAccountStorage(ctx, block)

  if (!storageSysAccount.isExists) return undefined

  const data = await ctx._chain.queryStorage2(
    block.hash,
    'System',
    'Account',
    keys
  )
  return data.map((d) => ({ free: d.data.free, reserved: d.data.reserved }))
}
export async function getBalancesAccountBalancesByKeys(
  ctx: ChainContext,
  block: Block,
  keys: Uint8Array[]
): Promise<AccountBalanceShort[] | undefined> {
  const storageBalAccount = new BalancesAccountStorage(ctx, block)

  if (!storageBalAccount.isExists) return undefined

  const data = await ctx._chain.queryStorage2(
    block.hash,
    'Balances',
    'Account',
    keys
  )

  return data.map((d) => ({ free: d.free, reserved: d.reserved }))
}
export async function getSystemAccountBalancesOldByKeys(
  ctx: ChainContext,
  block: Block,
  keys: Uint8Array[]
): Promise<AccountBalanceShort[] | undefined> {
  return undefined
}

// NOT EXISTING STORAGE FUNCTIONS FROM OTHER CHAINS
// We need to define them everywhere with 'never' return value to match chainApi interface
export const getSelectedCollators: StorageGetter<[], Uint8Array[] | undefined> =
  async function (ctx: ChainContext, block: Block): Promise<never> {
    throw new FunctionNotExist()
  }

export async function getSelectedCollatorsCount(
  ctx: ChainContext,
  block: Block
): Promise<never> {
  throw new FunctionNotExist()
}

export async function getStakingDelegatorsAllDataShort(
  ctx: ChainContext,
  block: Block
): Promise<never> {
  throw new FunctionNotExist()
}

export async function getCollatorsDataShort(
  ctx: ChainContext,
  block: Block,
  keys: Uint8Array[]
): Promise<never> {
  throw new FunctionNotExist()
}

export async function getRoundNumber(
  ctx: ChainContext,
  block: Block
): Promise<never> {
  throw new FunctionNotExist()
}

export async function getTotalStake(
  ctx: ChainContext,
  block: Block
): Promise<never> {
  throw new FunctionNotExist()
}
