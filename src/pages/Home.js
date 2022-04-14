import { useEffect, useState } from 'react';
import { ProductCard } from '../components';
import { getCategories, getProductsThunk, setProductsFiltered, handlerfilterProductsThunk } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const productsFiltered = useSelector(state => state.productsFiltered)
    const categories = useSelector(state => state.categories)

    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(0)
    const [ productName, setProductName ] = useState("")

    useEffect(() => {
        dispatch(getProductsThunk())
        dispatch(getCategories())
    }, [dispatch])

    const increment = (handler, inputName) => {
        let input = document.getElementsByClassName(inputName)[0]
        let step = input.getAttribute("step")

        if (input.value === "") {
            input.value = 0 + parseInt(step)
            handler(input.value)
        } else {
            input.value = parseInt(input.value) + parseInt(step)
            handler(input.value)
        }
    }

    const decrement = (handler, inputName) => {
        let input = document.getElementsByClassName(inputName)[0]
        let step = input.getAttribute("step")
        let min = input.getAttribute("min")

        if (input.value === "" || input.value <= min) {
            input.value = 0 - 0
            handler(input.value)
        } else {
            input.value = parseInt(input?.value) - parseInt(step)
            handler(input.value)
        }
    }

    const filterByPrice = () => {
        const productsFilterByPrice = products?.filter(product => product.price > Number(priceFrom) && product.price < Number(priceTo))
        dispatch(setProductsFiltered(productsFilterByPrice))
    }

    const filterProductName = (e) => {
        e.preventDefault()
        dispatch(handlerfilterProductsThunk("query", productName))
    }

    return (
        <div className="main">
            <div className="container_filters">
                <aside className="filters">
                    <div className="filter_price">
                        <div className="title_price">
                            <h2>Price</h2>
                            <i className="fa-solid fa-angle-up"></i>
                        </div>
                        <div className="inputs_price">
                            <label htmlFor='from'>from</label>
                            <div>
                                <button className="button_number decrement" onClick={() => decrement(setPriceFrom, 'from')}> - </button>
                                <input type="number" min="0" max="100000"
                                    step="10" className='input_number from' onChange={e => setPriceFrom(e.target.value)}
                                />
                                <button className="button_number increment" onClick={() => increment(setPriceFrom, 'from')}> + </button>
                            </div>
                        </div>

                        {/*  */}
                        <div className="inputs_price">
                            <label htmlFor='to'>To</label>
                            <div>

                                <button className="button_number decrement" onClick={() => decrement(setPriceTo, 'to')}> - </button>
                                <input type="number" min="0" max="100000"
                                    step="10" className='input_number to' onChange={e => setPriceTo(e.target.value)}
                                />
                                <button className="button_number increment" onClick={() => increment(setPriceTo, 'to')}> + </button>
                            </div>
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

                </aside>
            </div>
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