import {Theme} from '@mui/material/styles';

const select = (theme:Theme) => ({
    width: 266,
    borderRadius: '10px 0 0 10px',
    borderColor: theme.palette.primary.main,
});

const input = () => ({
    width: 130,
    borderRadius: '0 10px 10px 0',
});

const wrapper = () => ({
    display: 'inline-block',
    boxShadow: 8,
    borderRadius: 2.5
})

export default {select, input, wrapper};