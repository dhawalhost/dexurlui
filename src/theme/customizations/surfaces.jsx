import { gray } from '../themePrimitives';
import dark from '../../assets/background/dark2.jpg';
import light from '../../assets/background/light5.jpg';
/* eslint-disable import/prefer-default-export */
export const surfacesCustomizations = {
  MuiCssBaseline: {
    styleOverrides: (themeParam) => ({
      body:{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundImage: themeParam.palette.mode == 'dark' ? `url(${dark})`:`url(${light})`,
      },
    })
  },
  MuiAccordion: {
    defaultProps: {
      elevation: 0,
      disableGutters: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: 4,
        overflow: 'clip',
        backgroundColor: ((theme.vars || theme).palette.background.default, 0.8),
        border: '1px solid',
        borderColor: (theme.vars || theme).palette.divider,
        ':before': {
          backgroundColor: 'transparent',
        },
        '&:not(:last-of-type)': {
          borderBottom: 'none',
        },
        '&:first-of-type': {
          borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
          borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
        },
        '&:last-of-type': {
          borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
          borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
        },
        backdropFilter: 'blur(24px)',
      }),
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: ({ theme }) => ({
        border: 'none',
        borderRadius: 8,
        '&:hover': { backgroundColor: (gray[50], 0.8) },
        '&:focus-visible': { backgroundColor: 'transparent' },
        ...theme.applyStyles('dark', {
          '&:hover': { backgroundColor: (gray[800], 0.8) },
        }),
      }),
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: { mb: 20, border: 'none' },
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: ((theme.vars || theme).palette.background.default, 0.8),
      }),
    },
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          padding: 16,
          gap: 16,
          transition: 'all 100ms ease',
          backgroundColor: (gray[50], 0.8),
          borderRadius: (theme.vars || theme).shape.borderRadius,
          border: `1px solid ${(theme.vars || theme).palette.divider}`,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
          ...theme.applyStyles('dark', {
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
            // backgroundColor: (gray[800], 0.8),
            ...theme.glassmorphism
          }),
          ...theme.glassmorphism,
          variants: [
            {
              props: {
                variant: 'outlined',
              },
              style: {
                border: `1px solid ${(theme.vars || theme).palette.divider}`,
                boxShadow: 'none',
                background: ('hsl(0, 0%, 100%)', 0.8),
                ...theme.applyStyles('dark', {
                  // background: (gray[900], 0.4),
                  ...theme.glassmorphism
                }),
              },
            },
          ],
        };
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 0,
        '&:last-child': { paddingBottom: 0 },
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  }
};