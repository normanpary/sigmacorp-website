import ProductDetail from '@/components/product/ProductDetail'
import axios from 'axios'

export default function ProductPage({ product }) {
  console.log(product)

  return <ProductDetail product={product} />
}

export async function getServerSideProps(context) {
  const { query, locale } = context
  console.log(query)
  const response = await axios.get(
    'http://localhost:5000/sigmacorp/get-product/' + query.slug_product + '/' + locale
  )
  if (response.status === 200) {
    return {
      props: { product: response.data },
    }
  } else {
    return {
      props: { product: null },
    }
  }
}
