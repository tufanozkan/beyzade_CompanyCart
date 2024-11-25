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
  Button,
} from "@mui/material";
import { CartContext } from "../components/CartContext";
import { styled } from "@mui/system";
import FilterListIcon from "@mui/icons-material/FilterList";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import sut from "../assets/toasts/sut.png";
import et from "../assets/toasts/et.png";
import kasar from "../assets/toasts/kasar.png";
import sucuk from "../assets/toasts/sucuk.png";
import tulum from "../assets/toasts/tulum.png";
import kiyma from "../assets/toasts/kıyma.png";
import tereyag from "../assets/toasts/tereyag.png";
import sosis from "../assets/toasts/sosis.png";

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
      transform: "scale(1.25)",
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
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "#8F3727", // Hover color
  },
}));

const allProducts = [
  { id: 1, name: "1 L Süt", image: sut, category: "tost", price: 29.9 },
  {
    id: 2,
    name: "Dana Eti (500 gram)",
    image: et,
    category: "sandwich",
    price: 399.9,
  },
  {
    id: 3,
    name: "Kaşar Peyniri (500 gram)",
    image: kasar,
    category: "tost",
    price: 199.9,
  },
  {
    id: 4,
    name: "Halka Sucuk (200 gram)",
    image: sucuk,
    category: "sandwich",
    price: 184.9,
  },
  {
    id: 5,
    name: "Tulum Peyniri (200 gram)",
    image: tulum,
    category: "tost",
    price: 139.9,
  },
  {
    id: 6,
    name: "Dana Kıyma (500 gram)",
    image: kiyma,
    category: "sandwich",
    price: 349.9,
  },
  {
    id: 7,
    name: "Tereyağ (300 gram)",
    image: tereyag,
    category: "sandwich",
    price: 359.9,
  },
  {
    id: 8,
    name: "Paket Sosis",
    image: sosis,
    category: "tost",
    price: 129.9,
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
            onClick={() => handleClose("tost")}
          >
            Et Ürünleri
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => handleClose("sandwich")}
          >
            Süt Ürünleri
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
                  <Typography variant="body1">{product.price} ₺</Typography>

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
                  <AddToCartButton
                    onClick={() => handleAddToCart(product)}
                    sx={{ marginLeft: 6.4, marginTop: 2 }}
                  >
                    <Typography color="#FFF" sx={{ marginRight: 1 }}>
                      Sepete Ekle
                    </Typography>
                    <ShoppingCartIcon fontSize="medium" />
                  </AddToCartButton>
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
