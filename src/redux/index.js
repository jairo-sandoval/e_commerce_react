import { actions } from './actions'

const INITIAL_STATE = {
    products: [],
    loader: false,
}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){

        case actions.getProducts:
            return {
                ...state,
                products: action.payload
            }

        case actions.toggleLoader:
            return {
                ...state,
                loader: !state.loader
            }

        default:
            return state;
    }
}

export default reducer;