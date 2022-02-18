import React from 'react';

// Components
import  {Button, Grid} from "@mui/material";
import CurrencyItem from "@components/CurrencyItem";

// Hooks
import {useState} from "react";

const Converter:React.FC = () => {
    const [currencyIn, _setCurrencyIn] = useState<string>('');
    const [currencyOut, _setCurrencyOut] = useState<string>('');
    
    const setCurrencyIn = (currency: string):void => {
        _setCurrencyIn(currency)
    }

    const setCurrencyOut = (currency: string):void => {
        _setCurrencyOut(currency)
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
                setCurrency={setCurrencyIn}
                label="You sent"
            />
            <CurrencyItem 
                currency={currencyOut}
                setCurrency={setCurrencyOut}
                label="You receive" 
                inputDisabled={true}
            />
            <Button
                variant="contained"
                size="small"
                sx={{boxShadow: 8}}
                disabled={!currencyIn || !currencyOut}
            >
                Convert
            </Button>
        </Grid>
    );
};

export default Converter;