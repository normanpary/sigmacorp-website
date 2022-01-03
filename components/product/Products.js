import Product from './Product'
import { URL_BASE } from '@/data/api/config'

const Products = ({ category }) => {
  return (
    <div className="bg-fondo bg-no-repeat">
      {category !== null && (
        <>
          <div className="flex w-full p-3 md:p-6 justify-center">
            {category.NAME.includes('/') ? (
              <div className="flex-grow">
                <p className="text-xl sm:text-2xl md:text-3xl text-pink-700 font-extrabold flex-grow">
                  {category.NAME.split('/')[0].toUpperCase()}
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl text-blue-800 font-extrabold flex-grow">
                  {category.NAME.split('/')[1].toUpperCase()}
                </p>
              </div>
            ) : (
              <p className="text-3xl text-pink-700 font-extrabold flex-grow">
                {category.NAME.toUpperCase()}
              </p>
            )}

            {category.ICON !== undefined && (
              <img className="w-10 h-10" src={`${URL_BASE}${category.ICON.url}`} />
            )}
          </div>
          <div className="flex justify-center content-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-4 md:gap-8 space-y-0 space-x-0 my-3">
              {category.PRODUCTS.map((product, index) => (
                <Product
                  key={product._id}
                  product={product}
                  category_name={category.NAME}
                  index={index}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Products
