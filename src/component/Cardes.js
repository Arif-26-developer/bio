import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme, useMediaQuery } from "@mui/material";

import "../page/service.css";

const Cardes = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const isPest = props.isPest || false;

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "45%", md: "30%" }, // Responsive width
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center content horizontally
        boxShadow: 3,
        perspective: "1000px", // Perspective for 3D effect
        // Center card within its container
        mx: 'auto', // Auto margin on the left and right to center the card
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: "100%", // Full width
          height: "50%", // Maintain aspect ratio
          objectFit: "cover", // Ensure the image covers the area without distortion
        }}
        className={isPest ? "imagehover" : "tilt"} // Conditional class
        image={props.image}
        title={props.title}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center align content horizontally
          textAlign: "center", // Center text
          padding: "16px", // Adjust padding as needed
        }}
      >
        <Typography
          gutterBottom
          variant="h3" // Increased to h3 for a larger title
          component="div"
          color="#00BF62"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Increased font size
            fontWeight: 600, // Optional: add bold weight
            mb: 2, // Margin bottom for spacing
          }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="body1" // Use body1 for a slightly larger body text
          color="text.secondary"
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }, // Increased font size
            lineHeight: 1.5, // Optional: adjust line height for better readability
            mb: 3, // Margin bottom for spacing
          }}
        >
          {props.description}
        </Typography>
        <Button
          variant="contained"
          href="tel:+91 8779013932"
          sx={{
            backgroundColor: "#00BF62",
            color: "white",
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }, // Increased font size for button text
            padding: { xs: "10px 20px", sm: "12px 24px", md: "14px 28px" }, // Increased padding
            borderRadius: "8px", // Optional: adjust border radius for rounded corners
            "&:hover": {
              backgroundColor: "#00BF62",
              opacity: 0.9,
            },
          }}
        >
          CALL US
        </Button>
      </CardContent>
    </Card>
  );
};

export default Cardes;
