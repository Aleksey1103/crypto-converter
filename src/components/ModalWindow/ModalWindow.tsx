import React from 'react';

// Components
import {Box, Typography, Modal, IconButton} from '@mui/material';
import {ReactComponent as IconClose} from '@/src/images/close.svg';

// Hooks
import  {useContext} from "react";

// Context
import ApplicationContext from "@/src/context";

// Types
import {FC} from 'react';
import {ApplicationContextType} from "@/src/context";

// Styles
import SX from './styles';

const ModalWindow:FC = () => {
    const {
        openErrorModal,
        errorModalState,
        closeErrorModal
    } = useContext<ApplicationContextType>(ApplicationContext);

    return (
        <Modal
            open={openErrorModal}
            onClose={closeErrorModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={SX.wrapper}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{lineHeight: '34px'}}
                    >
                        {errorModalState.title}
                    </Typography>
                    <IconButton
                        sx={{ml: 2}}
                        onClick={closeErrorModal}
                    >
                        <IconClose/>
                    </IconButton>
                </Box>
                <Typography sx={{ mt: 2 }}>
                    {errorModalState.text}
                </Typography>

            </Box>
        </Modal>
    );
}

export default ModalWindow;