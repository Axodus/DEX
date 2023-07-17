import { Price, Token } from '@thinkincoin/sdk-core'
import { tickToPrice } from '@thinkincoin-libs/uniswap-v3-sdk'

export function getTickToPrice(baseToken?: Token, quoteToken?: Token, tick?: number): Price<Token, Token> | undefined {
  if (!baseToken || !quoteToken || typeof tick !== 'number') {
    return undefined
  }
  return tickToPrice(baseToken, quoteToken, tick)
}
