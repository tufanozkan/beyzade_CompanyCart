import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Header from "./components/Header";
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import ProductsPage from "../src/pages/ProductsPage";
import CommunicatePage from "../src/pages/CommunicatePage";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/communicate" element={<CommunicatePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
