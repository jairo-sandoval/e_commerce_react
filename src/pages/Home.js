import { useEffect, useState } from 'react';
import { ProductCard, Filters } from '../components';
import { getProductsThunk, handlerfilterProductsThunk } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch()
    const productsFiltered = useSelector(state => state.productsFiltered)
    const [ productName, setProductName ] = useState("")

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [dispatch])

    const filterProductName = (e) => {
        e.preventDefault()
        dispatch(handlerfilterProductsThunk("query", productName))
    }

    return (
        <div className="main">
            <Filters />
        
            <div className="content">
                <div className="container_product">
                    <form className="searcher" onSubmit={filterProductName}>
                        <input
                            type="text"
                            placeholder="what are you looking for?"
                            onChange={(e) => setProductName(e.target.value)}
                            value={productName}
                        />
                        <button>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                    {
                        productsFiltered?.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home