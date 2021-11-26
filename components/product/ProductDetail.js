const ProductDetail = ({ product }) => {
  return (
    <>
      {product !== null && (
        <div className="bg-fondo_reverse bg-no-repeat bg-right-top flex w-full justify-center p-3 md:pt-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-9/12 md:gap-10">
            <div className="pb-3 md:hidden">
              <p className="text-xl text-center font-extrabold text-pink-700 ">
                {product.NAME.toUpperCase()}
              </p>
              <div className="w-full h-[1px] mt-1 bg-pink-700" />
            </div>
            <div className="flex w-full justify-center">
              <img className="h-36 w-36" src="/static/images/logo.png" />
            </div>

            <div>
              <div className="hidden md:block">
                <p className="text-xl font-extrabold text-pink-700 ">
                  {product.NAME.toUpperCase()}
                </p>
                <div className="w-full h-[1px] mt-1 bg-pink-700" />
              </div>
              <p className="my-8">{product.DESCRIPTION}</p>
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
    </>
  )
}
export default ProductDetail
