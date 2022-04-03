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
                  pt: {xs: 3, sm: 6, md: 12.5},
                  px: {xs: 0, lg: '63px'},
                  justifyContent: {xs: 'center', md: 'space-between'},
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
                    mt: {xs: 4, sm: 4, lg: 0},
                    ml: {xs: 0, md: 'auto', lg: 0},
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