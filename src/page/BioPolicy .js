// src/PrivacyPolicy.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Footer from "./Footer";



const BioPolicy = () => {
    return (
        <>
            <Container maxWidth="md" sx={{ mt: 5 }}>
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{
                            color: "#00BF62",
                            textAlign: "center",
                            mb: 2, // Bottom margin set to 2 units
                            p: 2,
                            borderRadius: 1,
                            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive font size
                            boxShadow: "0px 4px 12px rgba(0, 191, 98, 0.5)", // Enhanced box shadow with color #00BF62
                            width: { xs: "90%", sm: "80%", md: "60%" }, // Responsive width
                            maxWidth: "100%",
                            margin: "0 auto", // Center horizontally
                            animation: `slideInOut 3s ease-in-out`, // Animation property for sliding effect
                            backgroundColor: "rgba(0, 191, 98, 0.1)", // Light background color for highlighting
                            backdropFilter: "blur(4px)", // Optional: adds a blur effect to the background
                        }}
                    >
                        Privacy Policy
                    </Typography>
                </Box>
                <Typography variant="body1" paragraph sx={{ opacity: "0.9" }}>
                    We guarantee never to sell Personal Information or share that information with third parties unrelated to Pest Control without your express permission, except to any third party suppliers we engage to develop, manage or host the site or our databases or pursuant to any properly executed court order from a competent jurisdiction or if otherwise required to do so by law. Personal Information is: your name, phone number, contact details, date of birth, job, personal interests, credit card information, e-mail address, data about the pages you visit on this site. This may be used by us to process your online purchases, to inform you about other products and services, to improve the products and services we offer or for other marketing or statistical purposes and otherwise to better meet the needs and preferences of our customers.
                </Typography>

            </Container>
            <Footer />
        </>
    );
};

export default BioPolicy;
