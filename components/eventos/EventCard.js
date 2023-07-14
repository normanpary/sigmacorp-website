import Link from 'next/link'
import { motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

const EventCard = ({ title, date, description, main_image, slug, path}) => {
  const { t } = useTranslation()
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeIn' }}
    viewport={{ margin: '-10px' }}
  >
     <Link
          href={{
            pathname: '/'+path+'/'+slug
            
          }}
        >
          <a>
     <div className="rounded-xl shadow-lg transition hover:-translate-y-3 hover:shadow-lg puntero" data-cursortext={t('news:leer_mas')}>
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
                      <p className="mt-5 h-14 capitalize line-clamp-2 text-xl font-black">
                        {title}
                      </p>
                      <p className="h-18 line-clamp-3 mb-5 text-gray-500 text-base mt-2">
                        {description}
                      </p>
                      
                    </div>
                  </div>
                </div>
                </a>
              </Link>
    </motion.div>
  )
}

export default EventCard
