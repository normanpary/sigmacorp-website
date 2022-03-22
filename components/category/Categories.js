import Category from './Category'
import { motion } from 'framer-motion'

export default function Categories({ categories_parents }) {
  return (

    <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
              viewport={{ margin: '-100px' }}
            >
    <div className="flex justify-center w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 space-y-0 content-center p-3">
        {categories_parents !== null &&
          categories_parents.map((category) => <Category key={category._id} category={category} />)}
      </div>
    </div>
    </motion.div>


  )
}
