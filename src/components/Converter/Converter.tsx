import React from 'react';

// Components
import  {Button, Grid, CircularProgress } from "@mui/material";
import CurrencyItem from "@components/CurrencyItem";

// Hooks
import {useState, useContext} from "react";

// Context
import ApplicationContext, {ApplicationContextType} from "@/src/context";

const Converter:React.FC = () => {
    const [currencyIn, _setCurrencyIn] = useState<string>('');
    const [currencyOut, _setCurrencyOut] = useState<string>('');
    const [quantityIn, _setQuantityIn] = useState<number>(1);

    const {rate, convert, isConverting} = useContext<ApplicationContextType>(ApplicationContext);

    const setCurrencyIn = (currency: string):void => {
        _setCurrencyIn(currency)
    }

    const setCurrencyOut = (currency: string):void => {
        _setCurrencyOut(currency)
    }

    const setQuantityIn = (value:number):void => {
        _setQuantityIn(value);
    }

    const handleBtnConvertClick = () => {
        convert({currencyIn, quantityIn, currencyOut});
    }
    
    return (
        <Grid container
              sx={{
                  padding: '100px 63px 0',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
              }}
        >
            <CurrencyItem
                currency={currencyIn}
                inputValue={quantityIn}
                setInputValue={setQuantityIn}
                setCurrency={setCurrencyIn}
                label="You sent"
            />
            <CurrencyItem 
                currency={currencyOut}
                inputValue={rate}
                setCurrency={setCurrencyOut}
                label="You receive"
                isResponseHolder={true}
                inputDisabled={true}
            />
            <Button
                variant="contained"
                size="small"
                sx={{
                    width: 180,
                    boxShadow: 8,
                }}
                disabled={!currencyIn || !currencyOut}
                onClick={handleBtnConvertClick}
            >
                {isConverting ? <CircularProgress /> : 'Convert'}
            </Button>
        </Grid>
    );
};

export default Converter;