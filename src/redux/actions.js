export const actions = {
    setProducts : "SET_PRODUCTS",
    toggleLoader: "TOGLELOADER",
    setCategories: "SET_CATEGORIES",
    setProductsFiltered: "SET_PRODUCTS_FILTERED"
}

export const setProductsFiltered = productsFiltered => ({
    type: actions.setProductsFiltered,
    payload: productsFiltered
})

const toggleLoader = () => ({
    type: actions.toggleLoader
})

export const setProducts = products => ({
    type: actions.setProducts,
    payload: products
})

export const setCategories = category => ({
    type: actions.setCategories,
    payload: category,
}) 

export const getProductsThunk = () => {
    return dispatch => {
        dispatch(toggleLoader())
        return fetch(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
            .then(res => res.json())
            .then(res => {
                dispatch(setProducts(res.data.products))
                dispatch(setProductsFiltered(res.data.products))
            })
            .finally(() => dispatch(toggleLoader()))
    }
}

export const getCategories = () => {
    return dispatch => {
        return fetch(`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`)
            .then(res => res.json())
            .then(res => dispatch(setCategories(res.data.categories)))
    }
}

export const handlerfilterProductsThunk = (query, value) => {
    return dispatch => {
        dispatch(toggleLoader())
        return fetch(`https://ecommerce-api-react.herokuapp.com/api/v1/products?${query}=${value}`)
            .then(res => res.json())
            .then(res => {
                dispatch(setProductsFiltered(res.data.products))
            })
            .finally(() => dispatch(toggleLoader()))
    }
} 