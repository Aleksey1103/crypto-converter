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
                mt={12.5}
                sx={SX.title}
            >
                Top 20 currencies
            </Typography>
            <Grid container
                  spacing={2}
                  mt={5}
                  justifyContent='center'
            >
                {Array(20).fill(null).map((item, i) => {
                    return (
                        <Grid
                            key={i}
                            item
                            container
                            xs={3}
                            height={98}
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