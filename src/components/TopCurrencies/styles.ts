import {SxProps} from "@mui/material";
import {Theme} from '@mui/material/styles';

const container:SxProps<Theme> = theme => ({
    maxHeight: {xs: 328, xsm: 392, md: 'inherit'},
    width: {xs: `calc(100% + ${theme.spacing(2)})`},
    mt: {xs: 4, sm: 5},
    mr: {xs: -1, md: 0},
    overflowY: {xs: 'scroll', md: 'inherit'},
    borderRadius: {xs: 1.25, md: 0}
});

const title:SxProps<Theme> = theme => ({
    fontSize: 26,
    textAlign: 'center',
    color: theme.palette.common.white,
    fontWeight: 400,
});

const item:SxProps<Theme> = theme => ({
    height: {xs: 82, xsm: 98},
    maxWidth: {
        xs: '100%',
        xsm: '50%',
        md: '25%'
    },
    pr: {xs: 1, md: 0},
    pb: {xs: 1, md: 0},
    '& .MuiPaper-root': {
        [theme.breakpoints.down('xsm')]: {
            py: 2,
        }
    }
});

const skeleton:SxProps<Theme> = theme => ({
    width: '100%',
    height: '100%',
    borderRadius: 2.5,
    bgcolor: theme.palette.grey['100']
})

export default {container, item, title, skeleton};