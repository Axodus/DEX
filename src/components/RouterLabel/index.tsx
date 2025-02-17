import { QuoteMethod, SubmittableTrade } from 'state/routing/types'
import { isUniswapXTrade } from 'state/routing/utils'
import { DefaultTheme } from 'styled-components'
import { ThemedText } from 'theme/components'

import UniswapXRouterLabel from './UniswapXRouterLabel'

export default function RouterLabel({ trade, color }: { trade: SubmittableTrade; color?: keyof DefaultTheme }) {
  if (isUniswapXTrade(trade)) {
    return (
      <UniswapXRouterLabel>
        <ThemedText.BodySmall>Axodus X</ThemedText.BodySmall>
      </UniswapXRouterLabel>
    )
  }

  if (trade.quoteMethod === QuoteMethod.CLIENT_SIDE_FALLBACK) {
    return <ThemedText.BodySmall color={color}>Axodus Client</ThemedText.BodySmall>
  }

  return <ThemedText.BodySmall color={color}>Axodus API</ThemedText.BodySmall>
}
