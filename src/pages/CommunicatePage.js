import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { Phone, Email, LocationOn, Instagram } from "@mui/icons-material";
import Map from "../components/Map";
import { useMediaQuery } from "@mui/material";

const CommunicatePage = () => {
  // Media query to check if screen width is less than 1025px
  const isMobileOrTablet = useMediaQuery("(max-width: 1025px)");

  // State for managing the animation trigger
  const [animate, setAnimate] = useState(false);

  // useEffect to trigger the animation on page load
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffe6a7",
        minHeight: "80vh",
        maxHeight: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginTop: 5,
          alignSelf: "center",
          color: "#432818",
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: 1.5,
          textTransform: "uppercase",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        BİZE ULAŞIN
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: 2 },
        }}
      >
        <Grid
          container
          spacing={4}
          direction={isMobileOrTablet ? "column" : "row"}
          sx={{
            maxWidth: 1200,
            flexGrow: 1,
            opacity: animate ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
          }}
        >
          {/* Responsive Grid Layout */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Paper
              elevation={6}
              sx={{
                padding: { xs: 3, sm: 4 },
                borderRadius: 2,
                flexGrow: 1,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "#bb9457",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: 1,
                  textTransform: "capitalize",
                }}
              >
                İletişim Bilgilerimiz
              </Typography>
              {/* Contact Information Boxes */}
              {[
                {
                  icon: <LocationOn sx={{ mr: 1, color: "#6f1d1b" }} />,
                  text: "Girne Mahallesi 6018 Nolu Sokak No:23 Kahta/Adıyaman",
                },
                {
                  icon: <Phone sx={{ mr: 1, color: "#6f1d1b" }} />,
                  text: "+90 545 215 07 74",
                },
                {
                  icon: <Email sx={{ mr: 1, color: "#6f1d1b" }} />,
                  text: "info@mustogida.com.tr",
                },
                {
                  icon: <Instagram sx={{ mr: 1, color: "#6f1d1b" }} />,
                  text: "@musto_gida",
                },
              ].map((contact, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 2,
                    backgroundColor: "#ffffff",
                    borderRadius: 1,
                    padding: 2,
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {contact.icon}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#432818",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {contact.text}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", flexDirection: "column", height: "80%" }}
          >
            <Paper
              elevation={6}
              sx={{
                padding: { xs: 3, sm: 4 },
                borderRadius: 2,
                flexGrow: 1,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "#bb9457",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: 1,
                  textTransform: "capitalize",
                }}
              >
                Adres Bilgimiz
              </Typography>
              <Map />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CommunicatePage;
