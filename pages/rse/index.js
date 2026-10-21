import { items_card } from '@/data/homepage'

import useTranslation from 'next-translate/useTranslation'
import LightBox from '@/components/about/LightBox'

import dynamic from 'next/dynamic'

import { motion } from 'framer-motion'

import { dehydrate, QueryClient, useQuery } from 'react-query'
import EventCard from '@/components/eventos/EventCard'
import { getRseEvents } from 'queries/queries'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['queryEvents', context.locale], async () =>
    getRseEvents(context.locale)
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
    async () => getRseEvents(router.locale)
  )


  if(router.locale==="es"){
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
            <div className="container mx-auto px-4 xl:px-0 pt-16 md:pt-24">
              <div className="font-extrabold text-3xl sm:text-5xl lg:text-6xl">
                <div className="text-pink-700 ">RESPONSABILIDAD&nbsp;</div>
                <div className="text-violeta">SOCIAL EMPRESARIAL</div>
              </div>
              <div className="">
                <a href="../" className="hover:text-pink-700 font-bold">
                  Inicio
                </a>{' '}
                / Responsabilidad Social Empresarial
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN BANNER*/}
      {/*POLÍTICA DE RESPONSABILIDAD SOCIAL EMPRESARIAL*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          POLÍTICA DE RESPONSABILIDAD SOCIAL EMPRESARIAL
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            En nuestra empresa estamos comprometidos con la responsabilidad social empresarial (RSE) y en asegurar que nuestras actividades sean éticas, sostenibles y contribuyan al bienestar de la sociedad y del medio ambiente en el que operamos. Por lo tanto, nos complace presentar nuestra política de RSE basada en la norma ISO 26000, adaptada a las necesidades de nuestra industria farmacéutica.
            </p>
            <p>
            Ética: Nos comprometemos a actuar con transparencia y honestidad en todas nuestras operaciones, cumpliendo con las normas y regulaciones vigentes en el mercado farmacéutico y promoviendo prácticas éticas y justas en todas nuestras relaciones comerciales.
            </p>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Derechos humanos: Nos comprometemos a respetar los derechos humanos de nuestros colaboradores y partes interesadas con las que interactuamos, asegurando que nuestras actividades no promuevan ni toleren la discriminación, el acoso o la explotación laboral.</li>
              <li>Prácticas laborales: Nos comprometemos a promover prácticas laborales justas y seguras para nuestros colaboradores, asegurando la igualdad de oportunidades y la no discriminación en el lugar de trabajo, y promoviendo la capacitación y el desarrollo profesional de nuestros empleados.</li>
              <li>Medio ambiente: Nos comprometemos a reducir nuestro impacto ambiental y promover la sostenibilidad, desarrollando prácticas de gestión ambiental que minimicen la generación de residuos, emisiones y consumo de recursos naturales.</li>
              <li>Prácticas justas de operación: Nos comprometemos a asegurar que nuestras operaciones sean éticas y justas en todas las etapas de la cadena de suministro, producción y distribución, promoviendo la transparencia y el diálogo con nuestros proveedores y clientes, y evitando prácticas comerciales deshonestas.</li>
              <li>Asuntos de consumidores: Nos comprometemos a asegurar la calidad y seguridad de nuestros productos farmacéuticos, y a brindar información clara y precisa sobre sus beneficios y riesgos para los consumidores y pacientes.</li>
              <li>Participación activa en la comunidad: Nos comprometemos a participar activamente en las comunidades donde operamos, contribuyendo al desarrollo social y económico de las mismas, y promoviendo la colaboración y el diálogo entre los diferentes actores.</li>
            </ul>
            <p>
            Esta política de RSE de Sigma Corp. S.R.L. está diseñada para guiar nuestras acciones y decisiones, y para asegurar que nuestras operaciones estén en línea con nuestras responsabilidades sociales y ambientales. Nos comprometemos a revisar y actualizar esta política de manera periódica para asegurar su relevancia y efectividad en el tiempo.
            </p>
            </div>
          </div>
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/politica-rse.png'} alt="Carousel" />
          </div>
        </div>
      </div>
      {/*FIN POLÍTICA DE RESPONSABILIDAD SOCIAL EMPRESARIAL*/}
      {/*POLÍTICA DE LA CALIDAD*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/certificaciones.png'} alt="Carousel" />
          </div>
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          POLÍTICA DE LA CALIDAD
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            La empresa Sigma asegura la calidad e inocuidad con acciones planificadas y sistemáticas, cumpliendo de esta manera requisitos predefinidos elaborados internamente, como también estándares internacionales propios de la industria farmacéutica en conjunto con los estándares de inocuidad alimentaria y dispositivos médicos. Para asegurar nuestra calidad, trabajamos en la pureza y calidad de la materia prima, la presentación y estabilidad de los productos que ofrecemos al mercado farmacéutico, nutracéutico y otros.
            </p>
            <p>
            Políticas específicas de calidad de la empresa:
            </p>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Se debe preservar por encima de cualquier situación la calidad de los medicamentos y nutracéuticos, ya que estos afectan de manera directa a la salud de los consumidores.</li>
              <li>Todas las acciones de producción deben ser realizadas bajo las exigencias de las normas de Buenas Prácticas de Manufactura en conjunto con la NB-ISO 22000, ISO 13485 como sistema de garantía de calidad.</li>
              <li>La documentación relacionada al cumplimiento de estas normas deberá ser de cumplimiento obligatorio para todo el personal que trabaja en la empresa.</li>
              <li>Todos los empleados de la organización deben estar profundamente comprometidos en el cumplimiento del sistema de aseguramiento de calidad establecido (BPM, BPL, BPT, BPA, ISO 22000 e ISO 13485).</li>
              <li>Las responsabilidades de todo el personal deberán ser cumplidas según lo establecido por los procedimientos escritos correspondientes ya que estos aseguran la mejor manera de realizar las operaciones sin comprometer la calidad de los productos.</li>
              <li>La falta de cumplimiento de cualquier exigencia o procedimiento escrito será sancionada con las medidas adecuadas.</li>
              <li>Es obligación del personal reportar cualquier anormalidad o falta de cumplimiento en las normas que haya sido detectado en algún miembro de la empresa.</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      {/*FIN POLÍTICA DE LA CALIDAD*/}
      {/*POLÍTICA AMBIENTAL*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          POLÍTICA AMBIENTAL
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            La industria químico farmacéutica Sigma Corp. S.R.L. ha establecido e implementado en sus procesos un sistema de gestión ambiental basado en los requisitos de la norma ISO 14001:2015.
            </p>
            <p>
            Sigma Corp., industria líder en el desarrollo y fabricación de medicamentos, cosméticos, dispositivos médicos y nutracéuticos, en los más de 40 años de trabajo ha ido desarrollando un entendimiento profundo del rubro y estableciendo una fuerte relación con los consumidores.
            </p>
            <p>
            Nuestra política ambiental define el compromiso de realización de nuestra actividad dentro de los parámetros de desarrollo sostenible, manteniendo el control y la gestión de los aspectos ambientales que produce, especialmente en aquellos más significativos. Asimismo, establece un marco común para la definición de los objetivos y la realización de las actividades que contribuyan a la mejora continua del sistema de gestión ambiental.
            </p>
            <p>
            Para cumplir con estos compromisos y alcanzar los objetivos establecidos, Sigma Corp. ha establecido los siguientes principios fundamentales:
            </p>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Asegurar la protección del medio ambiente, trabajando de forma respetuosa, previniendo la contaminación y minimizando los efectos ambientales producidos como consecuencia de la actividad que desarrolla la industria.</li>
              <li>Fomentar la investigación e implementar tecnologías que contribuyan a la mitigación del cambio climático y que posibiliten una utilización sostenible de los recursos naturales.</li>
              <li>Asegurar el cumplimiento de los requisitos legales ambientales aplicables y los requisitos voluntariamente asumidos por la industria.</li>
              <li>Mantener la sensibilización y concientización de todos nuestros empleados, fomentando la formación de respeto ambiental de los mismos y favoreciendo la participación activa, incluyendo las sugerencias de mejora propuestas por ellos con objetivo de fomentar la mejora continua.</li>
              <li>Definir objetivos y metas concretas y medibles dentro de un Plan de Manejo Ambiental, siendo revisable según su consideración una vez al año mediante el Informe Ambiental Anual.</li>
              <li>Realizar una evaluación periódica anual de los aspectos ambientales derivados de la actividad, a efectos de mantenimiento y mejora continua del sistema de gestión ambiental.</li>
            </ul>
            <p>
            Asimismo, la identificación y evaluación de los aspectos ambientales permite a la compañía mantener una gestión ambiental basada en tres pilares:
            </p>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Precaución: evitar acciones que puedan implicar un riesgo ambiental independientemente de la gravedad que puedan tener si llegan a materializarse.</li>
              <li>Prevención: evitar las consecuencias ambientales asociadas a una determinada actuación.</li>
              <li>Corrección: prever la forma de contrarrestar las consecuencias ambientales de un riesgo en caso de que se materialice.</li>
            </ul>
            <p>
            Todos los que integran la I.Q.F. Sigma Corp. asumen estos principios, y es nuestra responsabilidad llevarlos a la práctica. Sigma Corp. impulsa la mejora ambiental y asigna los recursos necesarios para asegurar la exitosa implantación de esta política ambiental.
            </p>
            <p>
            Incluir dentro de la política de reciclaje el traslado de los residuos a la fuente recicladora, en caso de que estos sean especiales.
            </p>
            </div>
          </div>
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/medio-ambiente.png'} alt="Carousel" />
          </div>
        </div>
      </div>
      {/*FIN POLÍTICA AMBIENTAL*/}
      {/*COMERCIO JUSTO*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/comercio-justo.png'} alt="Carousel" />
          </div>
          <div className="md:col-span-2 py-4 md:p-10">
            <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">COMERCIO JUSTO</div>
            <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
              <p>
              Las prácticas de comercio justo implementadas por Sigma Corp. son aquellas que buscan garantizar una relación comercial justa y equitativa con los productores de nuestro país y países en desarrollo. Estas prácticas promueven la transparencia, la responsabilidad y la sostenibilidad en todas las etapas de la cadena de suministro, desde la producción hasta la venta al consumidor final. 
              </p>
              <p>
              Se enfoca en mejorar la calidad de vida de los productores y sus comunidades, fomentando el desarrollo sostenible y reduciendo la pobreza en países en desarrollo. 
              </p>
              <p>Además, también promueve la conciencia de los consumidores sobre las condiciones de producción de los productos que compran y su impacto en el mundo.</p>
              <p>Entre nuestras principales prácticas de comercio justo se encuentran:</p>
              <ul className='list-decimal ml-6 md:ml-10 space-y-3'>
                <li>Pago de precios justos.</li>
                <li>Trabajo en condiciones seguras y dignas para los trabajadores.</li>
                <li>Protección del medio ambiente.</li>
                <li>
                Pago justo y transparente a los proveedores de materias primas. 
                </li>
                <li>Respeto por los derechos humanos y laborales.</li>
                <li>Promoción de la igualdad de género y el empoderamiento de las mujeres.</li>
                <li>Evaluación continua y mejora de nuestras prácticas. </li>
                <li>Participación en iniciativas de comercio justo. </li>
              </ul>
              <p>
              Nos comprometemos a trabajar de manera ética y responsable en todas las etapas de nuestra cadena de suministro para garantizar un comercio justo y sostenible.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*FIN COMERCIO JUSTO*/}
      {/*PAGO DE SALARIO JUSTO A TRABAJADORES*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
            PAGO DE SALARIO JUSTO A TRABAJADORES
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            Sigma Corp. ha implementado políticas de pago de salario justo a trabajadores. Entre nuestras principales prácticas se encuentran:
            </p>
            <ul className='list-decimal ml-6 md:ml-10 space-y-3'>
              <li>Pago justo y transparente. </li>
              <li>Evaluación periódica de los salarios.</li>
              <li>Respeto por los derechos laborales.</li>
              <li>Igualdad de oportunidades.</li>
              <li>Promoción de la formación y el desarrollo.</li>
              <li>Evaluación continua y mejora de nuestras prácticas.</li>
            </ul>
            <p>
            Nos comprometemos a trabajar de manera ética y responsable para garantizar un pago justo y adecuado a todos los trabajadores eventuales o a destajo de nuestra empresa, en línea con los principios de justicia social y equidad laboral.
            </p>
            </div>
          </div>
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/salario-justo.png'} alt="Carousel" />
          </div>
        </div>
      </div>
      {/*FIN PAGO DE SALARIO JUSTO A TRABAJADORES*/}
      {/*COMPROMISO CONTRA LA DISCRIMINACIÓN*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/contra-discriminacion.png'} alt="Carousel" />
          </div>
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          COMPROMISO CONTRA LA DISCRIMINACIÓN
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            En Industria Químico Farmacéutica SIGMA Corp. SRL, creemos en la igualdad de oportunidades y nos comprometemos a proporcionar un ambiente de trabajo justo, respetuoso e inclusivo. Por lo tanto, nos comprometemos a no discriminar a ningún empleado o solicitante de empleo por motivos de género, orientación sexual, edad, raza, color, religión, discapacidad, origen étnico o cualquier otra categoría protegida por las leyes aplicables. Esta política se aplica a todos los aspectos del empleo, incluyendo, pero no limitado a, la contratación, la promoción, el salario, las prestaciones, la formación y el desarrollo, y la terminación del empleo.
            </p>
            <p>
            La discriminación puede manifestarse de diversas maneras, incluyendo, pero no limitado a, los siguientes comportamientos:
            </p>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Trato desigual o injusto en el empleo o en los procesos de selección.</li>
              <li>Acoso, intimidación o burlas hacia cualquier empleado o solicitante de empleo.</li>
              <li>Comentarios o insinuaciones de naturaleza ofensiva, denigrante o despectiva.</li>
              <li>Asignación desigual de tareas, responsabilidades u oportunidades.</li>
              <li>Restricción o negación de oportunidades de desarrollo o promoción.</li>
            </ul>
            <p>
            Cualquier empleado que experimente o presencie cualquier forma de discriminación debe informar de inmediato al departamento de Recursos Humanos de la empresa.
            </p>
            <p>
            En Industria Químico Farmacéutica SIGMA Corp. SRL nos comprometemos a:
            </p>
            <ul className='list-[lower-alpha] ml-6 md:ml-10 space-y-3'>
              <li>Tomar medidas adecuadas y rápidas para investigar cualquier informe de discriminación y tomar las medidas necesarias para remediar la situación.</li>
              <li>Proporcionar la formación y los recursos necesarios para fomentar un ambiente de trabajo inclusivo y respetuoso. Los gerentes y supervisores recibirán capacitación sobre cómo reconocer y prevenir la discriminación, y se espera que todos los empleados cumplan con esta política.</li>
              <li>Crear y mantener un ambiente de trabajo que valore la diversidad y la inclusión, y que respete los derechos y la dignidad de cada empleado.</li>
            </ul>
            <p>
            Esta política de no discriminación es un reflejo de nuestro compromiso de crear un ambiente de trabajo justo y equitativo para todos.
            </p>
            </div>
          </div>
        </div>
      </div>
      {/*FIN COMPROMISO CONTRA LA DISCRIMINACIÓN*/}
      {/*IMPLENTACION DE MANUAL DE ETICA, CONDUCTA Y BUEN GOBIERNO*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          IMPLEMENTACIÓN DE MANUAL DE ÉTICA, CONDUCTA Y BUEN GOBIERNO
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            El Manual de Ética, Conducta y Buen Gobierno, describe las responsabilidades que tienen los empleados y la alta dirección en el cumplimiento de las normas, leyes y reglamentaciones de Sigma Corp. Estas normas de conducta se aplican a todos los empleados y son parte integral dentro de la relación laboral de los empleados. 
            </p>
            <p>
            Sigma Corp. entiende que el ambiente de trabajo puede tener un impacto significativo en la salud y el bienestar de los empleados. Un ambiente de trabajo favorable puede mejorar el rendimiento y la motivación de los empleados, mientras que un ambiente de trabajo desfavorable puede generar estrés, fatiga y enfermedades relacionadas con el trabajo. Por esta razón, la empresa se esfuerza por crear un ambiente saludable, seguro y productivo para sus empleados. Que incluye medidas como la mejora de las condiciones físicas del espacio de trabajo, la promoción de relaciones interpersonales saludables y la implementación de políticas y prácticas laborales que fomenten el bienestar y la satisfacción laboral de los empleados. Tener empleados satisfechos es una de las prioridades del departamento de recursos humanos, ya que, al tener empleados felices, se consigue un alto rendimiento y mejores resultados. Cuando se le da importancia a lo que los empleados sienten o piensan y valoran sus aportaciones, de esta forma se consigue que la cadena de trabajo se vaya fortaleciendo y que el personal se esfuerce al máximo para lograr los objetivos de la organización. 
            </p>
            

            <p>
            En Sigma Corp. se cultivan las relaciones duraderas, ya que las personas, que son nuestros recursos, son nuestro bien más valioso. Esta fidelidad es el resultado del incentivo al desarrollo de talentos, a la calidad de vida y a la valorización de los equipos. Con este objetivo, Sigma Corp. promueve constantemente la calificación y el desarrollo personal y profesional de los empleados. Se trata de cursos de liderazgo, comportamiento, técnicos, programas de formación profesional, entre otras iniciativas.
            </p>
            <p>
            En las promociones de cargos, los empleados participan en selecciones en las cuales son evaluados mediante criterios claros e igualitarios en el sistema de calificación del personal. 

            </p>
            <p>
            En Sigma Corp. se tiene una política contra la explotación laboral. Cualquier empleado que permanezca trabajando en horarios extraordinarios, recibirá el pago correspondiente por las horas extraordinarias trabajadas. Sigma Corp. no emplea ni utiliza como recurso laboral a menores de edad.
            </p>
            </div>
          </div>
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/manual-etica.png'} alt="Carousel" />
          </div>
        </div>
      </div>
      {/*FIN IMPLENTACION DE MANUAL DE ETICA, CONDUCTA Y BUEN GOBIERNO*/}
      {/*POLÍTICA DE ANTICORRUPCIÓN Y TRANSPARENCIA*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/anticorrupcion.png'} alt="Carousel" />
          </div>
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          POLÍTICA DE ANTICORRUPCIÓN Y TRANSPARENCIA
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            La presente política tiene como finalidad establecer los principios, lineamientos y compromisos de Sigma Corp. S.R.L. en la prevención, detección y sanción de actos de corrupción, en concordancia con el Código de Ética, garantizando el desarrollo de nuestras actividades bajo criterios de ética, legalidad, transparencia y responsabilidad social.
            </p>
            <p>
            Esta política aplica a:
            </p>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Todos los trabajadores, directivos y representantes de Sigma Corp.</li>
              <li>Proveedores, contratistas, distribuidores, clientes y terceros que mantengan relaciones comerciales con la empresa.</li>
            </ul>
            <strong>PRINCIPIOS RECTORES</strong>
            <ul className='list-decimal ml-6 md:ml-10 space-y-3'>
              <li>Cero tolerancia a la corrupción: Queda prohibido ofrecer, aceptar, solicitar o autorizar sobornos, pagos indebidos, comisiones ilícitas o cualquier ventaja indebida.</li>
              <li>Cumplimiento normativo: Todos los colaboradores deben acatar la legislación boliviana, los convenios internacionales y las políticas internas de la empresa.</li>
              <li>Transparencia: Toda relación comercial, contractual y administrativa debe estar documentada y disponible para auditoría.</li>
              <li>Integridad: Las decisiones deben tomarse en beneficio de la empresa y la sociedad, sin influencias indebidas.</li>
              <li>Responsabilidad compartida: Cada persona es responsable de actuar con ética y denunciar irregularidades.</li>
            </ul>
            <strong>LINEAMIENTOS ESPECÍFICOS</strong>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Prohibición de sobornos y pagos indebidos: Ningún colaborador podrá realizar o aceptar pagos no autorizados, regalos, favores o beneficios que puedan influir en decisiones de negocio.</li>
              <li>Conflictos de interés: Los trabajadores deben declarar cualquier situación que pueda comprometer su imparcialidad (ej.: vínculos familiares con proveedores o clientes).</li>
              <li>Regalos y hospitalidad: Solo se permiten obsequios de valor simbólico o promocional, previamente autorizados por la Gerencia General.</li>
              <li>Contratación de terceros: Todo proveedor y contratista deberá firmar una declaración de compromiso de integridad y transparencia.</li>
              <li>Registro contable y documental: Todas las operaciones deben registrarse de manera exacta, verificable y auditable.</li>
            </ul>
            <strong>MECANISMOS DE DENUNCIA Y PROTECCIÓN</strong>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Sigma Corp. establecerá canales confidenciales de denuncia (correo electrónico y buzón físico).</li>
              <li>Se garantiza la protección al denunciante, evitando represalias o sanciones injustificadas.</li>
              <li>Toda denuncia será investigada por la Gerencia de RRHH en coordinación con Asesoría Legal.</li>
            </ul>
            <strong>SANCIONES</strong>
            <p>
            El incumplimiento de esta política dará lugar a acciones disciplinarias internas y, cuando corresponda, a acciones legales conforme a la normativa vigente en Bolivia.
            </p>
            </div>
          </div>
        </div>
      </div>
      {/*FIN POLÍTICA DE ANTICORRUPCIÓN Y TRANSPARENCIA*/}
      {/*POLÍTICA DE CUMPLIMIENTO NORMATIVO*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          POLÍTICA DE CUMPLIMIENTO NORMATIVO
          </div>
          <div className="font-bold text-xl md:text-2xl text-pink-700 pt-3">Basada en la Norma ISO 37301 – Sistemas de Gestión de Compliance</div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            La presente política establece el compromiso de Sigma Corp S.R.L. con el cumplimiento normativo, ético y regulatorio, alineado con la Norma Internacional ISO 37301:2021 de Sistemas de Gestión de Compliance. Su finalidad es prevenir riesgos legales y reputacionales, promover la integridad corporativa y garantizar que todas las operaciones se realicen bajo los principios de legalidad, transparencia y responsabilidad.
            </p>
            <p>
            Esta política es aplicable a todos los niveles de Sigma Corp S.R.L., incluyendo:
            </p>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Directivos y gerentes.</li>
              <li>Trabajadores y colaboradores.</li>
              <li>Proveedores, contratistas, distribuidores y socios estratégicos que interactúan con la empresa.</li>
            </ul>
            <strong>PRINCIPIOS RECTORES</strong>
            <ul className='list-decimal ml-6 md:ml-10 space-y-3'>
              <li>Legalidad: Cumplir todas las leyes, regulaciones y normas aplicables en Bolivia y en los mercados donde operamos.</li>
              <li>Transparencia: Asegurar que los procesos y decisiones de negocio sean claros y documentados.</li>
              <li>Responsabilidad: Cada colaborador es responsable de sus acciones en relación con la normativa vigente.</li>
              <li>Mejora continua: Revisar y actualizar periódicamente el sistema de cumplimiento normativo.</li>
              <li>Compromiso de liderazgo: La Alta Dirección es responsable de promover la cultura de cumplimiento en toda la organización.</li>
            </ul>
            <strong>LINEAMIENTOS ESPECÍFICOS</strong>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Identificación y evaluación de riesgos de cumplimiento en todas las áreas de la empresa.</li>
              <li>Implementación de controles internos para prevenir, detectar y gestionar incumplimientos.</li>
              <li>Establecimiento de un canal de denuncias seguro y confidencial para reportar irregularidades.</li>
              <li>Capacitación periódica de todo el personal en materia de cumplimiento y ética.</li>
              <li>Integración del cumplimiento normativo en la toma de decisiones estratégicas y operativas.</li>
              <li>Auditorías internas y externas periódicas para evaluar la eficacia del sistema.</li>
              <li>Reportes de cumplimiento a la Gerencia General.</li>
              <li>Planes de acción correctiva y preventiva (CAPA) frente a hallazgos.</li>
              <li>Actualización de políticas conforme a cambios normativos y mejores prácticas internacionales.</li>
            </ul>
            <strong>COMPROMISO INSTITUCIONAL</strong>
            <p>
            Sigma Corp. S.R.L. reafirma su compromiso con la ética, la transparencia y el cumplimiento normativo, como parte esencial de su cultura organizacional y de su responsabilidad social empresarial.
            </p>
            </div>
          </div>
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/cumplimiento-normativo.png'} alt="Carousel" />
          </div>
        </div>
      </div>
      {/*FIN POLÍTICA DE CUMPLIMIENTO NORMATIVO*/}
      {/*POLÍTICA DE COMUNICACIÓN LIBRE DE PUBLICIDAD SEXISTA*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/publicidad-no-sexista.png'} alt="Carousel" />
          </div>
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          POLÍTICA DE COMUNICACIÓN LIBRE DE PUBLICIDAD SEXISTA
          </div>
          <div className="font-bold text-xl md:text-2xl text-pink-700 pt-3">Rechazo a la cosificación de la mujer</div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            La presente política establece el compromiso de Sigma Corp S.R.L. con una comunicación y publicidad respetuosas de la dignidad de las mujeres, libres de sexismo, discriminación y cosificación, entendida como su representación como objetos o recursos de atracción, desconociendo su autonomía y capacidades.
            </p>
            <p>
            Es aplicable al personal y a los terceros que elaboren o difundan comunicación de la empresa: agencias, proveedores, distribuidores y representantes. Comprende publicidad, redes sociales, material promocional, visita médica, eventos y comunicación institucional.
            </p>
            <strong>PRINCIPIOS RECTORES</strong>
            <ul className='list-decimal ml-6 md:ml-10 space-y-3'>
              <li>Dignidad: Representar a las mujeres como personas con derechos, autonomía y capacidades.</li>
              <li>Igualdad: Evitar estereotipos que reproduzcan subordinación o roles exclusivos por género.</li>
              <li>Respeto: Rechazar la sexualización injustificada, la humillación y la normalización de la violencia.</li>
              <li>Responsabilidad: Revisar el contenido y contexto de los mensajes antes de su difusión.</li>
            </ul>
            <strong>LINEAMIENTOS ESPECÍFICOS</strong>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Prohibir piezas que utilicen el cuerpo o la imagen de la mujer como objeto, premio o recurso sexualizado ajeno al propósito del mensaje.</li>
              <li>Evitar textos, imágenes, bromas o sonidos que desvaloricen a las mujeres, justifiquen el acoso o las culpabilicen por la violencia.</li>
              <li>Promover representaciones diversas que reconozcan sus aportes profesionales, científicos, técnicos y sociales.</li>
              <li>Obtener autorización informada para utilizar imágenes o testimonios identificables y garantizar la participación voluntaria.</li>
              <li>Encargar a Marketing o al responsable de comunicación la revisión y autorización previa de las piezas, con revisión técnica cuando corresponda.</li>
              <li>Comunicar estos criterios a proveedores y representantes, recibir alertas y corregir o retirar contenidos que incumplan la política.</li>
            </ul>
            <strong>COMPROMISO INSTITUCIONAL</strong>
            <p>
            Sigma Corp S.R.L. reafirma su compromiso con una comunicación que contribuya a la igualdad y al respeto de las mujeres. La Alta Dirección respaldará la difusión, aplicación y revisión periódica de esta política.
            </p>
            </div>
          </div>
        </div>
      </div>
      {/*FIN POLÍTICA DE COMUNICACIÓN LIBRE DE PUBLICIDAD SEXISTA*/}
      {/*POLÍTICA DE PREVENCIÓN Y RECHAZO DE LA VIOLENCIA DE GÉNERO*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          POLÍTICA DE PREVENCIÓN Y RECHAZO DE LA VIOLENCIA DE GÉNERO
          </div>
          <div className="font-bold text-xl md:text-2xl text-pink-700 pt-3">Por un entorno laboral seguro y respetuoso</div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            La presente política establece el compromiso de Sigma Corp S.R.L. de prevenir y rechazar toda forma de violencia de género, especialmente la violencia contra las mujeres, y promover relaciones laborales basadas en la dignidad, la igualdad y el respeto.
            </p>
            <p>
            Es aplicable a directivos, trabajadores y colaboradores, así como a proveedores, contratistas, distribuidores y socios estratégicos en sus relaciones con la empresa, incluyendo espacios laborales, eventos y comunicaciones digitales.
            </p>
            <strong>PRINCIPIOS RECTORES</strong>
            <ul className='list-decimal ml-6 md:ml-10 space-y-3'>
              <li>Dignidad e igualdad: Respetar los derechos de todas las personas, sin discriminación por sexo o género.</li>
              <li>Rechazo a la violencia: No tolerar agresiones, amenazas, humillaciones, acoso sexual ni otras conductas de violencia.</li>
              <li>Protección y confidencialidad: Atender los reportes con reserva, sin revictimización ni represalias.</li>
              <li>Responsabilidad: Actuar con imparcialidad y respeto al debido proceso.</li>
            </ul>
            <strong>LINEAMIENTOS ESPECÍFICOS</strong>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Promover capacitación y sensibilización periódica sobre igualdad y prevención de la violencia de género.</li>
              <li>Identificar riesgos y aplicar medidas preventivas en las áreas y actividades de la empresa.</li>
              <li>Habilitar y comunicar canales seguros y confidenciales de reporte, con una alternativa ante conflictos de interés.</li>
              <li>Atender oportunamente los reportes mediante el protocolo interno, adoptar medidas de protección y facilitar orientación hacia servicios especializados, sin condicionar el acceso a autoridades.</li>
              <li>Evaluar los incumplimientos y aplicar las medidas correspondientes conforme a la normativa vigente y los instrumentos internos, respetando el derecho de defensa.</li>
              <li>Asignar a Recursos Humanos la coordinación de esta política y revisar periódicamente su aplicación.</li>
            </ul>
            <strong>COMPROMISO INSTITUCIONAL</strong>
            <p>
            Sigma Corp S.R.L. reafirma su compromiso con una vida libre de violencia. La Alta Dirección promoverá el cumplimiento de esta política, la asignación de recursos y una cultura de respeto y protección de los derechos de las mujeres.
            </p>
            </div>
          </div>
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/violencia-de-genero.png'} alt="Carousel" />
          </div>
        </div>
      </div>
      {/*FIN POLÍTICA DE PREVENCIÓN Y RECHAZO DE LA VIOLENCIA DE GÉNERO*/}
      {/*COMPROMISOS ENTRE SIGMA CORP. Y SUS TRABAJADORES*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/trabajadores.png'} alt="Carousel" />
          </div>
          
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
            COMPROMISOS ENTRE SIGMA CORP. Y SUS TRABAJADORES
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <strong>COMPROMISO DE LA INSTITUCIÓN PARA CON LOS TRABAJADORES:</strong>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>
              Promover el trabajo en condiciones justas y dignas para todos los trabajadores. 
              </li>
              <li>
              Velar por la protección de la intimidad, honra, salud mental y libertad de las personas en el trabajo.
              </li>
              <li>
              Promover un ambiente laboral positivo y armónico para todos.
              </li>
              <li>
              Tratar sin discriminación (de raza, religión, preferencia sexual o nacionalidad) a los trabajadores de la Institución.
              </li>
              <li>Respetar y promover las buenas relaciones entre todos, no fomentar labor a desempeñar.

              </li>
              <li>
              Mantener informados a los empleados sobre actualizaciones de software, y cualquier otra necesaria para el desarrollo institucional.
              </li>
              <li>
              Pagar oportunamente el salario, las prestaciones sociales y auxilios según lo expuesto en la ley.
              </li>
              <li>
              Realizar actividades de Bienestar Laboral.
              </li>
              <li>
              Utilizar los horarios establecidos y respetar el horario de descanso.
              </li>

            </ul>

            <strong>COMPROMISOS DE LOS TRABAJADORES PARA CON LA INSTITUCIÓN:</strong>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>
              Ser prudente en el lenguaje y en la manera de comportarse durante el ejercicio de las funciones.
              </li>
              <li>
              Mantener una adecuada presentación personal durante la jornada laboral. 
              </li>
              <li>
              Ser puntuales al asistir a los compromisos relacionados con el cargo y en los horarios establecidos.
              </li>
              <li>
              Respetar el Reglamento Interno de Trabajo.
              </li>
              <li>
              Realizar las actividades con responsabilidad y bajo los valores institucionales.
              </li>
              <li>
              Respetar, reservar y guardar la información confidencial a la que tenga acceso.
               </li>
              <li>
              Tener presente que se deben utilizar las oficinas, sistemas de información, elementos de trabajo y uso de internet, únicamente para el desempeño de las funciones.
              </li>
              <li>
              No divulgar información privada de la Institución a entes externos o a empleados cuyo cargo no requiera del conocimiento de esta.
              </li>
              <li>
              Responder oportuna y debidamente las llamadas telefónicas o mensajes electrónicos.
              </li>
              <li>
              Salvaguardar la información que sea recolectada y dar trámite oportuno a las quejas relacionadas con el acoso laboral.
              </li>
              <li>
              No instalar software ilegal en los equipos de la Institución.
              </li>
            <li>
            Utilizar correctamente los usuarios y contraseñas, y mantener confidencialidad de estas.
            </li>
            
              <li>
              Ser dinámicos y participativos en las actividades realizadas por la institución.
              </li>
              <li>
              Almacenar únicamente información de propiedad de la Institución, en los servidores y en los computadores personales.
              </li>
              <li>
              Utilizar responsablemente los equipos, elementos de oficina, archivos y registros, solo para el desempeño de sus funciones.
              </li>

            </ul>
            </div>
          </div>
        </div>
      </div>
      {/*FIN COMPROMISOS ENTRE SIGMA CORP. Y SUS TRABAJADORES*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 py-14">
        
            
        
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <div className="font-extrabold text-gray-500 text-center text-lg">
             
             Noticias de impacto
       
         </div>
            <div className="flex flex-wrap justify-center text-center mt-4 pb-10">
              <p className="text-xl sm:text-2xl md:text-5xl text-rosa font-extrabold">
                SIGMA
              </p>
              <p className="text-xl sm:text-2xl md:text-5xl text-violeta font-extrabold pl-2">
                RESPONSABILIDAD SOCIAL
              </p>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0 }}
            viewport={{ margin: '-100px' }}
          >
            <div></div>
          </motion.div>
          <div className="container relative mb-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-24">
            {isSuccess &&
              events.data.map((event) => (
                <EventCard
                  title={event.attributes.title}
                  date={event.attributes.date}
                  description={event.attributes.description}
                  main_image={event.attributes.main_image.data.attributes.url}
                  slug={event.attributes.slug}
                  path="rse"
                />
              ))}
          </div>
        </div>
      </div>
      {/*FIN QUIENES SOMOS*/}
    </>
  )
}
if(router.locale==="en"){
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
            <div className="container mx-auto px-4 xl:px-0 pt-16 md:pt-24">
              <div className="font-extrabold text-3xl sm:text-5xl lg:text-6xl">
                <div className="text-pink-700 ">CORPORATE&nbsp;</div>
                <div className="text-violeta">SOCIAL RESPONSIBILITY</div>
              </div>
              <div className="">
                <a href="../" className="hover:text-pink-700 font-bold">
                  Home
                </a>{' '}
                / Corporate Social Responsibility
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*FIN BANNER*/}
      {/*POLÍTICA DE RESPONSABILIDAD SOCIAL EMPRESARIAL*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          CORPORATE SOCIAL RESPONSIBILITY POLICY
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            Our company is committed to corporate social responsibility (CSR) and to ensuring that our activities are ethical, sustainable and contribute to the well-being of society and of the environment in which we operate. We are therefore pleased to present our CSR policy, based on the ISO 26000 standard and adapted to the needs of our pharmaceutical industry.
            </p>
            <p>
            Ethics: We are committed to acting with transparency and honesty in all our operations, complying with the rules and regulations in force in the pharmaceutical market and promoting ethical and fair practices in all our business relationships.
            </p>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Human rights: We are committed to respecting the human rights of our employees and of the stakeholders we interact with, ensuring that our activities neither promote nor tolerate discrimination, harassment or labor exploitation.</li>
              <li>Labor practices: We are committed to promoting fair and safe labor practices for our employees, ensuring equal opportunities and non-discrimination in the workplace, and promoting the training and professional development of our staff.</li>
              <li>Environment: We are committed to reducing our environmental impact and promoting sustainability by developing environmental management practices that minimize waste generation, emissions and the consumption of natural resources.</li>
              <li>Fair operating practices: We are committed to ensuring that our operations are ethical and fair at every stage of the supply, production and distribution chain, promoting transparency and dialogue with our suppliers and customers, and avoiding dishonest business practices.</li>
              <li>Consumer issues: We are committed to ensuring the quality and safety of our pharmaceutical products, and to providing clear and accurate information about their benefits and risks to consumers and patients.</li>
              <li>Active community involvement: We are committed to taking an active part in the communities where we operate, contributing to their social and economic development, and promoting collaboration and dialogue among the different stakeholders.</li>
            </ul>
            <p>
            This CSR policy of Sigma Corp. S.R.L. is designed to guide our actions and decisions, and to ensure that our operations are aligned with our social and environmental responsibilities. We are committed to reviewing and updating this policy periodically to ensure its relevance and effectiveness over time.
            </p>
            </div>
          </div>
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/politica-rse.png'} alt="Carousel" />
          </div>
        </div>
      </div>
      {/*FIN POLÍTICA DE RESPONSABILIDAD SOCIAL EMPRESARIAL*/}
      {/*POLÍTICA DE LA CALIDAD*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/certificaciones.png'} alt="Carousel" />
          </div>
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          QUALITY POLICY
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            Sigma ensures quality and safety through planned and systematic actions, thereby meeting predefined requirements developed internally as well as the international standards of the pharmaceutical industry, together with food safety and medical device standards. To ensure our quality, we focus on the purity and quality of raw materials and on the presentation and stability of the products we offer to the pharmaceutical, nutraceutical and other markets.
            </p>
            <p>
            The company's specific quality policies:
            </p>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>The quality of medicines and nutraceuticals must be preserved above all else, since they directly affect the health of consumers.</li>
              <li>All production activities must be carried out in accordance with Good Manufacturing Practices, together with NB-ISO 22000 and ISO 13485, as the quality assurance system.</li>
              <li>Documentation related to compliance with these standards is mandatory for all personnel working in the company.</li>
              <li>All employees of the organization must be fully committed to complying with the established quality assurance system (GMP, GLP, GTP, GAP, ISO 22000 and ISO 13485).</li>
              <li>The responsibilities of all personnel must be fulfilled as set out in the corresponding written procedures, since these ensure the best way to carry out operations without compromising product quality.</li>
              <li>Failure to comply with any requirement or written procedure will be sanctioned with the appropriate measures.</li>
              <li>Personnel are required to report any irregularity or non-compliance with the standards detected in any member of the company.</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      {/*FIN POLÍTICA DE LA CALIDAD*/}
      {/*POLÍTICA AMBIENTAL*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          ENVIRONMENTAL POLICY
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            The pharmaceutical chemical company Sigma Corp. S.R.L. has established and implemented in its processes an environmental management system based on the requirements of the ISO 14001:2015 standard.
            </p>
            <p>
            Sigma Corp., a leading company in the development and manufacture of medicines, cosmetics, medical devices and nutraceuticals, has developed over more than 40 years of work a deep understanding of the sector and a strong relationship with consumers.
            </p>
            <p>
            Our environmental policy defines our commitment to carrying out our activity within the parameters of sustainable development, maintaining control and management of the environmental aspects it generates, especially the most significant ones. It also establishes a common framework for defining objectives and carrying out activities that contribute to the continuous improvement of the environmental management system.
            </p>
            <p>
            To fulfill these commitments and achieve the established objectives, Sigma Corp. has set out the following fundamental principles:
            </p>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Ensure the protection of the environment by working respectfully, preventing pollution and minimizing the environmental effects resulting from the company's activity.</li>
              <li>Promote research and implement technologies that contribute to climate change mitigation and enable the sustainable use of natural resources.</li>
              <li>Ensure compliance with applicable environmental legal requirements and with the requirements voluntarily adopted by the company.</li>
              <li>Maintain the environmental awareness of all our employees, fostering their environmental training and encouraging active participation, including the improvement suggestions they propose, in order to promote continuous improvement.</li>
              <li>Define specific and measurable objectives and targets within an Environmental Management Plan, to be reviewed as deemed appropriate once a year through the Annual Environmental Report.</li>
              <li>Carry out an annual periodic assessment of the environmental aspects arising from the activity, for the purpose of maintaining and continuously improving the environmental management system.</li>
            </ul>
            <p>
            Likewise, the identification and assessment of environmental aspects allows the company to maintain environmental management based on three pillars:
            </p>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Precaution: avoid actions that may involve an environmental risk, regardless of how serious it might be if it materialized.</li>
              <li>Prevention: avoid the environmental consequences associated with a given action.</li>
              <li>Correction: plan how to counteract the environmental consequences of a risk should it materialize.</li>
            </ul>
            <p>
            Everyone who is part of I.Q.F. Sigma Corp. embraces these principles, and it is our responsibility to put them into practice. Sigma Corp. drives environmental improvement and allocates the resources needed to ensure the successful implementation of this environmental policy.
            </p>
            <p>
            Include within the recycling policy the transfer of waste to the recycling facility, in the case of special waste.
            </p>
            </div>
          </div>
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/medio-ambiente.png'} alt="Carousel" />
          </div>
        </div>
      </div>
      {/*FIN POLÍTICA AMBIENTAL*/}
      {/*COMERCIO JUSTO*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/comercio-justo.png'} alt="Carousel" />
          </div>
          <div className="md:col-span-2 py-4 md:p-10">
            <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">FAIR TRADE</div>
            <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
              <p>
              The fair trade practices implemented by Sigma Corp. seek to guarantee a fair and equitable business relationship with producers in our country and in developing countries. These practices promote transparency, responsibility and sustainability at every stage of the supply chain, from production to sale to the end consumer. 
              </p>
              <p>
              They focus on improving the quality of life of producers and their communities, fostering sustainable development and reducing poverty in developing countries. 
              </p>
              <p>In addition, they raise consumer awareness of the conditions under which the products they buy are made and of their impact on the world.</p>
              <p>Our main fair trade practices include:</p>
              <ul className='list-decimal ml-6 md:ml-10 space-y-3'>
                <li>Payment of fair prices.</li>
                <li>Safe and decent working conditions for workers.</li>
                <li>Protection of the environment.</li>
                <li>
                Fair and transparent payment to raw material suppliers. 
                </li>
                <li>Respect for human and labor rights.</li>
                <li>Promotion of gender equality and women's empowerment.</li>
                <li>Continuous evaluation and improvement of our practices. </li>
                <li>Participation in fair trade initiatives. </li>
              </ul>
              <p>
              We are committed to working ethically and responsibly at every stage of our supply chain to guarantee fair and sustainable trade.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*FIN COMERCIO JUSTO*/}
      {/*PAGO DE SALARIO JUSTO A TRABAJADORES*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
            FAIR WAGES FOR WORKERS
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            Sigma Corp. has implemented fair wage policies for its workers. Our main practices include:
            </p>
            <ul className='list-decimal ml-6 md:ml-10 space-y-3'>
              <li>Fair and transparent pay. </li>
              <li>Periodic review of wages.</li>
              <li>Respect for labor rights.</li>
              <li>Equal opportunities.</li>
              <li>Promotion of training and development.</li>
              <li>Continuous evaluation and improvement of our practices.</li>
            </ul>
            <p>
            We are committed to working ethically and responsibly to guarantee fair and adequate pay to all temporary and piece-rate workers in our company, in line with the principles of social justice and labor equity.
            </p>
            </div>
          </div>
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/salario-justo.png'} alt="Carousel" />
          </div>
        </div>
      </div>
      {/*FIN PAGO DE SALARIO JUSTO A TRABAJADORES*/}
      {/*COMPROMISO CONTRA LA DISCRIMINACIÓN*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/contra-discriminacion.png'} alt="Carousel" />
          </div>
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          COMMITMENT AGAINST DISCRIMINATION
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            At Industria Químico Farmacéutica SIGMA Corp. SRL, we believe in equal opportunities and are committed to providing a fair, respectful and inclusive work environment. We therefore commit to not discriminating against any employee or job applicant on the grounds of gender, sexual orientation, age, race, color, religion, disability, ethnic origin or any other category protected by applicable law. This policy applies to all aspects of employment, including, but not limited to, hiring, promotion, pay, benefits, training and development, and termination of employment.
            </p>
            <p>
            Discrimination can take many forms, including, but not limited to, the following behaviors:
            </p>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Unequal or unfair treatment in employment or in selection processes.</li>
              <li>Harassment, intimidation or mockery of any employee or job applicant.</li>
              <li>Offensive, demeaning or derogatory comments or insinuations.</li>
              <li>Unequal assignment of tasks, responsibilities or opportunities.</li>
              <li>Restriction or denial of development or promotion opportunities.</li>
            </ul>
            <p>
            Any employee who experiences or witnesses any form of discrimination must immediately report it to the company's Human Resources department.
            </p>
            <p>
            At Industria Químico Farmacéutica SIGMA Corp. SRL we commit to:
            </p>
            <ul className='list-[lower-alpha] ml-6 md:ml-10 space-y-3'>
              <li>Take appropriate and prompt action to investigate any report of discrimination and take the necessary measures to remedy the situation.</li>
              <li>Provide the training and resources needed to foster an inclusive and respectful work environment. Managers and supervisors will receive training on how to recognize and prevent discrimination, and all employees are expected to comply with this policy.</li>
              <li>Create and maintain a work environment that values diversity and inclusion and respects the rights and dignity of every employee.</li>
            </ul>
            <p>
            This non-discrimination policy reflects our commitment to creating a fair and equitable work environment for everyone.
            </p>
            </div>
          </div>
        </div>
      </div>
      {/*FIN COMPROMISO CONTRA LA DISCRIMINACIÓN*/}
      {/*IMPLENTACION DE MANUAL DE ETICA, CONDUCTA Y BUEN GOBIERNO*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          IMPLEMENTATION OF THE CODE OF ETHICS, CONDUCT AND GOOD GOVERNANCE
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            The Code of Ethics, Conduct and Good Governance describes the responsibilities of employees and senior management in complying with the rules, laws and regulations of Sigma Corp. These standards of conduct apply to all employees and are an integral part of their employment relationship. 
            </p>
            <p>
            Sigma Corp. understands that the work environment can have a significant impact on employees' health and well-being. A favorable work environment can improve employees' performance and motivation, while an unfavorable one can cause stress, fatigue and work-related illnesses. For this reason, the company strives to create a healthy, safe and productive environment for its employees. This includes measures such as improving the physical conditions of the workplace, promoting healthy interpersonal relationships and implementing labor policies and practices that foster employees' well-being and job satisfaction. Having satisfied employees is one of the priorities of the Human Resources department, since happy employees deliver high performance and better results. When importance is given to what employees feel or think and their contributions are valued, the chain of work grows stronger and staff make every effort to achieve the organization's objectives. 
            </p>
            

            <p>
            At Sigma Corp. we build lasting relationships, because people, who are our resources, are our most valuable asset. This loyalty is the result of encouraging talent development, quality of life and the appreciation of teams. With this goal, Sigma Corp. constantly promotes the qualification and the personal and professional development of its employees through leadership, behavioral and technical courses, professional training programs and other initiatives.
            </p>
            <p>
            For promotions, employees take part in selection processes in which they are evaluated using clear and equal criteria within the staff evaluation system. 

            </p>
            <p>
            Sigma Corp. has a policy against labor exploitation. Any employee who works overtime will receive the corresponding payment for the extra hours worked. Sigma Corp. does not employ or use minors as labor.
            </p>
            </div>
          </div>
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/manual-etica.png'} alt="Carousel" />
          </div>
        </div>
      </div>
      {/*FIN IMPLENTACION DE MANUAL DE ETICA, CONDUCTA Y BUEN GOBIERNO*/}
      {/*POLÍTICA DE ANTICORRUPCIÓN Y TRANSPARENCIA*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/anticorrupcion.png'} alt="Carousel" />
          </div>
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          ANTI-CORRUPTION AND TRANSPARENCY POLICY
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            The purpose of this policy is to establish the principles, guidelines and commitments of Sigma Corp. S.R.L. for the prevention, detection and sanctioning of acts of corruption, in accordance with the Code of Ethics, ensuring that our activities are carried out under criteria of ethics, legality, transparency and social responsibility.
            </p>
            <p>
            This policy applies to:
            </p>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>All workers, executives and representatives of Sigma Corp.</li>
              <li>Suppliers, contractors, distributors, customers and third parties that have business relationships with the company.</li>
            </ul>
            <strong>GUIDING PRINCIPLES</strong>
            <ul className='list-decimal ml-6 md:ml-10 space-y-3'>
              <li>Zero tolerance for corruption: Offering, accepting, requesting or authorizing bribes, improper payments, illicit commissions or any undue advantage is prohibited.</li>
              <li>Regulatory compliance: All employees must abide by Bolivian law, international agreements and the company's internal policies.</li>
              <li>Transparency: Every business, contractual and administrative relationship must be documented and available for audit.</li>
              <li>Integrity: Decisions must be made for the benefit of the company and society, without undue influence.</li>
              <li>Shared responsibility: Everyone is responsible for acting ethically and reporting irregularities.</li>
            </ul>
            <strong>SPECIFIC GUIDELINES</strong>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Prohibition of bribes and improper payments: No employee may make or accept unauthorized payments, gifts, favors or benefits that could influence business decisions.</li>
              <li>Conflicts of interest: Workers must disclose any situation that could compromise their impartiality (e.g., family ties with suppliers or customers).</li>
              <li>Gifts and hospitality: Only gifts of symbolic or promotional value, previously authorized by General Management, are permitted.</li>
              <li>Hiring of third parties: Every supplier and contractor must sign a declaration of commitment to integrity and transparency.</li>
              <li>Accounting and document records: All transactions must be recorded accurately, verifiably and auditably.</li>
            </ul>
            <strong>REPORTING AND PROTECTION MECHANISMS</strong>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Sigma Corp. will establish confidential reporting channels (email and physical mailbox).</li>
              <li>Whistleblowers are guaranteed protection against retaliation or unjustified sanctions.</li>
              <li>All reports will be investigated by HR Management in coordination with Legal Counsel.</li>
            </ul>
            <strong>SANCTIONS</strong>
            <p>
            Non-compliance with this policy will result in internal disciplinary action and, where appropriate, legal action in accordance with the regulations in force in Bolivia.
            </p>
            </div>
          </div>
        </div>
      </div>
      {/*FIN POLÍTICA DE ANTICORRUPCIÓN Y TRANSPARENCIA*/}
      {/*POLÍTICA DE CUMPLIMIENTO NORMATIVO*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          REGULATORY COMPLIANCE POLICY
          </div>
          <div className="font-bold text-xl md:text-2xl text-pink-700 pt-3">Based on ISO 37301 – Compliance Management Systems</div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            This policy sets out the commitment of Sigma Corp S.R.L. to regulatory, ethical and legal compliance, in line with the international standard ISO 37301:2021 on Compliance Management Systems. Its purpose is to prevent legal and reputational risks, promote corporate integrity and ensure that all operations are carried out under the principles of legality, transparency and responsibility.
            </p>
            <p>
            This policy applies to all levels of Sigma Corp S.R.L., including:
            </p>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Executives and managers.</li>
              <li>Workers and employees.</li>
              <li>Suppliers, contractors, distributors and strategic partners that interact with the company.</li>
            </ul>
            <strong>GUIDING PRINCIPLES</strong>
            <ul className='list-decimal ml-6 md:ml-10 space-y-3'>
              <li>Legality: Comply with all applicable laws, regulations and standards in Bolivia and in the markets where we operate.</li>
              <li>Transparency: Ensure that business processes and decisions are clear and documented.</li>
              <li>Responsibility: Every employee is responsible for their actions in relation to the regulations in force.</li>
              <li>Continuous improvement: Periodically review and update the regulatory compliance system.</li>
              <li>Leadership commitment: Senior Management is responsible for promoting a culture of compliance throughout the organization.</li>
            </ul>
            <strong>SPECIFIC GUIDELINES</strong>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Identification and assessment of compliance risks in all areas of the company.</li>
              <li>Implementation of internal controls to prevent, detect and manage non-compliance.</li>
              <li>Establishment of a secure and confidential whistleblowing channel to report irregularities.</li>
              <li>Periodic training of all personnel in compliance and ethics.</li>
              <li>Integration of regulatory compliance into strategic and operational decision-making.</li>
              <li>Periodic internal and external audits to evaluate the effectiveness of the system.</li>
              <li>Compliance reports to General Management.</li>
              <li>Corrective and preventive action plans (CAPA) in response to findings.</li>
              <li>Updating of policies in line with regulatory changes and international best practices.</li>
            </ul>
            <strong>INSTITUTIONAL COMMITMENT</strong>
            <p>
            Sigma Corp. S.R.L. reaffirms its commitment to ethics, transparency and regulatory compliance as an essential part of its organizational culture and its corporate social responsibility.
            </p>
            </div>
          </div>
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/cumplimiento-normativo.png'} alt="Carousel" />
          </div>
        </div>
      </div>
      {/*FIN POLÍTICA DE CUMPLIMIENTO NORMATIVO*/}
      {/*POLÍTICA DE COMUNICACIÓN LIBRE DE PUBLICIDAD SEXISTA*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/publicidad-no-sexista.png'} alt="Carousel" />
          </div>
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          POLICY ON COMMUNICATION FREE FROM SEXIST ADVERTISING
          </div>
          <div className="font-bold text-xl md:text-2xl text-pink-700 pt-3">Rejection of the objectification of women</div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            This policy sets out the commitment of Sigma Corp S.R.L. to communication and advertising that respect the dignity of women and are free from sexism, discrimination and objectification, understood as portraying women as objects or attention-grabbing devices while disregarding their autonomy and abilities.
            </p>
            <p>
            It applies to staff and to third parties who create or distribute communications on behalf of the company: agencies, suppliers, distributors and representatives. It covers advertising, social media, promotional material, medical visits, events and institutional communication.
            </p>
            <strong>GUIDING PRINCIPLES</strong>
            <ul className='list-decimal ml-6 md:ml-10 space-y-3'>
              <li>Dignity: Portray women as people with rights, autonomy and abilities.</li>
              <li>Equality: Avoid stereotypes that reproduce subordination or gender-exclusive roles.</li>
              <li>Respect: Reject gratuitous sexualization, humiliation and the normalization of violence.</li>
              <li>Responsibility: Review the content and context of messages before they are released.</li>
            </ul>
            <strong>SPECIFIC GUIDELINES</strong>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Prohibit pieces that use a woman's body or image as an object, prize or sexualized device unrelated to the purpose of the message.</li>
              <li>Avoid texts, images, jokes or sounds that demean women, justify harassment or blame them for violence.</li>
              <li>Promote diverse portrayals that recognize women's professional, scientific, technical and social contributions.</li>
              <li>Obtain informed consent to use identifiable images or testimonials and guarantee voluntary participation.</li>
              <li>Entrust Marketing or the person in charge of communications with the prior review and approval of all pieces, with technical review where appropriate.</li>
              <li>Communicate these criteria to suppliers and representatives, receive alerts, and correct or withdraw content that breaches the policy.</li>
            </ul>
            <strong>INSTITUTIONAL COMMITMENT</strong>
            <p>
            Sigma Corp S.R.L. reaffirms its commitment to communication that contributes to the equality of and respect for women. Senior Management will support the dissemination, application and periodic review of this policy.
            </p>
            </div>
          </div>
        </div>
      </div>
      {/*FIN POLÍTICA DE COMUNICACIÓN LIBRE DE PUBLICIDAD SEXISTA*/}
      {/*POLÍTICA DE PREVENCIÓN Y RECHAZO DE LA VIOLENCIA DE GÉNERO*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
          GENDER-BASED VIOLENCE PREVENTION AND REJECTION POLICY
          </div>
          <div className="font-bold text-xl md:text-2xl text-pink-700 pt-3">For a safe and respectful workplace</div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <p>
            This policy sets out the commitment of Sigma Corp S.R.L. to preventing and rejecting all forms of gender-based violence, especially violence against women, and to promoting working relationships based on dignity, equality and respect.
            </p>
            <p>
            It applies to executives, workers and employees, as well as to suppliers, contractors, distributors and strategic partners in their dealings with the company, including workplaces, events and digital communications.
            </p>
            <strong>GUIDING PRINCIPLES</strong>
            <ul className='list-decimal ml-6 md:ml-10 space-y-3'>
              <li>Dignity and equality: Respect the rights of all people, without discrimination on the basis of sex or gender.</li>
              <li>Rejection of violence: Do not tolerate aggression, threats, humiliation, sexual harassment or any other violent behavior.</li>
              <li>Protection and confidentiality: Handle reports discreetly, without revictimization or retaliation.</li>
              <li>Responsibility: Act impartially and with respect for due process.</li>
            </ul>
            <strong>SPECIFIC GUIDELINES</strong>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>Promote periodic training and awareness on equality and the prevention of gender-based violence.</li>
              <li>Identify risks and apply preventive measures in the company's areas and activities.</li>
              <li>Set up and publicize safe and confidential reporting channels, with an alternative channel in case of conflicts of interest.</li>
              <li>Handle reports promptly through the internal protocol, adopt protective measures and provide guidance toward specialized services, without restricting access to the authorities.</li>
              <li>Assess breaches and apply the corresponding measures in accordance with current regulations and internal instruments, respecting the right of defense.</li>
              <li>Assign Human Resources to coordinate this policy and periodically review its application.</li>
            </ul>
            <strong>INSTITUTIONAL COMMITMENT</strong>
            <p>
            Sigma Corp S.R.L. reaffirms its commitment to a life free from violence. Senior Management will promote compliance with this policy, the allocation of resources and a culture of respect for and protection of women's rights.
            </p>
            </div>
          </div>
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/violencia-de-genero.png'} alt="Carousel" />
          </div>
        </div>
      </div>
      {/*FIN POLÍTICA DE PREVENCIÓN Y RECHAZO DE LA VIOLENCIA DE GÉNERO*/}
      {/*COMPROMISOS ENTRE SIGMA CORP. Y SUS TRABAJADORES*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="order-first md:order-none max-w-xs sm:max-w-sm mx-auto md:max-w-none p-2 md:p-10 lg:sticky lg:top-10">
            <img className="w-full" src={'static/images/rse/trabajadores.png'} alt="Carousel" />
          </div>
          
          <div className="md:col-span-2 py-4 md:p-10">
          <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-violeta break-words">
            COMMITMENTS BETWEEN SIGMA CORP. AND ITS WORKERS
          </div>
          <div className="text-base md:text-lg md:pl-6 text-gray-600 text-left md:text-justify flex flex-col space-y-5 py-5">
            <strong>THE INSTITUTION'S COMMITMENTS TO ITS WORKERS:</strong>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>
              Promote work under fair and decent conditions for all workers. 
              </li>
              <li>
              Ensure the protection of people's privacy, honor, mental health and freedom at work.
              </li>
              <li>
              Promote a positive and harmonious work environment for everyone.
              </li>
              <li>
              Treat the Institution's workers without discrimination (based on race, religion, sexual orientation or nationality).
              </li>
              <li>Respect and promote good relations among everyone, without encouraging tasks outside each person's role.

              </li>
              <li>
              Keep employees informed about software updates and any other updates needed for institutional development.
              </li>
              <li>
              Pay wages, social benefits and allowances on time, as established by law.
              </li>
              <li>
              Carry out workplace well-being activities.
              </li>
              <li>
              Use the established working hours and respect rest periods.
              </li>

            </ul>

            <strong>THE WORKERS' COMMITMENTS TO THE INSTITUTION:</strong>
            <ul className='list-disc ml-6 md:ml-10 space-y-3'>
              <li>
              Be prudent in language and behavior while performing their duties.
              </li>
              <li>
              Maintain an appropriate personal appearance during the workday. 
              </li>
              <li>
              Be punctual for commitments related to their position and for the established working hours.
              </li>
              <li>
              Respect the Internal Work Regulations.
              </li>
              <li>
              Carry out their activities responsibly and in line with institutional values.
              </li>
              <li>
              Respect, protect and keep confidential any information to which they have access.
               </li>
              <li>
              Bear in mind that offices, information systems, work equipment and internet access must be used solely for the performance of their duties.
              </li>
              <li>
              Not disclose the Institution's private information to external parties or to employees whose position does not require knowledge of it.
              </li>
              <li>
              Respond promptly and properly to phone calls and electronic messages.
              </li>
              <li>
              Safeguard the information collected and promptly process complaints related to workplace harassment.
              </li>
              <li>
              Not install illegal software on the Institution's equipment.
              </li>
            <li>
            Use usernames and passwords correctly and keep them confidential.
            </li>
            
              <li>
              Be dynamic and participate in the activities organized by the institution.
              </li>
              <li>
              Store only information owned by the Institution on the servers and personal computers.
              </li>
              <li>
              Use equipment, office supplies, files and records responsibly and solely for the performance of their duties.
              </li>

            </ul>
            </div>
          </div>
        </div>
      </div>
      {/*FIN COMPROMISOS ENTRE SIGMA CORP. Y SUS TRABAJADORES*/}
      <div className="bg-hexagon bg-no-repeat bg-left-top">
        <div className="container mx-auto px-4 xl:px-0 py-14">
        
            
        
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ margin: '-100px' }}
          >
            <div className="font-extrabold text-gray-500 text-center text-lg">
             
             Social responsibility news
       
         </div>
            <div className="flex flex-wrap justify-center text-center mt-4 pb-10">
              <p className="text-xl sm:text-2xl md:text-5xl text-rosa font-extrabold">
                SIGMA
              </p>
              <p className="text-xl sm:text-2xl md:text-5xl text-violeta font-extrabold pl-2">
                SOCIAL RESPONSIBILITY
              </p>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeIn', delay: 0 }}
            viewport={{ margin: '-100px' }}
          >
            <div></div>
          </motion.div>
          <div className="container relative mb-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-24">
            {isSuccess &&
              events.data.map((event) => (
                <EventCard
                  title={event.attributes.title}
                  date={event.attributes.date}
                  description={event.attributes.description}
                  main_image={event.attributes.main_image.data.attributes.url}
                  slug={event.attributes.slug}
                  path="rse"
                />
              ))}
          </div>
        </div>
      </div>
      {/*FIN QUIENES SOMOS*/}
    </>
  )
}

}

