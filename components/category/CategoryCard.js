import Link from 'next/link'
import { motion } from 'framer-motion'

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

const CategoryCard = ({ key, name, slug, image, icon }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeIn' }}
    viewport={{ margin: '-10px' }}
  >
    <div>
      <Link href={`pharmaceutics-products/${slug}`}>
        <a>
        <div className='mb-4 transition duration-500 hover:-translate-y-2 hover:-translate-x-2'   >      
          <div
            className="h-56 lg:h-80 bg-cover bg-100% bg-center rounded-[40px] transition-all  duration-500 hover:bg-140% puntero" data-cursortext="<div class='cursor-icono'>+</div>"
            style={{ backgroundImage: `url(${assetsUrl}${image})` }}
          >
            <div>
              <img className="max-h-20 max-w-20" src={`${assetsUrl}${icon}`} />
            </div>
            
          </div>
          <div className="pt-3 pb-5 lg:py-5 text-center text-2xl text-azul font-black">{name}</div>
          </div>
        </a>
      </Link>
      </div>
      </motion.div>
  )
}

export default CategoryCard
