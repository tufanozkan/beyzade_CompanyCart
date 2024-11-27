/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Menu,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import { CartContext } from "../components/CartContext";
import { styled } from "@mui/system";
import FilterListIcon from "@mui/icons-material/FilterList";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import sut from "../assets/products/sut.png";
import et from "../assets/products/et.png";
import kasar from "../assets/products/yumurta.png";
import sucuk from "../assets/products/sucuk.png";
import tulum from "../assets/products/tulum.png";
import kiyma from "../assets/products/kıyma.png";
import tereyag from "../assets/products/tereyag.png";
import sosis from "../assets/products/sosis.png";

// Card styles
const ProductCard = styled(Card)(({ theme }) => ({
  borderRadius: "12px",
  overflow: "hidden",
  backgroundColor: "#252618",
  color: "#898C3A",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

// Image styles
const ProductImage = styled(CardMedia)(({ theme }) => ({
  transition: "transform 0.3s ease-in-out",
  "@media (min-width: 768px)": {
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));

// Title styles
const ProductTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  textAlign: "center",
  color: "#898C3A",
}));

// Counter Container
const CounterContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(2),
}));

// Button Styles
const CounterButton = styled(Button)(({ theme }) => ({
  minWidth: "40px",
  height: "40px",
  fontSize: "1.3rem",
  fontWeight: "bold",
  borderRadius: "8px",
  backgroundColor: "#BF8B5E",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#8F3727",
  },
}));

//Cart Styles
const AddToCartButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#BF8B5E", // Same as counter button color
  borderRadius: "8px", // For rectangular shape
  padding: theme.spacing(1),
  color: "#FFF",
  display: "flex",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "#8F3727", // Hover color
  },
}));

const allProducts = [
  { id: 1, name: "5L Süt", image: sut, category: "sut", price: 124.9 },
  {
    id: 2,
    name: "Dana Eti (500 gram)",
    image: et,
    category: "et",
    price: 249.9,
  },
  {
    id: 3,
    name: "30'lu Yumurta",
    image: kasar,
    category: "sut",
    price: 179.9,
  },
  {
    id: 4,
    name: "Dana Sucuk (1000 gram)",
    image: sucuk,
    category: "et",
    price: 599.9,
  },
  {
    id: 5,
    name: "İlikli Kemik Suyu (660cc)",
    image: tulum,
    category: "sut",
    price: 349.9,
  },
  {
    id: 6,
    name: "Dana Kıyma (500 gram)",
    image: kiyma,
    category: "et",
    price: 249.9,
  },
  {
    id: 7,
    name: "Tereyağ (500 gram)",
    image: tereyag,
    category: "sut",
    price: 329.9,
  },
  {
    id: 8,
    name: "Dana Sosis (1000 gram)",
    image: sosis,
    category: "et",
    price: 649.9,
  },
];

const ProductsPage = () => {
  const { addToCart } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [category, setCategory] = useState("all");
  const [quantities, setQuantities] = useState(
    allProducts.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {})
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (selectedCategory) => {
    setAnchorEl(null);
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  };

  const handleQuantityChange = (productId, change) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(prev[productId] + change, 0),
    }));
  };

  const handleAddToCart = (product) => {
    if (quantities[product.id] > 0) {
      addToCart(product, quantities[product.id]); // Pass quantity directly here
    }
  };

  const filteredProducts =
    category === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === category);

  return (
    <div>
      <Container sx={{ cursor: "default", py: 4 }}>
        {/* Filter Button */}
        <Grid container justifyContent="center" sx={{ mb: 2 }}>
          <IconButton onClick={handleClick}>
            <FilterListIcon fontSize="large" />
          </IconButton>
        </Grid>

        {/* Filter Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleClose(null)}
        >
          <MenuItem
            sx={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => handleClose("all")}
          >
            Tüm Ürünler
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => handleClose("sut")}
          >
            Süt Ürünleri
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => handleClose("et")}
          >
            Et Ürünleri
          </MenuItem>
        </Menu>

        {/* Product Grid */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "calc(100vh - 300px)" }}
        >
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard>
                <ProductImage
                  component="img"
                  height="320"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <ProductTitle
                    variant="h7"
                    sx={{ display: "inline", marginRight: 1 }}
                  >
                    {product.name}
                  </ProductTitle>
                  <Typography variant="body1">
                    {product.price.toFixed(2)} ₺
                  </Typography>

                  <CounterContainer>
                    <CounterButton
                      onClick={() => handleQuantityChange(product.id, -1)}
                    >
                      -
                    </CounterButton>
                    <Typography variant="h6" sx={{ mx: 2 }}>
                      {quantities[product.id]}
                    </Typography>
                    <CounterButton
                      onClick={() => handleQuantityChange(product.id, 1)}
                    >
                      +
                    </CounterButton>
                  </CounterContainer>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 2, // Add spacing if necessary
                    }}
                  >
                    <AddToCartButton onClick={() => handleAddToCart(product)}>
                      <Typography color="#FFF" sx={{ marginRight: 1 }}>
                        Sepete Ekle
                      </Typography>
                      <ShoppingCartIcon fontSize="medium" />
                    </AddToCartButton>
                  </Box>
                </CardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductsPage;
