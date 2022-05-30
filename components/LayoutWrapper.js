import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
//import Logo from '@/data/logo.svg'
import Logo from '@/data/sigmacorp-logo-web.svg'
import SearchIcon from 'public/static/images/sigmacorp-search.svg'
import UserIcon from 'public/static/images/sigmacorp-user.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import { Component, useState } from 'react'
import Select from 'react-select'

const LayoutWrapper = ({ children }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  const changeLanguage = (e) => {
    const locale = e.value
    router.push(router.asPath, router.asPath, { locale })
  }
  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'white',
      fontSize: '10px',
      borderWidth: '0px',
      boxShadow: 'none',
    }),

    dropdownIndicator: (styles) => ({
      ...styles,
      padding: '0px',
    }),

    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? '#D3D8E3' : '#FFF',
        color: '#000',
        fontSize: '10px',
        cursor: isDisabled ? 'not-allowed' : 'default',
      }
    },
  }

  const options = []
  var idioma = ''
  locales.map((e) => {
    if (e == 'es') {
      idioma = 'Español'
    }
    if (e == 'en') {
      idioma = 'English'
    }

    options.push({
      value: e,
      label: (
        <div className="inline text-sm">
          <img className="inline pr-2" src={'/static/images/' + e + '.png'} />
          {idioma}
        </div>
      ),
    })
  })

  const MyComponent = () => (
    <Select
      components={{ IndicatorSeparator: () => null }}
      styles={customStyles}
      options={options}
      onChange={changeLanguage}
      isSearchable={false}
      defaultValue={{
        value: locale,
        label: (
          <div className="inline text-sm">
            <img className="inline pr-2" src={'/static/images/' + locale + '.png'} />
            <span className="text-sm">{locale === 'es' ? 'Español' : 'English'}</span>
          </div>
        ),
      }}
    />
  )
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className=" flex flex-col">
          <div className="flex bg-violeta h-[78px]">
            <div className="w-interior mx-auto p-2">
              <Link href="/" aria-label="Sigmacorp Website">
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <Logo />
                  </div>
                  {/*typeof siteMetadata.headerTitle[locale] === 'string' ? (
                      <div className="hidden h-6 text-2xl font-semibold sm:block">
                        {siteMetadata.headerTitle[locale]}
                      </div>
                    ) : (
                      siteMetadata.headerTitle[locale]
                    )*/}
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center h-[78px] bg-white">
            <div className="flex  mx-auto justify-between items-center">
              <div className="hidden lg:block ">
                <div className="flex flex-row">
                  <div>
                    <Link
                      key="home"
                      href="/"
                      className="font-bold lg:px-6 text-gris hover:text-rosa hover:font-bold text-lg"
                    >
                      {t('headerNavLinks:home')}
                    </Link>
                  </div>
                  <div>
                    <Link
                      key="about"
                      href="/about"
                      className="font-bold lg:px-6 text-gris hover:text-rosa hover:font-bold text-lg"
                    >
                      {t('headerNavLinks:about')}
                    </Link>
                  </div>
                  <div class="relative group">
                    <Link
                      key="products"
                      href="#"
                      className="font-bold lg:px-6 text-gris fill-gris hover:text-rosa hover:fill-rosa hover:font-bold text-lg "
                    >
                      {t('headerNavLinks:products')}&nbsp;
                      <svg
                        className="inline"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                      </svg>
                    </Link>
                    <div class="items-center absolute border border-t-0 rounded-b-lg p-1 bg-white p-2 invisible group-hover:visible w-auto z-50">
                      {/*<Link
                        href="/biosecurity"
                        class="px-4 py-2 block text-gris hover:text-rosa text-lg"
                      >
                        {t('headerNavLinks:biosecurity')}
                  </Link>*/}
                      <a
                        href="/nutraceutics"
                        replace={true}
                        prefetch={false}
                        class="px-4 py-2 block text-gris hover:text-rosa text-lg"
                      >
                        {t('headerNavLinks:nutraceutics')}
                      </a>
                      <a
                        href="/pharmaceutics"
                        replace={true}
                        prefetch={false}
                        class="px-4 py-2 block text-gris hover:text-rosa text-lg"
                      >
                        {t('headerNavLinks:pharmaceutics')}
                      </a>
                    </div>
                  </div>
                  <div>
                    <Link
                      key="maquila"
                      href="/maquila"
                      className="font-bold lg:px-6 text-gris hover:text-rosa hover:font-bold text-lg"
                    >
                      {t('headerNavLinks:maquila')}
                    </Link>
                  </div>
                  <div class="relative group">
                    <Link
                      key="resources"
                      href="#"
                      className="font-bold lg:px-6 text-gris fill-gris hover:text-rosa hover:fill-rosa hover:font-bold text-lg "
                    >
                      {t('headerNavLinks:resources')}&nbsp;
                      <svg
                        className="inline"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                      </svg>
                    </Link>
                    <div class="items-center absolute border border-t-0 rounded-b-lg p-1 bg-white p-2 invisible group-hover:visible w-auto z-50">
                      <Link
                        href="/recursos/contacto"
                        class="px-4 py-2 block text-gris hover:text-rosa text-lg"
                      >
                        {t('headerNavLinks:contact')}
                      </Link>
                      <Link
                        href="/eventos"
                        class="px-4 py-2 block text-gris hover:text-rosa text-lg"
                      >
                        {t('headerNavLinks:events')}
                      </Link>
                      <Link
                        key="news"
                        href="/noticias"
                        class="px-4 py-2 block text-gris hover:text-rosa text-lg"
                      >
                        {t('headerNavLinks:news')}
                      </Link>
                      <Link href="/rse" class="px-4 py-2 block text-gris hover:text-rosa text-lg">
                        {t('headerNavLinks:csr')}
                      </Link>
                      <Link
                        href="/recursos/farmacovigilancia"
                        class="px-4 py-2 block text-gris hover:text-rosa text-lg"
                      >
                        {t('headerNavLinks:pharmacovigilance')}
                      </Link>
                    </div>
                  </div>
                </div>
                {/*headerNavLinks.map((link) => (
                  <Link 
                    key={link.title}
                    href={link.href}
                    className="font-bold lg:px-4 dark:text-gray-100 hover:text-rosa hover:font-bold text-lg"
                  >
                    {t(`headerNavLinks:${link.title.toLowerCase()}`)}
                  </Link>
                ))*/}
              </div>
              <div className="flex justify-between items-center">
                <div className="px-4 hidden sm:block">
                  <div className="relative mx-auto items-center">
                    <input
                      className="lg:w-40 text-white focus:border-0 border-0 bg-rosa placeholder-white font-extrabold h-8  pl-4 pr-8 rounded-full text-s "
                      type="text"
                      name="search"
                      placeholder={t('headerNavLinks:search')}
                    />
                    <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
                      <SearchIcon className="h-5 " />
                    </button>
                  </div>
                </div>
                <div className="flex divide-x divide-gray-300 justify-items-stretch">
                  <div className="flex px-3 self-center">
                    <a href="http://164.92.66.171:1337/admin" target="_blank"><UserIcon className="" /></a>
                  </div>
                  <div className="px-3 text-sm">
                    <MyComponent />
                    {/*<select
                      onChange={changeLanguage}
                      defaultValue={locale}
                      style={{ textAlignLast: 'center' }}
                      className="border-0 focus:border-0 text-gray-900 dark:text-gray-100  text-sm bg-transparent tracking-wide"
                    >
                      {locales.map((e) => (
                        <option value={e} key={e} >
                          {e}
                        </option>
                      ))}
                      </select>*/}
                  </div>
                  <div className="self-center">
                    {/*<ThemeSwitch />*/}
                  </div>
                  <MobileNav />
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
