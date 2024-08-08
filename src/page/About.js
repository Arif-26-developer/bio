import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import biologo from "../component/assest/biologo.jpeg";
import { Element } from "react-scroll";

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: theme.shape.borderRadius,
  objectFit: "contain",
  [theme.breakpoints.down('sm')]: {
    maxHeight: 250,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    maxHeight: 300,
  },
  [theme.breakpoints.up('md')]: {
    maxHeight: 350,
  }
}));

const About = () => {
  return (
    <Element name="aboutUsElement">
      <Container
        maxWidth={false}
        sx={{
          py: 4,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          backgroundColor: "#fff",
          padding: 2,
          width: "100%",
          margin: 0,
          boxSizing: 'border-box',
        }}
      >
        <Typography
          variant="h6"
          component="h6"
          sx={{
            color: "#00BF62",
            textAlign: "center",
            mb: 4,
            mt: { xs: 0, sm: 4, md: 6 }, // Removed top margin for small screens, added for medium and larger
            p: 2,
            borderRadius: 1,
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
            boxShadow: "0px 4px 12px rgba(0, 191, 98, 0.5)",
            width: { xs: "90%", sm: "80%", md: "60%" },
            maxWidth: "100%",
            margin: "0 auto",
            animation: `slideInOut 3s ease-in-out`,
            backgroundColor: "rgba(0, 191, 98, 0.1)",
            backdropFilter: "blur(4px)",
          }}
        >
          ABOUT US
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center" mt={{ xs: 0, sm: 4, md: 6 }}>
          <Grid item xs={12} md={4} container direction="column" alignItems="center" mb={4}>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                p: 3,
                borderRadius: 1,
                backgroundColor: "#f9f9f9",
                textAlign: "center"
              }}
            >
              In 2021, we founded Bio Service, offering a comprehensive range of
              expert pest control and cleaning services. Bio Service provides
              these services at a reasonable cost. Our entire team is committed
              to addressing any kind of pest issue, and we've been recognized as
              a pest management service with the quickest results. To ensure our
              clients receive top-notch cleaning and pest control, we guarantee
              our service because we are confident in it. Our technicians are
              qualified, certified, and have many years of experience in the
              field, all based on ethics, professionalism, and honesty.
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              mt={2}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#00BF62",
                  color: "#fff",
                  '&:hover': {
                    backgroundColor: "#00a14e",
                  },
                  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                  padding: '16px 36px',
                  borderRadius: 2,
                }}
                href="tel:+91 8779013932"
              >
                Get a Quote
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} container justifyContent="center" alignItems="center" mb={4}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Image src={biologo} alt="Cleaning" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Element>
  );
};

export default About;
