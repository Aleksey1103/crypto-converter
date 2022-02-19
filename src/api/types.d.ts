export type CurrencyStat = {
    value: string
    direction: string
}

export type CurrencyItemType = {
    '7d'?: CurrencyStat
    '24h'?: CurrencyStat
    coin: string
    coinId: string
    graph?: string
    href: string
    logo?: string
    price: string
    symbol: string
}