import { items_card } from '@/data/homepage'
import ItemCard from '@/components/homepage/ItemCard'

import useTranslation from 'next-translate/useTranslation'
import LightBox from '@/components/about/LightBox'

import dynamic from 'next/dynamic'

import { motion } from 'framer-motion'

import { dehydrate, QueryClient, useQuery } from 'react-query'

export async function getStaticProps({ locale }) {
  const queryClient = new QueryClient()

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Contacto({ posts, locale, availableLocales }) {
  const { t } = useTranslation()
  return (
    <>
      {/**BANNER */}
      <div className="bg-[url('/static/images/about/fondo.png')] bg-cover bg-center h-96">
        <div className="bg-gradient-to-r from-white/80 to-white/0 h-96">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '0px' }}
          >
            <div className="container mx-auto pt-24">
              <div className="flex flex-row font-extrabold text-5xl">
                <div className="text-pink-700 ">CONTACTO</div>
                <div className="text-violeta">SIGMACORP</div>
              </div>
              <div className="">
                <a href="#" className="hover:text-pink-700 font-bold">
                  Inicio
                </a>{' '}
                / Contacto
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN BANNER*/}

      {/*QUIENES SOMOS*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto py-14">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0 }}
            viewport={{ margin: '-300px' }}
          >
            <div></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0 }}
            viewport={{ margin: '-100px' }}
          >
            <div className="">
              <p className="text-xl sm:text-2xl md:text-6xl text-pink-700 font-extrabold">
                NUESTRAS
              </p>
              <p className="text-xl sm:text-2xl md:text-6xl text-blue-800 font-extrabold pb-8">
                UBICACIONES
              </p>
              <div className="text-lg text-gray-600 pb-8">
                <p className="pb-8">
                  Contamos con <strong>8 oﬁcinas</strong> y almacenes regionales en los
                  departamentos de:{' '}
                  <strong>
                    La Paz, Santa Cruz, Cochabamba, Sucre, Tarija, Potosí Oruro y Pando.
                  </strong>{' '}
                  Sin embargo nuestros productos son distribuidos en toda Bolivia.
                </p>
                <p className="pb-8">
                  La planta industrial está localizada en el Parque Santivañez, Cochabamba /
                  Bolivia. Construida instalada y equipada con{' '}
                  <strong>
                    maquinaria europea cumpliendo todas las exigencias de la normativa 5
                  </strong>{' '}
                  de la OMS para las buenas prácticas de manufactura, garantizando productos de
                  calidad.
                </p>
                <p className="pb-8">
                  Puede comunicarse con nosotros a través de nuestra línea gratuita{' '}
                  <strong>800 171700</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN QUIENES SOMOS*/}
      {/*TELEFONO Y DIRECCION*/}
      <div className="container mx-auto grid grid-cols-2 gap-8 w-2/3">
        <div>
          <div className="text-3xl font-black text-negro">
            <img
              className="-mt-3 float-left mr-6"
              src="/static/images/contacts/icon_phone.png"
              alt="Telefonos"
            />
            Teléfonos de Contacto
          </div>
          <div className="text-lg py-5">Tel: 4780411 Tel: 4780412 Tel: 4780413 Tel: 4780414</div>
        </div>
        <div>
          <div className="text-3xl font-black text-negro">
            <img
              className="-mt-3 float-left mr-6"
              src="/static/images/contacts/icon_location.png"
              alt="Telefonos"
            />
            Planta Industrial
          </div>
          <div className="text-lg py-5">
            Parque industrial Santivañez Av. VIII, manzano D, entre Av. I y Av. II Cochabamba –
            Bolivia.
          </div>
        </div>
      </div>

      {/*FIN TELEFONO Y DIRECCION*/}
      {/*BIOFARMA*/}
      <div className="bg-[url('/static/images/bg-big-hexagon-right.png')]  bg-no-repeat bg-right-top mt-32">
        <div className="container mx-auto  ">
          <div className="text-center text-6xl font-black text-azul_oscuro">BIOFARMA</div>
          <div className="grid grid-cols-3 gap-5 my-16 text-lg text-gris gap-y-20">
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">Cochabamba</p>
              <p className="">
                <strong>Tel: </strong>4362693 - 4487372
              </p>
              <p>
                <strong>(1) </strong>Edif. Ichiban Oficina 1 Esq. Chipay y Apurimak
              </p>
              <p>
                <strong>(2) </strong> Calle Beni #358, entre Av. Santa Cruz y calle Tomas Frias
                Edif. Jose Maria Of. 3
              </p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">La Paz</p>
              <p className="">
                <strong>Tel: </strong>2245564 - 2222178
              </p>
              <p>Pasaje Florida #40 Zona Miraflores</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">Santa Cruz</p>
              <p className="">
                <strong>Tel: </strong>3355931 - 3394375
              </p>
              <p>Barrio La Merced - Calle 5 #4250 entre Av. Beni y Av.Principal</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">El Alto</p>
              <p className="">
                <strong>Tel: </strong>2814843 - 2814843
              </p>
              <p>Av. Ciudad Satelite Esq. Vicente Lecuna edif. Jordan N º 1314 piso 4 of. 5</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">Oruro</p>
              <p className="">
                <strong>Tel: </strong>5257457 - 5286955
              </p>
              <p>Calle 6 de Octubre Nº 5925, entre Adolfo Mier y Junin</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">Sucre</p>
              <p className="">
                <strong>Tel: </strong>6461449
              </p>
              <p>Calle Junín Nº 765 2do. Piso (Entre Olañeta y Ayacucho Zona Central)</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">Potosí</p>
              <p className="">
                <strong>Tel: </strong>6263600 - 6228107
              </p>
              <p>Calle Bustillos Nº 1196 – A casi esquina Cobija</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">Tarija</p>
              <p className="">
                <strong>Tel: </strong>6668167
              </p>
              <p>Calle Delfín Pino esquina Ejército, Barrio Fátima</p>
            </div>
          </div>
        </div>
      </div>

      {/*FIN BIOFARMA*/}
      {/*NUTRACEUTICOS*/}
      <div className="bg-[url('/static/images/bg-big-hexagon.png')]  bg-no-repeat bg-left-top mt-32">
        <div className="container mx-auto mt-20 ">
          <div className="text-center text-6xl font-black text-azul_oscuro">
            SIGMA NUTRACÉUTICOS
          </div>
          <div className="grid grid-cols-3 gap-5 my-16 text-lg text-gris gap-y-20">
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">Cochabamba</p>
              <p>
                <strong>Tel: </strong>(591-4) 404 8051
              </p>
              <p>
                <strong>Cel: </strong>78349056
              </p>
              <p>Eudoro Galindo Nº 1912</p>
              <p className="text-negro font-bold">info.nutraceuticos@sigmacorp.com.bo</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">La Paz</p>
              <p>
                <strong>Tel: </strong>(591-2) 224 4714
              </p>
              <p>
                <strong>Cel: </strong>78349059
              </p>
              <p>Díaz Romero Nº 1690</p>
              <p>(Paola Bazoalto R.)</p>
              <p className="text-negro font-bold">pbazoalto@sigmacorp.com.bo</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">Santa Cruz</p>
              <p>
                <strong>Tel: </strong>(591-3) 341 9574
              </p>
              <p>
                <strong>Cel: </strong>78349058
              </p>
              <p>Radial 27 c. Los Guapos Nº 30</p>
              <p>(Juan Carlos López Z.)</p>
              <p className="text-negro font-bold">jclopez@sigmacorp.com.bo</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">Tarija</p>
              <p>
                <strong>Tel: </strong>(591-4) 667 5833
              </p>
              <p>
                <strong>Cel: </strong>75980396
              </p>
              <p>C. Rosendo Estensoro #1023</p>
              <p>(Carmen Burgos T.)</p>
              <p className="text-negro font-bold">cburgos@sigmacorp.com.bo</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">Chuquisaca</p>
              <p>
                <strong>Tel: </strong>(591-4) 645 8031
              </p>
              <p>
                <strong>Cel: </strong>75980466
              </p>
              <p>C. Olañeta Nº 311</p>
              <p>(Mercedes Pérez L.)</p>
              <p className="text-negro font-bold">mperez@sigmacorp.com.bo</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">Potosí</p>
              <p>
                <strong>Tel: </strong>(591-2) 623 1101
              </p>
              <p>
                <strong>Cel: </strong>75980439
              </p>
              <p>C. La Paz N° 1385</p>
              <p>(Jenny Canaviri C.)</p>
              <p className="text-negro font-bold">jcanaviri@sigmacorp.com.bo</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">Oruro</p>

              <p>
                <strong>Cel: </strong>75980439
              </p>
              <p>c. Reynaldo Vasquez N° 110</p>
              <p>(José Aramayo)</p>
              <p className="text-negro font-bold">jaramayo@sigmacorp.com.bo</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">Beni</p>

              <p>
                <strong>Cel: </strong>78349055
              </p>

              <p>(Mauricio Ramirez P.)</p>
              <p className="text-negro font-bold">mramirez@sigmacorp.com.bo</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-3xl font-black text-rosa">Pando</p>

              <p>
                <strong>Cel: </strong>75980434
              </p>
              <p>C. Bahía Nº 088</p>
              <p>(Marleny Alarcón)</p>
              <p className="text-negro font-bold">malarcon@sigmacorp.com.bo</p>
            </div>
          </div>
        </div>
      </div>

      {/*FIN NUTRACEUTICOS*/}

      {/*FORMULARIO*/}
      <div className="bg-[url('/static/images/bg-big-hexagon-right.png')]  bg-no-repeat bg-right-top mt-32">
        <div className="container mx-auto  ">
          <div className="text-center text-6xl font-black text-azul_oscuro">CONTÁCTENOS</div>
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
