const ProductDetail = ({ product }) => {
  return (
    <>
      {product !== null && (
        <div className="flex w-full justify-center pt-6">
          <div className="flex w-3/5  gap-10">
            <img className="h-36 w-auto" src="/static/images/logo.png" />
            <div>
              <p className="text-xl font-extrabold text-pink-700 ">{product.NAME.toUpperCase()}</p>
              <div className="w-full h-[1px] mt-1 bg-pink-700" />
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
