import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakedb';
const useCart = products => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        if (products.length) {
            const savedData = getStoredCart();

            const storedCart = [];
            for (const key in savedData) {
                const matchedProduct = products.find(product => product.key === key);
                if (matchedProduct) {
                    // set quantity
                    const quantity = savedData[key];
                    matchedProduct.quantity = quantity;

                    storedCart.push(matchedProduct)
                }
            }
            setCart(storedCart)
        }
    }, [products]);
    return [cart, setCart];
}

export default useCart;