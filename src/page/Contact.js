import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import biologo from "../component/assest/banner4.jpeg";
import { useTheme, useMediaQuery } from '@mui/material';
import { Element } from "react-scroll";
const Contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Define styles for different screen sizes
    const imageStyles = {
        width: '100%', // Make the image responsive
        height: '100%', // Ensure the height fills the container
        objectFit: 'cover', // Ensure the image covers the container without stretching
        borderRadius: '20px', // Border radius for the image
    };

    return (
        <Element name="contactusElement">


            <Box
                sx={{
                    width: '100vw', // Full width of the viewport
                    overflow: 'hidden', // Ensure content does not overflow
                    boxShadow: theme.shadows[5], // Apply shadow effect
                }}
            >

<Typography
    variant="h4" // Increased font size for the title
    component="h6"
    sx={{
        color: "#00BF62",
        textAlign: "center",
        mt: 4, // Adjusted top margin
        mb: 4, // Adjusted bottom margin
        p: 3, // Increased padding
        borderRadius: 2, // Increased border radius
        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
        boxShadow: "0px 6px 16px rgba(0, 191, 98, 0.6)", // Enhanced box shadow
        width: { xs: "90%", sm: "80%", md: "70%" }, // Increased width
        maxWidth: "100%",
        margin: "0 auto", // Center horizontally
        animation: `slideInOut 3s ease-in-out`, // Animation property for sliding effect
        backgroundColor: "rgba(0, 191, 98, 0.1)", // Light background color for highlighting
        backdropFilter: "blur(6px)", // Increased blur effect to the background
    }}
>
    CONTACT US
</Typography>

                <Card
                    sx={{
                        maxWidth: 1400, // Increased maxWidth for the Card
                        margin: 'auto',
                        mt: 6, // Increased top margin
                        mb: 6, // Increased bottom margin
                        boxShadow: 'none', // Remove shadow from Card itself
                        borderRadius: 3, // Increased border radius for the Card
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                    }}
                >
                    <Grid container direction={isMobile ? 'column' : 'row'}>
                        <Grid item xs={12} md={6} sx={{ position: 'relative', height: isMobile ? 300 : 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CardMedia
                                component="img"
                                alt="Contact Us"
                                image={biologo}
                                sx={imageStyles} // Apply updated styles
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center', // Center horizontally
                                    textAlign: 'center', // Center text within CardContent
                                    height: '100%',
                                    p: 4, // Increased padding
                                }}
                            >
                                <Typography
                                    variant="h4" // Increased font size for subtitle
                                    component="div"
                                    gutterBottom
                                    sx={{ color: '#00BF62', mb: 6 }} // Increased bottom margin
                                >
                                    Need Our Help or Have Questions?
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, mb: 3, mt: 0 }}>
                                    <Box sx={{
                                        p: 3, // Increased padding
                                        borderRadius: 3, // Increased border radius
                                        textAlign: 'center',
                                        boxShadow: theme.shadows[8], // Enhanced shadow for Box
                                        width: '100%',
                                        transition: 'box-shadow 0.3s ease-in-out', // Smooth shadow transition
                                        '&:hover': {
                                            boxShadow: theme.shadows[10], // Further enhanced shadow on hover
                                        },
                                        mb: 3 // Increased margin bottom for spacing between boxes
                                    }}>
                                        <EmailIcon sx={{ fontSize: 50, color: '#00BF62' }} /> {/* Increased icon size */}
                                        <Typography variant="h6" sx={{ mt: 1, color: '#00BF62', fontSize: '1.25rem' }}>EMAIL</Typography> {/* Increased font size */}
                                        <Typography variant="body1" sx={{ mt: 1, color: '#555', fontSize: '1.125rem' }}>
                                            <a href="mailto:bioservice15@gmail.com" style={{ textDecoration: 'none' }}>
                                                bioservice15@gmail.com
                                            </a>
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        p: 3, // Increased padding
                                        borderRadius: 3, // Increased border radius
                                        textAlign: 'center',
                                        boxShadow: theme.shadows[8], // Enhanced shadow for Box
                                        width: '100%',
                                        transition: 'box-shadow 0.3s ease-in-out', // Smooth shadow transition
                                        '&:hover': {
                                            boxShadow: theme.shadows[10], // Further enhanced shadow on hover
                                        }
                                    }}>
                                        <PhoneIcon sx={{ fontSize: 50, color: '#00BF62' }} /> {/* Increased icon size */}
                                        <Typography variant="h6" sx={{ mt: 1, color: '#00BF62', fontSize: '1.25rem' }}>CONTACT</Typography> {/* Increased font size */}
                                        <Typography variant="body1" sx={{ mt: 1, color: '#555', fontSize: '1.125rem' }}>
                                            <a href="tel:+91 8779013932" style={{ textDecoration: 'none' }}>
                                                +91 8779013932
                                            </a>
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
            </Element>
    );
}

export default Contact;
