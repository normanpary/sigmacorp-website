import useTranslation from 'next-translate/useTranslation'
import Formulario from '@/components/contacts/Formulario'
import { motion } from 'framer-motion'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { useState } from 'react'
import { Formik, Form, Field } from 'formik'

export async function getStaticProps({ locale }) {
  const queryClient = new QueryClient()

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
export default function Maquila() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')
  let data = {
      name,
      email,
      message
    }
  fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setBody('')
      }
    })
  }

  return (
    <>
      {/**BANNER */}
      <div className="bg-gris_claro bg-cover bg-center h-64">
        <div className="bg-gradient-to-r from-white/80 to-white/0 h-64">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            viewport={{ margin: '0px' }}
          >
            <div className="container mx-auto pt-16">
              <div className="flex flex-row font-extrabold text-5xl">
                <div className="text-pink-700 ">FARMACO</div>
                <div className="text-violeta">VIGILANCIA</div>
              </div>
              <div className="">
                <a href="/" className="hover:text-pink-700 font-bold">
                  Inicio
                </a>{' '}
                / Fármaco Vigilancia
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN BANNER*/}

      {/**te gustaria cotizacion */}
      <div className="bg-[url('/static/images/bg-big-hexagon-right.png')] bg-no-repeat bg-right-top">
        <div className=" container mx-auto p-8  ">
          <div className="pt-5 pb-10">
            <h2 className="text-violeta text-2xl md:text-4xl font-extrabold pb-10">
              Unidad de farmacovigilancia:
            </h2>
            <div className="space-y-5 font-light text-xl pl-10">
              <p>
                La seguridad y calidad de los medicamentos que usted prescribe y consume, es
                responsabilidad de los laboratorios farmacéuticos . Por eso en SIGMA CORP., tenemos
                el compromiso como empresa responsable y ética de ofrecer a nuestros clientes
                medicamentos seguros y de la más alta calidad, por lo que de manera permanente se
                recopilan, investigan , vigilan y evalúan los eventos adversos que pudieran producir
                nuestros medicamentos.
              </p>
              <p>
                Para ello contamos con un programa de farmacovigilancia sólido y perfectamente bien
                estructurado, de acuerdo a los lineamientos establecidos por la Organización Mundial
                de la Salud (OMS) y las Autoridades Sanitarias Nacionales .
              </p>
              <p>
                Le recordamos que usted como paciente o consumidor junto con los profesionales de la
                salud, son la parte más importante del programa y que cualquier reporte de evento
                adverso, información o queja que usted tenga como resultado de la administración de
                cualquiera de nuestros medicamentos, lo puede notificar voluntariamente a nuestra
                unidad de farmacovigilancia a través de los siguientes medios de contacto y que se
                encuentran disponibles las 24 horas del día los 365 días del año.
              </p>
            </div>
          </div>
          <div className="pt-5 pb-10">
            <h2 className="text-violeta text-2xl md:text-4xl font-extrabold pb-10">
              ¿Qué hacer en caso de una de sospecha de reacciones adversas de algún medicamento?
            </h2>
            <div className="space-y-5 font-light text-xl pl-10">
              <p>Reportar lo antes posible el caso, al área de Farmacovigilancia de SIGMA CORP.</p>
              <p>
                Su reporte es importante, la información proporcionada es manejada de forma
                responsable y confidencial. Puede hacerlo de manera electrónica a través del
                siguiente formulario o en su defecto a los teléfonos de contacto siguientes ( 591)
                4-4720411, ( 591) 4-4780412 INT.273.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      {/*FORMULARIO*/}
      <div className="bg-[url('/static/images/bg-big-hexagon.png')]  bg-no-repeat bg-left-top ">
        <div className="container mx-auto  ">
        <div className="pt-5 pb-10">
            <h2 className="text-rosa text-2xl md:text-4xl font-extrabold pb-10">
            Formulario de sospecha de reacciones adversas
            </h2>
            <div className="space-y-5 font-light text-xl pl-10">
              <p>Los campos con (*) son de caracter obligatorio</p>
             
            </div>
          </div>
          <div className="mb-20 text-lg text-gris gap-y-20 bg-gris_claro rounded-3xl w-3/4 mx-auto p-12">
            
            <Formik
              initialValues={{ name: '', email: '' }}
                  validate={values => {
                    const errors = {}
                    if (!values.name) {
                      errors.name = 'Required'
                    }
                    if (!values.email) {
                      errors.email = 'Required'
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = 'Invalid email address'
                    }
                    return errors
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2))
                      setSubmitting(false)
                    }, 400)
                  }}
            
            >
            <form className='grid grid-cols-12 gap-5' onSubmit={handleSubmit}>
              <div className="uppercase text-xl font-black col-span-12">
              Datos del medicamento
              </div>
              <div class="mb-2 col-span-6">
                <input
                  type="text"
                  name="productName"
                  onChange={(e)=>{setProductName(e.target.value)}} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Medicamento / Producto"
                  
                />
              </div>
              <div class="mb-2 col-span-3">
                
                <input
                  type="text"
                  name="productLot"
                  onChange={(e)=>{setProductLot(e.target.value)}} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Lote / Número de lote"
                  required=""
                />
              </div>
              <div class="mb-2 col-span-3">
                
                <input
                  type="text"
                  id="caducidad"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Fecha de caducidad"
                  required=""
                />
              </div>

              <div className="uppercase text-xl font-black col-span-12">
              Datos de quien reporta
              </div>
              <div class="mb-2 col-span-6">
                <input
                  type="text"
                 
                  name="name"
                  onChange={(e)=>{setName(e.target.value)}} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Nombres"
                  required=""
                />
              </div>
              <div class="mb-2 col-span-3">
                
                <input
                  type="text"
                  id="apellidos"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Apellidos"
                  required=""
                />
              </div>
              <div class="mb-2 col-span-3">
                
                <input
                  type="text"
                  id="ci"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="CI / Pasaporte"
                  required=""
                />
              </div>
              
              <div class="mb-2 col-span-6">
                <input
                  type="text"
                  id="direccion"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Dirección"
                  required=""
                />
              </div>
              <div class="mb-2 col-span-2">
                
                <input
                  type="text"
                  name="email"
                  onChange={(e)=>{setEmail(e.target.value)}} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Teléfono"
                  required=""
                />
              </div>
              <div class="mb-2 col-span-2">
                
                <input
                  type="text"
                  id="edad"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Edad"
                  required=""
                />
              </div>
              <div class="mb-2 col-span-2">
                
                <input
                  type="text"
                  id="genero"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Género"
                  required=""
                />
              </div>

              <div className="uppercase text-xl font-black col-span-12">
              Datos del evento adverso
              </div>
              <div class="mb-2 col-span-6">
                <input
                  type="text"
                  id="fechaEvento"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Fecha del evento"
                  required=""
                />
              </div>
              <div class="mb-2 col-span-6">
                
                
              </div>
              <div class="mb-2 col-span-12">
                
                <textarea
                  rows="5"
                  name="mensaje"
                  onChange={(e)=>{setMessage(e.target.value)}} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xl italic rounded-lg focus:ring-rosa focus:border-rosa block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-3"
                  placeholder="Descripción detallada del evento y sintomas"
                  required=""
                />
              </div>

              
              <div class="mb-2 col-span-12 text-center">
              <button
                type="submit"
                className="mx-auto text-white bg-rosa hover:bg-azul_oscuro focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-2xl font-normal  px-24 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                
              >
                Enviar reporte a Farmacovigilancia
              </button>
              </div>
            </form>
            </Formik>
          </div>
        </div>
      </div>

      {/*FIN FORMULARIO*/}
    </>
  )
}
