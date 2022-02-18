import {AxiosInstance} from "axios";

class CurrenciesService {
    readonly httpClient: AxiosInstance

    constructor(httpClient:AxiosInstance) {
       this.httpClient = httpClient;
    }

    public fetchAll = async ():Promise<CurrencyItemType[]> => {
        try {
            const {data} = await this.httpClient.get(
                'https://coin-mc-analyser.p.rapidapi.com/currencies', {
                    headers: {
                        'x-rapidapi-host': 'coin-mc-analyser.p.rapidapi.com',
                    }
                });

            return data;
        } catch (err) {
            throw err;
        }
    }
}

export default CurrenciesService;