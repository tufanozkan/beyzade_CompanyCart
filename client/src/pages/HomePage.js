import React from "react";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import image from "../assets/products/sut.png";
import farm from "../assets/icons/farm.svg";
import cow from "../assets/icons/cow.svg";
import milk from "../assets/icons/milk.svg";
import grain from "../assets/icons/grain.svg";

const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#252618", // Header arka plan rengi
  marginTop: 0,
  height: "65vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: theme.spacing(4),
  overflow: "hidden",
  flexDirection: "column",
  "@media (min-width:900px)": {
    flexDirection: "row",
  },
  "& h1, & button": {
    position: "relative",
    zIndex: 1,
    opacity: 0,
    animation: "slideIn 2.1s ease-out forwards",
  },
  "& h1": {
    color: "#898C3A", // Açık Zeytin
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

const HeroImage = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  border: "2px solid #BB9457", // Hover'daki Bej Renk
  borderRadius: "12px",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: 0,
  animation: "slideInImage 2.1s ease-out forwards",
  opacity: 0,
  margin: theme.spacing(2),
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
  backgroundColor: "#898C3A", // Açık Zeytin
  borderRadius: "8px",
  padding: theme.spacing(3),
  margin: theme.spacing(1),
  color: "#ffffff",
  transition: "transform 0.3s, background-color 0.3s",
  textAlign: "center",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: "#BB9457", // Bej Hover
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2.2rem",
                lg: "3rem",
              },
              textAlign: "center",
            }}
          >
            Doğadan Sofranıza Tazelik ve Lezzetin Buluştuğu Nokta!
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/products"
            sx={{
              padding: "10px 24px",
              fontSize: { xs: "16px", sm: "18px" },
              color: "#252618", // Koyu Yeşil (Header Arka Plan)
              border: "3px solid #BB9457", // Bej Sınır
              borderRadius: "34px",
              backgroundColor: "#BB9457", // Bej
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1)",
              "&:hover": {
                color: "#BB9457",
                backgroundColor: "#252618",
                boxShadow: "0 0px 20px #BB9457",
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
            color: "#898C3A", // Açık Zeytin
          }}
        >
          Nasıl Üretiyoruz?
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          {[
            {
              icon: grain,
              title: "Doğal Beslenme, Sağlıklı Hayvanlar",
              description:
                "Besi çiftliğimiz, doğanın sunduğu en taze ve kaliteli kaynaklardan faydalanarak hayvanlarımızı besler. Her bir canlı, sağlıklı ve doğal yemlerle beslenir, bu sayede et ve süt ürünlerimizin lezzeti ve kalitesi en üst düzeye çıkar.",
            },
            {
              icon: cow,
              title: "Bilinçli Yetiştiricilik ve Etik Üretim",
              description:
                "Hayvanların refahını ön planda tutarak, onların doğasına uygun bir şekilde yetiştirilmesi için tüm etik standartlara uygun şekilde çalışırız. Ayrıca, üretim sürecimizin her aşamasında hijyen ve kalite kontrolü sağlanır.",
            },
            {
              icon: milk,
              title: "Taze ve Güvenilir Ürünler",
              description:
                "Üretim süreçlerimizde her zaman yüksek kaliteyi hedeflerken, ürünlerimizin tazeliğini ve doğal içeriğini korumak için dikkatli ve titiz bir şekilde çalışırız. Çiftliğimizde üretilen her et ve süt ürünü, sizlere sağlıklı ve güvenilir bir şekilde ulaşır.",
            },
            {
              icon: farm,
              title: "Hayvanlarımızın Doğal Yaşam Alanları",
              description:
                "Çiftliğimizde hayvanlarımızın huzurlu bir ortamda büyümesi için gerekli tüm şartlar sağlanır. Onların sağlıklı bir şekilde gelişmesini sağlayarak, üretim sürecinin her aşamasında doğallığı ve verimliliği ön planda tutarız.",
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <FeatureItem>
                <FeatureIcon src={feature.icon} alt={`${feature.title} Icon`} />
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "700",
                    marginBottom: 1,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1rem",
                    textAlign: "center",
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
