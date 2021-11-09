import { useRouter } from 'next/router'
import axios from 'axios'
import Products from '@/components/product/Products'

export default function CategoryPage({ category }) {
  return (
    <>
      <Products category={category} />
    </>
  )
}

export async function getServerSideProps(context) {
  const { query } = context
  const response = await axios.get('http://localhost:5000/sigmacorp/products/' + query._id)
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
