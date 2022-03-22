import Categories from '@/components/category/Categories'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import useTranslation from 'next-translate/useTranslation'
import axios from 'axios'
import config_backend from '@/data/api/config'
import { motion } from 'framer-motion'

export default function CategoriesPage({ categories_parents, locale, availableLocales }) {
  const { t } = useTranslation()
  return (
    <>
      <PageSEO
        title={`${t('headerNavLinks:products')} - ${siteMetadata.author}`}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      {/**BANNER */}
      <div className="bg-[url('/static/images/products/fondo_farmaceuticos.png')] bg-cover bg-center h-[396px]">
        <div className="bg-gradient-to-r from-white/80 to-white/0 h-[396px]">
        
            <div className="container mx-auto pt-16">
            <div className="">
                <a href="#" className="hover:text-pink-700 font-bold">
                  Inicio
                </a>{' '}
                / Productos Farmacéuticos
              </div>
              <div className="font-extrabold text-6xl">
                <div className="text-pink-700 ">Productos</div>
                <div className="text-violeta">Farmacéuticos</div>
              </div>
              
              
              <div className="max-w-xl text-lg pt-5">
              Industria químico farmacéutica SIGMA Corp s.r.l es una empresa boliviana, 
innovadora, reconocida por  el desarrollo de productos farmacéuticos y nutracéuticos.
              </div>
            </div>
          
        </div>
      </div>
      {/*FIN BANNER*/}
      <Categories categories_parents={categories_parents} />
    </>
  )
}

export async function getServerSideProps({ locale, locales }) {
  try {
    const response = await axios.get(config_backend.URL_CATEGORIES + locale)
    return {
      props: { categories_parents: response.data, locale, availableLocales: locales },
    }
  } catch (error) {
    return {
      props: { categories_parents: [], locale, availableLocales: locales },
    }
  }
}
