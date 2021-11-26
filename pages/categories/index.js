import Categories from '@/components/category/Categories'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import useTranslation from 'next-translate/useTranslation'
import axios from 'axios'

export default function CategoriesPage({ categories_parents, locale, availableLocales }) {
  const { t } = useTranslation()
  return (
    <>
      <PageSEO
        title={`${t('headerNavLinks:categories')} - ${siteMetadata.author}`}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <Categories categories_parents={categories_parents} />
    </>
  )
}

export async function getServerSideProps({ locale, locales }) {
  const response = await axios.get('http://localhost:5000/sigmacorp/categories/' + locale)
  if (response.status === 200) {
    return {
      props: { categories_parents: response.data, locale, availableLocales: locales },
    }
  } else {
    return {
      props: { categories_parents: [], locale, availableLocales: locales },
    }
  }
}
