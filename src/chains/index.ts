
import { ChainApi } from './interfaces/chainApi';
import { ProcessorConfig } from './interfaces/processorConfig';

export function getChain(): {
  config: ProcessorConfig;
  api: ChainApi;
} {
  let processorConfig: {
    config: ProcessorConfig;
    api: ChainApi;
  }

  switch (process.env.CHAIN) {
    case 'hydradx':
      processorConfig = require('./hydradx');
      break;
    case 'kusama':
      processorConfig = require('./kusama');
      break;
    case 'polkadot':
      processorConfig = require('./polkadot');
      break;
    case 'acala':
      processorConfig = require('./acala');
      break;
    case 'karura':
      processorConfig = require('./karura');
      break;
    case 'moonriver':
      processorConfig = require('./moonriver');
      break;
    case 'moonbeam':
      processorConfig = require('./moonbeam');
      break;
    case 'bifrost':
      processorConfig = require('./bifrost');
      break;
    case 'phala':
      processorConfig = require('./phala');
      break;
    default:
      throw new Error(`Unsupported chain ${process.env.CHAIN}`);
  }

  return processorConfig
}
