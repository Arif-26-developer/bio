import React from "react";
import "./service.css";
import Pest from "./Pest.json";
import Cleaning from "./Cleaning.json";
import Cardes from "../component/Cardes";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { Element } from "react-scroll";

const sectionStyle = {
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  padding: "16px",
  backgroundColor: "#fff",
  width: "100%", // Full width of the viewport
  margin: "0 auto", // Center horizontally
  boxSizing: "border-box", // Ensure padding and border are included in the width
};

const fontSize = { xs: "1.75rem", sm: "2.25rem", md: "3rem" }; // Same font size for both

const Service = () => {
  return (
    <Element name="serviceElement">
      <div className="service">
        <div className="pestcontrol" style={sectionStyle}>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              color: "#00BF62",
              textAlign: "center",
              mb: 4,
              p: 2,
              borderRadius: 1,
              fontSize: fontSize, // Use the same font size
              boxShadow: "0px 4px 12px rgba(0, 191, 98, 0.5)",
              width: { xs: "90%", sm: "80%", md: "60%" },
              maxWidth: "100%",
              margin: "0 auto",
              animation: `slideInOut 3s ease-in-out`,
              backgroundColor: "rgba(0, 191, 98, 0.1)",
              backdropFilter: "blur(4px)",
            }}
          >
            PEST CONTROL SERVICE
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 3 }}
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
          >
            {Pest.map((item) => (
              <Cardes
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                isPest={true}
              />
            ))}
          </Stack>
        </div>
        <div className="cleaning" style={sectionStyle}>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              color: "#00BF62",
              textAlign: "center",
              mb: 4,
              mt: 6,
              p: 2,
              borderRadius: 1,
              fontSize: fontSize, // Use the same font size
              boxShadow: "0px 4px 12px rgba(0, 191, 98, 0.5)",
              width: { xs: "90%", sm: "80%", md: "60%" },
              maxWidth: "100%",
              margin: "0 auto",
              animation: `slideInOut 3s ease-in-out`,
              backgroundColor: "rgba(0, 191, 98, 0.1)",
              backdropFilter: "blur(4px)",
            }}
          >
            CLEANING SERVICE
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 3 }}
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
          >
            {Cleaning.map((item) => (
              <Cardes
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                isPest={false}
              />
            ))}
          </Stack>
        </div>
      </div>
    </Element>
  );
};

export default Service;
