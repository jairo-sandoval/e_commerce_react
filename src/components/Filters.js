import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, setProductsFiltered, handlerfilterProductsThunk } from '../redux/actions'
import InputNumber from './InputNumber';

const Filters = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    const products = useSelector(state => state.products)

    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(0)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const filterByPrice = () => {
        const productsFilterByPrice = products?.filter(product => product.price > Number(priceFrom) && product.price < Number(priceTo))
        dispatch(setProductsFiltered(productsFilterByPrice))
    }

    return (
        <aside className="container_filters">
            <div className="filters">
                <div className="filter_price">
                    <div className="title_price">
                        <h2>Price</h2>
                        <i className="fa-solid fa-angle-up"></i>
                    </div>
                    <div className="inputs_price">
                        <label htmlFor='from'>from</label>
                        <InputNumber setValue={setPriceFrom} classId={"from"}/>
                    </div>


                    <div className="inputs_price">
                        <label htmlFor='to'>To</label>
                        <InputNumber setValue={setPriceTo} classId={"to"}/>

                    </div>

                    <div className='button_filter'>
                        <button onClick={filterByPrice}>Filter price</button>
                    </div>


                </div>
                <div className="filter_category">
                    <div className="title_price">
                        <h2>Category</h2>
                        <i className="fa-solid fa-angle-up"></i>
                    </div>
                    <ul className="categories">
                        {
                            categories?.map(category => (
                                <li
                                    key={category.id}
                                    value={category.id}
                                    onClick={() => dispatch(handlerfilterProductsThunk("category", category.id))}
                                >
                                    {category.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Filters;