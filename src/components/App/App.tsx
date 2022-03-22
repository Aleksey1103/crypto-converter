import React from 'react';

// Components
import {Box, Container} from '@mui/material';
import Header from '@components/Header';
import Converter from '@components/Converter';
import TopCurrencies from '@components/TopCurrencies';
import ModalWindow from "@components/ModalWindow";


const App: React.FC = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: [
                    'url("images/lines.svg") top center / 100% auto no-repeat',
                    'linear-gradient(298.42deg, #2F9EC0 0.29%, #2BB49B 104.46%)',
                ].join(', '),
                pb: 12.5
            }}
        >
            <Container>
                <Header/>
                <Converter/>
                <TopCurrencies/>
                <ModalWindow/>
            </Container>
        </Box>
    );
}

export default App;
