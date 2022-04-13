export const actions = {
    getProducts : "GET_PRODUCTS",
    toggleLoader: "TOGLELOADER"
}

const toggleLoader = () => ({
    type: actions.toggleLoader
})

export const setProducts = products => ({
    type: actions.getProducts,
    payload: products
})

export const getProductsThunk = () => {
    return dispatch => {
        dispatch(toggleLoader())
        return fetch(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
            .then(res => res.json())
            .then(res => {
                dispatch(setProducts(res.data.products))
            })
            .finally(() => dispatch(toggleLoader()))
    }
}