// ShortenStyles.jsx
import { styled } from "@mui/material/styles";
import { Box, Container, Card, Typography } from "@mui/material";

export const StyledImageBox = styled("div")(({ theme }) => ({
    // ...existing code...
}));

export const StyledBox = styled(Box)(({ theme }) => ({
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage:
        "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
    ...(theme.applyStyles && theme.applyStyles("dark", {
        backgroundImage:
        "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
    })),
    ...(theme.glassmorphism || {}),
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing({ xs: 14, sm: 20 }),
    paddingBottom: theme.spacing({ xs: 8, sm: 12 }),
    ...(theme.applyStyles && theme.applyStyles("dark", {
        background: theme.palette.grey[900],
        boxShadow:
            "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px",
    })),
    ...(theme.glassmorphism || {}),
}));

export const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 600,
    width: { sm: "100%", md: "80%" },
    textAlign: "center",
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",
    fontSize: "clamp(3rem, 10vw, 3.5rem)",
    ...theme.applyStyles("dark", {
        color: "primary.light",
    }),
}));
