import { useState } from 'react'
import './App.css'
import { EXTRA } from './preguntasExtra.js'

const AREAS = {
  tec: { nombre: 'Tecnología e Ingeniería', carreras: ['Ingeniería de Sistemas', 'Ingeniería Electrónica', 'Ciencia de Datos', 'Mecatrónica'] },
  sal: { nombre: 'Salud y Bienestar', carreras: ['Medicina', 'Enfermería', 'Odontología', 'Fisioterapia', 'Nutrición'] },
  cre: { nombre: 'Arte, Diseño y Comunicación', carreras: ['Diseño Gráfico', 'Comunicación Audiovisual', 'Arquitectura', 'Publicidad'] },
  soc: { nombre: 'Psicología, Educación y Ciencias Sociales', carreras: ['Psicología', 'Licenciatura en Educación', 'Trabajo Social', 'Sociología'] },
  neg: { nombre: 'Administración y Negocios', carreras: ['Administración de Empresas', 'Contaduría', 'Mercadeo', 'Emprendimiento'] },
  inv: { nombre: 'Ciencia e Investigación', carreras: ['Biología', 'Química', 'Física', 'Matemáticas'] },
  nat: { nombre: 'Medio Ambiente, Agro y Naturaleza', carreras: ['Ingeniería Ambiental', 'Agronomía', 'Veterinaria', 'Geología'] },
  int: { nombre: 'Relaciones Internacionales e Idiomas', carreras: ['Relaciones Internacionales', 'Negocios Internacionales', 'Lenguas Modernas'] },
  der: { nombre: 'Derecho y Política', carreras: ['Derecho', 'Ciencia Política', 'Administración Pública', 'Criminología'] },
  ser: { nombre: 'Gastronomía, Turismo y Servicios', carreras: ['Gastronomía', 'Hotelería y Turismo', 'Gestión de Eventos', 'Ciencias del Deporte'] },
  ind: { nombre: 'Industria, Construcción y Oficios Técnicos', carreras: ['Ingeniería Industrial', 'Ingeniería Civil', 'Técnico en Electricidad', 'Logística'] },
}

const PREGUNTAS = [
  { pregunta: '¿Qué tipo de actividades disfrutas más en tu tiempo libre?', opciones: ['Resolver problemas lógicos y matemáticos', 'Ayudar a otras personas y cuidar su bienestar', 'Crear contenido artístico o diseñar cosas nuevas', 'Organizar eventos y liderar grupos'] },
  { pregunta: '¿Cuál de estas habilidades consideras tu punto fuerte?', opciones: ['Análisis de datos y pensamiento crítico', 'Empatía y comunicación efectiva', 'Creatividad e innovación', 'Liderazgo y toma de decisiones'] },
  { pregunta: '¿Qué tipo de problemas te motiva resolver?', opciones: ['Problemas técnicos y tecnológicos', 'Problemas sociales y comunitarios', 'Problemas de salud y bienestar', 'Problemas empresariales y económicos'] },
  { pregunta: '¿Cómo prefieres aprender cosas nuevas?', opciones: ['Experimentando y practicando por mi cuenta', 'Trabajando en equipo y colaborando', 'Leyendo y estudiando teoría', 'Creando proyectos y aplicando conocimientos'] },
  { pregunta: '¿Qué es lo más importante para ti en tu futuro trabajo?', opciones: ['Tener un buen salario y estabilidad económica', 'Ayudar a mejorar la vida de las personas', 'Expresar mi creatividad y hacer cosas únicas', 'Tener poder de decisión e influencia'] },
  { pregunta: '¿En qué tipo de ambiente te gustaría trabajar?', opciones: ['En una oficina moderna con tecnología', 'En hospitales o centros de salud', 'En un estudio creativo o desde casa', 'En el campo, al aire libre'] },
  { pregunta: '¿Qué materia escolar te gusta más?', opciones: ['Matemáticas y Física', 'Biología y Química', 'Español y Literatura', 'Ciencias Sociales e Historia'] },
  { pregunta: '¿Cómo te ves en 10 años?', opciones: ['Trabajando en una empresa multinacional', 'Siendo mi propio jefe con mi negocio', 'Ayudando a personas necesitadas', 'Haciendo investigación o innovación'] },
  { pregunta: '¿Qué tipo de impacto te gustaría tener en el mundo?', opciones: ['Desarrollar soluciones que mejoren la vida cotidiana', 'Proteger los derechos y el bienestar de las personas', 'Generar conocimiento y descubrir cosas nuevas', 'Conectar personas e ideas para crear oportunidades'] },
  { pregunta: '¿Qué tipo de proyecto te gustaría liderar?', opciones: ['Un proyecto de tecnología e innovación', 'Una campaña social o de impacto comunitario', 'Un emprendimiento o negocio propio', 'Una investigación científica o académica'] },
  { pregunta: '¿Qué actividad relacionada con la comida te llama más la atención?', opciones: ['Preparar y experimentar con recetas nuevas', 'Diseñar planes de alimentación saludable para otros', 'Recibir y atender huéspedes o turistas', 'Trabajar el campo y la producción de alimentos'] },
  { pregunta: 'Si pudieras trabajar en cualquier país, ¿qué te motivaría más?', opciones: ['Aprender idiomas y comunicarte con personas de otras culturas', 'Representar a Colombia en temas internacionales o diplomáticos', 'Conocer y estudiar costumbres de distintas comunidades', 'Organizar viajes y experiencias turísticas para otros'] },
  { pregunta: '¿Qué tipo de creación visual te gustaría hacer?', opciones: ['Pinturas, esculturas o piezas artísticas propias', 'Logotipos, afiches o piezas digitales para marcas', 'Objetos y productos físicos que la gente use a diario', 'Espacios y edificios donde la gente viva o trabaje'] },
  { pregunta: '¿Cómo te gustaría involucrarte con la música o el sonido?', opciones: ['Componer, tocar un instrumento o cantar', 'Grabar y producir videos o contenido audiovisual', 'Crear campañas o contenido con música de fondo', 'Contar historias a través de imágenes en movimiento'] },
  { pregunta: '¿Qué tipo de historia te gustaría contar?', opciones: ['Un guion para cine o televisión', 'Un libro, cuento o poema', 'Una noticia o reportaje', 'Una campaña publicitaria creativa'] },
  { pregunta: '¿Qué te gustaría hacer si trabajaras con animales o naturaleza?', opciones: ['Cuidar la salud de mascotas o animales de granja', 'Investigar especies y ecosistemas', 'Producir cultivos o mejorar procesos agrícolas', 'Proteger el medioambiente y los recursos naturales'] },
  { pregunta: '¿Con cuál de estas tareas minuciosas te sentirías cómodo?', opciones: ['Revisar y cuidar la salud dental de las personas', 'Examinar la vista y recetar lentes', 'Aplicar cuidados de enfermería a un paciente', 'Ajustar piezas pequeñas con precisión técnica'] },
  { pregunta: '¿Qué te gustaría ayudar a mejorar en las personas?', opciones: ['Su movimiento físico después de una lesión', 'Su capacidad de hacer actividades diarias con independencia', 'Su alimentación y hábitos saludables', 'Su bienestar emocional y mental'] },
  { pregunta: '¿Qué tanto te gusta explicarle cosas a otras personas?', opciones: ['Me encanta enseñar y ver cuando alguien entiende algo nuevo', 'Prefiero escuchar y orientar a alguien con un problema personal', 'Me gusta comunicar ideas a un público amplio', 'Prefiero mostrar con el ejemplo más que explicar con palabras'] },
  { pregunta: '¿Qué tema del mundo de los negocios te interesa más?', opciones: ['Inversiones, cambio de divisas y comercio con otros países', 'Analizar cifras y tendencias económicas', 'Llevar las cuentas y finanzas de una empresa', 'Dirigir y hacer crecer un negocio'] },
  { pregunta: '¿Qué te llama más la atención sobre la Tierra y sus recursos?', opciones: ['Estudiar rocas, suelos y formaciones geológicas', 'Diseñar soluciones para cuidar el medioambiente', 'Optimizar el uso de recursos en el campo', 'Construir infraestructura que aproveche el territorio'] },
  { pregunta: '¿Qué proceso técnico te parece más interesante?', opciones: ['Transformar materias primas en nuevos productos químicos', 'Entender reacciones y compuestos a nivel de laboratorio', 'Mejorar procesos de producción en una fábrica', 'Diseñar y reparar máquinas y motores'] },
  { pregunta: '¿Qué te gustaría entender mejor: la electricidad o la electrónica?', opciones: ['Cómo se genera y distribuye la energía eléctrica', 'Cómo funcionan los circuitos de los dispositivos', 'Las leyes físicas detrás de la tecnología', 'Cómo programar el software que controla los sistemas'] },
  { pregunta: '¿Qué te gustaría hacer con las palabras y las ideas?', opciones: ['Escribir textos literarios o creativos', 'Analizar pensamientos y corrientes filosóficas', 'Investigar y contar hechos del pasado', 'Comunicar ideas de forma clara a un público'] },
  { pregunta: '¿Qué aspecto de las sociedades humanas te interesa más?', opciones: ['Las costumbres y culturas de distintos pueblos', 'Cómo se organizan y comportan los grupos sociales', 'El poder y las decisiones políticas', 'Los hechos históricos que marcaron el presente'] },
  { pregunta: '¿Prefieres trabajar con las manos o con ideas?', opciones: ['Con las manos, creando objetos físicos', 'Con las manos, construyendo o arreglando cosas', 'Preparando platos y experiencias con las manos', 'Con ideas y argumentos, más que con objetos'] },
  { pregunta: '¿Cómo te gustaría organizar tu semana de trabajo?', opciones: ['Con horarios y procesos bien estructurados', 'Con metas claras pero libertad para lograrlas', 'Con proyectos creativos que cambian todo el tiempo', 'Con historias y producciones que se arman por etapas'] },
  { pregunta: '¿Cómo reaccionas ante decisiones bajo presión?', opciones: ['Me mantengo firme y decido rápido cuando hay una emergencia', 'Analizo bien antes de tomar una decisión importante', 'Prefiero evitar la presión y planear con anticipación', 'Me apoyo en mi equipo para decidir juntos'] },
  { pregunta: '¿Prefieres trabajar solo/a o en equipo?', opciones: ['Solo/a, concentrado/a en mi propio proceso creativo', 'En equipo, apoyando directamente a otras personas', 'En equipo, coordinando un proyecto técnico', 'Depende, me adapto fácilmente a ambos'] },
  { pregunta: 'Al final del día, ¿qué te haría sentir más realizado/a?', opciones: ['Haber ayudado a alguien', 'Haber creado algo nuevo', 'Haber resuelto un problema complejo', 'Haber logrado una meta o cerrado un negocio'] },
]

// Área de cada opción, en el mismo orden que PREGUNTAS (A, B, C, D)
const ETIQUETAS = [
  ['tec', 'sal', 'cre', 'neg'],
  ['inv', 'soc', 'cre', 'neg'],
  ['tec', 'soc', 'sal', 'neg'],
  ['tec', 'soc', 'inv', 'ind'],
  ['neg', 'sal', 'cre', 'der'],
  ['tec', 'sal', 'cre', 'nat'],
  ['tec', 'inv', 'cre', 'soc'],
  ['int', 'neg', 'soc', 'inv'],
  ['tec', 'der', 'inv', 'int'],
  ['tec', 'soc', 'neg', 'inv'],
  ['ser', 'sal', 'ser', 'nat'],
  ['int', 'der', 'soc', 'ser'],
  ['cre', 'cre', 'ind', 'ind'],
  ['cre', 'cre', 'neg', 'cre'],
  ['cre', 'cre', 'soc', 'neg'],
  ['nat', 'inv', 'nat', 'nat'],
  ['sal', 'sal', 'sal', 'ind'],
  ['sal', 'sal', 'sal', 'soc'],
  ['soc', 'soc', 'cre', 'ser'],
  ['int', 'inv', 'neg', 'neg'],
  ['nat', 'nat', 'nat', 'ind'],
  ['ind', 'inv', 'ind', 'tec'],
  ['ind', 'tec', 'inv', 'tec'],
  ['cre', 'soc', 'inv', 'cre'],
  ['soc', 'soc', 'der', 'inv'],
  ['cre', 'ind', 'ser', 'der'],
  ['neg', 'ind', 'cre', 'cre'],
  ['sal', 'inv', 'neg', 'soc'],
  ['cre', 'soc', 'tec', 'ser'],
  ['soc', 'cre', 'tec', 'neg'],
]

function mezclar(lista) {
  const copia = [...lista]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}

const CANTIDAD_PREGUNTAS = 30

// Banco completo: las 30 originales + las extra (63 en total)
const BANCO = [
  ...PREGUNTAS.map((p, i) => ({
    pregunta: p.pregunta,
    opciones: p.opciones.map((texto, j) => ({ texto, area: ETIQUETAS[i][j] })),
  })),
  ...EXTRA,
]

// En cada intento: elige 30 preguntas al azar y mezcla sus opciones
function armarTest() {
  return mezclar(BANCO)
    .slice(0, CANTIDAD_PREGUNTAS)
    .map((p) => ({ ...p, opciones: mezclar(p.opciones) }))
}

function App() {
  const [inicio, setInicio] = useState(false)
  const [test, setTest] = useState([])
  const [actual, setActual] = useState(0)
  const [respuestas, setRespuestas] = useState([])
  const [interpretacionIA, setInterpretacionIA] = useState('')
  const [cargandoInterpretacion, setCargandoInterpretacion] = useState(false)
  const [errorInterpretacion, setErrorInterpretacion] = useState('')
  const [terminado, setTerminado] = useState(false)

  const puntajes = Object.fromEntries(Object.keys(AREAS).map((k) => [k, 0]))
  test.forEach((p, i) => {
    const opcion = respuestas[i]
    if (opcion !== undefined) puntajes[p.opciones[opcion].area]++
  })

  const ranking = Object.entries(puntajes).sort((a, b) => b[1] - a[1])
  const topAreas = ranking.slice(0, 3)
  const otrasAreas = ranking.slice(3, 6).filter(([, puntaje]) => puntaje > 0)
  const puntajeMaximo = Math.max(ranking[0]?.[1] || 1, 1)

  function comenzar() {
    setTest(armarTest())
    setInicio(true)
  }

  function responder(opcion) {
    const nuevas = [...respuestas]
    nuevas[actual] = opcion
    setRespuestas(nuevas)
  }

  async function siguiente() {
    if (actual < test.length - 1) {
      setActual(actual + 1)
      return
    }

    setTerminado(true)
    setCargandoInterpretacion(true)
    setErrorInterpretacion('')
    setInterpretacionIA('')

    try {
      const respuesta = await fetch('http://localhost:3001/api/interpretar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resultados: ranking
            .slice(0, 5)
            .filter(([, puntaje]) => puntaje > 0)
            .map(([codigo, puntaje]) => ({
              area: AREAS[codigo].nombre,
              puntaje,
              de: test.length,
              carreras: AREAS[codigo].carreras,
            })),
          respuestas: test.map((p, i) => ({
            pregunta: p.pregunta,
            respuesta: p.opciones[respuestas[i]]?.texto,
          })),
        }),
      })

      const datos = await respuesta.json()
      if (!respuesta.ok) {
        throw new Error(datos.error || 'No se pudo generar la interpretación.')
      }

      setInterpretacionIA(datos.interpretacion)
    } catch (error) {
      console.error('Error de interpretación:', error)
      setErrorInterpretacion('No pudimos generar tu interpretación en este momento. Puedes intentarlo más tarde.')
    } finally {
      setCargandoInterpretacion(false)
    }
  }

  function reiniciar() {
    setInicio(false)
    setTest([])
    setActual(0)
    setRespuestas([])
    setTerminado(false)
    setInterpretacionIA('')
    setErrorInterpretacion('')
    setCargandoInterpretacion(false)
  }

  const letras = ['A', 'B', 'C', 'D']

  return (
    <main className="pagina">
      <section className="tarjeta">
        <div className="marca">
          <img src="/logo-vocacional.png" alt="Mi Ruta Vocacional" className="logo-vocacional" />
        </div>

        {!inicio ? (
          <>
            <div className="icono">✦</div>
            <h1>Descubre tu camino</h1>
            <p className="descripcion">
              Explora tus intereses, reconoce tus habilidades y descubre áreas profesionales que podrían conectar contigo.
            </p>
            <button className="principal" onClick={comenzar}>
              Comenzar mi test →
            </button>
            <p className="nota">Una herramienta de exploración y reflexión personal.</p>
          </>
        ) : terminado ? (
          <>
            <div className="icono">✧</div>
            <h1>¡Has completado el test!</h1>
            <p className="descripcion">
              Respondiste las {test.length} preguntas. Estos resultados son una orientación inicial para explorar tus intereses.
            </p>

            <h2>Tus áreas principales</h2>
            <div className="resultados-vocacionales">
              {topAreas.map(([codigo, puntaje]) => (
                <div className="tarjeta-resultado" key={codigo}>
                  <span className="etiqueta-resultado">Área recomendada</span>
                  <h3>{AREAS[codigo].nombre}</h3>
                  <p className="puntaje">{puntaje} de {test.length} respuestas afines</p>
                  <p className="puntaje">Carreras para explorar: {AREAS[codigo].carreras.join(', ')}</p>
                  <div className="barra-puntaje">
                    <div className="barra-puntaje-interna" style={{ width: `${Math.round((puntaje / puntajeMaximo) * 100)}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {otrasAreas.length > 0 && (
              <>
                <h2>También podrían interesarte</h2>
                <div className="resultados-vocacionales">
                  {otrasAreas.map(([codigo, puntaje]) => (
                    <div className="tarjeta-resultado" key={codigo}>
                      <h3>{AREAS[codigo].nombre}</h3>
                      <p className="puntaje">{puntaje} de {test.length} respuestas afines</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            <h2>Tu orientación personalizada</h2>
            {cargandoInterpretacion && (
              <p className="descripcion">Estamos preparando tus recomendaciones. Espera un momento...</p>
            )}
            {errorInterpretacion && <p className="descripcion">{errorInterpretacion}</p>}
            {interpretacionIA && (
              <div className="tarjeta-resultado">
                <div className="interpretacion-ia" style={{ whiteSpace: 'pre-line' }}>
                  {interpretacionIA}
                </div>
              </div>
            )}

            <button className="principal" onClick={reiniciar}>Volver a empezar</button>
          </>
        ) : (
          <>
            <div className="progreso-texto">Pregunta {actual + 1} de {test.length}</div>
            <div className="barra">
              <div className="barra-interna" style={{ width: `${((actual + 1) / test.length) * 100}%` }} />
            </div>
            <h2 className="pregunta">{test[actual].pregunta}</h2>
            <div className="opciones">
              {test[actual].opciones.map((opcion, i) => (
                <button
                  key={opcion.texto}
                  className={`opcion ${respuestas[actual] === i ? 'seleccionada' : ''}`}
                  onClick={() => responder(i)}
                >
                  <span className="letra">{letras[i]}</span>
                  <span>{opcion.texto}</span>
                </button>
              ))}
            </div>
            <div className="acciones">
              <button className="secundario" disabled={actual === 0} onClick={() => setActual(actual - 1)}>
                ← Anterior
              </button>
              <button className="principal" disabled={respuestas[actual] === undefined} onClick={siguiente}>
                {actual === test.length - 1 ? 'Ver resultados' : 'Siguiente →'}
              </button>
            </div>
          </>
        )}
      </section>
      <footer>Tu futuro comienza con conocerte mejor.</footer>
    </main>
  )
}

export default App
