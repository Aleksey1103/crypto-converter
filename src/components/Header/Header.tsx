import React from 'react';

// Components
import {Grid} from "@mui/material";

// Images
import {ReactComponent as Logo} from '@/src/images/logo.svg';

const Header:React.FC = () => {
    return (
        <Grid container py={2}>
            <Logo/>
        </Grid>
    );
};

export default Header;