import Link from 'next/link'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

const EventSmallCard = ({ title, date, description, main_image, slug, path}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeIn' }}
    viewport={{ margin: '-10px' }}
  >
     <Link
          href={{
            pathname: "/"+path+"/"+slug
            
          }}
        >
          <a>
            <div className='mb-10 puntero' data-cursortext="Leer más">
     <div className=" rounded-xl shadow-lg transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="h-auto  bg-white  ">
                    <div className="">
                      <img
                        className="object-cover h-48 w-full rounded-t-xl"
                        src={`${assetsUrl}${main_image}`}
                        alt="Carousel"
                      />
                    </div>
                    <div className="relative p-4 w-auto h-54">
                      <span className="absolute bg-violeta rounded-full py-1 px-4 w-auto text-xs text-white font-bold  -mt-7">
                      {date}
                      </span>
                      <p className="mt-5 capitalize line-clamp-2 text-xl font-black">
                        {title}
                      </p>
                     
                      
                    </div>
                  </div>
                </div>
                </div>
                </a>
              </Link>
    </motion.div>
  )
}

export default EventSmallCard
