import { useRouter } from 'next/router'
import axios from 'axios'
import Products from '@/components/product/Products'
import { URL_CATEGORY } from '@/data/api/config'

const ProductsPage = ({ category }) => {
  return (
    <>
      <Products category={category} />
    </>
  )
}

export default ProductsPage

export async function getServerSideProps(context) {
  const { query, locale } = context
  const response = await axios.get(URL_CATEGORY + query.slug + '/' + locale)

  if (response.status === 200) {
    return {
      props: { category: response.data },
    }
  } else {
    return {
      props: { category: null },
    }
  }
}
