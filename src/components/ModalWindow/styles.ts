import {SxProps} from "@mui/material";
import {Theme} from '@mui/material/styles';

const wrapper:SxProps<Theme> = theme => ({
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2.5,
    boxShadow: 10,
    p: 3,
    outline: 'none'
});

export default {wrapper};