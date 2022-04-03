// currency service types
type CurrencyStat = {
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

// converter service types
type ResponseSuccess = {
    [key: string]: {
        [key: string]: string
    }
}

type ResponseError = {
    [key: string]: string
}

export type ResponseData = ResponseSuccess & ResponseError;

export type Response = {
    data: ResponseData
}

export type ResponseFields = {
    [key: string]: string
}