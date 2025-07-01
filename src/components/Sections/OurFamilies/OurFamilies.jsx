import { Box, Container, Grid, Typography } from "@mui/material";
import banner from '../../../assets/our-families-banner.png'


export default function OurFamilies() {
  return (
    <Box pt={3} sx={{  background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Grid
          container
          alignItems='center'
          spacing={4}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
          }}
        >
          <Grid item sx={{ gridColumn: { xs: "span 12", md: "span 6" } }}>
            <Box >
              <Typography fontWeight={600} color="primary.main" mb={1}>
                CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
              </Typography>
              <Typography variant="h2" fontWeight={700} mb={2}>
                Our Families
              </Typography>
              <Typography color="#77829D" lineHeight={1.8}>
                We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
              </Typography>
            </Box>
          </Grid>

          <Grid item sx={{ gridColumn: { xs: "span 12", md: "span 6" } }}>
            <Box sx={{  height: "100%" }}>
              <Box
                component="img"
                src={banner}
                width={1}
                height="auto"
                alt="Our Families Banner"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
