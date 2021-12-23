import Link from './Link'
import Logo from '@/data/sigmacorp-logo-web-violeta.svg'
import LogoEmail from '/public/static/icons/email.svg'
import LogoLocation from '/public/static/icons/location.svg'
import LogoPhone from '/public/static/icons/phone.svg'
import LogoWeb from '/public/static/icons/web.svg'
import LogoSend from '/public/static/icons/send.svg'
import LogoArrowRight from '/public/static/icons/arrow_right.svg'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import headerNavLinks from '@/data/headerNavLinks'

export default function Footer() {
  const { t } = useTranslation()
  const { locale } = useRouter()
  return (
    <footer className="bg-violeta py-8 px-8 md:px-20 lg:px-32 bg-fondo_footer bg-no-repeat bg-right-top">
      <div className="flex w-full justify-center mb-8">
        <Logo />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8  md:gap-12">
        <div className="space-y-8">
          <div className="grid grid-cols-1">
            <p className="font-bold text-white text-base">{t('footer:contacto')}</p>
            <div className="w-1/4 h-0.5 bg-rosa" />
          </div>

          <div className="flex flex-row space-x-6">
            <div className="mt-1">
              <LogoLocation />
            </div>
            <p className="text-xs text-white">{t('footer:ubicacion')}</p>
          </div>
          <div className="flex flex-row space-x-6">
            <LogoEmail />
            <p className="text-xs text-white">{t('footer:email')}</p>
          </div>
          <div className="flex flex-row space-x-6">
            <LogoPhone />
            <p className="text-xs pt-1 text-white">{t('footer:phone')}</p>
          </div>
          <div className="flex flex-auto space-x-6">
            <LogoWeb />
            <p className="text-xs pt-1 text-white">{t('footer:web')}</p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="grid grid-cols-1">
            <p className="font-bold text-white text-base">{t('footer:suscribirse')}</p>
            <div className="w-1/4 h-0.5 bg-rosa" />
          </div>
          <div className="flex flex-row space-x-6">
            <p className="text-xs text-white">{t('footer:suscribirse_text')}</p>
          </div>
          <div className="flex flex-row space-x-6">
            <div className="flex items-center w-full sm:max-w-sm sm:mx-auto bg-white rounded-xl">
              <input
                type="text"
                className="w-full px-4 py-1 text-gray-900 rounded-full  focus:ring-transparent focus:border-0 border-0"
                placeholder={t('footer:correo')}
              />

              <div>
                <button
                  type="submit"
                  className="flex items-center m-0.5 justify-center w-10 h-8 bg-rosa rounded-xl"
                >
                  <LogoSend />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="grid grid-cols-1">
            <p className="font-bold text-white text-base">{t('footer:redes_sociales')}</p>
            <div className="w-1/4 h-0.5 bg-rosa" />
          </div>
          <div className="flex space-x-4 justify-center">
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size="8" />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size="8" />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} size="8" />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size="8" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1">
            <p className="font-bold text-white text-base">{t('footer:empresa')}</p>
            <div className="w-1/4 h-0.5 bg-rosa" />
          </div>
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href} className="text-white text-xs">
              <div className="flex flex-row space-x-6 mt-4 items-center ">
                <LogoArrowRight className="mr-4 hover:text-rosa" />

                {t(`headerNavLinks:${link.title.toLowerCase()}`)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
