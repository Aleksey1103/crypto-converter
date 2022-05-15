import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from '@/src/components/App';
import {ThemeProvider} from "@mui/material/styles";
import {ApplicationContextProvider} from "@/src/context";

// Theme
import theme from '@/src/theme'

// Styles
import '@/src/styles/index.css';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <React.StrictMode>
            <ApplicationContextProvider>
                <App/>
            </ApplicationContextProvider>
        </React.StrictMode>
    </ThemeProvider>,
    document.getElementById('root')
);