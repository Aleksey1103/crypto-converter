import React from 'react';

// Components
import {Box, Typography, Modal, IconButton} from '@mui/material';
import {ReactComponent as IconClose} from '@/src/images/close.svg';

// Hooks
import {useState, useEffect, useContext} from "react";

// Context
import ApplicationContext from "@/src/context";

// Types
import {FC} from 'react';
import {ApplicationContextType} from "@/src/context";

// Styles
import SX from './styles';

const ModalWindow:FC = () => {
    const {errorModalState} = useContext<ApplicationContextType>(ApplicationContext);
    const [open, setOpen] = useState<boolean>(errorModalState.open);
    const [modalContent, setModalContent] = useState<{title: string, text: string}>({title: '', text: ''})
    
    const handleClose = ():void => setOpen(false);
    
    useEffect(() => {
        if(errorModalState) {
            setOpen(errorModalState.open)
        }

        switch (errorModalState.type) {
            case 'connectionError':
                setModalContent({
                    title: 'Connection Error',
                    text: 'Something went wrong. Please reload the application and try again.'
                });
                break;

            case 'rateError':
                setModalContent({
                    title: 'Converting Error',
                    text: 'Unfortunately this kind of converting is not possible. Please change the received currency.'
                })
                break;
            case 'requestQuantityError':
                setModalContent({
                    title: 'Too many requests',
                    text: 'You have exceeded the rate limit per minute. Please wait a bit.',
                })
                break;
        }

    }, [errorModalState])

    return (
        <Modal
            open={open}
            onClose={handleClose}
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
                        {modalContent.title}
                    </Typography>
                    <IconButton
                        sx={{ml: 2}}
                        onClick={handleClose}
                    >
                        <IconClose/>
                    </IconButton>
                </Box>
                <Typography sx={{ mt: 2 }}>
                    {modalContent.text}
                </Typography>

            </Box>
        </Modal>
    );
}

export default ModalWindow;