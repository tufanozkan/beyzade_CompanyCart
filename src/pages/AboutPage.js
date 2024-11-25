import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import image from "../assets/production.jpg";

// Yavaşça yukarıdan aşağı inen animasyon
const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        maxHeight: "auto",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Main content area */}
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(137, 140, 58, 0.8)",
            margin: { xs: 3, md: 8 },
            padding: { xs: 3, md: 5 },
            borderRadius: 2,
            animation: `${slideDown} 1s ease-in-out`,
            animationFillMode: "forwards",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: "#432818",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Hakkımızda
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 4,
              fontWeight: 600,
              lineHeight: 1.6,
              textAlign: "center",
              color: "#432818",
              fontSize: { xs: "0.9rem", md: "1.1rem" },
            }}
          >
            Beyzade Çiftliği, kaliteli süt ve et ürünleri sunarak sağlıklı bir
            yaşamı desteklemek için faaliyet gösteren bir çiftlik işletmesidir.
            Çiftliğimiz, inek hayvancılığı ve besicilik konusunda uzun yıllara
            dayanan deneyime sahip, modern tarım yöntemlerini benimseyen bir
            işletmedir. Her bir inek, sağlıklı ve verimli bir üretim için
            titizlikle bakılmakta, doğal yemlerle beslenerek en kaliteli süt ve
            etin elde edilmesi sağlanmaktadır. Hayvancılığın her aşamasında,
            hayvanlarımızın sağlığını ve refahını ön planda tutarak, etik ve
            çevre dostu yöntemlerle üretim yapıyoruz. İneklerimiz, geniş
            meralarda doğal koşullarda yetişmekte, organik yemlerle beslenerek
            en taze ve en sağlıklı ürünleri sunmamıza olanak tanımaktadır.
            Ürettiğimiz süt ve et, tamamen doğaldır ve katkı maddesi içermez.
            Ürünlerimiz, hem lezzetiyle hem de kalitesiyle kendini
            kanıtlamaktadır.
          </Typography>

          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: "#432818",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Misyonumuz
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              lineHeight: 1.6,
              textAlign: "center",
              color: "#432818",
              fontSize: { xs: "0.9rem", md: "1.1rem" },
            }}
          >
            Misyonumuz, sürdürülebilir tarım yöntemleriyle ürettiğimiz yüksek
            kaliteli süt ve et ürünlerini, doğaya ve hayvanlara saygılı bir
            şekilde tüketicilerimize sunmaktır. İneklerimizin sağlığı ve
            refahını ön planda tutarak, katkı maddesi içermeyen, taze ve
            besleyici ürünler sağlamayı hedefliyoruz. Modern hayvancılık
            teknikleriyle verimliliği artırırken, çevre dostu üretim anlayışını
            benimseyerek, sektörde etik standartları yükseltmeyi amaçlıyoruz.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
