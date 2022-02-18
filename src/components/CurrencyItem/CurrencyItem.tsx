import React from 'react';

// Components
import {Grid, Select, MenuItem, Input, Box, Typography} from "@mui/material";

// Hooks
import {useContext} from "react";

// Context
import ApplicationContext, {ApplicationContextType} from "@/src/context";

// Styles
import SX from "./styles";

type CurrencyItemProps = {
    label?: string
    inputDisabled?: boolean
    currency: string
    setCurrency: (currency:string) => void
}

const CurrencyItem:React.FC<CurrencyItemProps> = (
    {
        label,
        inputDisabled= false,
        currency= '',
        setCurrency
    }
) => {
    const {
        isFetching,
        currencies
    } = useContext<ApplicationContextType>(ApplicationContext);

    return (
        <Grid item>
            {label && (
                <Typography variant="label" component="p">
                    {label}
                </Typography>
            )}
            <Box sx={SX.wrapper}>
                <Select
                    displayEmpty
                    value={currency}
                    onChange={e => setCurrency(e.target.value)}
                    variant='standard'
                    sx={SX.select}
                >
                    <MenuItem disabled value=''>
                        <Typography component="span">Choose currency</Typography>
                    </MenuItem>
                    {currencies.map(({coin}) => (
                        <MenuItem key={coin} value={coin}>
                            <Typography component="span">{coin}</Typography>
                        </MenuItem>
                    ))}
                </Select>
                <Input
                    disabled={inputDisabled}
                    type="number"
                    sx={SX.input}
                />
            </Box>
        </Grid>
    )
};

export default CurrencyItem;