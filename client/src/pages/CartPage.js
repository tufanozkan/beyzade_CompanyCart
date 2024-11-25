import React, { useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "../components/CartContext";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  // Kargo bilgilerini tutan state
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
  });

  const handlePlaceOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/orders/place",
        {
          cartItems,
          shippingInfo,
        }
      );

      if (response.data.success) {
        alert("Sipariş başarıyla tamamlandı!");
      } else {
        alert("Bir hata oluştu.");
      }
    } catch (error) {
      console.error(error);
      alert("Sipariş gönderilemedi!");
    }
  };

  // Kargo bilgilerini güncelleme fonksiyonu
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleQuantityChange = (e, itemId) => {
    const newQuantity = e.target.value;

    // Eğer boşsa, direkt olarak güncellemeden çık
    if (newQuantity === "") {
      updateQuantity(itemId, 0); // Geçici olarak sıfır olarak ayarla
      return;
    }

    const parsedQuantity = parseInt(newQuantity, 10);

    if (parsedQuantity === 0) {
      removeFromCart(itemId); // Sıfır girildiyse ürünü kaldır
    } else if (parsedQuantity > 0) {
      updateQuantity(itemId, parsedQuantity); // Pozitif miktarla güncelle
    }
  };

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + (item.quantity ? item.total : 0),
      0
    );
    return total.toFixed(2); // Noktadan sonra iki basamak göster
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ marginY: 4 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#026646", fontWeight: "600" }}
        >
          Sepetim
        </Typography>
        {cartItems.length === 0 ? (
          <Typography variant="h6" align="center" sx={{ color: "#000000" }}>
            Sepetiniz boş.
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {cartItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card
                  sx={{
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      padding: "16px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "500",
                        color: "#026646",
                        marginTop: "10px",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ marginTop: "8px" }}
                    >
                      <TextField
                        label="Miktar"
                        type="number" // Sadece sayı girişine izin ver
                        value={item.quantity || ""} // Boş veya sıfır olduğunda gösterilecek
                        onChange={(e) => handleQuantityChange(e, item.id)}
                        fullWidth
                        InputProps={{
                          sx: {
                            backgroundColor: "#F9F9F9",
                            borderRadius: "8px",
                            paddingLeft: "8px",
                          },
                        }}
                      />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ marginTop: "8px", fontWeight: "bold" }}
                    >
                      Toplam: {item.total.toFixed(2)} ₺
                    </Typography>
                    <Button
                      variant="outlined"
                      color="error"
                      fullWidth
                      sx={{
                        marginTop: "12px",
                        borderRadius: "8px",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#FF4D4D",
                          color: "#FFF",
                        },
                      }}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Kaldır
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {cartItems.length > 0 && (
        <Box sx={{ marginTop: 4, textAlign: "right" }}>
          <Typography variant="h5" sx={{ color: "#026646", fontWeight: "600" }}>
            Genel Toplam: {calculateTotal()} ₺
          </Typography>
        </Box>
      )}

      <Box
        component="fieldset"
        sx={{
          border: "1px solid #E0E0E0",
          borderRadius: "12px",
          padding: "16px 24px",
          marginTop: 4,
          marginBottom: 5,
          position: "relative",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          component="legend"
          sx={{
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#026646",
            padding: "0 8px",
            position: "absolute",
            top: "-12px",
            left: "16px",
            backgroundColor: "#FFF",
          }}
        >
          Kargo Bilgileri
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Ad"
              variant="outlined"
              fullWidth
              name="firstName"
              value={shippingInfo.firstName}
              onChange={handleInputChange}
              sx={{
                borderRadius: "8px",
                backgroundColor: "#F9F9F9",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Soyad"
              variant="outlined"
              fullWidth
              name="lastName"
              value={shippingInfo.lastName}
              onChange={handleInputChange}
              sx={{
                borderRadius: "8px",
                backgroundColor: "#F9F9F9",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Telefon Numarası"
              variant="outlined"
              fullWidth
              name="phone"
              value={shippingInfo.phone}
              onChange={handleInputChange}
              sx={{
                borderRadius: "8px",
                backgroundColor: "#F9F9F9",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Adres"
              variant="outlined"
              fullWidth
              multiline
              name="address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              sx={{
                borderRadius: "8px",
                backgroundColor: "#F9F9F9",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                },
              }}
            />
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 3, textAlign: "center" }}>
          <Button
            onClick={handlePlaceOrder}
            variant="contained"
            sx={{
              borderRadius: "24px",
              padding: "10px 30px",
              textTransform: "none",
              backgroundColor: "#026646",
              fontWeight: 600,
              fontSize: "1rem",
              "&:hover": { backgroundColor: "#014B34" },
            }}
          >
            Siparişi Tamamla
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CartPage;
