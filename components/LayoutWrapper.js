/* eslint-disable jsx-a11y/no-onchange */
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

  /*
  const options = [
    { value: 'chocolate', label: <div className="inline"><img className = "inline pr-2" src="static/images/espanol.png" />English</div> },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  */
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
        <div className="inline">
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
          <div className="inline">
            <img className="inline pr-2" src={'/static/images/' + locale + '.png'} />
            {locale === 'es' ? 'Español' : 'English'}
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
              <Link href="/" aria-label="Tailwind CSS Blog">
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
          <div className="flex items-center h-[78px]">
            <div className="flex  mx-auto justify-between items-center">
              <div className="hidden lg:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="font-normal lg:px-4 dark:text-gray-100 hover:text-rosa hover:font-extrabold text-lg"
                  >
                    {t(`headerNavLinks:${link.title.toLowerCase()}`)}
                  </Link>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="px-4 hidden sm:block">
                  <div className="relative mx-auto items-center">
                    <input
                      className="lg:w-40 text-white focus:border-0 border-0 bg-rosa placeholder-white font-extrabold h-8  pl-4 pr-8 rounded-full text-s "
                      type="text"
                      name="search"
                      placeholder="Buscar"
                    />
                    <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
                      <SearchIcon className="h-5 " />
                    </button>
                  </div>
                </div>
                <div className="flex divide-x divide-gray-300 justify-items-stretch">
                  <div className="flex px-3 self-center">
                    <UserIcon className="" />
                  </div>
                  <div className="px-3">
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
                    <ThemeSwitch />
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
