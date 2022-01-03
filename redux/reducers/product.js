import { CHANGE_INDEX_SELECTED, PRODUCTS_CLEAR, PRODUCTS_UPDATE } from '../constants/product'

const state_ini = {
  products: [],
  index_selected: 0,
}

const product = (state = state_ini, action) => {
  switch (action.type) {
    case PRODUCTS_UPDATE:
      return { ...state, products: action.products }
    case CHANGE_INDEX_SELECTED:
      return {
        products: state.products,
        index_selected: action.index,
      }
    case PRODUCTS_CLEAR:
      return state_ini

    default:
      return state
  }
}

export default product
