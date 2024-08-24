// src/contexts/CartContext.js
import React, { createContext,useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = "https://karnameena.github.io/Codes/home.json";
const searchUrl = "https://karnameena.github.io/Codes/search.json";
// import { Addcartuse } from './Home';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [products, setProductsData] = useState([]);
    const [Url, setUrl] = useState(baseUrl);
 
    console.log( cart.quantity)
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
      };
    
      useEffect(() => {
        axios.get(Url).then((res) => {
          setProductsData(res.data.products);
        });
      }, [Url]);
    
      const searchProducts = (values) => {
        if (!values) {
          setUrl(baseUrl);  // Reset to base URL if no search input
          return;
        }
        setUrl(searchUrl);
        const result = products.filter(f => f.name.toLowerCase().includes(values.toLowerCase()));
        setProductsData(result);
      };
       

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


 
    const removeFromCartById = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Function to add a product to the cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            const itemIndex = prevCart.findIndex((item) => item.id === product.id && item.size === product.size);
            if (itemIndex > -1) {
                // If the product already exists, update the quantity
                const updatedCart = [...prevCart];
                updatedCart[itemIndex].quantity += 1;
                return updatedCart;
            } else {
                // If the product is new, add it to the cart
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Function to update the quantity of a product in the cart
    const updateQuantity = (productId, size, amount) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === productId && item.size === size
                        ? { ...item, quantity: item.quantity + amount }
                        : item
                )
                .filter((item) => item.quantity > 0) // Remove items with non-positive quantity
        );
    };
    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ 
            cart,sidebarOpen, products,
            addToCart, updateQuantity , 
            removeFromCartById,
             toggleSidebar,searchProducts,getTotalQuantity
            
         }}>
            {children}
        </CartContext.Provider>
    );
};
