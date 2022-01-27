import React from 'react';

// Components
import {Box, Container} from '@mui/material';
import Header from '@components/Header';
import Converter from "@components/Converter";

const tempItems:CurrencyItemType[] = [
    {"name": "MetaDoge"},
    {"name": "DeFi Degen Land"},
    {"name": "Hector DAO"},
    {"name": "TABOO TOKEN"},
    {"name": "Byakko"},
    {"name": "Rainbow Token"},
    {"name": "Fantom"},
    {"name": "Shiba Inu"},
    {"name": "Smooth Love Potion"},
    {"name": "SpookyShiba"}
]

const App:React.FC = () => {
  return (
      <Box
          sx={{
              minHeight: '100vh',
              background: [
                  'url("images/lines.svg") top center / 100% auto no-repeat',
                  'linear-gradient(298.42deg, #2F9EC0 0.29%, #2BB49B 104.46%)',
              ].join(', '),
          }}
      >
          <Container>
              <Header/>
              <Converter items={tempItems}/>
          </Container>
      </Box>
  );
}

export default App;
