import { useEffect } from 'react';
import { ProductCard } from '../components';
import { getProductsThunk } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    return (
        <div className="main">
            <div className="container_filters">
                <div className="filters">
                    <div clasName="filter_price">
                        <div className="title_price">
                            <h2>Price</h2>
                            <i class="fa-solid fa-angle-up"></i>
                        </div>
                        
                        <label htmlFor='from'>from</label>
                        <input 
                            type="number"
                            name="from"
                        />
                        
                        <label htmlFor='to'>To</label>
                        <input 
                            type="number"
                            name="to"
                        />
                        
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container_product">
                    <form className="searcher">
                        <input 
                            type="text"
                            placeholder="what are you looking for?"
                            />
                        <button>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                    {
                        products?.map( product => (
                            <ProductCard key={product.id} product={product}/>
                        )) 
                    }
                </div>

            </div>
            

            
        </div>
    );
};

export default Home

 