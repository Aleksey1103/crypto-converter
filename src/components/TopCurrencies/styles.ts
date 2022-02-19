import {SxProps} from "@mui/material";
import {Theme} from '@mui/material/styles';

const title:SxProps<Theme> = theme => ({
    fontSize: 30,
    textAlign: 'center',
    color: theme.palette.common.white,
    fontWeight: 400,
});

const skeleton:SxProps<Theme> = theme => ({
    width: '100%',
    height: '100%',
    borderRadius: 2.5,
    bgcolor: theme.palette.grey['100']
})

export default {title, skeleton};