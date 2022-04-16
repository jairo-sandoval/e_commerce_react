import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    return (
        <div className="card_product">
            <div className="img_bx">
                <img src={product.productImgs?.[0]}/>
                <ul className="action">
                    <li >
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span> Add to cart</span>
                    
                    </li>
                    <Link to={`/productInfo/${product.id}`}>
                        <li >
                            <i className="fa-solid fa-eye" ></i>
                            <span> View Details</span>

                        </li>
                    </Link>
                </ul>
            </div>
            <div className="content_product">
                <h2>{product.title}</h2>
                <span className="price">Price</span>
                <h3>$ {product.price}</h3>
            </div>
        </div>
    );
};

export default ProductCard;