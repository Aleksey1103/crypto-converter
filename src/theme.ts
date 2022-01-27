import React from "react";
import {createTheme} from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        label: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        label?: React.CSSProperties;
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
                },
                input: {
                    paddingLeft: 16,
                    paddingRight: 16,
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
                    }
                },
                icon: {
                    color: theme.palette.primary.main,
                    right: 11,
                    fontSize: 28,
                }
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
                }
            }
        }
    }
})

export default customTheme;

