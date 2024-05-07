import { ChainContext, Event } from '../types/support';
import {
  BalancesBalanceSetEvent,
  BalancesDepositEvent,
  BalancesEndowedEvent,
  BalancesReservedEvent,
  BalancesReserveRepatriatedEvent,
  BalancesSlashedEvent,
  BalancesTransferEvent,
  BalancesUnreservedEvent,
  BalancesWithdrawEvent
} from '../types/events';
import { UnknownVersionError } from '../../../utils/errors';

export function getBalancesTransferValue(
  ctx: ChainContext,
  event: Event
): bigint {
  const data = new BalancesTransferEvent(ctx, event);

  if (data.isV1001002) {
    return data.asV1001002.amount;
  } else {
    throw new UnknownVersionError(data.constructor.name);
  }
}

export function getBalancesTransferAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesTransferEvent(ctx, event);

   if (data.isV1001002) {
    return [data.asV1001002.from, data.asV1001002.to];
  }
  throw new UnknownVersionError(data.constructor.name);
}

export function getBalancesEndowedAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesEndowedEvent(ctx, event);

   if (data.isV1001002) {
    return [data.asV1001002.account];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesBalanceSetAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesBalanceSetEvent(ctx, event);

  if (data.isV1001002) {
    return [data.asV1001002.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesReservedAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesReservedEvent(ctx, event);

  if (data.isV1001002) {
    return [data.asV1001002.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}

export function getBalancesUnreservedAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesUnreservedEvent(ctx, event);

  if (data.isV1001002) {
    return [data.asV1001002.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesReserveRepatriatedAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesReserveRepatriatedEvent(ctx, event);

 if (data.isV1001002) {
    return [data.asV1001002.from, data.asV1001002.to];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesDepositAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesDepositEvent(ctx, event);

  if (data.isV1001002) {
    return [data.asV1001002.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesWithdrawAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesWithdrawEvent(ctx, event);

  if (data.isV1001002) {
    return [data.asV1001002.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}
export function getBalancesSlashedAccounts(
  ctx: ChainContext,
  event: Event
): Uint8Array[] {
  const data = new BalancesSlashedEvent(ctx, event);

  if (data.isV1001002) {
    return [data.asV1001002.who];
  }
  throw new UnknownVersionError(data.constructor.name);
}
