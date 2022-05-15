import CurrenciesService from "./currenciesService";
import ConverterService, {ConverterArgType} from "./converterService";
import httpClient from "./httpClient";

import {CurrencyItemType} from "./types";

export type {CurrencyItemType, ConverterArgType};

const Api = {
    CurrenciesService: new CurrenciesService(httpClient),
    ConverterService: new ConverterService(httpClient)
};

export default Api;