const { PRODUCTS_UPDATE, PRODUCTS_CLEAR, CHANGE_INDEX_SELECTED } = require('../constants/product')

export const productsUpdate = (products) => {
  return { type: PRODUCTS_UPDATE, products }
}

export const productsClear = () => {
  return { type: PRODUCTS_CLEAR }
}

export const indexChange = (index) => {
  return { type: CHANGE_INDEX_SELECTED, index }
}
