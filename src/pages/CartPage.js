import React, { useContext, useState } from "react";
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

  // Kargo bilgilerini güncelleme fonksiyonu
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  // Miktar güncelleme fonksiyonu
  const handleQuantityChange = (e, itemId) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      updateQuantity(itemId, newQuantity); // Güncellenmiş miktar ile sepeti güncelle
    }
  };

  // Genel toplam fiyatı hesapla
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.total, 0);
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
                        type="text"
                        value={item.quantity}
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
                      Toplam: {item.total} ₺
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

      <Box sx={{ marginTop: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "#026646", fontWeight: "600" }}
        >
          Kargo Bilgileri
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Ad"
              variant="outlined"
              fullWidth
              name="firstName"
              value={shippingInfo.firstName}
              onChange={handleInputChange}
              sx={{
                borderRadius: "8px",
                backgroundColor: "#F9F9F9",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Soyad"
              variant="outlined"
              fullWidth
              name="lastName"
              value={shippingInfo.lastName}
              onChange={handleInputChange}
              sx={{
                borderRadius: "8px",
                backgroundColor: "#F9F9F9",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Telefon Numarası"
              variant="outlined"
              fullWidth
              name="phone"
              value={shippingInfo.phone}
              onChange={handleInputChange}
              sx={{
                borderRadius: "8px",
                backgroundColor: "#F9F9F9",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Adres"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              sx={{
                borderRadius: "8px",
                backgroundColor: "#F9F9F9",
              }}
            />
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 2, textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "8px",
              padding: "10px 20px",
              textTransform: "none",
              backgroundColor: "#026646",
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
