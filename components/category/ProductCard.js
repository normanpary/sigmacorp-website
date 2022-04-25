import Link from 'next/link'
import { motion } from 'framer-motion'

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

const ProductCard = ({ title, type_of_sale, slugProduct, image, slugCategory, category }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeIn' }}
    viewport={{ margin: '-10px' }}
  >
    <div className="group grid grid-cols-2 gap-5 hover:-translate-y-2 duration-500 hover:-translate-x-2 puntero" data-cursortext="<div class='cursor-icono'>+</div>">
       
       <div className='bg-white rounded-full p-5 overflow-hidden border-2 shadow-md w-40 cursor-pointer ml-auto'> 
       <Link href={`${slugCategory}/${slugProduct}`}>
       <img className="group-hover:scale-125 group-hover:rotate-12 duration-500" src={`${assetsUrl}${image}`}/> 
       </Link>
       </div>
       
      <div>
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
    </div>
    </motion.div>
  )
}

export default ProductCard
