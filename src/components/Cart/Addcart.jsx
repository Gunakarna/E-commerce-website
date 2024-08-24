    import React, { useContext } from 'react';

    import './Addcart.css';
    import { CartContext } from '../home/CartProvider';
import Navbar from '../home/Navbar';
import Sidebar from '../home/Sidebar';



    const AddCart = () => {
        const { cart, removeFromCartById,toggleSidebar,searchProducts,sidebarOpen} = useContext(CartContext);
      
        const handleRemove = (id) => {
            removeFromCartById(id);
        };

        // Calculate the total price of items in the cart
        const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

        return (
        <>
        <div className='cart-nav'>
         <Navbar onMenuClick={toggleSidebar} search={searchProducts} />
         </div>
            <div className="cart-container  p-15">
              
                <div className="cart">
                    <h2>Shopping Cart</h2>
                    {cart.length > 0 ? (
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id} className="cart-item">
                                    <img
                                        src={item.images[0]}
                                        alt="product"
                                        className="cart-item-image"
                                        style={{ width: '30%' }}
                                    />
                                    <div className="cart-item-details">
                                        <span className="cart-item-name">{item.name}</span>
                                        <span className="cart-item-size">({item.size})</span>
                                        <span className="cart-item-price">${item.price}</span>
                                        <span className="cart-item-quantity">Quantity: {item.quantity}</span>
                                        <button className="cart-item-remove" onClick={() => handleRemove(item.id)}>
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        
                        <p className='empty-cart'>Your cart is empty</p>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <p>Total Price: ${totalPrice.toFixed(2)}</p>
                        <button className="proceed-to-buy">Proceed to Buy</button>
                    </div>
                )}
            </div>  

            <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
            </>
        );
    };

    export default AddCart;
