import CurrenciesService from "./currenciesService";
import httpClient from "./httpClient";

import {CurrencyItemType} from "./types";

export type {CurrencyItemType};

export default {
    CurrenciesService: new CurrenciesService(httpClient)
}