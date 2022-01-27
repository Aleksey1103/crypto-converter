import React from 'react';

// Components
import {Button, Grid} from "@mui/material";
import CurrencyItem from "@components/CurrencyItem";

type ConverterProps = {
    items: CurrencyItemType[]
}

const Converter:React.FC<ConverterProps> = ({items}) => {
    return (
        <Grid container
              sx={{
                  padding: '154px 63px 0',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
              }}
        >
            <CurrencyItem currencies={items} label="You sent"/>
            <CurrencyItem currencies={items} label="You receive"/>
            <Button variant="contained" size="small" sx={{boxShadow: 8}}>Convert</Button>
        </Grid>
    );
};

export default Converter;