import React from 'react'
import TradingViewWidget from '@/components/shared/TradingViewWidget'

interface cryptocurrenciesParam {
    params: {
        id: string
    }
}

const Page = ({params}: cryptocurrenciesParam) => {
  return (
    <main>
        <TradingViewWidget />
    </main>
  )
}

export default Page