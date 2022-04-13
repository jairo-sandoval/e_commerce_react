import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className="card_product">
            <div className="img_bx">
                <img src={product.productImgs?.[0]}/>
                <ul className="action">
                    <li onClick={() => console.log(product)}>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span> Add to cart</span>
                    
                    </li>
                    <li onClick={() => console.log(product)}>
                        <i className="fa-solid fa-eye" ></i>
                        <span> View Details</span>

                    </li>
                </ul>
            </div>
            <div className="content_product">
                <h2>{product.title}</h2>
                <h3>$ {product.price}</h3>
            </div>
        </div>
    );
};

export default ProductCard;