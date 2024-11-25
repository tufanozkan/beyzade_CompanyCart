import React from "react";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import image from "../assets/toasts/et.png";
import sandwichIcon from "../assets/icons/sandwich.svg";
import truckIcon from "../assets/icons/truck.svg";
import tableIcon from "../assets/icons/table.svg";
import walletIcon from "../assets/icons/wallet.svg";

const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#6F1D1B",
  marginTop: 0,
  height: "65vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center", // Center both vertically and horizontally
  alignSelf: "center",
  textAlign: "center",
  padding: theme.spacing(4),
  overflow: "hidden",
  flexDirection: "column", // Mobile ve tablet için sütun düzeni
  "@media (min-width:900px)": {
    flexDirection: "row", // Daha büyük ekranlar için satır düzeni
  },
  "& h1, & button": {
    position: "relative",
    zIndex: 1,
    opacity: 0,
    animation: "slideIn 2.1s ease-out forwards",
  },
  "& h1": {
    color: "#fff",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem", lg: "4rem" },
    marginBottom: theme.spacing(2),
  },
  "@keyframes slideIn": {
    from: {
      transform: "translateX(-100%)",
      opacity: 0,
    },
    to: {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
}));

// Styled component for the background image
const HeroImage = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  border: "2px solid #ffe6a7",
  borderRadius: "12px",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: 0,
  animation: "slideInImage 2.1s ease-out forwards",
  opacity: 0,
  margin: theme.spacing(2), // Kenarlarda boşluk ekledik
  "@keyframes slideInImage": {
    from: {
      transform: "translateX(100%)",
      opacity: 0,
    },
    to: {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#bb9457",
  borderRadius: "8px",
  padding: theme.spacing(3),
  margin: theme.spacing(1),
  color: "#ffffff",
  transition: "transform 0.3s, background-color 0.3s",
  textAlign: "center",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: "#a88b4d",
  },
}));

const FeatureIcon = styled("img")({
  width: "60px",
  height: "60px",
  marginBottom: "16px",
});

const HomePage = () => {
  return (
    <div>
      <HeroSection>
        <Box
          sx={{
            zIndex: 1,
            textAlign: "center",
            mb: { xs: 3, md: 3 },
            width: { xs: "100%", sm: "100%", md: "50%" },
            maxWidth: "500px",
            display: "flex", // Use flex for centering
            flexDirection: "column", // Align content in column
            alignItems: "center", // Center items horizontally
            justifyContent: "center", // Center items vertically
          }}
        >
          {/* Content on the left */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2.2rem",
                lg: "3rem",
              }, // Adjusted sizes for responsiveness
              textAlign: "center", // Centered text for better aesthetics
            }}
          >
            Taze malzemelerle hazırlanan benzersiz lezzet
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/products"
            sx={{
              cursor: "pointer",
              padding: "10px 24px",
              fontSize: { xs: "16px", sm: "18px" }, // Adjusted font size for button
              color: "#6f1d1b",
              border: "3px solid #ffe6a7",
              borderRadius: "34px",
              backgroundColor: "#ffe6a7",
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              overflow: "hidden",
              position: "relative",
              zIndex: 2,
              opacity: 0,
              animation: "slideIn 2.1s ease-out forwards",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                margin: "auto",
                width: "50px",
                height: "50px",
                borderRadius: "inherit",
                scale: 0,
                zIndex: -1,
                backgroundColor: "#6f1d1b",
                transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
              },
              "&:hover::before": {
                scale: 3,
              },
              "&:hover": {
                color: "#ffe6a7",
                transform: "scale(1.1)",
                boxShadow: "0 0px 20px #6f1d1b",
              },
              "&:active": {
                transform: "scale(1)",
              },
            }}
          >
            Keşfet
          </Button>
        </Box>
        <HeroImage />
      </HeroSection>
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          sx={{
            mb: 4,
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
            letterSpacing: "0.05em",
            color: "#6f1d1b",
            cursor: "default",
          }}
        >
          Nasıl Üretiyoruz?
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          {[
            {
              icon: sandwichIcon,
              title: "Özenle Seçilmiş Malzemeler",
              description:
                "Tüm ürünlerimiz, yüksek kaliteli ve lezzetli doğal malzemelerle özenle üretilmiştir. Sağlıklı ve lezzetli seçenekleri sizlere sunmaktan büyük mutluluk duyuyoruz.",
            },
            {
              icon: walletIcon,
              title: "Güvenli Ödeme",
              description:
                "Ürünlerimizin satın alımlarında güvenliğiniz bizim için en öncelikli konudur. Tüm ödeme işlemleriniz, 256 bit SSL şifreleme ile korunmaktadır.",
            },
            {
              icon: truckIcon,
              title: "Kaliteyi Sizlere Getirir",
              description:
                "Ürünlerimizin tazeliğini korumak için en gelişmiş soğuk zincir teknolojisi ile en ideal koşullarda sizlere ulaştırıyoruz.",
            },
            {
              icon: tableIcon,
              title: "Profesyonel Mutfak Kalitesi",
              description:
                "Ürünlerimiz, profesyonel mutfak standartlarında üretilir ve en yüksek kaliteyi evinize getirir.",
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <FeatureItem>
                <FeatureIcon src={feature.icon} alt={`${feature.title} Icon`} />
                <Typography
                  variant="h5"
                  sx={{
                    cursor: "default",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "700",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1rem",
                    textAlign: "center",
                    cursor: "default",
                    marginTop: 1,
                  }}
                >
                  {feature.description}
                </Typography>
              </FeatureItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
