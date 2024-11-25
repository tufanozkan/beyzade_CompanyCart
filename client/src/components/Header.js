import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logos/beyzadeLogo-rmBG.png"; // Logo
import menu from "../assets/icons/menu.svg";
import cartIcon from "../assets/icons/shopcart.svg"; // Cart Icon

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isTabletOrMobile = useMediaQuery("(max-width: 765px)");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ margin: 0, backgroundColor: "#252618" }}>
      {/* House-in-Forest-2 (Dark Green) */}
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{ alignItems: "center", display: "flex", flexDirection: "row" }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="Logo" style={{ maxWidth: "140px" }} />
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: "#898C3A", // House-in-Forest-3 (Light Olive)
                fontFamily: "Poppins, sans-serif",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textAlign: "center",
              }}
            >
              Beyzade Çiftliği
            </Typography>
          </Link>
        </Box>

        {/* Desktop Menu, only shown on screens wider than 900px */}
        {!isTabletOrMobile && (
          <div className="desktop-menu">
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "#bb9457" }, // Beige
                fontFamily: "Poppins, sans-serif", // Consistent font style
                fontWeight: "600", // Semi-bold for better emphasis
                textTransform: "uppercase", // Capital letters for a creative look
              }}
            >
              ANASAYFA
            </Button>
            <Button
              component={Link}
              to="/about"
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "#bb9457" },
                fontFamily: "Poppins, sans-serif",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              HAKKIMIZDA
            </Button>
            <Button
              component={Link}
              to="/products"
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "#bb9457" },
                fontFamily: "Poppins, sans-serif",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              ÜRÜNLERİMİZ
            </Button>
            <Button
              component={Link}
              to="/cart"
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "#bb9457" },
                fontFamily: "Poppins, sans-serif",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              SEPETİM
            </Button>
            <Button
              component={Link}
              to="/communicate"
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "#bb9457" },
                fontFamily: "Poppins, sans-serif",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              İLETİŞİM
            </Button>
          </div>
        )}

        {isTabletOrMobile && (
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "space-between",
              gap: 1,
            }}
          >
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <img
                src={menu}
                alt="Menu Icon"
                style={{
                  width: "24px",
                  height: "24px",
                  filter:
                    "invert(40%) sepia(20%) saturate(400%) hue-rotate(40deg)",
                }}
              />
            </IconButton>
            <IconButton
              edge="end"
              color="inherit"
              component={Link}
              to="/cart"
              aria-label="cart"
            >
              <img
                src={cartIcon}
                alt="Cart Icon"
                style={{
                  width: "24px",
                  height: "24px",
                  filter:
                    "invert(40%) sepia(20%) saturate(400%) hue-rotate(40deg)",
                }}
              />
            </IconButton>
          </Box>
        )}

        {/* Mobile/Tablet Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              border: "1px groove #ffe6a7", // Border color for the menu
              overflow: "visible",
              backgroundColor: "#6f1d1b", // Dark Red
              "& .MuiMenuItem-root": {
                color: "#ffe6a7", // Light Cream for text color
                padding: "12px 24px", // Adjust padding as needed
                "&:hover": {
                  backgroundColor: "#bb9457", // Beige on hover
                },
                fontFamily: "Poppins, sans-serif",
                fontWeight: "600", // Slightly bold text
                textTransform: "uppercase", // All caps for style
              },
            },
          }}
        >
          <MenuItem onClick={handleClose} component={Link} to="/">
            ANASAYFA
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/about">
            HAKKIMIZDA
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/products">
            ÜRÜNLERİMİZ
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/communicate">
            İLETİŞİM
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
