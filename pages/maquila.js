import { items_card } from '@/data/homepage'

import useTranslation from 'next-translate/useTranslation'
import LightBox from '@/components/about/LightBox'

import dynamic from 'next/dynamic'

import { motion } from 'framer-motion'

import { dehydrate, QueryClient, useQuery } from 'react-query'
import EventCard from '@/components/eventos/EventCard'
import { getNews } from 'queries/queries'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['queryEvents', context.locale], async () =>
    getNews(context.locale)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Contacto({ posts, locale, availableLocales }) {
  const { t } = useTranslation()
  const router = useRouter()
  const { data: events, isSuccess, isLoading } = useQuery(
    ['queryEvents', router.locale],
    async () => getNews(router.locale)
  )
  return (
    <>
      {/**BANNER */}
      <div className="bg-[url('/static/images/maquila/maquila.jpg')] bg-cover bg-center h-96">
        <div className="bg-gradient-to-r from-white/80 to-white/0 h-96">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '0px' }}
          >
            <div className="container mx-auto pt-24">
              <div className="">
                <a href="../" className="hover:text-pink-700 font-bold">
                  Inicio
                </a>{' '}
                / Noticias
              </div>
              <div className=" flex flex-row font-extrabold text-6xl py-4">
                <div className="text-pink-700 ">MAQUILA&nbsp;</div>
                <div className="text-violeta">SIGMACORP</div>
              </div>
              <div className="text-xl text-negro">
                <p>Ven y fabrica con nosotros.</p>
                <p>Desarrolla junto a SIGMACORP la formula perfecta!. </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN BANNER*/}

      {/*QUIENES SOMOS*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto py-14 w-2/3">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0 }}
            viewport={{ margin: '-300px' }}
          >
            <div className="py-10 text-2xl  text-center mx-auto leading-12">
              Nuestras plantas farmacéuticas operan cumpliendo con las buenas prácticas de
              fabricación establecidas por el Ministerio de Salud y con la{' '}
              <strong>certificación ISO 9001:2008.</strong> Ofrecemos la fabricación de diversos
              productos en diferentes formas farmacéuticas humanas o veterinarias.
            </div>

            <div className="w-3/4  mx-auto grid grid-cols-3 gap-24 py-20">
              <div className="text-center">
                <div className="h-28">
                  <img className="mx-auto" src="static/images/maquila/semisolidos.png"></img>
                </div>
                <div className="text-xl font-black pt-5 uppercase">Semisólidos</div>
                <div className="text-lg">Cremas - Ungüento Pomadas - Geles</div>
              </div>
              <div className="text-center">
                <div className="h-28">
                  <img className="mx-auto" src="static/images/maquila/liquidos.png"></img>
                </div>
                <div className="text-xl font-black pt-5 uppercase">Líquidos</div>
                <div className="text-lg font-light">
                  Soluciones Orales - Oftálmicas Óticas - Tópicas
                </div>
              </div>
              <div className="text-center">
                <div className="h-28">
                  <img className="mx-auto" src="static/images/maquila/inyectables.png"></img>
                </div>
                <div className="text-xl font-black pt-5 uppercase">Inyectables</div>
                <div className="text-lg font-light">Jeringas Prellenadas - Viales</div>
              </div>
              <div className="text-center">
                <div className="h-28">
                  <img className="mx-auto" src="static/images/maquila/penicilinicos.png"></img>
                </div>
                <div className="text-xl font-black pt-5 uppercase">Penicilínicos</div>
                <div className="text-lg font-light">
                  Llenado de polvo aséptico en envase vial de vidrio
                </div>
              </div>
              <div className="text-center">
                <div className="h-28">
                  <img className="mx-auto" src="static/images/maquila/capsulas.png"></img>
                </div>
                <div className="text-xl font-black pt-5 uppercase">Capsulas blandas</div>
                <div className="text-lg">Desarrollo y fabricación</div>
              </div>
              <div className="text-center">
                <div className="h-28">
                  <img className="mx-auto" src="static/images/maquila/polvos.png"></img>
                </div>
                <div className="text-xl font-black pt-5 uppercase">Polvos</div>
                <div className="text-lg">Alimentos - Suplmentos - Mezclas</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN QUIENES SOMOS*/}
      <div className=" bg-[url('/static/images/maquila/fabrica.jpg')] bg-fixed bg-cover bg-center h-screen">
        <div className="  bg-azul bg-opacity-70 bg-fixed bg-cover bg-center h-screen">
          <div className="container mx-auto flex h-screen">
            <div className="m-auto">
              <div className="text-6xl font-light text-white leading-relaxed">
                <strong>SIGMACORP </strong>cuenta con más de 40 años de experiencia en la
                manufactura, investigación y desarrollo de productos farmacéuticos
              </div>
              <a href="#">
                <div className="mt-10 p-8 text-center uppercase text-xl font-normal text-white bg-rosa w-1/4 hover:bg-azul">
                  Acerca de Sigmacorp
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[url('/static/images/maquila/maquila.jpg')] bg-fixed bg-cover bg-center h-screen">
        <div className="  bg-rosa bg-opacity-70 bg-fixed bg-cover bg-center h-screen">
          <div className="container mx-auto flex h-screen">
            <div className="m-auto">
              <div className="w-2/3 text-6xl font-light text-white leading-relaxed">
                Nuestros productos cumplen con los más altos estándares de calidad farmacéutica
              </div>
              <div className=" w-2/3 text-xl font-thin text-white leading-loose">
                Sigmacorp cumple con los requisitos de manufactura ligados a control de calidad,
                materias primas, máquinas de los procesos, además de poseer la infraestructura
                adecuada. SIGMACORP cuenta con la <strong>certificación ISO 9001:2008.</strong>
              </div>
              <a href="#">
                <div className="mt-10 p-8 text-center uppercase text-xl font-normal text-white bg-azul w-1/4 bg-opacity-80 hover:bg-rosa">
                  Ver certificaciones
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*QUIENES SOMOS*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto py-14 w-2/3">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0 }}
            viewport={{ margin: '-300px' }}
          >
            <div className="  font-extrabold text-6xl py-4">
              <div className="text-pink-700 uppercase">Nuestros</div>
              <div className="text-azul uppercase">beneficios</div>
            </div>
            <div className="py-10 text-2xl  mx-auto leading-12">
              Nuestra política de servicios es ofrecer la máxima calidad e innovación adaptada a las
              necesidades de nuestros clientes. Contamos con maquinaria de primer nivel ofreciendo
              una variedad de opciones en toda clase de operaciones de producción.
            </div>

            <div className="  mx-auto grid grid-cols-3 gap-16 py-20">
              <div className="text-center">
                <div className="text-xl font-black pt-5 uppercase">
                  <span className="text-2xl font-black text-rosa">* </span>Certificaciones
                </div>
                <div className="text-lg">BPM - ISO 22000- FDA - RSE</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black pt-5 uppercase">
                  <span className="text-2xl font-black text-rosa">* </span>Informe 32-92 OMS
                </div>
                <div className="text-lg font-light">
                  Otorgado por la Organizacion Mundial de la Salud
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black pt-5 uppercase">
                  <span className="text-2xl font-black text-rosa">* </span>Garantía de Calidad
                </div>
                <div className="text-lg font-light">Contamos con procedimientos certificados</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black pt-5 uppercase">
                  <span className="text-2xl font-black text-rosa">* </span>Atención profesional y
                  personalizada
                </div>
                <div className="text-lg font-light">
                  Nuestro personal se capacita permanentemente para brindar el mejor servicio
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black pt-5 uppercase">
                  <span className="text-2xl font-black text-rosa">* </span>Pedidos mínimos y
                  accesibles
                </div>
                <div className="text-lg">
                  No es requerido solicitar cantidades grandes de manufactura
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black pt-5 uppercase">
                  <span className="text-2xl font-black text-rosa">* </span>Experiencia
                </div>
                <div className="text-lg">
                  Estamos presentes mas de 40 años presentes en el rubro farmacéutico
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN QUIENES SOMOS*/}
      {/*QUIENES SOMOS*/}
      <div className="bg-[url('/static/images/maquila/bolivia.png')] bg-gris_claro bg-no-repeat bg-right-top bg-contain">
        <div className="container mx-auto py-14 w-2/3 h-screen ">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0 }}
            viewport={{ margin: '-300px' }}
          >
            <div className="  font-extrabold text-6xl pt-40">
              <div className="text-pink-700 uppercase">Red de</div>
              <div className="text-azul uppercase">distribución</div>
            </div>
            <div className="py-10 text-2xl leading-12 w-2/3">
              Nuestra ubicación es <strong>estratégica</strong>. Al ubicarnos en Cochabamba, el
              centro de Bolivia y Sudamerica, nos permite distribuir facilmente a todo el territorio
              boliviano y a los paises de Sudamerica.
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN QUIENES SOMOS*/}
      {/*QUIENES SOMOS*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto py-14 w-2/3">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0 }}
            viewport={{ margin: '-300px' }}
          >
            <div className="  font-extrabold text-6xl py-4">
              <div className="text-pink-700 uppercase">Control de</div>
              <div className="text-azul uppercase">calidad</div>
            </div>
            <div className="py-10 text-2xl  mx-auto leading-12">
              Nuestra política de servicios es ofrecer la máxima calidad e innovación adaptada a las
              necesidades de nuestros clientes.
            </div>

            <div className="  mx-auto grid grid-cols-3 gap-24 ">
              <div className="text-center">
                <div className="text-xl font-black pt-5 ">
                  <span className="text-2xl font-black text-rosa">* </span>Análisis Microbiológico
                  de materias primas, material de empaque y producto.{' '}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black pt-5 ">
                  <span className="text-2xl font-black text-rosa">* </span> Prueba de pirógenos.{' '}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black pt-5 ">
                  <span className="text-2xl font-black text-rosa">* </span> Pruebas de esterilidad.{' '}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black pt-5 ">
                  <span className="text-2xl font-black text-rosa">* </span>Evaluación de
                  desinfectantes.
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black pt-5 ">
                  <span className="text-2xl font-black text-rosa">* </span>Análisis microbiológicos
                  de ambientes (áreas, superficies) y de aguas.
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black pt-5">
                  <span className="text-2xl font-black text-rosa">* </span> Análisis de
                  Antibióticos.{' '}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black pt-5 ">
                  <span className="text-2xl font-black text-rosa">* </span> Análisis fisicoquímico de materias primas, material de empaque y producto.  
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black pt-5 ">
                  <span className="text-2xl font-black text-rosa">* </span>Análisis por HPLC de materia prima y producto
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black pt-5">
                  <span className="text-2xl font-black text-rosa">* </span> Validación de metodologías analíticas.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN QUIENES SOMOS*/}
      {/*FORMULARIO*/}
      <div className="bg-[url('/static/images/bg-big-hexagon-right.png')]  bg-no-repeat bg-right-top mt-32">
        <div className="container mx-auto  ">
          <div className="text-center text-4xl font-black text-azul_oscuro">Solicite mas informacion de SIGMACORP MAQUILA</div>
          <div className="my-16 text-lg text-gris gap-y-20 bg-gris_claro rounded-3xl w-[800px] mx-auto p-12">
            <form className='grid grid-cols-2 gap-5'>
              <div class="mb-2 col-span-2">
                
                <input
                  type="text"
                  id="nombre"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Nombre"
                  required=""
                />
              </div>
              <div class="mb-2 ">
                
                <input
                  type="text"
                  id="empresa"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Empresa"
                  required=""
                />
              </div>
              <div class="mb-2">
                
                <input
                  type="text"
                  id="pais"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="País"
                  required=""
                />
              </div>
              <div class="mb-2">
                
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Correo electrónico"
                  required=""
                />
              </div>
              <div class="mb-2">
                
                <input
                  type="text"
                  id="telefono"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Teléfono"
                  required=""
                />
              </div>
              <div class="mb-2 col-span-2">
                
                <input
                  type="text"
                  id="asunto"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Asunto"
                  required=""
                />
              </div>
              <div class="mb-2 col-span-2">
                
                <textarea
                  rows="5"
                  id="mensaje"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Mensaje"
                  required=""
                />
              </div>


              
              <div class="mb-2 col-span-2 text-center">
              <button
                type="submit"
                className="mx-auto text-white bg-rosa hover:bg-azul_oscuro focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl font-normal  px-24 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Enviar
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/*FIN FORMULARIO*/}
    </>
  )
}
