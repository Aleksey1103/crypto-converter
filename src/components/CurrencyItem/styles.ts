import {SxProps} from "@mui/material";
import {Theme} from '@mui/material/styles';

const item:SxProps<Theme> = () => ({
    mt: {xs: 3, sm: 4, md: 0},
    width: '100%',
    maxWidth: 396,
})

const wrapper:SxProps<Theme> = () => ({
    display: 'flex',
    boxShadow: 8,
    borderRadius: 2.5,
})

const select:SxProps<Theme> = theme => ({
    width: `${100*266/396}%`,
    borderRadius: '10px 0 0 10px',
    borderColor: theme.palette.primary.main,
});

const input:SxProps<Theme> = () => ({
    width: `${100*130/396}%`,
    borderRadius: '0 10px 10px 0',
    input: {
        textAlign: 'center',
        color: 'common.black',
        '&.Mui-disabled': {
            WebkitTextFillColor: 'unset',
        }
    },
});

const skeleton:SxProps<Theme> = theme => ({
    width: '100%',
    height: 60,
    borderRadius: 2.5,
    bgcolor: theme.palette.grey["100"],
    [theme.breakpoints.down('xsm')]: {
        height: 50,
    },
})

const SX = {item, wrapper, select, input, skeleton};

export default SX;