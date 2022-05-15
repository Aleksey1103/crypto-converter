import {SxProps} from "@mui/material";
import {Theme} from '@mui/material/styles';

const wrapper:SxProps<Theme> = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    boxSizing: 'border-box',
    maxWidth: 'calc(100vw - 30px)',
    bgcolor: 'background.paper',
    borderRadius: 2.5,
    boxShadow: 10,
    p: 3,
    outline: 'none'
};

const SX = {wrapper}

export default SX;