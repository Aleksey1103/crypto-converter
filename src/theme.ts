import React from "react";
import {createTheme} from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        label: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        label?: React.CSSProperties;
    }

    interface BreakpointOverrides {
        xs: true;
        xsm: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        label: true;
        h3: false;
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#D5D83E',
        },
        secondary: {
            main: '#C9ADEC',
        }
    },
    breakpoints: {
        keys: ['xs', 'xsm', 'sm', 'md', 'lg', 'xl'],
        values: {xs: 0, xsm: 375, sm: 600, md: 900, lg: 1200, xl: 1536}
    }
});

const customTheme = createTheme(theme, {
    typography: {
        label: {
            marginBottom: 16,
            fontSize: 14,
            lineHeight: '16px',
            color: theme.palette.common.white,
        }
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: '"Comfortaa", cursive',
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    height: 60,
                    border: '2px solid',
                    borderColor: theme.palette.secondary.main,
                    backgroundColor: theme.palette.common.white,
                    fontFamily: '"Comfortaa", cursive',
                    '&::before, &::after': {
                        display: 'none'
                    },
                    [theme.breakpoints.down('xsm')]: {
                        height: 50,
                    }
                },
                input: {
                    paddingLeft: 16,
                    paddingRight: 16,
                    [theme.breakpoints.down('xsm')]: {
                        paddingLeft: 10,
                        paddingRight: 10,
                    }
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    padding: '16px 24px 18px',
                    lineHeight: '20px',
                    '&:focus': {
                        backgroundColor: 'transparent'
                    },
                    [theme.breakpoints.down('xsm')]: {
                        padding: '11px 14px 13px'
                    },
                },
                icon: {
                    color: theme.palette.primary.main,
                    right: 11,
                    fontSize: 28,
                    [theme.breakpoints.down('xsm')]: {
                        right: 2,
                    },
                },
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    height: 60,
                    padding: '0 45px',
                    background: `linear-gradient(230deg, #986DCF 24.58%, #FBFF2F 133.2%)`,
                    borderRadius: 10,
                    fontFamily: '"Comfortaa", cursive',
                    fontSize: 20,
                    lineHeight: '22px',
                    textTransform: 'initial',
                    color: theme.palette.common.white,
                    [theme.breakpoints.down('xsm')]: {
                        height: 50,
                        width: 170,
                        fontSize: 18,
                        lineHeight: '20px'
                    }
                }
            }
        }
    }
});

export default customTheme;

