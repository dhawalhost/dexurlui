import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardActionArea from "@mui/material/CardActionArea";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconButton from "@mui/material/IconButton";
import { visuallyHidden } from "@mui/utils";
import { ContentCopy } from '@mui/icons-material';
import { gray } from "../../theme/themePrimitives";



export default function Shorten() {
  const [isShortened, setIsShortenedUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleShortenUrl = () => {
    // Logic to shorten the URL
    const newShortenedUrl = "http://short.url/example"; // Replace with actual logic
    setShortenedUrl(newShortenedUrl);
    setIsShortenedUrl(true);
  };
  return (
    <Box
      id="shorten"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "90%" } }}
        >
          <Typography
            variant="h1"
            component="span"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
            }}
          >
            Share&nbsp;Smart&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: "inherit",
                color: "primary.main",
                ...theme.applyStyles("dark", {
                  color: "primary.light",
                }),
              })}
            >
              Share&nbsp;Short
            </Typography>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Transform long, cumbersome URLs into short, manageable links that
            are easy to share and remember. Whether for social media, emails, or
            websites, our URL shortener simplifies your online experience.
          </Typography>
          <Card
            sx={{
              maxWidth: 600,
              width: { sm: "100%", md: "100%" },
              textAlign: "center",
              backgroundColor: "grey.100",
            }}
            
          >
            {/* <CardActionArea> */}
            <CardContent
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                margin: 3,
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                Shorten Your Link Now!
              </Typography>
              
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                useFlexGap
                sx={{ mt: 2, p: 2, width: { xs: "100%", sm: "500px" }, borderRadius: 1, backgroundColor: "white" }}
              >
                <InputLabel 
                  htmlFor="shorten-label"
                  sx={visuallyHidden}
                 >
                  Enter your Long URL
                </InputLabel>
                <TextField
                  id="shorten-label"
                  hiddenLabel
                  size="medium"
                  variant="outlined"
                  aria-label="enter your long URL"
                  placeholder=" http://example.com/my-long-url"
                  fullWidth
                  slotProps={{
                    htmlInput: {
                      autoComplete: "on",
                      "aria-label": "enter your long URL",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ minWidth: "fit-content" }}
                  onClick={handleShortenUrl}
                >
                  Shorten URL
                </Button>
              </Stack>
              {isShortened && (
                <>
                  <Typography 
                  sx={{pt:2}}
                  variant="subtitle1" 
                  > 
                    Shortened URL
                  </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={1}
                  sx={{ mt: 2, p: 2, width: { xs: "100%", sm: "500px" }, borderRadius: 1, backgroundColor: "white" }}
                  
                >

                  <Typography variant="body1">
                    <a
                      href={shortenedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {shortenedUrl}
                    </a>
                  </Typography>
                  <CopyToClipboard text={shortenedUrl}>
                    <IconButton size="small" aria-label="copy to clipboard">
                      <ContentCopy />
                    </IconButton>
                  </CopyToClipboard>
                </Stack>
                </>

              )}
            </CardContent>
            {/* </CardActionArea> */}
          </Card>

          {/* <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography> */}
        </Stack>
        {/* <StyledBox id="image" /> */}
      </Container>
    </Box>
  );
}
