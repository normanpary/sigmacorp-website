import Link from 'next/link'

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

const ProductCard = ({ title, type_of_sale, slugProduct, slugCategory, category }) => {
  return (
    <div className="">
      <div className="text-azul_oscuro text-3xl font-extrabold">
        <Link href={`${slugCategory}/${slugProduct}`}>{title}</Link>
      </div>
      <div className="text-gris font-semibold text-base flex flex-row mb-3 mt-3">
        <img src="/static/images/venta-libre.png" />
        &nbsp; {type_of_sale}
      </div>
      <div className="text-azul_claro font-semibold text-base flex flex-row ">
        <img src="/static/images/category-icon.png" />
        &nbsp; 
        <Link href={`${slugCategory}`}>{category}</Link>
      </div>
    </div>
  )
}

export default ProductCard
