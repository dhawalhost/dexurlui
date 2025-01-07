import { gray } from '../themePrimitives';
/* eslint-disable import/prefer-default-export */
export const surfacesCustomizations = {
  MuiCssBaseline: {
    styleOverrides: (themeParam) => ({
      body:{
          backgroundColor: themeParam.palette.mode == 'dark'? '#111927':'#50E3C2',
          backgroundImage: themeParam.palette.mode == 'dark' ? 'radial-gradient(at 47% 33%, hsl(162.14, 93%, 27%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(218.00, 39%, 11%) 0, transparent 55%)':'radial-gradient(at 47% 33%, hsl(159.62, 77%, 40%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55%)',
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
        backdropFilter: 'blur(10px)',
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
        // backdropFilter: 'blur(10px)',
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
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          ...theme.applyStyles('dark', {
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