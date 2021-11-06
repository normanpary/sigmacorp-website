import Category from './Category'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { startGetCategories } from 'redux/actions/category'

const Categories = ({ categories_parent, getCategoriesParent }) => {
  useEffect(() => {
    getCategoriesParent()
  }, [])

  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 space-y-0 content-center my-3">
        {categories_parent !== null &&
          categories_parent.map((category) => <Category key={category._id} category={category} />)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    categories_parent: state.category.categories_parent.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoriesParent: () => {
      dispatch(startGetCategories())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
