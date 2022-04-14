import { actions } from './actions'

const INITIAL_STATE = {
    products: [],
    productsFiltered: [],
    loader: false,
    categories: [],
}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){

        case actions.setProducts:
            return {
                ...state,
                products: action.payload
            }

        case actions.setProductsFiltered:
            return{
                ...state,
                productsFiltered: action.payload
            }

        case actions.toggleLoader:
            return {
                ...state,
                loader: !state.loader
            }

        case actions.setCategories:
            return{
                ...state,
                categories: action.payload
            }

        default:
            return state;
    }
}

export default reducer;