import Category from './Category'

export default function Categories({ categories_parents }) {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 space-y-0 content-center p-3">
        {categories_parents !== null &&
          categories_parents.map((category) => <Category key={category._id} category={category} />)}
      </div>
    </div>
  )
}
