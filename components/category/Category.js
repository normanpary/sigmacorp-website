import Link from 'next/link'
import { URL_BASE } from '@/data/api/config'
import { motion } from 'framer-motion'

const Category = ({ category }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeIn'}}
  
  >
    <Link href="/products/[slug]" as={`/products/${category.SLUG}`}>
      <div className="transition hover:scale-105 relative flex flex-wrap mx-auto justify-center">
        <div className="relative max-w-xs cursor-pointer">
          <div className=" relative max-w-xs">
            <img
              className="h-auto w-full object-cover rounded-[36px]"
              src={`${URL_BASE}${category.IMAGE.url}`}
            />
            <div className="absolute left-0 top-0 h-full w-full rounded-[36px] bg-pink-900 opacity-0" />
          </div>

          <img
            className="absolute left-0 top-0 w-14 h-auto rounded-[36px]"
            src={`${URL_BASE}${category.ICON.url}`}
          />
          <div className="my-4 flex justify-center ">
            <p className="text-lg font-bold text-blue-900 mb-0">{category.NAME}</p>
          </div>
        </div>
      </div>
    </Link>
    </motion.div>
  )
}
export default Category
