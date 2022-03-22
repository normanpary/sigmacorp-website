import { URL_BASE } from '@/data/api/config'
import ProductDetailFooter from './ProductDetailFooter'
import { connect } from 'react-redux'

const ProductDetail = ({ product }) => {
  console.log(product)
  return (
    <>
      {product !== null && product !== undefined && (
        <div className="bg-fondo_reverse bg-no-repeat bg-right-top flex w-full justify-center p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-9/12 md:gap-10">
            <div className="pb-3 md:hidden">
              <p className="text-xl text-center font-extrabold text-pink-700 ">
                {product.NAME.toUpperCase()}
              </p>
              <div className="w-full h-[1px] mt-1 bg-pink-700" />
            </div>
            <div className="flex w-full justify-center items-center">
              {product.IMAGE !== undefined ? (
                <img
                  className="h-[460px] w-[460px] object-contain"
                  src={`${URL_BASE}${product.IMAGE.url}`}
                />
              ) : (
                <img className="h-32 w-32 object-contain" src={`/static/images/imageNot.png`} />
              )}
            </div>

            <div>
              <div className="hidden md:block">
                <p className="text-3xl font-extrabold text-pink-700 ">
                  {product.NAME.toUpperCase()}
                </p>
                <div className="w-full h-[1px] mt-1 bg-pink-700" />
              </div>
              <p className="my-8 text-lg">{product.DESCRIPTION}</p>
              <p className="font-bold mt-2">{'Acción terapeútica'}</p>
              <p>{'ANTIACIDO - ANTIINFLATORIO'}</p>
              <p className="font-bold mt-2">{'Composición'}</p>
              <p>{'HIDROXIDO DE ALUMINIO - HIDROXIDO DE MAGNESIO'}</p>
              <p className="font-bold mt-2">{'Composición'}</p>
              <p>{'HIDROXIDO DE ALUMINIO - HIDROXIDO DE MAGNESIO'}</p>
              <p className="font-bold mt-2">{'Composición'}</p>
              <p>{'HIDROXIDO DE ALUMINIO - HIDROXIDO DE MAGNESIO'}</p>
            </div>
          </div>
        </div>
      )}
      <ProductDetailFooter />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    product:
      state.product.products.length > 0 &&
      state.product.index_selected < state.product.products.length
        ? state.product.products[state.product.index_selected]
        : null,
  }
}

export default connect(mapStateToProps, null)(ProductDetail)
