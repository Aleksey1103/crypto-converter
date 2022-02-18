import React from 'react';
import {Grid, Paper} from "@mui/material";

type TopCurrenciesItemProps = {
    item: CurrencyItemType
}

const TopCurrenciesItem:React.FC<TopCurrenciesItemProps> = ({item: {logo, coin}}) => {
    return (
        <Grid
            container
            component={Paper}
            elevation={10}
            sx={{
                alignItems: 'center',
                px: 2,
                py: 3,
                borderRadius: 2.5,
            }}
        >
            <Grid item xs={4} sx={{textAlign: 'center'}}>
                <img width="30" src={logo ?? '/images/default-logo.svg'} alt={coin}/>
            </Grid>
            <Grid component="span" item xs={8}>{coin}</Grid>
        </Grid>
    );
};

export default TopCurrenciesItem;