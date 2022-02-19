import React from 'react';

// Hooks
import {createContext, useState, useEffect} from 'react';

// Api
import api from '@/src/api';

// Types
import {CurrencyItemType} from "@/src/api";

type ContextMethod<T> = (arg:T) => void

export type ApplicationContextType = {
    isFetching: boolean
    hasError: boolean
    currencies: CurrencyItemType[] | []
    setIsFetching: ContextMethod<boolean>
    setHasError: ContextMethod<boolean>
    setCurrencies: ContextMethod<CurrencyItemType[] | []>
}

const ApplicationContext = createContext<ApplicationContextType>({
    isFetching: true,
    hasError: false,
    currencies: [],
    setIsFetching: (bool) => {},
    setHasError: (bool) => {},
    setCurrencies: (array) => {},
})

const ApplicationContextProvider:React.FC = ({children}) => {
    const [isFetching, _setIsFetching] = useState<boolean>(true);
    const [hasError, _setHasError] = useState<boolean>(false);
    const [currencies, _setCurrencies] = useState<CurrencyItemType[] | []>([]);

    const setIsFetching:ContextMethod<boolean> = (bool) => {
        _setIsFetching(bool)
    }

    const setHasError:ContextMethod<boolean> = (bool) => {
        _setHasError(bool)
    }

    const setCurrencies:ContextMethod<CurrencyItemType[] | []> = (array) => {
        _setCurrencies(array)
    }

    useEffect(() => {
        api.CurrenciesService.fetchAll()
            .then(data => {
                setCurrencies(data);
                setIsFetching(false);
            })
            .catch(err => {
                setHasError(true);
                console.log(err);
            })
    }, [])

    return (
        <ApplicationContext.Provider
            value={{
                isFetching,
                hasError,
                currencies,
                setIsFetching,
                setHasError,
                setCurrencies,
            }}
        >
            {children}
        </ApplicationContext.Provider>
    )
}

export {ApplicationContextProvider};
export default ApplicationContext;