import CurrenciesService from "./currenciesService";
import ConverterService, {ConverterArgType} from "./converterService";
import httpClient from "./httpClient";

import {CurrencyItemType} from "./types";

export type {CurrencyItemType, ConverterArgType};

export default {
    CurrenciesService: new CurrenciesService(httpClient),
    ConverterService: new ConverterService(httpClient)
}