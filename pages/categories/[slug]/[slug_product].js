import ProductDetail from '@/components/product/ProductDetail'
import axios from 'axios'

export default function ProductPage({ product }) {
  console.log(product)

  return <ProductDetail product={product} />
}

export async function getServerSideProps(context) {
  const { query, locale } = context
  const response = await axios.get(
    'http://localhost:1337/product/' + query.slug_product + '/' + locale
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
