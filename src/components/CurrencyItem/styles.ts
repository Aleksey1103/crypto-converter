import {SxProps} from "@mui/material";
import {Theme} from '@mui/material/styles';

const select:SxProps<Theme> = theme => ({
    width: 266,
    borderRadius: '10px 0 0 10px',
    borderColor: theme.palette.primary.main,
});

const input:SxProps<Theme> = () => ({
    width: 130,
    borderRadius: '0 10px 10px 0',
});

const wrapper:SxProps<Theme> = () => ({
    boxShadow: 8,
    borderRadius: 2.5,
})

const skeleton:SxProps<Theme> = theme => ({
    width: 396,
    height: 60,
    borderRadius: 2.5,
    bgcolor: theme.palette.grey["100"]
})

export default {select, input, wrapper, skeleton};