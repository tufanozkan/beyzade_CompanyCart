import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { Phone, Email, LocationOn, Instagram } from "@mui/icons-material";
import Map from "../components/Map";
import { useMediaQuery } from "@mui/material";

const CommunicatePage = () => {
  const isMobileOrTablet = useMediaQuery("(max-width: 1025px)");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffe6a7", // Light Cream background
        minHeight: "80vh",
        maxHeight: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginTop: 5,
          alignSelf: "center",
          color: "#252618", // Dark Green/Black for the title text
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
          {/* Contact Information Grid */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={6}
              sx={{
                padding: { xs: 3, sm: 4 },
                borderRadius: 2,
                backgroundColor: "#ffffff", // White Paper background
                flexGrow: 1,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "#bb9457", // Beige for the section title
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: 1,
                  textTransform: "capitalize",
                }}
              >
                İletişim Bilgilerimiz
              </Typography>

              {[
                {
                  icon: <LocationOn sx={{ mr: 1, color: "#6f1d1b" }} />,
                  text: "Hacıhaliller Mahallesi Şehzadeler/Manisa",
                },
                {
                  icon: <Phone sx={{ mr: 1, color: "#6f1d1b" }} />,
                  text: "+90 538 508 17 17",
                },
                {
                  icon: <Email sx={{ mr: 1, color: "#6f1d1b" }} />,
                  text: "info@beyzade.com.tr",
                },
                {
                  icon: <Instagram sx={{ mr: 1, color: "#6f1d1b" }} />,
                  text: "@avci_tarim_hayvancilik45",
                },
              ].map((contact, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 2,
                    backgroundColor: "#ffffff", // White background for contact info
                    borderRadius: 1,
                    padding: 2,
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {contact.icon}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#252618", // Dark Green/Black text
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {contact.text}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* Map Section */}
          <Grid item xs={12} md={6}>
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
                  color: "#bb9457", // Beige for the section title
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
