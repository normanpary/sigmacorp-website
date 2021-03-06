import Link from 'next/link'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { indexChange } from 'redux/actions/product'
const Product = ({ category_name, product, index, handleChangeIndexSelected }) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Link
      href={{
        pathname: '/products/[slug]/[slug_product]',
        query: { slug: `${slug}`, slug_product: `${product.SLUG}` },
      }}
    >
      <button onClick={() => handleChangeIndexSelected(index)}>
        <div className="max-w-xs cursor-pointer py-6">
          <p className="text-lg font-extrabold text-primary-900 ">{product.NAME.toUpperCase()}</p>
          <div className="flex mt-2">
            <img className="h-11 w-auto" src={`/static/images/two_icons.png`} />
            <div className="max-h-full">
              <p className="text-xs font-bold text-primary-900 mt-0.5 ml-2">{product.TYPE_SALES}</p>
              <p className="text-xs font-bold text-blue-400 mt-2 ml-2">{category_name}</p>
            </div>
          </div>
        </div>
      </button>
    </Link>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeIndexSelected: (index) => {
      dispatch(indexChange(index))
    },
  }
}

export default connect(null, mapDispatchToProps)(Product)
