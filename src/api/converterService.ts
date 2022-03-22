// Types
import {AxiosInstance} from "axios";
import {Response, ResponseData, ResponseFields} from "@/src/api/types";

export type ConverterArgType = {
    currencyIn: string
    quantityIn:number
    currencyOut: string
}

const fields:ResponseFields = {
    SUCCESS: 'Realtime Currency Exchange Rate',
    RATE: '5. Exchange Rate',
    ERROR: 'Error Message',
}

class ConverterService {
    readonly httpClient: AxiosInstance

    constructor(httpClient: AxiosInstance) {
        this.httpClient = httpClient;
    }
    
    private _convert = async (currencyIn: string, currencyOut:string = 'USD'):Promise<ResponseData> => {
        try {
            const {data}:Response = await this.httpClient.get('https://alpha-vantage.p.rapidapi.com/query',{
                params: {
                    from_currency: currencyIn,
                    function: 'CURRENCY_EXCHANGE_RATE',
                    to_currency: currencyOut
                },
                headers: {
                    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                }
            });
            
            return data;
        } catch (err) {
            throw err;
        }
    }

    private _handleResponseData = async (data: ResponseData, currencyIn: string, currencyOut: string):Promise<number | null> => {
        if(data[fields.SUCCESS]) {
            return Number(data[fields.SUCCESS][fields.RATE]);
        }

        if(data[fields.ERROR]) {
            try {
                const currencyInUSDData:ResponseData = await this._convert(currencyIn);
                const currencyOutUSDData:ResponseData = await this._convert(currencyOut);

                const currencyInUSDRate = Number(currencyInUSDData[fields.SUCCESS][fields.RATE]);
                const currencyOutUSDRate = Number(currencyOutUSDData[fields.SUCCESS][fields.RATE]);

                return currencyInUSDRate / currencyOutUSDRate;
            } catch (err) {
                throw err;
            }
        }

        return null;
    }

    public convert = async ({currencyIn, quantityIn = 1, currencyOut}:ConverterArgType):Promise<number | null> => {
        try {
            const data = await this._convert(currencyIn, currencyOut);

            return  this._handleResponseData(data, currencyIn, currencyOut)
                .then(res => res !== null ? res * quantityIn : res);
        } catch (err) {
            throw err;
        }
    }
}

export default ConverterService;