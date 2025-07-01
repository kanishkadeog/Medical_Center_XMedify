import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.png";
import apple from "../../../assets/apple-logo.png";
import arrow from "../../../assets/down-arr.png";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SmsForm from "./SmsForm";

//download app component to render input details using SmsForm component
export default function DownloadApp() {
  return (
    <Box
      sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5,pb:2 }}
    >
      <Container>
       <Grid container 
        // spacing={4} 
        alignItems="center"
        sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
          }}
          >
          <Grid item sx={{ gridColumn: { xs: "span 12", md: "span 6" } }}>
            <Box component="img" src={mobile} width="100%" height="auto" />
          </Grid>

          <Grid item sx={{ gridColumn: { xs: "span 12", md: "span 6" } }}>
            <Box position="relative" pl={{ xs: 4, md: 6 }}>
              <Typography variant="h3" fontWeight={700} mb={1.5}>
                Download the
                <br />
                <Box component="span" color="primary.main">Medify</Box> App
              </Typography>

              <Box
                component="img"
                src={arrow}
                width={{ xs: 24, md: 36 }}
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 50
                }}
              />

              <Box my={3}>
                <SmsForm />
              </Box>

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1.5, md: 2 }}
              >
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 2,
                    px: 3
                  }}
                  size="large"
                  startIcon={<img src={playstore} height={24} />}
                  variant="contained"
                  disableElevation
                >
                  Google Play
                </Button>

                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 2,
                    px: 3
                  }}
                  size="large"
                  startIcon={<img src={apple} height={24} />}
                  variant="contained"
                  disableElevation
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
