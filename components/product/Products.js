import Product from './Product'

export default function Products({ category }) {
  return (
    <>
      {category !== null && (
        <>
          <div className="flex p-6 justify-center">
            {category.NAME.includes('/') ? (
              <div className="flex-grow">
                <p className="text-3xl text-pink-700 font-extrabold flex-grow">
                  {category.NAME.split('/')[0].toUpperCase()}
                </p>
                <p className="text-3xl text-blue-800 font-extrabold flex-grow">
                  {category.NAME.split('/')[1].toUpperCase()}
                </p>
              </div>
            ) : (
              <p className="text-3xl text-pink-700 font-extrabold flex-grow">
                {category.NAME.toUpperCase()}
              </p>
            )}

            <img className="w-10 h-10" src={`/static/images/categories/${category.URL_ICON}.png`} />
          </div>
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-4 md:gap-8 space-y-0 space-x-0 content-center my-3">
              {category.PRODUCTS.map((product) => (
                <Product key={product._id} product={product} category_name={category.NAME} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}
