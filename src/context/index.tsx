import React from 'react';

// Hooks
import {createContext, useState, useEffect} from 'react';

// Api
import api from '@/src/api';

// Types
import {CurrencyItemType, ConverterArgType} from "@/src/api";

// Fixtures
import errorMessagesMap from "./errorMassages";

type ContextMethod<T> = (arg:T) => void

type ErrorModalState = {
    open: boolean
    type: string
    title: string
    text: string
}

export type ApplicationContextType = {
    isFetching: boolean
    openErrorModal: boolean
    errorModalState: ErrorModalState
    currencies: CurrencyItemType[] | []
    rate: number | null
    isConverting: boolean
    convert: ContextMethod<ConverterArgType>
    closeErrorModal: () => void
    setIsFetching: ContextMethod<boolean>
    setCurrencies: ContextMethod<CurrencyItemType[] | []>
    showErrorModal: ContextMethod<string>
}

const ApplicationContext = createContext<ApplicationContextType>({} as ApplicationContextType);

const ApplicationContextProvider:React.FC = ({children}) => {
    const [isFetching, _setIsFetching] = useState<boolean>(true);
    const [openErrorModal, _setOpenErrorModal] = useState<boolean>(false);
    const [errorModalState, _setErrorModalState] = useState<ErrorModalState>({} as ErrorModalState);
    const [currencies, _setCurrencies] = useState<CurrencyItemType[] | []>([]);
    const [rate, _setRate] = useState<number | null>(null);
    const [isConverting, _setIsConverting] = useState<boolean>(false);

    const setIsFetching:ContextMethod<boolean> = (bool) => {
        _setIsFetching(bool)
    }

    const showErrorModal:ContextMethod<string> = (type) => {
        _setOpenErrorModal(true);
        _setErrorModalState({
            open: true,
            type,
            title: errorMessagesMap[type].title,
            text: errorMessagesMap[type].text,
        })
    }

    const setCurrencies:ContextMethod<CurrencyItemType[] | []> = (array) => {
        _setCurrencies(array)
    }

    const closeErrorModal = ():void => {
        _setOpenErrorModal(false);
    }

    const convert = ({currencyIn, quantityIn, currencyOut}:ConverterArgType) => {
        _setIsConverting(true);

        api.ConverterService.convert({currencyIn, quantityIn, currencyOut})
            .then((rate) => {
                if(rate === Infinity) {
                    showErrorModal('rateError');
                    _setRate(null);
                } else {
                    _setRate(rate);
                }
            })
            .catch(err => {
                if(err.response.status == 429) {
                    showErrorModal('requestQuantityError')
                } else {
                    showErrorModal('connectionError');
                }
                console.error(err);
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
                openErrorModal,
                errorModalState,
                currencies,
                rate,
                isConverting,
                convert,
                closeErrorModal,
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