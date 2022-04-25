import Link from 'next/link'
import { motion } from 'framer-motion'

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

const NutraceuticCard = ({ title, slugProduct, image }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeIn' }}
    viewport={{ margin: '-10px' }}
  >
    <Link href={{
      pathname: '/nutraceutics/'+slugProduct,

    }}
      >
    <div className='group border-gris_claro border-2 rounded-3xl overflow-hidden hover:-translate-y-4 duration-500 puntero cursor-pointer' data-cursortext="<div class='cursor-icono'>+</div>">
    
        <div className='p-10 pt-14'>
            <img className='group-hover:scale-125 group-hover:rotate-12 duration-500 h-[400px] mx-auto' 
             src={`${assetsUrl}${image}`}
            />
        </div>
        <div className='bg-gris_claro p-6'>
            <div className='text-4xl font-extrabold text-rosa text-center'>
            {title}
            </div>

        </div>
      
    </div>
    </Link>
    </motion.div>
  )
}

export default NutraceuticCard
