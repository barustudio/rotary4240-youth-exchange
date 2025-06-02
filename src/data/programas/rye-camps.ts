import { ProgramCode } from '../../const';
import ryeLogo from '../../assets/images/logo-rye.png';
import ryeCampsTestimonial1 from '../../assets/images/rye-camp-1.jpg';
import ryeCampsTestimonial2 from '../../assets/images/rye-camp-2.jpg';
import ryeCampRosa from '../../assets/images/testimonials/camp-2023-egypt-rosa.jpg';
import ryeCampJuanDiego from '../../assets/images/testimonials/camp-2023-egypt-juan.jpg';
import ryeCampZosimo from '../../assets/images/testimonials/camp-2023-italy-zosimo.jpg';

export const programInfo = {
  title: "Campamentos",
  age: "15-25*",
  duration: "1-2 semanas",
  programCode: "RYE-CAMPS",
  logo: ryeLogo,

  description: "Los Campamentos Internacionales de Rotary ofrecen experiencias temáticas intensivas y cortas donde jóvenes de múltiples países se reúnen para actividades específicas. Estos campamentos pueden centrarse en deportes, arte, música, desarrollo de liderazgo, aventura al aire libre, o temas culturales, brindando una inmersión internacional sin el compromiso de tiempo de otros programas.",

  benefits: [
    "Experiencia internacional concentrada e intensiva",
    "Interacción con jóvenes de múltiples países simultáneamente",
    "Desarrollo de habilidades específicas según el tema del campamento",
    "Exposición a diversas culturas en un ambiente estructurado",
    "Ampliación de la red de contactos internacionales"
  ],

  experiences: [
    "Convivencia en instalaciones compartidas con jóvenes de diferentes nacionalidades",
    "Actividades temáticas diarias dirigidas por profesionales",
    "Excursiones culturales relacionadas con el tema del campamento",
    "Eventos sociales internacionales y presentaciones culturales",
    "Proyectos colaborativos entre participantes de distintos países"
  ],

  ageRequirements: "Principalmente jóvenes entre 15 y 25 años, aunque la edad específica varía según el campamento. Algunos están diseñados para adolescentes (15-18) y otros para adultos jóvenes (18-25).",

  profileRequirements: [
    "Interés específico en el tema del campamento",
    "Capacidad para interactuar en un entorno multicultural",
    "Disposición para participar activamente en todas las actividades",
    "Nivel básico de inglés u otro idioma común del campamento"
  ],

  skills: [
    "Comunicación básica en inglés",
    "Adaptabilidad a entornos grupales internacionales",
    "Capacidad para seguir instrucciones en un entorno multicultural",
    "Apertura a nuevas experiencias y actividades"
  ],

  familySupport: "Se requiere apoyo familiar para la preparación y financiamiento, aunque no involucra hospedaje familiar. Los padres deben estar disponibles en caso de emergencia durante el campamento.",

  detailedDuration: "Los campamentos típicamente duran entre 1 y 2 semanas, con un programa intensivo de actividades diarias. Algunos campamentos especializados pueden extenderse hasta 3 semanas, especialmente los de inmersión lingüística o desarrollo de habilidades específicas.",

  phases: [
    "Aplicación y selección (2-4 meses antes del campamento)",
    "Preparación y orientación pre-campamento",
    "Actividades intensivas durante el campamento (1-2 semanas)",
    "Ceremonia de clausura y despedida",
    "Actividades post-campamento para compartir la experiencia"
  ],

  countryExamples: [
    {
      country: "Europa",
      details: "Cultura gastronómica en Francia, navegación en la costa catalana, aventura de montaña en Suiza, actividades náuticas en Dinamarca, etc."
    },
    {
      country: "Asia",
      details: "Ciencia y tecnología de semiconductores de Taiwán, cocina tradicional y excursiones en Turquía, etc."
    },
    {
      country: "América del Norte",
      details: "Campamentos de aventura y naturaleza en Canadá y Estados Unidos, exploraciones culturales en California, etc."
    },
    {
      country: "América del Sur",
      details: "Experiencia en la Amazonía brasileña."
    }
  ],

  costs: [
    "Cuota administrativa de 200.00 USD",
    "Cuota de participación del campamento (variable, 100-2500 USD)",
    "Pasaje aéreo",
    "Seguro médico (determinado por los organizadores del campamento)",
    "Trámites de visa (si aplica, generalmente el programa se realiza con visa de turista)",
    "Dinero para gastos personales y souvenirs",
  ],

  rotaryProvides: [
    "Alojamiento durante el campamento",
    "Alimentación durante la estancia",
    "Actividades programadas y materiales necesarios",
    "Transporte local durante el campamento",
    "Supervisión por adultos certificados y consejeros rotarios"
  ],

  applicationSteps: [
    "Completar el formulario de solicitud específico del campamento",
    "Presentar documentación requerida (médica, permisos parentales)",
    "Entrevista con el comité de selección",
    "Confirmación de plaza y pago de cuota",
    "Participación en sesión informativa pre-viaje"
  ],

  applicationFormLink: "http://bit.ly/formulario-rye",

  importantDates: [
    {
      date: "Enero-Marzo",
      description: "Anuncio de campamentos disponibles para el verano"
    },
    {
      date: "Marzo-Mayo",
      description: "Periodo de aplicación para campamentos de verano"
    },
    {
      date: "Octubre-Noviembre",
      description: "Anuncio de campamentos disponibles para invierno"
    }
  ],

  faqs: [
    {
      question: "¿Cómo se seleccionan los participantes para los campamentos?",
      answer: "La selección se basa en el interés demostrado en el tema del campamento, la capacidad para beneficiarse de la experiencia, y la disposición para ser un buen embajador de tu país y de Rotary. Cada distrito puede tener criterios adicionales."
    },
    {
      question: "¿Necesito tener experiencia previa en el tema del campamento?",
      answer: "Depende del campamento específico. Algunos están diseñados para principiantes interesados en aprender, mientras que otros pueden requerir habilidades básicas o intermedias. La descripción de cada campamento especifica los requisitos."
    },
    {
      question: "¿Cómo es el alojamiento durante los campamentos?",
      answer: "Varía según el campamento, pero generalmente incluye instalaciones compartidas como cabañas, dormitorios, o albergues juveniles. Los participantes comparten habitaciones con otros jóvenes internacionales, siempre separados por género."
    },
    {
      question: "¿Qué nivel de supervisión existe durante el campamento?",
      answer: "Los campamentos son supervisados por rotarios adultos, profesionales en el tema del campamento, y consejeros capacitados. Existe un protocolo de seguridad estricto y contacto permanente con los organizadores del programa."
    }
  ],

  testimonials: [
    {
      studentName: "Rosa Corro",
      homeCountry: "🇵🇦",
      homeClub: "Chitré",
      programCode: ProgramCode.RYE_CAMP,
      program: "Egyptology Camp",
      city: "Cairo",
      country: "🇪🇬",
      year: 2023,
      month: 7,
      quote: "Exploramos sitios arqueológicos asombrosos como las pirámides de Giza, Alejandría y los templos de Luxor, y terminamos con un crucero por el Nilo, entre paisajes y atardeceres inolvidables. Pero lo más impactante fue convivir con jóvenes de todo el mundo. A pesar de los choques culturales, descubrimos experiencias universales que nos unían: canciones que todos conocíamos, bromas compartidas, desafíos al capturar la belleza del viaje en fotos, reacciones a nuevos sabores, y risas bajo el calor del desierto. De esas conexiones nacieron amistades que aún conservo, recordándome que, sin importar de dónde vengamos, siempre hay algo que nos une.",
      image: ryeCampRosa,
    },
    {
      studentName: "Juan Diego Rodríguez",
      homeCountry: "🇵🇦",
      homeClub: "Chitré",
      programCode: ProgramCode.RYE_CAMP,
      program: "Egyptology Camp",
      city: "Cairo",
      country: "🇪🇬",
      year: 2023,
      month: 7,
      quote: "El campamento es una experiencia que te hace tener una perspectiva internacional, entender la diversidad pero lo único que es el mundo en los diferentes lugares. Cómo el solo hecho de volar unas horas en un avión puede llevarte a vivir experiencias que nunca lo habías pensado. Definitivamente, me impactó. Además conocí a muchos amistades y estoy orgulloso de decir que un año después me vinieron a visitar amistades de 4 países diferentes que conocí en el viaje de Dinamarca, Holanda, Francia, y España.",
      image: ryeCampJuanDiego,
    },
    {
      studentName: "Zósimo Corro",
      homeCountry: "🇵🇦",
      homeClub: "Chitré",
      programCode: ProgramCode.RYE_CAMP,
      program: "Between Nature and Energy Camp",
      city: "Apulia",
      country: "🇮🇹",
      year: 2023,
      month: 7,
      quote: "Este campamento fue una experiencia fantástica en la cual aprendimos y vivimos de primera mano la importancia de estos ámbitos, logramos hacer nuevas y buenas amistades con culturas totalmente distintas.",
      image: ryeCampZosimo,
    },
  ],
  testimonialContent: [
    {
      type: 'image' as const,
      image: ryeCampsTestimonial1,
      alt: 'Jóvenes de Chitré rumbo a una aventura en Egipto 🇵🇦🇪🇬'
    },
    {
      type: 'image' as const,
      image: ryeCampsTestimonial2,
      alt: 'Descubriendo Taiwán 🇹🇼'
    }
  ]
};
