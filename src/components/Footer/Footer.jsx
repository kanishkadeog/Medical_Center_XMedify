// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   Link,
//   Stack,
//   Typography,
// } from "@mui/material";
// import logo from "../../assets/logo.png";
// import fb from "../../assets/fb.png";
// import pinterest from "../../assets/pinterest.png";
// import twitter from "../../assets/twitter.png";
// import yt from "../../assets/yt.png";
// import FooterLink from "./FooterLink";

// export default function Footer() {
//   return (
//     <Box bgcolor="primary.secondary" pb={3} pt={6}>
//       <Container maxWidth="xl">
//         <Grid container spacing={4}
//         justifyContent="space-between"
//          >
//           <Grid item xs={12} md={4.5}>
//             <Stack
//               alignItems="flex-start"
//               justifyContent="space-between"
//               height={1}
//             >
//               <Box src={logo} height={36} alt="Medify" component="img" mb={2} />
//               <Stack direction="row" spacing={1.5}>
//                 <Box component="img" src={fb} height={36} />
//                 <Box component="img" src={twitter} height={36} />
//                 <Box component="img" src={yt} height={36} />
//                 <Box component="img" src={pinterest} height={36} />
//               </Stack>
//             </Stack>
//           </Grid>

//           <Grid item xs={12} md={2.5}>
//             <Stack spacing={2}>
//               <FooterLink>About Us</FooterLink>
//               <FooterLink>Our Pricing</FooterLink>
//               <FooterLink>Our Gallery</FooterLink>
//               <FooterLink>Appointment</FooterLink>
//               <FooterLink>Privacy Policy</FooterLink>
//             </Stack>
//           </Grid>

//           <Grid item xs={12} md={2.5}>
//             <Stack spacing={2}>
//               <FooterLink>Orthology</FooterLink>
//               <FooterLink>Neurology</FooterLink>
//               <FooterLink>Dental Care</FooterLink>
//               <FooterLink>Opthalmology</FooterLink>
//               <FooterLink>Cardiology</FooterLink>
//             </Stack>
//           </Grid>

//           <Grid item xs={12} md={2.5}>
//             <Stack spacing={2}>
//               <FooterLink>About Us</FooterLink>
//               <FooterLink>Our Pricing</FooterLink>
//               <FooterLink>Our Gallery</FooterLink>
//               <FooterLink>Appointment</FooterLink>
//               <FooterLink>Privacy Policy</FooterLink>
//             </Stack>
//           </Grid>
//         </Grid>

//         <Typography
//           fontWeight={300}
//           color="#fff"
//           fontSize={14}
//           pt={3}
//           mt={5}
//           borderTop="1px solid rgba(255,255,255,0.1)"
//         >
//           Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
//         </Typography>
//       </Container>
//     </Box>
//   );
// }

//------------------

// import {
//   Box,
//   Container,
//   Grid,
//   Stack,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import logo from "../../assets/logo.png";
// import fb from "../../assets/fb.png";
// import pinterest from "../../assets/pinterest.png";
// import twitter from "../../assets/twitter.png";
// import yt from "../../assets/yt.png";
// import FooterLink from "./FooterLink";

// export default function Footer() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box bgcolor="primary.secondary" pb={3} pt={6}>
//       <Container maxWidth="xl">
//         <Grid
//           container
//           spacing={4}
//           direction={isMobile ? "column" : "row"}
//           justifyContent="space-between"
//         >
//           <Grid item xs={12} md={4.5}>
//             <Stack
//               alignItems="flex-start"
//               justifyContent="space-between"
//               height={1}
//               spacing={2}
//             >
//               <Box
//                 src={logo}
//                 height={36}
//                 alt="Medify"
//                 component="img"
//                 mb={2}
//               />
//               <Stack
//                 direction="row"
//                 spacing={1.5}
//                 flexWrap="wrap"
//                 justifyContent={isMobile ? "flex-start" : "flex-start"}
//               >
//                 <Box component="img" src={fb} height={36} />
//                 <Box component="img" src={twitter} height={36} />
//                 <Box component="img" src={yt} height={36} />
//                 <Box component="img" src={pinterest} height={36} />
//               </Stack>
//             </Stack>
//           </Grid>

//           <Grid item xs={12} md={2.5}>
//             <Stack spacing={2}>
//               <FooterLink>About Us</FooterLink>
//               <FooterLink>Our Pricing</FooterLink>
//               <FooterLink>Our Gallery</FooterLink>
//               <FooterLink>Appointment</FooterLink>
//               <FooterLink>Privacy Policy</FooterLink>
//             </Stack>
//           </Grid>

//           <Grid item xs={12} md={2.5}>
//             <Stack spacing={2}>
//               <FooterLink>Orthology</FooterLink>
//               <FooterLink>Neurology</FooterLink>
//               <FooterLink>Dental Care</FooterLink>
//               <FooterLink>Opthalmology</FooterLink>
//               <FooterLink>Cardiology</FooterLink>
//             </Stack>
//           </Grid>

//           <Grid item xs={12} md={2.5}>
//             <Stack spacing={2}>
//               <FooterLink>About Us</FooterLink>
//               <FooterLink>Our Pricing</FooterLink>
//               <FooterLink>Our Gallery</FooterLink>
//               <FooterLink>Appointment</FooterLink>
//               <FooterLink>Privacy Policy</FooterLink>
//             </Stack>
//           </Grid>
//         </Grid>

//         <Typography
//           fontWeight={300}
//           color="#fff"
//           fontSize={14}
//           pt={3}
//           mt={5}
//           borderTop="1px solid rgba(255,255,255,0.1)"
//         >
//           Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
//         </Typography>
//       </Container>
//     </Box>
//   );
// }

//--------------------------------------------

// import {
//   Box,
//   Container,
//   Grid,
//   Stack,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import logo from "../../assets/logo.png";
// import fb from "../../assets/fb.png";
// import pinterest from "../../assets/pinterest.png";
// import twitter from "../../assets/twitter.png";
// import yt from "../../assets/yt.png";
// import FooterLink from "./FooterLink";

// export default function Footer() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box bgcolor="primary.secondary" pb={3} pt={6}>
//       <Container maxWidth="xl">
//         <Grid
//           container
//           spacing={4}
//           direction={isMobile ? "column" : "row"}
//           justifyContent="space-between"
//         >
//           {/* Logo + Social Icons */}
//           <Grid item xs={12} md={4.5}>
//             <Stack
//               alignItems="flex-start"
//               justifyContent="flex-start"
//               spacing={2}
//               mb={isMobile ? 4 : 0}
//             >
//               <Box src={logo} height={36} alt="Medify" component="img" />
//               <Stack direction="row" spacing={2}>
//                 <Box component="img" src={fb} height={36} />
//                 <Box component="img" src={twitter} height={36} />
//                 <Box component="img" src={yt} height={36} />
//                 <Box component="img" src={pinterest} height={36} />
//               </Stack>
//             </Stack>
//           </Grid>

//           {/* Column 1 */}
//           <Grid item xs={12} md={2.5}>
//             <Stack spacing={2} mb={isMobile ? 4 : 0}>
//               <FooterLink>About Us</FooterLink>
//               <FooterLink>Our Pricing</FooterLink>
//               <FooterLink>Our Gallery</FooterLink>
//               <FooterLink>Appointment</FooterLink>
//               <FooterLink>Privacy Policy</FooterLink>
//             </Stack>
//           </Grid>

//           {/* Column 2 */}
//           <Grid item xs={12} md={2.5}>
//             <Stack spacing={2} mb={isMobile ? 4 : 0}>
//               <FooterLink>Orthology</FooterLink>
//               <FooterLink>Neurology</FooterLink>
//               <FooterLink>Dental Care</FooterLink>
//               <FooterLink>Opthalmology</FooterLink>
//               <FooterLink>Cardiology</FooterLink>
//             </Stack>
//           </Grid>

//           {/* Column 3 */}
//           <Grid item xs={12} md={2.5}>
//             <Stack spacing={2}>
//               <FooterLink>About Us</FooterLink>
//               <FooterLink>Our Pricing</FooterLink>
//               <FooterLink>Our Gallery</FooterLink>
//               <FooterLink>Appointment</FooterLink>
//               <FooterLink>Privacy Policy</FooterLink>
//             </Stack>
//           </Grid>
//         </Grid>

//         {/* Copyright */}
//         <Typography
//           fontWeight={300}
//           color="#fff"
//           fontSize={14}
//           pt={3}
//           mt={5}
//           borderTop="1px solid rgba(255,255,255,0.1)"
//         >
//           Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
//         </Typography>
//       </Container>
//     </Box>
//   );
// }


//------------------------------------

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import FooterLink from "./FooterLink";

// const FooterAccordion = ({ title, items }) => (
//   <Accordion sx={{ bgcolor: "primary.secondary", color: "#fff", boxShadow: "none" }}>
//     <AccordionSummary
//       expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
//       aria-controls={`${title}-content`}
//       id={`${title}-header`}
//     >
//       <Typography fontWeight="bold">{title}</Typography>
//     </AccordionSummary>
//     <AccordionDetails>
//       <Stack spacing={1}>
//         {items.map((item, idx) => (
//           <FooterLink key={idx}>{item}</FooterLink>
//         ))}
//       </Stack>
//     </AccordionDetails>
//   </Accordion>
// );

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // const infoLinks = [
  //   "About Us",
  //   "Our Pricing",
  //   "Our Gallery",
  //   "Appointment",
  //   "Privacy Policy",
  // ];

  // const specializations = [
  //   "Orthology",
  //   "Neurology",
  //   "Dental Care",
  //   "Opthalmology",
  //   "Cardiology",
  // ];

  return (
    <Box bgcolor="primary.secondary" pb={3} pt={6}>
      <Container maxWidth="xl">
        {isMobile ? (
          <>
            <Stack alignItems="flex-start" spacing={2} mb={4}>
              <Box src={logo} height={36} alt="Medify" component="img" />
              <Stack direction="row" spacing={2}>
                <Box component="img" src={fb} height={36} />
                <Box component="img" src={twitter} height={36} />
                <Box component="img" src={yt} height={36} />
                <Box component="img" src={pinterest} height={36} />
              </Stack>
            </Stack>



            <Stack spacing={2}>
               <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
               <FooterLink>Our Gallery</FooterLink>
               <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>

                <FooterLink>Orthology</FooterLink>
               <FooterLink>Neurology</FooterLink>
               <FooterLink>Dental Care</FooterLink>
               <FooterLink>Opthalmology</FooterLink>
               <FooterLink>Cardiology</FooterLink>

               <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
               <FooterLink>Our Gallery</FooterLink>
               <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>

              </Stack>

   
          </>
        ) : (
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} md={4.5}>
              <Stack
                alignItems="flex-start"
                justifyContent="space-between"
                height={1}
              >
                <Box src={logo} height={36} alt="Medify" component="img" mb={2} />
                <Stack direction="row" spacing={1.5}>
                  <Box component="img" src={fb} height={36} />
                  <Box component="img" src={twitter} height={36} />
                  <Box component="img" src={yt} height={36} />
                  <Box component="img" src={pinterest} height={36} />
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={2.5}>
              <Stack spacing={2}>
                <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
               <FooterLink>Our Gallery</FooterLink>
               <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
                {/* {infoLinks.map((item, idx) => (
                  <FooterLink key={idx}>{item}</FooterLink>
                ))} */}
              </Stack>
            </Grid>

            <Grid item xs={12} md={2.5}>
              <Stack spacing={2}>
                  <FooterLink>Orthology</FooterLink>
               <FooterLink>Neurology</FooterLink>
               <FooterLink>Dental Care</FooterLink>
               <FooterLink>Opthalmology</FooterLink>
               <FooterLink>Cardiology</FooterLink>

                {/* {specializations.map((item, idx) => (
                  <FooterLink key={idx}>{item}</FooterLink>
                ))} */}
              </Stack>
            </Grid>

             <Grid item xs={12} md={2.5}>
              <Stack spacing={2}>
                <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
               <FooterLink>Our Gallery</FooterLink>
               <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
                {/* {infoLinks.map((item, idx) => (
                  <FooterLink key={idx}>{item}</FooterLink>
                ))} */}
              </Stack>
            </Grid>

          </Grid>
        )}

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
          // textAlign="center"
        >
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
