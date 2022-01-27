import React, {useState} from 'react';

// Components
import {Grid, Select, MenuItem, Input, Box, Typography} from "@mui/material";

// Styles
import SX from "./styles";

type CurrencyItemProps = {
    label?: string
    currencies: CurrencyItemType[]
}

const CurrencyItem:React.FC<CurrencyItemProps> = ({currencies, label}) => {
    const [currency, setCurrency] = useState('');

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
                    {currencies.map(({name}) => (
                        <MenuItem key={name} value={name}>
                            <Typography component="span">{name}</Typography>
                        </MenuItem>
                    ))}
                </Select>
                <Input
                    type="number"
                    sx={SX.input}
                />
            </Box>
        </Grid>
    )
};

export default CurrencyItem;