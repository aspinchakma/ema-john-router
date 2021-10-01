import React from 'react';
import Rating from 'react-rating';
import './Order.css'

const Order = (props) => {
    const { name, img, seller, price, quantity, star, key } = props.product;
    return (
        <div className="order">
            <img src={img} alt="" />
            <div className="details-container">
                <h2>{name}</h2>
                <p><small>Price : ${price}</small></p>
                <p>Sold By : {seller}</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />
                <h3>Quantity: {quantity}</h3>
                <button onClick={() => props.removeItem(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default Order;