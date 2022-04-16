import { useEffect, useState } from 'react';
import { useParams }  from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk, handlerfilterProductsThunk} from '../redux/actions'
import { ProductCard } from '../components';
import InputNumber from '../components/InputNumber';

const ProductInfo = () => {
    const productsFiltered = useSelector(state => state.productsFiltered)
    const { id } = useParams()
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const [ productInfo, setProductInfo ] = useState({})
    const [ quantity, setQuantity ] = useState(0)

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [id, dispatch])

    useEffect(() => {
        const productInfoIndex = products.findIndex(product => product.id === Number(id))

        if(products[productInfoIndex]){
            setProductInfo(products[productInfoIndex])
            console.log(productInfo)
        }

        dispatch(handlerfilterProductsThunk("category", productInfo.category?.id))
    }, [dispatch, id, products])

    const toggleClassActivate = () => {
        let thumbnails = document.getElementsByClassName("thumbnail")
        let activeImages = document.getElementsByClassName("activate")

        for(let i = 0; i < thumbnails.length; i ++){

            thumbnails[i].addEventListener('mouseover', function(){
                if (activeImages.length > 0){
                    activeImages[0].classList.remove('active')
                }
                
                this.classList.add('active')
                const featured = document.getElementById('featured')
                if(featured){
                    featured.src = this?.src
                }         
            })
        }
    }
    
    toggleClassActivate()
 
    return (
        <div>
            <div className="container_product_detail">
                <div className="content_product_detail">
                    <div className="image">
                        <img id="featured" src={productInfo.productImgs?.[0]}/>
                    </div>

                    <div id="slide_wrapper">
                        <div id="slider">
                            <ul> 
                                {
                                    productInfo.productImgs?.map( image => (
                                        <li key={image} >
                                            <img  
                                                src={image} 
                                                className="thumbnail" 
                                            /> 
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content_product_detail info_product_detail">
                    <h2>{productInfo.title}</h2>
                    <p>{productInfo.description}</p>
                    <div className="content_values">
                        <div>
                            <span className='price'>Price</span>
                            <h3>$ {productInfo.price}</h3>
                        </div>
                        <div>
                            <span className="price">Quantity</span>
                            <InputNumber setValue={setQuantity} classId={"quantity"}/> 
                        </div>
                    </div>
                    
                    <button className="add_cart">
                        Add to cart <i class="fa-solid fa-cart-circle-plus"></i>
                    </button>
                       
                </div>
            </div>
            <h3 className="suggestions">Discover similar items</h3>
            <div className="content">
                <div className="container_product">
                    {
                        productsFiltered.map( product => (<ProductCard product={product}/> ) )
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;