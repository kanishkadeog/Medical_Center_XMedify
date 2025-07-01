import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import banner from '../../../assets/patientcaring.png'
import tick from '../../../assets/tick-blue.png'


export default function PatientCaring() {
  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Grid
          container
          alignItems="center"
          spacing={4}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" }
          }}
        >
          {/* IMAGE SECTION */}
          <Grid item sx={{ gridColumn: { xs: "span 12", md: "span 6" } }}>
            <Box sx={{ height: "100%" }}>
              <Box
                component="img"
                src={banner}
                width={1}
                height="auto"
                alt="Patient Caring Banner"
              />
            </Box>
          </Grid>

          {/* TEXT SECTION */}
          <Grid item sx={{ gridColumn: { xs: "span 12", md: "span 6" } }}>
            <Box>
              <Typography fontWeight={600} color="primary.main" mb={1}>
                HELPING PATIENTS FROM AROUND THE GLOBE!!
              </Typography>
              <Typography variant="h2" fontWeight={700} mb={2}>
                Patient{" "}
                <Box component="span" color="primary.main">
                  Caring
                </Box>
              </Typography>
              <Typography color="#77829D" lineHeight={1.8} mb={2}>
                Our goal is to deliver quality of care in a courteous,
                respectful, and compassionate manner. We hope you will allow us
                to care for you and strive to be the first and best choice for
                healthcare.
              </Typography>

              <List sx={{ fontSize: { xs: 12, md: 18 } }}>
                {[
                  "Stay Updated About Your Health",
                  "Check Your Results Online",
                  "Manage Your Appointments"
                ].map((text) => (
                  <ListItem key={text} disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Box component="img" src={tick} height={22} width={22} />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      slotProps={{
                        primary: {
                          sx: {
                            fontSize: { xs: 14, md: 18 },
                            fontWeight: 500,
                            color: "#1B3C74"
                          }
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
