import Link from 'next/link'

const Category = ({ category }) => {
  return (
    <Link href="/categories/[slug]" as={`/categories/${category.SLUG}`}>
      <div className="relative flex flex-wrap mx-auto justify-center">
        <div className="relative max-w-xs cursor-pointer">
          <div className="relative max-w-xs">
            <img
              className="h-auto w-full object-cover rounded-[36px]"
              src={`/static/images/categories/${category.URL_IMG}`}
            />
            <div className="absolute left-0 top-0 h-full w-full rounded-[36px] bg-pink-900 opacity-20" />
          </div>

          <img
            className="absolute left-0 top-0 w-14 h-auto rounded-[36px]"
            src={`/static/images/categories/${category.URL_ICON}`}
          />
          <div className="my-4 flex justify-center ">
            <p className="text-lg font-bold text-blue-900 mb-0">{category.NAME}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default Category
