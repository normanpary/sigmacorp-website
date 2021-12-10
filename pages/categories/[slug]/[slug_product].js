import ProductDetail from '@/components/product/ProductDetail'
import axios from 'axios'
import { URL_CATEGORY, URL_DETAIL_PRODUCT } from 'data/api/config'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { productsUpdate } from 'redux/actions/product'

const ProductDetailPage = ({ products, handleProductsUpdate }) => {
  console.log(products)

  useEffect(() => {
    handleProductsUpdate(products)
    return () => {
      //handleProductsClear()
    }
  }, [products])

  return <ProductDetail />
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleProductsUpdate: (products) => {
      dispatch(productsUpdate(products))
    },
  }
}

export default connect(null, mapDispatchToProps)(ProductDetailPage)

export async function getServerSideProps(context) {
  const { query, locale } = context
  try {
    const response_category = await axios.get(URL_CATEGORY + query.slug + '/' + locale)
    return {
      props: { products: response_category.data.PRODUCTS },
    }
  } catch (error) {
    return {
      props: { products: [] },
    }
  }
}
