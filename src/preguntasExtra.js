// Preguntas adicionales. Cada opción lleva su área: [texto, área]
// Áreas: tec, sal, cre, soc, neg, inv, nat, int, der, ser, ind

const q = (pregunta, opciones) => ({
  pregunta,
  opciones: opciones.map(([texto, area]) => ({ texto, area })),
})

export const EXTRA = [
  q('Si tuvieras un fin de semana libre para un proyecto, ¿cuál elegirías?', [['Programar una app o armar un circuito', 'tec'], ['Pintar un mural o grabar un cortometraje', 'cre'], ['Cocinar para mis amigos un menú nuevo', 'ser'], ['Plantar un huerto o cuidar un jardín', 'nat']]),
  q('¿Qué noticia leerías primero?', [['Un nuevo avance médico', 'sal'], ['Un cambio en las leyes o en el gobierno', 'der'], ['Un descubrimiento científico', 'inv'], ['Una startup que consiguió inversión', 'neg']]),
  q('¿Qué curso gratuito en línea tomarías?', [['Introducción a la inteligencia artificial', 'tec'], ['Fotografía y edición de video', 'cre'], ['Primeros auxilios', 'sal'], ['Inglés para negocios internacionales', 'int']]),
  q('En un trabajo grupal, ¿qué rol sueles tomar?', [['Quien organiza tareas y tiempos', 'neg'], ['Quien investiga y verifica datos', 'inv'], ['Quien media si hay conflictos', 'soc'], ['Quien arma la parte técnica o práctica', 'ind']]),
  q('¿Qué voluntariado te atraería más?', [['Reforestación o limpieza de ríos', 'nat'], ['Apoyo escolar a niños', 'soc'], ['Asesoría legal gratuita a comunidades', 'der'], ['Acompañamiento a pacientes en un hospital', 'sal']]),
  q('¿Qué te gustaría que dijeran de tu trabajo?', [['Que es innovador y creativo', 'cre'], ['Que es riguroso y confiable', 'inv'], ['Que ayudó a mucha gente', 'soc'], ['Que hizo crecer una organización', 'neg']]),
  q('¿Qué herramienta te gustaría dominar?', [['Un lenguaje de programación', 'tec'], ['Un software de diseño o edición', 'cre'], ['Una máquina o equipo industrial', 'ind'], ['Un microscopio o instrumentos de laboratorio', 'inv']]),
  q('¿Qué parte de un viaje disfrutas más?', [['Planear la ruta y los itinerarios', 'ser'], ['Conocer gente y practicar otros idiomas', 'int'], ['Visitar paisajes y reservas naturales', 'nat'], ['Entender la historia y las costumbres del lugar', 'soc']]),
  q('¿Qué profesional admiras más?', [['Un cirujano o una médica', 'sal'], ['Un ingeniero que diseña un puente', 'ind'], ['Una abogada que defiende causas', 'der'], ['Un chef reconocido', 'ser']]),
  q('¿Cómo te gustaría resolver un conflicto en una comunidad?', [['Con mediación y diálogo', 'soc'], ['Aplicando normas y leyes', 'der'], ['Con un plan de desarrollo y recursos', 'neg'], ['Con una campaña creativa de sensibilización', 'cre']]),
  q('¿Qué pasatiempo se parece más a ti?', [['Videojuegos y retos de estrategia', 'tec'], ['Deportes y actividad física', 'ser'], ['Leer sobre ciencia y curiosidades', 'inv'], ['Dibujar, escribir o hacer música', 'cre']]),
  q('¿Qué te llama la atención de una fábrica?', [['Cómo se coordinan las máquinas y la producción', 'ind'], ['Cómo se controlan la calidad y los costos', 'neg'], ['Cómo se automatiza con sensores y software', 'tec'], ['Cómo se reduce su impacto ambiental', 'nat']]),
  q('¿Qué te gustaría aprender a hacer?', [['Interpretar exámenes y diagnósticos', 'sal'], ['Negociar acuerdos entre países', 'int'], ['Hablar en público con seguridad y argumentos', 'der'], ['Reparar instalaciones eléctricas o hidráulicas', 'ind']]),
  q('¿Qué reto aceptarías?', [['Descifrar un patrón en miles de datos', 'inv'], ['Atender a cientos de invitados en un evento', 'ser'], ['Recaudar fondos para una causa', 'soc'], ['Diseñar el logotipo de una marca nueva', 'cre']]),
  q('¿Qué te motivaría a madrugar?', [['Una cirugía o consulta con pacientes', 'sal'], ['Una jornada de campo en la finca o reserva', 'nat'], ['Una reunión con inversionistas', 'neg'], ['Un rodaje o una sesión de fotos', 'cre']]),
  q('¿Qué tipo de líder serías?', [['Visionario, que propone ideas nuevas', 'cre'], ['Estratega, que calcula riesgos', 'neg'], ['Cercano, que cuida a su equipo', 'soc'], ['Técnico, que da ejemplo con su trabajo', 'tec']]),
  q('Si trabajaras en el gobierno, ¿qué harías?', [['Crear políticas públicas de educación o salud', 'der'], ['Diseñar la infraestructura de una ciudad', 'ind'], ['Representar al país en el exterior', 'int'], ['Proteger los recursos naturales de la región', 'nat']]),
  q('¿Qué tema del cuerpo humano te da más curiosidad?', [['Cómo funcionan el cerebro y las emociones', 'soc'], ['Cómo se defiende de las enfermedades', 'sal'], ['Cómo responde al ejercicio y al deporte', 'ser'], ['Cómo se codifica la información genética', 'inv']]),
  q('¿Qué te parece más emocionante?', [['Lanzar un producto al mercado', 'neg'], ['Estrenar una obra o proyecto creativo', 'cre'], ['Publicar un descubrimiento', 'inv'], ['Poner en marcha un sistema nuevo', 'tec']]),
  q('¿Con qué personas te gustaría trabajar?', [['Pacientes y sus familias', 'sal'], ['Estudiantes y docentes', 'soc'], ['Turistas y visitantes de distintas culturas', 'int'], ['Clientes que quieren hacer crecer su negocio', 'neg']]),
  q('¿Qué parte de una película te atrae más?', [['Los efectos y la tecnología detrás', 'tec'], ['La dirección y el guion', 'cre'], ['La trama de justicia o conflicto', 'der'], ['La producción y la logística del rodaje', 'ser']]),
  q('¿Qué problema ambiental te inquieta más?', [['La contaminación del agua y del aire', 'nat'], ['El manejo de residuos y de la energía', 'ind'], ['El impacto sobre la salud de las personas', 'sal'], ['Las políticas que no protegen el territorio', 'der']]),
  q('¿Cómo prefieres usar un fin de semana de estudio?', [['Haciendo ejercicios y problemas', 'tec'], ['Leyendo casos y debatiendo', 'der'], ['Practicando un idioma con videos y conversación', 'int'], ['Haciendo un prototipo o una maqueta', 'ind']]),
  q('¿Qué te gustaría construir?', [['Una empresa con impacto social', 'neg'], ['Una casa o una estructura sólida', 'ind'], ['Una comunidad de apoyo emocional', 'soc'], ['Un robot o dispositivo inteligente', 'tec']]),
  q('¿Qué materia universitaria te daría más curiosidad?', [['Anatomía y fisiología', 'sal'], ['Estadística y análisis de datos', 'inv'], ['Derecho constitucional', 'der'], ['Diseño de experiencias y de marca', 'cre']]),
  q('¿Qué entorno de trabajo te ilusiona más?', [['Un hotel, restaurante o centro de eventos', 'ser'], ['Un laboratorio o centro de investigación', 'inv'], ['Una embajada u organismo internacional', 'int'], ['Una obra en construcción', 'ind']]),
  q('¿Cómo te gustaría ayudar durante una emergencia?', [['Dando atención médica inmediata', 'sal'], ['Coordinando la logística y los recursos', 'ind'], ['Informando con claridad a la población', 'cre'], ['Brindando apoyo emocional a los afectados', 'soc']]),
  q('¿Qué te atrae de los animales o del campo?', [['Su comportamiento y su biología', 'inv'], ['Su salud y su bienestar', 'nat'], ['Producir alimentos de forma sostenible', 'nat'], ['Ofrecer experiencias de ecoturismo', 'ser']]),
  q('¿Qué te gustaría mejorar de tu ciudad?', [['Su transporte y sus servicios digitales', 'tec'], ['Su oferta cultural y sus espacios públicos', 'cre'], ['Su seguridad y el acceso a la justicia', 'der'], ['Su economía y el empleo local', 'neg']]),
  q('¿Cuál sería tu proyecto de grado soñado?', [['Un software que resuelva un problema real', 'tec'], ['Una investigación sobre salud o comportamiento humano', 'soc'], ['Un plan de negocio para una empresa nueva', 'neg'], ['Un análisis del comercio entre países', 'int']]),
  q('¿Qué "superpoder" laboral te gustaría tener?', [['Aliviar el dolor de las personas', 'sal'], ['Persuadir a cualquiera con argumentos', 'der'], ['Hablar todos los idiomas', 'int'], ['Crear todo lo que imagino', 'cre']]),
  q('¿Cómo vincularías el deporte con tu trabajo?', [['Entrenando y preparando atletas', 'ser'], ['Rehabilitando lesiones deportivas', 'sal'], ['Analizando datos de rendimiento', 'inv'], ['Organizando competencias y eventos deportivos', 'neg']]),
  q('¿Qué te da más satisfacción al terminar una tarea?', [['Ver que funciona perfectamente', 'tec'], ['Ver que quedó bonita y original', 'cre'], ['Ver que alguien se sintió mejor', 'soc'], ['Ver que cumplió las metas y los números', 'neg']]),
]