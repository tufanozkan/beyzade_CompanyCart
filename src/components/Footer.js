/* eslint-disable no-undef */
import React from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#432818",
  color: "#ffffff",
  textAlign: "center",
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const FooterContent = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  marginBottom: 0, // Remove bottom margin
}));

const SocialButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center", // Align icons to the right
  alignItems: "center",
  gap: theme.spacing(1),
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Typography
        variant="body1"
        sx={{
          marginLeft: 5,
          fontFamily: "'Raleway', sans-serif",
          fontWeight: "500",
          marginBottom: 1,
        }}
      >
        &copy; 2024 Musto Gıda. Tüm hakları saklıdır.
      </Typography>

      {/* Footer Content Section */}
      <FooterContent container spacing={2}>
        {/* Contact Us Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" sx={{ mx: 2 }}>
            Bizimle İletişime Geçin: <br />
            <a
              href="mailto:info@mustogida.com.tr"
              style={{ color: "#ffffff", textDecoration: "underline" }}
            >
              info@mustogida.com.tr
            </a>
          </Typography>
        </Grid>

        {/* Address Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" sx={{ mx: 2 }}>
            Adres: <br /> Girne Mah. 6018 Nolu Sokak No:23 Kahta/Adıyaman
          </Typography>
        </Grid>

        {/* Follow Us Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" sx={{ mx: 2 }}>
            Bizi Takip Edin:
          </Typography>
          <SocialButtons>
            {/* Instagram Button */}
            <IconButton
              href="https://www.instagram.com/musto_gida/"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // For security reasons
              sx={{
                width: 45,
                height: 45,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "7px",
                backgroundColor: "transparent",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  backgroundColor: "#e81a4e",
                  "& svg": {
                    color: "#fff",
                  },
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: "25px", color: "#e81a4e" }} />
            </IconButton>

            {/* Facebook Button */}
            <IconButton
              href="#" // Update this to your Facebook link
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // For security reasons
              sx={{
                width: 45,
                height: 45,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "7px",
                backgroundColor: "transparent",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  backgroundColor: "#3b5998",
                  "& svg": {
                    color: "#fff",
                  },
                },
              }}
            >
              <FacebookIcon sx={{ fontSize: "25px", color: "#3b5998" }} />
            </IconButton>
          </SocialButtons>
        </Grid>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
