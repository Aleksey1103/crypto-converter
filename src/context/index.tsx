import React from 'react';

// Hooks
import {createContext, useState, useEffect} from 'react';

// Api
import api from '@/src/api';

// Types
import {CurrencyItemType, ConverterArgType} from "@/src/api";

type ContextMethod<T> = (arg:T) => void

type ErrorModalType = {
    open: boolean
    type: string
}

export type ApplicationContextType = {
    isFetching: boolean
    errorModalState: ErrorModalType
    currencies: CurrencyItemType[] | []
    rate: number | null
    isConverting: boolean
    convert: ContextMethod<ConverterArgType>
    setIsFetching: ContextMethod<boolean>
    setCurrencies: ContextMethod<CurrencyItemType[] | []>
    showErrorModal: ContextMethod<string>
}

const ApplicationContext = createContext<ApplicationContextType>({} as ApplicationContextType);

const ApplicationContextProvider:React.FC = ({children}) => {
    const [isFetching, _setIsFetching] = useState<boolean>(true);
    const [errorModalState, _setErrorModalState] = useState<ErrorModalType>({open: false, type: ''});
    const [currencies, _setCurrencies] = useState<CurrencyItemType[] | []>([]);
    const [rate, _setRate] = useState<number | null>(null);
    const [isConverting, _setIsConverting] = useState<boolean>(false);

    const setIsFetching:ContextMethod<boolean> = (bool) => {
        _setIsFetching(bool)
    }

    const showErrorModal:ContextMethod<string> = (type) => {
        _setErrorModalState({open: true, type})
    }

    const setCurrencies:ContextMethod<CurrencyItemType[] | []> = (array) => {
        _setCurrencies(array)
    }

    const convert = ({currencyIn, quantityIn, currencyOut}:ConverterArgType) => {
        _setIsConverting(true);

        api.ConverterService.convert({currencyIn, quantityIn, currencyOut})
            .then((rate) => {
                if(rate === Infinity) {
                    showErrorModal('rateError');
                } else {
                    _setRate(rate);
                }
            })
            .catch(err => {
                showErrorModal('connectionError');
                console.log(err);
            })
            .finally(() => _setIsConverting(false))
    }

    useEffect(() => {
        api.CurrenciesService.fetchAll()
            .then(data => {
                setCurrencies(data);
                setIsFetching(false);
            })
            .catch(err => {
                showErrorModal('connectionError');
                console.log(err);
            })
    }, [])

    return (
        <ApplicationContext.Provider
            value={{
                isFetching,
                errorModalState,
                currencies,
                rate,
                isConverting,
                convert,
                setIsFetching,
                setCurrencies,
                showErrorModal,
            }}
        >
            {children}
        </ApplicationContext.Provider>
    )
}

export {ApplicationContextProvider};
export default ApplicationContext;