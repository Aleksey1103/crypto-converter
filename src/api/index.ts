import CurrenciesService from "@/src/api/currenciesService";
import httpClient from "@/src/api/httpClient";

export default {
    CurrenciesService: new CurrenciesService(httpClient)
}