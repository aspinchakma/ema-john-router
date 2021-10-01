import React from 'react';
import useProducts from '../../hooks/useProduct';
import useCart from '../../hooks/useCart'
import Cart from '../Cart/Cart';
import './OrderReivew.css'
import Order from '../Order/Order';
import { deleteFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const removeItem = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key)
    }
    return (
        <div className="order-summary">
            <div className="items-order-container">
                {
                    cart.map(product => <Order
                        removeItem={removeItem}
                        key={product.key}
                        product={product}></Order>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default OrderReview;