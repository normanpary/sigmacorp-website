import Categories from '@/components/category/Categories'
import axios from 'axios'

export default function CategoriesPage({ categories_parents }) {
  return (
    <>
      <Categories categories_parents={categories_parents} />
    </>
  )
}

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:5000/sigmacorp/categories')
  if (response.status === 200) {
    return {
      props: { categories_parents: response.data },
    }
  } else {
    return {
      props: { categories_parents: [] },
    }
  }
}
