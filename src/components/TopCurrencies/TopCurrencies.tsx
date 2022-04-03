import React from 'react';

// Components
import {Typography, Grid, Skeleton} from '@mui/material';
import TopCurrenciesItem from './components/TopCurrenciesItem';

// Hooks
import {useContext} from 'react';

// Context
import ApplicationContext, {ApplicationContextType} from "@/src/context";

// Styles
import SX from './styles';


const TopCurrencies:React.FC = () => {
    const {
        isFetching,
        currencies
    } = useContext<ApplicationContextType>(ApplicationContext)

    return (
        <>
            <Typography
                variant="h2"
                mt={{xs: 9, sm: 12.5}}
                sx={SX.title}
            >
                Top 20 currencies
            </Typography>
            <Grid container
                  spacing={{xs: 1, md: 2}}
                  sx={SX.container}
                  justifyContent='center'
            >
                {Array(20).fill(null).map((item, i) => {
                    return (
                        <Grid
                            key={i}
                            item
                            container
                            sx={SX.item}
                        >
                            {isFetching ? (
                                <Skeleton
                                    variant='rectangular'
                                    animation='wave'
                                    sx={SX.skeleton}
                                />
                            ) : (
                                <TopCurrenciesItem item={currencies[i]}/>
                            )}
                        </Grid>
                    )
                })}
            </Grid>
        </>
    );
};

export default TopCurrencies;