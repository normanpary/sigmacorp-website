const axios = require('axios')
const Api = {
  getCategories: async () => {
    return await axios
      .get('http://localhost:5000/sigmacorp/categories')
      .then((response) => response.data)
  },

  getCategoriesAll: async () => {
    return await axios
      .get('http://localhost:5000/sigmacorp/categories-all')
      .then((response) => response.data)
  },

  getCategoriesSubcategories: async () => {
    return await axios
      .get('http://localhost:5000/sigmacorp/categories-subcategories')
      .then((response) => response.data)
  },

  saveCategory: async (body) => {
    return await axios.post('/sigmacorp/save-category', body).then((response) => response.data)
  },
  updateCategory: async (body) => {
    return await axios
      .put('http://localhost:5000/sigmacorp/update-category/' + body._id, body)
      .then((response) => response.data)
  },

  //PRODUCTS
  getProducts: async (_id) => {
    return await axios
      .get('http://localhost:5000/sigmacorp/products/' + _id)
      .then((response) => response.data)
  },
}

export default Api
