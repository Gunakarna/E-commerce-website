import React, { useState, useContext } from 'react';
import { CartContext } from './CartProvider';

const Card = ({ product }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [size, setSize] = useState(product.sizes[0]); // Default to the first size
    const [quantity, setQuantity] = useState(0); // Initialize quantity to 1

    const { addToCart, updateQuantity } = useContext(CartContext);

    const handleAddToCart = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        const cartItem = { ...product, size, quantity };
        addToCart(cartItem);

        let cartData = sessionStorage.getItem('cart');
        cartData = cartData ? JSON.parse(cartData) : [];

        const existingItemIndex = cartData.findIndex(item => item.id === product.id && item.size === size);

        if (existingItemIndex >= 0) {
            // If item already exists, just update the quantity
            cartData[existingItemIndex].quantity += quantity;
        } else {
            // If item doesn't exist, add it to the cart
            cartData.push(cartItem);
        }

        sessionStorage.setItem('cart', JSON.stringify(cartData));
    };

    const handleIncreaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateQuantity(product.id, size, 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateQuantity(product.id, size, -1);
        }
    };

    const handleNextImage = () => {
        setCurrentImage((currentImage + 1) % product.images.length);
    };

    const handlePrevImage = () => {
        setCurrentImage((currentImage - 1 + product.images.length) % product.images.length);
    };

    return (
        <div className="card mb-3 mx-11 mt-8" style={{ maxWidth: '24rem' }}>
            <div className="position-relative">
                <button onClick={handlePrevImage} className="btn btn-dark position-absolute top-50 start-0 translate-middle-y">‹</button>
                <img
                    src={product.images[currentImage]}
                    alt="product"
                    className="card-img-top"
                    style={{ height: '100%', objectFit: 'cover' }}
                />
                <button onClick={handleNextImage} className="btn btn-dark position-absolute top-50 end-0 translate-middle-y">›</button>
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">&#8377;{product.price}</p>
                <div className="btn-group mb-2" role="group">
                    {product.sizes.map((s, index) => (
                        <button
                            key={index}
                            className={`btn btn-outline-secondary  ${size === s ? 'active' : ''}`}
                            onClick={() => setSize(s)}
                        >
                            {s}
                        </button>
                    ))}
                </div>
                <div className="btn-group" role="group">
                 
                    <button onClick={handleIncreaseQuantity} className="btn btn-success">+</button>
                    <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart </button>
                    <button onClick={handleDecreaseQuantity} className="btn btn-danger">-</button>
                </div>
                <button onClick={() => window.location.href = '/payment-page'} className="btn btn-warning mt-2">Buy Now</button>
            </div>
        </div>
    );
};

export default Card;




