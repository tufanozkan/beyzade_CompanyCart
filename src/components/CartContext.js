import React, { createContext, useState } from "react";

// CartContext oluşturuluyor
export const CartContext = createContext();

// CartProvider component'i, children'i alır ve context sağlar
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Sepetten ürün çıkarma fonksiyonu
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity, total: item.price * quantity }
          : item
      )
    );
  };

  // Sepete ürün ekleme fonksiyonu
  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Update quantity and total
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
                total: (item.quantity + quantity) * product.price, // Update total based on quantity
              }
            : item
        );
      }
      // Add new product if not already in cart
      return [
        ...prevItems,
        { ...product, quantity, total: product.price * quantity },
      ];
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
