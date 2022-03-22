import React from 'react';

// Components
import {Grid, Select, MenuItem, Input, Box, Typography, Skeleton} from "@mui/material";

// Hooks
import {useContext} from "react";

// Context
import ApplicationContext, {ApplicationContextType} from "@/src/context";

// Styles
import SX from "./styles";

type CurrencyItemProps = {
    label: string
    isResponseHolder?: boolean
    inputDisabled?: boolean
    currency: string
    setCurrency: (currency:string) => void
    inputValue: number | null
    setInputValue?: (value:number) => void
}

const CurrencyItem:React.FC<CurrencyItemProps> = (
    {
        label,
        isResponseHolder = false,
        inputDisabled= false,
        currency,
        setCurrency,
        inputValue,
        setInputValue
    }
) => {
    const {
        isFetching,
        currencies
    } = useContext<ApplicationContextType>(ApplicationContext);

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(setInputValue) {
            setInputValue(Number(e.target.value));
        }
    }

    return (
        <Grid item>
            {label && (
                <Typography variant="label" component="p">
                    {label}
                </Typography>
            )}
            {isFetching ? (
                <Skeleton
                    variant='rectangular'
                    animation='wave'
                    component='div'
                    sx={SX.skeleton}
                />
            ) : (
                <Box sx={SX.wrapper}>
                    <Select
                        displayEmpty
                        value={currency}
                        onChange={e => setCurrency(e.target.value)}
                        variant='standard'
                        sx={SX.select}
                        MenuProps={{sx: {maxHeight: 400,}}}
                    >
                        <MenuItem disabled value=''>
                            <Typography component="span">Choose currency</Typography>
                        </MenuItem>
                        {isResponseHolder && (
                            <MenuItem value='USD'>
                                <Typography component="span">USD</Typography>
                            </MenuItem>
                        )}
                        {currencies.map(({coin, coinId, symbol}) => (
                            <MenuItem key={coinId} value={symbol}>
                                <Typography component="span">{coin}</Typography>
                            </MenuItem>
                        ))}
                    </Select>
                    <Input
                        disabled={inputDisabled}
                        value={inputValue??''}
                        onChange={handleInputChange}
                        type="number"
                        sx={SX.input}
                    />
                </Box>
            )}
        </Grid>
    )
};

export default CurrencyItem;