import Categories from '@/components/category/Categories'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import useTranslation from 'next-translate/useTranslation'
import axios from 'axios'
import config_backend from '@/data/api/config'

export default function CategoriesPage({ categories_parents, locale, availableLocales }) {
  const { t } = useTranslation()
  return (
    <>
      <PageSEO
        title={`${t('headerNavLinks:products')} - ${siteMetadata.author}`}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
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
